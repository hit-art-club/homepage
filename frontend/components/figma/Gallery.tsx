"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";

export type Artwork = {
  id: string;
  title: string;
  artist: string;
  year: string;
  technique: string;
  category: string;
  image: string;
  description: string;
};

export function Gallery({ artworks }: { artworks: Artwork[] }) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  if (!artworks || artworks.length === 0) {
    return (
      <div className="min-h-screen py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <p className="text-muted-foreground text-lg">ギャラリーはまだありません</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ページ見出し */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            作品ギャラリー
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            部員たちが制作した素晴らしい作品をご紹介します。
            画像をクリックして詳細をご覧ください。
          </p>
        </div>

        {/* ギャラリーグリッド - マスレイアウト風 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                // マスレイアウト用: 時々大きなカードを配置
                index % 7 === 0 ? "md:col-span-2 md:row-span-2" :
                index % 5 === 0 ? "md:col-span-2" : ""
              }`}
              onClick={() => setSelectedArtwork(artwork)}
            >
              {/* 画像コンテナ */}
              <div className={`relative overflow-hidden bg-secondary ${
                index % 7 === 0 ? "aspect-square" :
                index % 5 === 0 ? "aspect-video" : "aspect-square"
              }`}>
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />

                {/* ホバーオーバーレイ */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300 w-full">
                    <h3 className="text-white font-semibold text-sm md:text-base line-clamp-2">
                      {artwork.title}
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm">
                      {artwork.artist}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 詳細モーダル */}
        <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 bg-white">
            {selectedArtwork && (
              <div className="space-y-6">
                {/* クローズボタン */}
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* 画像 */}
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={selectedArtwork.image}
                    alt={selectedArtwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* コンテンツ */}
                <div className="px-6 pb-6 space-y-4">
                  {/* タイトル */}
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      {selectedArtwork.title}
                    </h2>
                    <p className="text-lg text-primary font-semibold">
                      {selectedArtwork.artist}
                    </p>
                  </div>

                  {/* メタデータ */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">制作年</p>
                      <p className="text-lg font-semibold text-foreground">
                        {selectedArtwork.year}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">技法</p>
                      <p className="text-lg font-semibold text-foreground">
                        {selectedArtwork.technique}
                      </p>
                    </div>
                  </div>

                  {/* カテゴリ */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">カテゴリ</p>
                    <Badge variant="secondary" className="text-sm">
                      {selectedArtwork.category}
                    </Badge>
                  </div>

                  {/* 説明 */}
                  {selectedArtwork.description && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">説明</p>
                      <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                        {selectedArtwork.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
