"use client";

import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent } from "./ui/dialog";
import { ImageWithFallback } from "./ui/ImageWithFallback";

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

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">作品ギャラリー</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <Card
              key={artwork.id}
              className="overflow-hidden cursor-pointer"
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="aspect-square relative">
                <ImageWithFallback
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h2 className="font-semibold">{artwork.title}</h2>
                <p className="text-sm text-gray-500">{artwork.artist}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 詳細ダイアログ */}
        <Dialog open={!!selectedArtwork} onOpenChange={() => setSelectedArtwork(null)}>
          <DialogContent className="max-w-2xl">
            {selectedArtwork && (
              <div>
                <ImageWithFallback
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-auto mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{selectedArtwork.title}</h2>
                <p className="text-gray-600 mb-1">{selectedArtwork.artist}</p>
                <p className="text-sm text-gray-500">{selectedArtwork.year}</p>
                <p className="mt-2">{selectedArtwork.description}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
