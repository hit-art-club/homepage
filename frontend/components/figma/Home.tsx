"use client";

import Link from "next/link";
import { News, NewsItem } from "./News";
import { Gallery, Artwork } from "./Gallery";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Palette, Users, Award } from 'lucide-react';

export function Home({ news, artworks }: { news: NewsItem[]; artworks: Artwork[] }) {
  return (
    <div className="bg-white">
      {/* Features Section - Premium cards */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              美術部の魅力
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              私たちの部活では、様々なアートの分野を学び、創造力を育むことができます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Palette,
                title: "多様な技法",
                description: "水彩画、油絵、デッサン、デジタルアートなど、様々な技法を学べます"
              },
              {
                icon: Users,
                title: "温かい仲間",
                description: "初心者から上級者まで、みんなで支え合いながら成長しています"
              },
              {
                icon: Award,
                title: "コンテスト参加",
                description: "文化祭や地域のコンテストに積極的に参加し、入賞実績も豊富です"
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-slate-50 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News Section - Horizontal layout */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end gap-8 mb-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-3">
                最新ニュース
              </h2>
              <p className="text-muted-foreground">
                部活の最新情報をお届けします
              </p>
            </div>
            <Link href="/news" className="flex-shrink-0">
              <Button variant="outline">
                すべて見る
              </Button>
            </Link>
          </div>

          {news && news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.slice(0, 3).map((item) => (
                <Link key={item.id} href={`/news/${item.id}`}>
                  <Card className="h-full hover:shadow-lg hover:border-slate-200 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">
                          {new Date(item.date).toLocaleDateString('ja-JP')}
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {item.content}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg">
              <p className="text-muted-foreground">ニュースはまだありません</p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Preview - Premium masonry */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end gap-8 mb-16">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-3">
                作品ギャラリー
              </h2>
              <p className="text-muted-foreground">
                部員たちの素晴らしい作品をご紹介します
              </p>
            </div>
            <Link href="/photos" className="flex-shrink-0">
              <Button>
                すべての作品を見る
              </Button>
            </Link>
          </div>

          {artworks && artworks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
              {artworks.slice(0, 4).map((artwork, index) => (
                <Link key={artwork.id || index} href="/photos">
                  <div
                    className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                      index % 3 === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                    }`}
                  >
                    <div className="aspect-square sm:aspect-auto" style={{
                      aspectRatio: index % 3 === 0 ? "1" : "1"
                    }}>
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      {/* Premium overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:from-black/70 transition-all duration-300" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-white font-bold text-sm line-clamp-1">
                        {artwork.title}
                      </h3>
                      <p className="text-white/80 text-xs mt-1">
                        {artwork.artist}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-50 rounded-lg">
              <p className="text-muted-foreground text-lg">
                ギャラリーはまだありません
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
