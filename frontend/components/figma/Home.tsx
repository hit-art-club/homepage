"use client";

import Link from "next/link";
import type { NewsItem } from "./News";
import type { Artwork } from "./Gallery";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Calendar,
  Palette,
  Sparkles,
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
    <div className="space-y-24 pb-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-[40px] bg-slate-900 px-6 py-24 sm:px-12 sm:py-32">
        <img
          src="/hero.jpg"
          alt="美術部の活動風景"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-900/80 via-fuchsia-700/65 to-rose-600/55 mix-blend-multiply" />
        <div className="absolute inset-0 -z-10 bg-slate-900/20 backdrop-blur-[2px]" />
        <div className="absolute -top-32 right-[-6rem] -z-10 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-[-4rem] -z-10 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
            <Sparkles className="h-4 w-4" />
            Art Club
          </span>
          <h1 className="mt-8 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            美術部へようこそ
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
            創造性あふれる仲間たちとともに、アートの世界を探求しましょう。
            作品制作だけでなく、互いに学び合う時間が私たちの誇りです。
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-3 text-base font-semibold shadow-lg shadow-fuchsia-500/20"
            >
              <Link href="/about">部活について詳しく</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/50 bg-white/10 px-8 py-3 text-base font-semibold text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/photos">作品を見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">美術部の魅力</h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            アートを楽しみながら技術を磨ける、落ち着いた制作環境と温かなコミュニティがあります。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl bg-white/90 p-8 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-slate-900/10"
              >
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary via-indigo-400 to-sky-400 transition-transform duration-300 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </section>

      {/* News */}
      <section className="rounded-[32px] bg-white/90 p-10 shadow-xl ring-1 ring-slate-900/5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">最新ニュース</h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              イベントや制作レポートなど、日々の活動の様子をお届けします。
            </p>
          </div>
          <Button asChild variant="outline" className="self-start rounded-full px-6">
            <Link href="/news">すべて見る</Link>
          </Button>
        </div>

        {news && news.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {news.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-transparent bg-gradient-to-br from-white to-white/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(item.date).toLocaleDateString("ja-JP")}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {item.content}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-primary">
                  詳しく見る
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary via-fuchsia-500 to-rose-500 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-slate-200 bg-white/70 p-12 text-center">
            <p className="text-muted-foreground">ニュースはまだありません</p>
          </div>
        )}
      </section>

      {/* Gallery */}
      <section className="relative overflow-hidden rounded-[32px] bg-slate-900 px-8 py-16 text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-purple-900/70 to-slate-900" />
        <div className="absolute -right-10 top-10 -z-10 h-48 w-48 rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute bottom-0 left-10 -z-10 h-60 w-60 rounded-full bg-fuchsia-400/30 blur-3xl" />

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">作品ギャラリー</h2>
            <p className="mt-3 max-w-xl text-sm text-white/70 sm:text-base">
              部員たちが制作した最新の作品をピックアップ。個性豊かな表現をお楽しみください。
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/60 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            <Link href="/photos">すべての作品を見る</Link>
          </Button>
        </div>

        {artworks && artworks.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {artworks.slice(0, 4).map((artwork, index) => (
              <Link
                key={artwork.id || index}
                href="/photos"
                className="group relative block overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-80" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-semibold leading-tight">{artwork.title}</h3>
                  {artwork.artist ? (
                    <p className="mt-1 text-sm text-white/70">{artwork.artist}</p>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-3xl border border-dashed border-white/40 bg-white/10 p-12 text-center text-white/80">
            ギャラリーはまだありません
          </div>
        )}
      </section>
    </div>
  );
}
