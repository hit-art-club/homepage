import { client } from "../../../lib/microcms";

export const revalidate = 60;

export default async function NewsDetail(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const post = await client.get<any>({ endpoint: "posts", contentId: id });

  return (
    <article>
      <a href="/news" className="text-sm text-blue-700 underline">← News に戻る</a>
      <h1 className="text-3xl font-bold mt-2">{post.title}</h1>
      <div className="prose prose-neutral max-w-none mt-6"
           dangerouslySetInnerHTML={{ __html: post.body || "" }} />
    </article>
  );
}


