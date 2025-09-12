import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const SECRET = process.env.REVALIDATE_SECRET!;

export async function POST(req: NextRequest) {
  // 認証（secret が一致しない場合は 401）
  const secret = req.nextUrl.searchParams.get("secret");
  if (!SECRET || secret !== SECRET) {
    return NextResponse.json({ ok: false, reason: "unauthorized" }, { status: 401 });
  }

  // microCMS のWebhookペイロードをゆるく解釈
  let body: any = {};
  try { body = await req.json(); } catch {}
  const api =
    body.api || body.endpoint || body.model || body.contents?.[0]?.api || "";
  const id =
    body.id ||
    body.contentId ||
    body.contentsId ||
    body.data?.id ||
    body.item?.id ||
    "";

  // posts（ニュース）を公開/更新 → Home と /news と 該当記事を再生成
  if (api === "posts") {
    revalidatePath("/");           // ★ 追加：トップも最新化
    revalidatePath("/news");
    if (id) revalidatePath(`/news/${id}`);
  }

  // gallery（写真）を公開/更新 → Home と /photos と 該当詳細を再生成
  if (api === "gallery") {
    revalidatePath("/");           // ★ 追加：トップも最新化
    revalidatePath("/photos");
    if (id) revalidatePath(`/photos/${id}`);
  }

  // （固定ページをCMS化しているなら）
  // if (api === "pages") { revalidatePath("/about"); }

  return NextResponse.json({ ok: true, api, id });
}
