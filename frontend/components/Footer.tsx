import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-primary rounded-lg">
                <span className="text-white font-bold text-sm">AC</span>
              </div>
              <span className="font-bold text-lg">Art Club</span>
            </div>
            <p className="text-slate-400 text-sm">
              一橋大学・津田塾大学美術部の公式ウェブサイト
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-base mb-4">ナビゲーション</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  部活について
                </Link>
              </li>
              <li>
                <Link
                  href="/photos"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  作品ギャラリー
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  ニュース
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-base mb-4">お問い合わせ</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  フォームから
                </Link>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-base mb-4">情報</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Hitotsubashi × Tsuda Art Club. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Designed and built with care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
