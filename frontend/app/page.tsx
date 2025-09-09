import Hero from "../components/Hero";
import NewsPreview from "../components/NewsPreview";
import GalleryPreview from "../components/GalleryPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-4xl mx-auto px-4">
        <NewsPreview />
        <GalleryPreview />
      </div>
    </main>
  );
}
