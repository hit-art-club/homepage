import { client } from "../../lib/microcms";
import NewsCard from "../../components/NewsCard";

export const revalidate = 60;

type Post = { id: string; title: string; publishedAt?: string };

export default async function NewsIndex() {
  const data = await client.get<{ contents: Post[] }>({
    endpoint: "posts",
    queries: { limit: 50, orders: "-publishedAt" },
  });

  return (
    <div className="px-4 py-24 sm:px-12 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold mb-4 text-slate-900">ニュース</h1>
        <p className="text-lg text-slate-600 mb-12">部活の最新情報やイベント、活動報告をお届けします。</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.contents.map((p) => (
            <NewsCard key={p.id} id={p.id} title={p.title} date={p.publishedAt} />
          ))}
        </div>
      </div>
    </div>
  );
}
