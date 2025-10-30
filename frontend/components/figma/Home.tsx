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
  Sparkles,
} from "lucide-react";

export function Home({ news, artworks }: { news: NewsItem[]; artworks: Artwork[] }) {
  const features = [
    {
      icon: Palette,
      title: "多彩な表現に触れる",
      description:
        "水彩や油絵、デッサン、デジタルアート、立体造形など、幅広い技法を体験・学習できます。",
    },
    {
      icon: Users,
      title: "仲間との成長",
      description:
        "学年や経験を越えた交流。作品の評価やフィードバックを通じて、相互に成長できます。",
    },
    {
      icon: Award,
      title: "チャレンジの舞台",
      description:
        "文化祭、展示会、地域のコンテストなど、成果を発表する多くの機会があります。",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 px-4 py-32 sm:px-12 sm:py-48">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Art Club</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 leading-tight">
            美術部へようこそ
          </h1>

          <p className="mt-6 text-lg text-slate-700 max-w-2xl leading-relaxed">
            創造性あふれる仲間たちとともに、アートの世界を探求しよう。
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            >
              部活について詳しく
            </Link>
            <Link
              href="/photos"
              className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-slate-200 text-slate-900 font-semibold rounded-lg hover:border-primary hover:bg-primary/5 transition-colors duration-200"
            >
              作品ギャラリーを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-4 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              美術部の魅力
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              アートを通じた自己表現とコミュニティを大切にしています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group flex flex-col p-8 bg-slate-50 border border-slate-200 rounded-xl hover:border-primary hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-slate-50 px-4 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3">
                最新ニュース
              </h2>
              <p className="text-slate-600 text-lg">
                部活の活動レポート、イベント、新着情報をお届けします。
              </p>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 mt-4 sm:mt-0 px-6 py-2 text-primary font-semibold hover:text-blue-700 transition-colors"
            >
              すべて見る
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {news && news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group flex flex-col h-full p-6 bg-white border border-slate-200 rounded-xl hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <Calendar className="h-4 w-4" />
                    <time>{new Date(item.date).toLocaleDateString("ja-JP")}</time>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 line-clamp-2 flex-grow">
                    {item.content}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                    続きを読む
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <p className="text-slate-600">ニュースはまだありません</p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white px-4 py-20 sm:px-12 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3">
                作品ギャラリー
              </h2>
              <p className="text-slate-600 text-lg">
                部員たちの創造的な作品をご紹介。多様なスタイルと技法をご覧ください。
              </p>
            </div>
            <Link
              href="/photos"
              className="inline-flex items-center gap-2 mt-4 sm:mt-0 px-6 py-2 text-primary font-semibold hover:text-blue-700 transition-colors"
            >
              すべて見る
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {artworks && artworks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {artworks.slice(0, 4).map((artwork, index) => (
                <Link
                  key={artwork.id || index}
                  href="/photos"
                  className="group relative overflow-hidden rounded-xl border border-slate-200 hover:border-primary transition-all duration-300"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-base font-bold">{artwork.title}</h3>
                    {artwork.artist && (
                      <p className="text-sm text-white/90 mt-1">{artwork.artist}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
              <p className="text-slate-600">ギャラリーはまだありません</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
