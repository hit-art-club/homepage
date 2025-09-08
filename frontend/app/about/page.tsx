import { client } from "../../lib/microcms";

export const revalidate = 300; // 5分ごとに通常再生成（On-Demand ISRも有効）

type Page = { title: string; slug: string; body?: string };
type ListRes = { contents: Page[] };

export default async function About() {
  // slug=about を1件取得
  const data = await client.get<ListRes>({
    endpoint: "pages",
    queries: { filters: "slug[equals]about", limit: 1 },
  });
  const page = data.contents[0];

  if (!page) {
    return (
      <article>
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p>「Pages」に slug=about の公開コンテンツが見つかりません。</p>
      </article>
    );
  }

  // テキストエリアならそのまま、（もしリッチテキスト=HTMLにした場合でも動く簡易判定）
  const isHtml = !!page.body && page.body.includes("<");

  return (
    <article>
      <h1 className="text-3xl font-bold mb-4">{page.title}</h1>

      {isHtml ? (
        <div
          className="prose prose-neutral max-w-none"
          dangerouslySetInnerHTML={{ __html: page.body! }}
        />
      ) : (
        <p className="whitespace-pre-wrap leading-7">{page.body}</p>
      )}
    </article>
  );
}
