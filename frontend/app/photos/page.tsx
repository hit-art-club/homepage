export const revalidate = 300;

export default function PhotosPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-6xl px-4 py-24">
        <h1 className="text-5xl font-bold text-foreground mb-4">
          作品ギャラリー
        </h1>
        <p className="text-lg text-slate-600 mb-12">
          部員たちの素晴らしい作品をご紹介します。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for gallery items */}
          <div className="card overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gradient-primary-teal h-48 flex items-center justify-center text-white">
              <span>画像プレースホルダー</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">
                作品タイトル
              </h3>
              <p className="text-slate-600 text-sm">
                microCMS連携準備中
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
