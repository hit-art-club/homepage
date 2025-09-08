import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Art Club",
  description: "Hitotsubashi × Tsuda Art Club",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header style={{padding:"1rem 2rem",borderBottom:"1px solid #eee"}}>
          <a href="/">Hitotsubashi × Tsuda Art Club</a> | <a href="/news">News</a>
        </header>
        {children}
      </body>
    </html>
  );
}
