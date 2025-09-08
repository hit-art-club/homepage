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
    <>
      <h1 className="text-3xl font-bold mb-6">Photos</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.contents.map((g) => {
          const thumb = g.images?.[0]?.url; // 先頭画像をサムネに
          return (
            <Link key={g.id} href={`/photos/${g.id}`} className="block group">
              {thumb && (
                <div className="aspect-[4/3] overflow-hidden rounded-lg border bg-gray-50">
                  <Image
                    src={thumb}
                    alt=""
                    width={800}
                    height={600}
                    className="h-full w-full object-cover group-hover:scale-105 transition"
                  />
                </div>
              )}
              <p className="mt-2 font-medium">{g.title}</p>
              {g.year && <p className="text-sm text-gray-500">{g.year}</p>}
            </Link>
          );
        })}
      </div>
    </>
  );
}
