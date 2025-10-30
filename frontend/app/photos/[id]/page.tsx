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
    <div className="px-4 py-24 sm:px-12 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl">
        <Link href="/photos" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-blue-700 transition mb-8">
          <ArrowLeft className="h-5 w-5" />
          ギャラリーに戻る
        </Link>
        <h1 className="text-5xl font-bold mb-3 text-slate-900">{g.title}</h1>
        {g.year && <p className="text-slate-600 mb-12 text-lg">{g.year}</p>}

        {list.length === 0 ? (
          <p className="text-slate-600 text-lg">写真がまだありません。</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {list.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
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
