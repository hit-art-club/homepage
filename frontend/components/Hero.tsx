export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-secondary pt-16 pb-24 md:pt-32 md:pb-40">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Art Club Hero"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
          一橋・津田塾大学
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            美術部
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
          創造的な表現と芸術の交差点。
          <br className="hidden sm:block" />
          あなたの才能を発揮する場所。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/about"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            部活紹介を見る
          </a>
          <a
            href="/photos"
            className="px-8 py-3 rounded-full bg-secondary text-foreground font-semibold hover:bg-muted hover:shadow-lg hover:scale-105 transition-all duration-200 border border-border cursor-pointer"
          >
            ギャラリーを見る
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 flex justify-center mt-16">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
