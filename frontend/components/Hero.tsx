export default function Hero() {
  return (
    <section className="relative overflow-hidden h-96 md:h-[500px] lg:h-[600px] w-full bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background Image - High quality art image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1561070791-2526d30994b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydCUyMHN0dWRpbyUyMGRvY3VtZW50YXJ5fGVufDB8fHx8MTc1NzQyMzU2M3ww&ixlib=rb-4.1.0&q=80&w=1920&utm_source=figma&utm_medium=referral"
          alt="美術部の活動風景"
          className="w-full h-full object-cover"
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading - Premium styling */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/30 mb-4">
            <span className="text-white/80 text-sm font-semibold tracking-wider">
              Hitotsubashi × Tsuda Art Club
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
            創造の旅へ
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
            色彩と表現、仲間との絆。<br className="hidden sm:block" />
            一橋・津田塾の美術部で、あなたの才能を磨きませんか
          </p>

          {/* CTA Buttons - Premium design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a
              href="/about"
              className="px-8 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-white/95 hover:shadow-2xl transition-all duration-300 cursor-pointer backdrop-blur-md"
            >
              部活を詳しく知る
            </a>
            <a
              href="/photos"
              className="px-8 py-3 rounded-lg bg-white/20 text-white font-semibold border border-white/50 hover:bg-white/30 hover:shadow-xl hover:border-white transition-all duration-300 cursor-pointer backdrop-blur-md"
            >
              作品を見る
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent opacity-5 z-0" />
    </section>
  );
}
