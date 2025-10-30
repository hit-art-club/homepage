"use client";

import Link from "next/link";
import type { NewsItem } from "./News";
import type { Artwork } from "./Gallery";
import {
  ArrowRight,
  Calendar,
  Palette,
  Users,
  Award,
} from "lucide-react";

export function Home({ news, artworks }: { news: NewsItem[]; artworks: Artwork[] }) {
  const features = [
    {
      icon: Palette,
      title: "多彩な表現に触れる",
      description:
        "水彩や油絵はもちろん、デジタルや立体造形まで幅広い技法を体験できます。",
    },
    {
      icon: Users,
      title: "仲間と磨く創造性",
      description:
        "学年や経験を越えて作品を見せ合い、フィードバックし合う文化が根付いています。",
    },
    {
      icon: Award,
      title: "挑戦の舞台が豊富",
      description:
        "文化祭展示や地域コンテストへの出展など、成果を披露する機会が充実しています。",
    },
  ];

  return (
    <div className="space-y-0 pb-12">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-4 py-32 sm:px-12 sm:py-40">
        <img
          src="/hero.jpg"
          alt="美術部の活動風景"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/70 via-pink-500/65 to-red-500/60" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center text-white">
          <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            美術部へようこそ
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
            創造性あふれる仲間たちとともに、アートの世界を探求しましょう
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900 transition-transform duration-200 hover:scale-105"
            >
              部活について詳しく
            </Link>
            <Link
              href="/photos"
              className="inline-flex items-center justify-center rounded-full bg-white/20 px-8 py-3 text-base font-semibold text-white border border-white/40 transition-all duration-200 hover:bg-white/30"
            >
              作品を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-4 py-24 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">美術部の魅力</h2>
            <p className="mt-4 text-base text-slate-600">
              私たちの部活では、様々なアートの分野を学び、創造力を育むことができます。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex flex-col items-start p-8 bg-white border border-gray-200 rounded-3xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center rounded-full bg-gray-100 p-3 text-slate-900">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-gray-50 px-4 py-24 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">最新ニュース</h2>
              <p className="mt-2 text-base text-slate-600">
                イベントや制作レポートなど、日々の活動の様子をお届けします。
              </p>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-600 transition-colors"
            >
              すべて見る
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {news && news.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {news.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group flex flex-col bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(item.date).toLocaleDateString("ja-JP")}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                    {item.content}
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-semibold text-slate-900">
                    詳しく見る
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center">
              <p className="text-slate-600">ニュースはまだありません</p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="relative overflow-hidden bg-slate-900 px-4 py-24 sm:px-12 text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900" />

        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold">作品ギャラリー</h2>
              <p className="mt-3 max-w-xl text-sm text-white/70">
                部員たちが制作した最新の作品をピックアップ。個性豊かな表現をお楽しみください。
              </p>
            </div>
            <Link
              href="/photos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors"
            >
              すべての作品を見る
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {artworks && artworks.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {artworks.slice(0, 4).map((artwork, index) => (
                <Link
                  key={artwork.id || index}
                  href="/photos"
                  className="group relative block overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-700">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-base font-semibold">{artwork.title}</h3>
                    {artwork.artist ? (
                      <p className="mt-1 text-sm text-white/80">{artwork.artist}</p>
                    ) : null}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/40 bg-white/10 p-12 text-center text-white/80">
              ギャラリーはまだありません
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
