export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat h-96 md:h-[500px] lg:h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Art Club Hero"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading - White text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
          美術部へようこそ
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 font-light drop-shadow-md">
          創造性あふれる仲間たちと一緒に、アートの世界を探求しよう
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/about"
            className="px-8 py-3 rounded-full bg-white text-foreground font-semibold hover:bg-white/90 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            部活について詳しく
          </a>
          <a
            href="/photos"
            className="px-8 py-3 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold border border-white/50 hover:bg-white/30 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            ギャラリーを見る
          </a>
        </div>
      </div>
    </section>
  );
}
