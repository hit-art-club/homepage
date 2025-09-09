import Link from "next/link";
import { client } from "../lib/microcms";

type Post = { id: string; title: string; publishedAt: string };

export default async function NewsPreview() {
  const data = await client.get<{ contents: Post[] }>({
    endpoint: "posts",
    queries: { limit: 3, orders: "-publishedAt" },
  });

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">最新ニュース</h2>
      <ul className="space-y-4">
        {data.contents.map((post) => (
          <li key={post.id}>
            <Link
              href={`/news/${post.id}`}
              className="text-lg text-blue-700 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link href="/news" className="text-blue-700 hover:underline">
          もっと見る →
        </Link>
      </div>
    </section>
  );
}
