export default function Home() {
  return (
    <>
      <section className="rounded-2xl bg-gray-100 p-12 text-center">
        <h1 className="text-4xl font-bold mb-3">一橋・津田塾大学 美術部</h1>
        <p className="text-lg">Hitotsubashi × Tsuda Art Club</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">最新のお知らせ</h2>
        <p className="text-gray-600">
          新しい情報は <a className="underline" href="/news">News</a> をご覧ください。
        </p>
      </section>
    </>
  );
}
