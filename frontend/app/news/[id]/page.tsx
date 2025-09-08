import { client } from "../../../lib/microcms";

export const revalidate = 60;

export default async function NewsDetail({ params }: { params: { id: string } }) {
  const post = await client.get<any>({ endpoint: "posts", contentId: params.id });
  return (
    <main style={{ padding: "2rem" }}>
      <a href="/news">← Back</a>
      <h1 style={{ marginTop: "1rem" }}>{post.title}</h1>
      <article style={{ marginTop: "1rem" }} dangerouslySetInnerHTML={{ __html: post.body }} />
    </main>
  );
}
