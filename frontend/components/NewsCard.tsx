import Link from "next/link";
import { Calendar } from "lucide-react";

export default function NewsCard({
  id, title, date,
}: { id: string; title: string; date?: string }) {
  const d = date ? new Date(date) : undefined;
  const pretty = d ? d.toLocaleDateString("ja-JP") : "";
  return (
    <Link href={`/news/${id}`} className="group flex flex-col bg-white p-6 rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
        <Calendar className="h-4 w-4" />
        <time>{pretty}</time>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-slate-900 line-clamp-2">{title}</h3>
      <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-semibold text-slate-900">
        詳しく見る
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </Link>
  );
}
