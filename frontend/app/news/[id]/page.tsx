import { client } from "../../../lib/microcms";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const revalidate = 60;

export default async function NewsDetail(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const post = await client.get<any>({ endpoint: "posts", contentId: id });

  return (
    <article className="px-4 py-24 sm:px-12 bg-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-600 transition">
          <ArrowLeft className="h-4 w-4" />
          ニュースに戻る
        </Link>
        <h1 className="text-4xl font-bold mt-8 mb-8 text-slate-900">{post.title}</h1>
        <div className="prose prose-neutral prose-lg max-w-none"
             dangerouslySetInnerHTML={{ __html: post.body || "" }} />
      </div>
    </article>
  );
}


