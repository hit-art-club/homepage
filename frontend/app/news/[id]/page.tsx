import { client } from "../../../lib/microcms";

export const revalidate = 60;

// Next.js 15: params は Promise 型
export default async function NewsDetail(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // ← await が必要
  const post = await client.get<any>({ endpoint: "posts", contentId: id });

  return (
    <main style={{ padding: "2rem" }}>
      <a href="/news">← Back</a>
      <h1 style={{ marginTop: "1rem" }}>{post.title}</h1>
      <article
        style={{ marginTop: "1rem" }}
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </main>
  );
}

