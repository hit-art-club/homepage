export const revalidate = 300;

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-24">
        <h1 className="text-5xl font-bold text-foreground mb-4">ニュース</h1>
        <p className="text-lg text-slate-600 mb-12">
          美術部の最新情報をお届けします。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for news items */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-foreground mb-2">
              ニュースはまもなく公開予定です
            </h3>
            <p className="text-slate-600">
              microCMS連携準備中
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
