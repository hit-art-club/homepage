import Image from "next/image";
import Link from "next/link";
import { client } from "../../../lib/microcms";
import { ArrowLeft } from "lucide-react";

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
    <div className="px-4 py-24 sm:px-12 bg-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/photos" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-600 transition">
          <ArrowLeft className="h-4 w-4" />
          ギャラリーに戻る
        </Link>
        <h1 className="text-4xl font-bold mt-8 mb-4 text-slate-900">{g.title}</h1>
        {g.year && <p className="text-slate-600 mb-12">{g.year}</p>}

        {list.length === 0 ? (
          <p className="text-slate-600">写真がまだありません。</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {list.map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
                <Image
                  src={img.url}
                  alt={g.title}
                  width={img.width ?? 1600}
                  height={img.height ?? 1200}
                  className="w-full h-auto object-cover"
                  priority={i < 2}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
