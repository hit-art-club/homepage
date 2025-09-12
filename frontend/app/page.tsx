import { client } from "@/lib/microcms";
import { Home } from "@/components/figma/Home";
import type { NewsItem } from "@/components/figma/News";
import type { Artwork } from "@/components/figma/Gallery";

export const revalidate = 300; // 5分ごと通常再生成（Webhookでも即時更新する）

export default async function Page() {
  // posts と gallery を並列取得
  const [postsRes, galleryRes] = await Promise.all([
    client.get<{ contents: any[] }>({
      endpoint: "posts",
      queries: { limit: 3, orders: "-publishedAt" }, // 最新3件
    }),
    client.get<{ contents: any[] }>({
      endpoint: "gallery",
      queries: { limit: 3, orders: "-publishedAt" }, // 最新3件
    }),
  ]);

  // microCMS → Homeコンポーネント用に整形
  const news: NewsItem[] = postsRes.contents.map((p: any) => ({
    id: p.id,
    title: p.title ?? "",
    content: p.content ?? "",
    date: p.publishedAt ?? p.createdAt,
    category: p.category ?? "News",
    author: p.author ?? "Art Club",
    image: p.thumbnail?.url, // サムネ無ければ undefined のままでOK
  }));

  const artworks: Artwork[] = galleryRes.contents.map((g: any) => ({
    id: g.id,
    title: g.title ?? "",
    artist: g.artist ?? "",              // モデルに無ければ空文字でOK
    year: String(g.year ?? ""),          // 数値→文字列
    technique: g.technique ?? "",
    category: "Gallery",
    image: g.images?.[0]?.url ?? "",     // 先頭画像を表示用に
    description: g.description ?? "",
  }));

  return <Home news={news} artworks={artworks} />;
}
