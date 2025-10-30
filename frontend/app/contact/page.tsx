export const metadata = { title: 'コンタクト' };

export default function ContactPage() {
  return (
    <div className="px-4 py-24 sm:px-12 bg-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-slate-900">コンタクト</h1>
        <div className="prose prose-neutral prose-lg max-w-none">
          <p className="text-slate-600 text-base leading-8">見学・入部希望・お問い合わせは下記へご連絡ください。</p>
          <ul className="space-y-3 text-slate-600 text-base">
            <li className="flex items-center gap-3">
              <span className="text-slate-900 font-semibold">Instagram：</span>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline font-medium">
                hitotsudaart2023
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-slate-900 font-semibold">X（旧Twitter）：</span>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:underline font-medium">
                @htac2024
              </a>
            </li>
          </ul>
          <p className="text-slate-600 text-base mt-6">※SNSのDMで受け付けています。</p>
        </div>
      </div>
    </div>
  );
}
