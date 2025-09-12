"use client";

import { News, NewsItem } from "./News";
import { Gallery, Artwork } from "./Gallery";

export function Home({ news, artworks }: { news: NewsItem[]; artworks: Artwork[] }) {
  return (
    <div className="space-y-12">
      <section className="text-center py-10">
        <h1 className="text-4xl font-extrabold">Hitotsubashi × Tsuda Art Club</h1>
        <p className="text-gray-600 mt-2">自由に、楽しく、つくる。</p>
      </section>

      {/* 最新ニュース */}
      <section>
        <h2 className="text-2xl font-bold mb-4">最新ニュース</h2>
        <News items={news} />
      </section>

      {/* ギャラリー */}
      <section>
        <h2 className="text-2xl font-bold mb-4">最新ギャラリー</h2>
        <Gallery artworks={artworks} />
      </section>
    </div>
  );
}
