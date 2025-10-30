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
      <body className="min-h-screen bg-white text-foreground antialiased">
        <Header />
        <main className="w-full">{children}</main>
        <footer className="bg-slate-900 text-white mt-20 py-12 px-4 sm:px-12">
          <div className="mx-auto max-w-6xl text-center text-sm text-slate-300">
            <p>© 2024 Hitotsubashi × Tsuda Art Club. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
