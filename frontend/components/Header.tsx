'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
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
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* ロゴ・ブランディング */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
              <Palette className="h-5 w-5" />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
                美術部
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
                Hitotsubashi × Tsuda
              </span>
            </div>
            <span className="sr-only">Hitotsubashi × Tsuda Art Club</span>
          </Link>

          {/* PC ナビゲーション */}
          <nav className="hidden md:flex items-center gap-2 rounded-full bg-white/70 p-1 shadow-sm ring-1 ring-slate-900/5 backdrop-blur">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-muted-foreground hover:bg-white hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="inline-flex items-center justify-center rounded-full p-2 text-foreground transition-colors duration-200 hover:bg-slate-200 md:hidden"
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
          <div className="animate-in fade-in duration-200 border-t border-border/40 py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-muted-foreground hover:bg-slate-200 hover:text-foreground'
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
