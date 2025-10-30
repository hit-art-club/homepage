export const revalidate = 300;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            美術部について
          </h1>
          <p className="text-xl text-slate-600">
            創造性とコミュニティを大切にする、一橋・津田塾の美術部です。
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="space-y-12">
            {/* Section 1 */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                わたしたちについて
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                美術部は、絵画、彫刻、工芸など様々なアートに関心を持つ学生が集まる部活動です。
                自分たちの創造的な表現を追求しながら、仲間との交流を大切にしています。
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                初心者から経験者まで、誰もが自分のペースで成長できる環境を大切にしています。
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                活動内容
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-100 text-blue-primary">
                      <span className="text-sm font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">定期的な制作活動</h3>
                    <p className="text-slate-600">
                      週に数日、アトリエで自由に制作活動を行っています。
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-100 text-blue-primary">
                      <span className="text-sm font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">文化祭での展示</h3>
                    <p className="text-slate-600">
                      年に一度の文化祭では、部員の作品を展示・発表します。
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-100 text-blue-primary">
                      <span className="text-sm font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">コンテスト参加</h3>
                    <p className="text-slate-600">
                      様々なアートコンテストに参加し、自分たちの作品を磨きます。
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                入部を検討されている方へ
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-primary p-6 rounded">
                <p className="text-slate-700 leading-relaxed mb-4">
                  美術部では、すべての学年・経験レベルの学生を歓迎しています。
                  初心者であっても、先輩部員がサポートします。
                </p>
                <p className="text-slate-700 leading-relaxed">
                  興味のある方は、いつでもお気軽にお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
