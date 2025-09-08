import { client } from "../../lib/microcms";
import NewsCard from "../../components/NewsCard";

export const revalidate = 60;

type Post = { id: string; title: string; publishedAt?: string };

export default async function NewsIndex() {
  const data = await client.get<{ contents: Post[] }>({
    endpoint: "posts",
    queries: { limit: 50, orders: "-publishedAt" },
  });

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">News</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {data.contents.map((p) => (
          <NewsCard key={p.id} id={p.id} title={p.title} date={p.publishedAt} />
        ))}
      </div>
    </>
  );
}
