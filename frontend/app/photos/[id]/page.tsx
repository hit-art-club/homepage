import Image from "next/image";
import { client } from "../../../lib/microcms";

export const revalidate = 300;

type MCMSImage = { url: string; width?: number; height?: number };

export default async function PhotoDetail(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // Next.js 15: Promise を await
  const g = await client.get<{ title: string; year?: number; images?: MCMSImage[] }>({
    endpoint: "gallery",
    contentId: id,
  });

  const list = g.images ?? [];

  return (
    <>
      <a href="/photos" className="text-blue-700 underline text-sm">← Photos</a>
      <h1 className="text-3xl font-bold my-4">{g.title}</h1>
      {g.year && <p className="text-gray-500 mb-4">{g.year}</p>}

      {list.length === 0 ? (
        <p className="text-gray-500">写真がまだありません。</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {list.map((img, i) => (
            <div key={i} className="rounded-lg overflow-hidden border bg-gray-50">
              <Image
                src={img.url}
                alt=""
                width={img.width ?? 1600}
                height={img.height ?? 1200}
                className="w-full h-auto object-cover"
                priority={i < 2}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
