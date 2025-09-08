import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">Art Club</Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/news">News</Link>
          <Link href="/photos">Photos</Link>
        </nav>
      </div>
    </header>
  );
}
