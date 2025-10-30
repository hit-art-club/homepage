import type { Metadata } from 'next';
import './globals.css';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: 'Hitotsubashi × Tsuda Art Club',
  description: '一橋・津田塾大学 美術部 公式サイト',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%231e40af" width="100" height="100"/><text x="50" y="65" font-size="60" font-weight="bold" fill="white" text-anchor="middle">AC</text></svg>',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className="bg-white text-foreground antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
