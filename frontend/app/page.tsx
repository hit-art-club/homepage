import Home from "@/components/Home";

// キャッシュ設定：Vercelで5分ごとに再生成
export const revalidate = 300;

export default function Page() {
  return <Home />;
}
