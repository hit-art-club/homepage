'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/', label: 'ホーム' },
  { href: '/about', label: '部活紹介' },
  { href: '/news', label: 'ニュース' },
  { href: '/photos', label: 'ギャラリー' },
  { href: '/contact', label: 'コンタクト' },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ・ブランディング */}
          <Link
            href="/"
            className="flex flex-col leading-tight hover:opacity-80 transition-opacity"
          >
            <span className="text-xl font-bold text-slate-900">
              美術部
            </span>
            <span className="text-xs font-medium text-slate-600 uppercase tracking-wider">
              Hitotsubashi × Tsuda
            </span>
          </Link>

          {/* ナビゲーション */}
          <nav className="flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  isActive(item.href)
                    ? 'text-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                } ${
                  isActive(item.href)
                    ? 'after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-primary after:transition-all'
                    : 'after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
