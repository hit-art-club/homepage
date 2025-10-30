export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen w-full bg-slate-950">
      {/* Background Image with premium overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydCUyMHN0dWRpbyUyMGRvY3VtZW50YXJ5fGVufDB8fHx8MTc1NzQyMzU2M3ww&ixlib=rb-4.1.0&q=80&w=2000"
          alt="美術部の活動風景"
          className="w-full h-full object-cover"
        />
        {/* Premium multi-layer overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" />
      </div>

      {/* Content - Centered with breathing room */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center min-h-screen">
        {/* Premium branding section */}
        <div className="max-w-4xl space-y-8">
          {/* Top accent line */}
          <div className="flex justify-center mb-6">
            <div className="h-1 w-12 bg-white/40" />
          </div>

          {/* Subtitle badge */}
          <div className="inline-block">
            <span className="text-white/70 text-xs sm:text-sm font-medium tracking-widest uppercase">
              Hitotsubashi × Tsuda Art Club
            </span>
          </div>

          {/* Main heading - Premium typography */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight drop-shadow-xl">
            美術部へ<br />ようこそ
          </h1>

          {/* Refined subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/85 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
            創造性あふれる仲間たちと一緒に、
            <br className="hidden sm:block" />
            アートの世界を探求しよう
          </p>

          {/* CTA Buttons - Premium minimal design */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-8">
            <a
              href="/about"
              className="px-8 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-white/95 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              部活について詳しく
            </a>
            <a
              href="/photos"
              className="px-8 py-3 bg-white/15 text-white font-semibold border border-white/30 rounded-lg hover:bg-white/25 hover:border-white/50 transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              作品を見る
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-16 animate-bounce">
            <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent opacity-5 z-0" />
    </section>
  );
}
