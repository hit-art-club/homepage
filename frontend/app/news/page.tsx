import { client } from "../../lib/microcms";

type Post = { id: string; title: string; publishedAt?: string };

export const revalidate = 60; // 1分ごとに再生成

export default async function NewsList() {
  const data = await client.get<{ contents: Post[] }>({
    endpoint: "posts",
    queries: { limit: 10, orders: "-publishedAt" },
  });

  return (
    <main style={{ padding: "2rem" }}>
      <h1>News</h1>
      <ul>
        {data.contents.map((p) => (
          <li key={p.id} style={{ margin: "0.5rem 0" }}>
            <a href={`/news/${p.id}`}>{p.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
