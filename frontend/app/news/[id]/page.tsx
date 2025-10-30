import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return [];
}

export const revalidate = 300;

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-3xl px-4 py-24">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-blue-primary hover:text-blue-dark transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          ニュース一覧に戻る
        </Link>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          ニュース詳細
        </h1>
        <p className="text-slate-600 text-lg">
          ID: {id} - microCMS連携準備中
        </p>
      </div>
    </div>
  );
}
