import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function NewsCard({
  id, title, date,
}: { id: string; title: string; date?: string }) {
  const d = date ? new Date(date) : undefined;
  const pretty = d ? d.toLocaleDateString("ja-JP") : "";
  return (
    <Link
      href={`/news/${id}`}
      className="group flex flex-col h-full p-6 bg-white border border-slate-200 rounded-xl hover:border-primary hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
        <Calendar className="h-4 w-4" />
        <time>{pretty}</time>
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-semibold text-primary">
        続きを読む
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
