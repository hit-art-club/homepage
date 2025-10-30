import Image from "next/image";
import Link from "next/link";
import { client } from "../../lib/microcms";

export const revalidate = 300;

type MCMSImage = { url: string; width?: number; height?: number };
type GalleryItem = {
  id: string;
  title: string;
  year?: number;
  images?: MCMSImage[];
};

export default async function Photos() {
  const data = await client.get<{ contents: GalleryItem[] }>({
    endpoint: "gallery",
    queries: { limit: 100, orders: "-year,-publishedAt" },
  });

  return (
    <div className="px-4 py-24 sm:px-12 bg-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-12 text-slate-900">作品ギャラリー</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.contents.map((g) => {
            const thumb = g.images?.[0]?.url; // 先頭画像をサムネに
            return (
              <Link key={g.id} href={`/photos/${g.id}`} className="group">
                {thumb && (
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 hover:border-gray-300 transition-all">
                    <Image
                      src={thumb}
                      alt={g.title}
                      width={800}
                      height={1000}
                      className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                )}
                <p className="mt-4 font-semibold text-slate-900 group-hover:text-slate-600 transition">{g.title}</p>
                {g.year && <p className="text-sm text-slate-600">{g.year}</p>}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
