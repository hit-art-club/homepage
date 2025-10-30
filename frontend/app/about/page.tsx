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
      <article className="px-4 py-24 sm:px-12 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 text-slate-900">部活について</h1>
          <p className="text-slate-600 text-lg">「Pages」に slug=about の公開コンテンツが見つかりません。</p>
        </div>
      </article>
    );
  }

  // テキストエリアならそのまま、（もしリッチテキスト=HTMLにした場合でも動く簡易判定）
  const isHtml = !!page.body && page.body.includes("<");

  return (
    <article className="px-4 py-24 sm:px-12 sm:py-32 bg-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 text-slate-900">{page.title}</h1>

        {isHtml ? (
          <div
            className="prose prose-neutral prose-lg max-w-none text-slate-600"
            dangerouslySetInnerHTML={{ __html: page.body! }}
          />
        ) : (
          <p className="whitespace-pre-wrap leading-8 text-slate-600 text-lg">{page.body}</p>
        )}
      </div>
    </article>
  );
}
