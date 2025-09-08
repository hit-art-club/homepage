import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const SECRET = process.env.REVALIDATE_SECRET!;

export async function POST(req: NextRequest) {
  // 認証
  const secret = req.nextUrl.searchParams.get("secret");
  if (!SECRET || secret !== SECRET) {
    return NextResponse.json({ ok: false, reason: "unauthorized" }, { status: 401 });
  }

  // microCMS のペイロードをゆるく解釈
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

  // posts（ニュース）
  if (api === "posts") {
    revalidatePath("/news");
    if (id) revalidatePath(`/news/${id}`);
  }

  // gallery（写真）★今回追加
  if (api === "gallery") {
    revalidatePath("/photos");
    if (id) revalidatePath(`/photos/${id}`);
  }

  // （任意）固定ページをCMS化しているなら
  // if (api === "pages") revalidatePath("/about");

  return NextResponse.json({ ok: true, api, id });
}
