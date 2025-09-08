import Link from "next/link";

export default function NewsCard({
  id, title, date,
}: { id: string; title: string; date?: string }) {
  const d = date ? new Date(date) : undefined;
  const pretty = d ? d.toLocaleDateString("ja-JP") : "";
  return (
    <Link href={`/news/${id}`} className="block border rounded-lg p-4 hover:shadow-sm transition">
      <time className="text-xs text-gray-500">{pretty}</time>
      <h3 className="mt-1 font-medium">{title}</h3>
      <span className="text-sm text-blue-700 underline">続きを読む</span>
    </Link>
  );
}
