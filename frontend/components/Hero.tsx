export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="Art Club Hero"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          一橋・津田塾大学 美術部
        </h1>
        <p className="text-lg mb-6">絵を描き、表現を楽しむ仲間たち</p>
        <a
          href="/about"
          className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          About
        </a>
      </div>
    </section>
  );
}
