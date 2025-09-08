import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const SECRET = process.env.REVALIDATE_SECRET!;

export async function POST(req: NextRequest) {
  const urlSecret = req.nextUrl.searchParams.get("secret");
  if (!SECRET || urlSecret !== SECRET) {
    return NextResponse.json({ ok: false, reason: "unauthorized" }, { status: 401 });
  }

  // microCMSのWebhookボディをゆるく解釈（id の取り出しを複数パターンで）
  let body: any = {};
  try { body = await req.json(); } catch {}

  const api = body.api || body.endpoint || body.model || "posts";
  const id =
    body.id ||
    body.contentId ||
    body.contentsId ||
    body.data?.id ||
    body.item?.id ||
    "";

  // まず一覧を再生成
  revalidatePath("/news");
  // id が取れたら詳細も再生成
  if (api === "posts" && id) revalidatePath(`/news/${id}`);

  return NextResponse.json({ ok: true, api, id });
}
