import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Hitotsubashi × Tsuda Art Club",
  description: "一橋・津田塾大学 美術部 公式サイト",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="text-gray-800">
        <Header />
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
