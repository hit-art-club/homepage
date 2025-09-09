import Image from "next/image";
import Link from "next/link";
import { client } from "../lib/microcms";

type GalleryItem = { id: string; title: string; images?: { url: string }[] };

export default async function GalleryPreview() {
  const data = await client.get<{ contents: GalleryItem[] }>({
    endpoint: "gallery",
    queries: { limit: 1, orders: "-publishedAt" },
  });
  const g = data.contents[0];

  if (!g) return null;

  const thumb = g.images?.[0]?.url;

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">最新ギャラリー</h2>
      <Link href={`/photos/${g.id}`} className="block">
        {thumb && (
          <div className="aspect-[4/3] overflow-hidden rounded-lg border">
            <Image
              src={thumb}
              alt={g.title}
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <p className="mt-2 font-medium">{g.title}</p>
      </Link>
      <div className="mt-4">
        <Link href="/photos" className="text-blue-700 hover:underline">
          もっと見る →
        </Link>
      </div>
    </section>
  );
}
