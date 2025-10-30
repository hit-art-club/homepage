export const metadata = { title: 'コンタクト' };

export default function ContactPage() {
  return (
    <div className="px-4 py-24 sm:px-12 sm:py-32 bg-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 text-slate-900">コンタクト</h1>
        <p className="text-lg text-slate-600 leading-8 mb-8">見学・入部希望・お問い合わせは、下記のSNSアカウントまでお気軽にご連絡ください。</p>

        <div className="space-y-6">
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Instagram</h3>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-700 transition"
            >
              @hitotsudaart2023
            </a>
            <p className="text-sm text-slate-600 mt-2">活動風景や作品をシェアしています</p>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl">
            <h3 className="text-lg font-bold text-slate-900 mb-3">X（旧Twitter）</h3>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-blue-700 transition"
            >
              @htac2024
            </a>
            <p className="text-sm text-slate-600 mt-2">イベント情報や最新ニュースを発信中</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-blue-50 border border-primary/20 rounded-xl">
          <p className="text-sm text-slate-700">
            <span className="font-semibold text-slate-900">お返事について：</span> SNSのDMで受け付けています。通常24時間以内にご返信させていただきます。
          </p>
        </div>
      </div>
    </div>
  );
}
