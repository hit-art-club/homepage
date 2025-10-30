import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'Hitotsubashi × Tsuda Art Club',
  description: '一橋・津田塾大学 美術部 公式サイト',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-slate-100 text-slate-900 antialiased">
        <Header />
        <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-12">{children}</main>
      </body>
    </html>
  );
}
