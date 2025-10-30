'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Palette } from 'lucide-react';

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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition-colors duration-200 group-hover:bg-slate-200">
              <Palette className="h-5 w-5" />
            </span>
            <span className="text-base font-semibold text-slate-900">
              美術部
            </span>
          </Link>

          {/* ナビゲーション */}
          <nav className="flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-slate-900 font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
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
