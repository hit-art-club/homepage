"use client";

import Link from "next/link";
import { Palette, Users, Award, Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Palette,
      title: "多彩な表現に触れる",
      description:
        "水彩や油絵、デッサン、デジタルアート、立体造形など、様々な技法を学べます。",
    },
    {
      icon: Users,
      title: "仲間との成長",
      description:
        "学年や経験を超えた交流。作品の評価やフィードバックを通じて相互に成長できます。",
    },
    {
      icon: Award,
      title: "チャレンジの舞台",
      description:
        "文化祭、展示会、地域のコンテストなど、成果を発表する機会が豊富です。",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50 section-padding">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative container mx-auto max-w-4xl px-4">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-primary" />
              <span className="text-sm font-semibold text-blue-primary">
                Art Club
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-center text-5xl sm:text-6xl md:text-7xl font-black text-foreground leading-tight mb-6">
            美術部へ
            <br />
            ようこそ
          </h1>

          {/* Subtitle */}
          <p className="text-center text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            創造性あふれる仲間たちとともに、アートの世界を探求しよう。
            <br />
            自分らしい表現を見つけ、一緒に成長する場所です。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn btn-primary">
              部活について詳しく
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link href="/photos" className="btn btn-outline">
              作品ギャラリーを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              美術部の魅力
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              アートを通じた自己表現とコミュニティを大切にしています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="card p-8 hover:shadow-lg transition-all hover:border-blue-primary group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-primary group-hover:bg-blue-primary group-hover:text-white transition-all mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-primary-teal text-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl sm:text-5xl font-bold mb-2">50+</h3>
              <p className="text-lg opacity-90">
                部員数
              </p>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl font-bold mb-2">100+</h3>
              <p className="text-lg opacity-90">
                展示実績
              </p>
            </div>
            <div>
              <h3 className="text-4xl sm:text-5xl font-bold mb-2">10+</h3>
              <p className="text-lg opacity-90">
                受賞履歴
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            さあ、始めましょう
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            美術部に興味がある方は、お気軽にお問い合わせください。
            初心者も経験者も大歓迎です！
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            今すぐお問い合わせ
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
