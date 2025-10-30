"use client";

import Link from "next/link";
import { News, NewsItem } from "./News";
import { Gallery, Artwork } from "./Gallery";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Palette, Users, Award } from 'lucide-react';

export function Home({ news, artworks }: { news: NewsItem[]; artworks: Artwork[] }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] lg:h-[600px] bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            alt="美術部の活動風景"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
            美術部へようこそ
          </h1>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md">
            創造性あふれる仲間たちと一緒に、アートの世界を探求しよう
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button
                size="lg"
                className="bg-white text-foreground hover:bg-white/90"
              >
                部活について詳しく
              </Button>
            </Link>
            <Link href="/photos">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/20"
              >
                作品を見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              美術部の魅力
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              私たちの部活では、様々なアートの分野を学び、創造力を育むことができます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>多様な技法</CardTitle>
                <CardDescription>
                  水彩画、油絵、デッサン、デジタルアートなど、様々な技法を学べます
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>温かい仲間</CardTitle>
                <CardDescription>
                  初心者から上級者まで、みんなで支え合いながら成長しています
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>コンテスト参加</CardTitle>
                <CardDescription>
                  文化祭や地域のコンテストに積極的に参加し、入賞実績も豊富です
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">最新ニュース</h2>
            <Link href="/news">
              <Button variant="outline">
                すべてのニュースを見る
              </Button>
            </Link>
          </div>

          {news && news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.slice(0, 3).map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(item.date).toLocaleDateString('ja-JP')}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">ニュースはまだありません</p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">作品ギャラリー</h2>
            <Link href="/photos">
              <Button variant="outline">
                ギャラリーを見る
              </Button>
            </Link>
          </div>

          {artworks && artworks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {artworks.slice(0, 4).map((artwork, index) => (
                <div
                  key={artwork.id || index}
                  className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">ギャラリーはまだありません</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
