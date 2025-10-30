'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  { href: '/', label: 'ホーム' },
  { href: '/about', label: '部活紹介' },
  { href: '/news', label: 'ニュース' },
  { href: '/photos', label: 'ギャラリー' },
  { href: '/contact', label: 'コンタクト' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* ロゴ - シンプルなアイコン + テキスト */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
              <span className="text-white text-sm font-bold">🎨</span>
            </div>
            <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
              美術部
            </span>
            <span className="sr-only">Hitotsubashi × Tsuda Art Club</span>
          </Link>

          {/* PC ナビゲーション */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  isActive(item.href)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                } ${
                  isActive(item.href)
                    ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full'
                    : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-secondary transition-colors duration-200"
            aria-label="メニューを開く"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {open && (
          <div className="md:hidden border-t border-border/40 py-4 animate-in fade-in duration-200">
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-foreground text-white'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
