import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const LeadSchema = z.object({
  phone: z
    .string()
    .min(1, "Телефон обов'язковий")
    .refine(
      (v) => {
        const digits = v.replace(/\D/g, "");
        return digits.length === 12 && digits.startsWith("380");
      },
      { message: "Невірний формат: потрібно +380 XX XXX XX XX (12 цифр після +)" }
    ),
  email: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine(
      (v) => !v || z.string().email().safeParse(v).success,
      { message: "Невірний формат email" }
    ),
  name: z.string().optional().or(z.literal("")),
});

function escapeMarkdown(text: string): string {
  // Escape Telegram Markdown special chars in user input
  return text.replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, "\\$&");
}

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("380")) {
    return `+${digits.slice(0, 3)} ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10, 12)}`;
  }
  return raw;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { phone, email, name } = parsed.data;
  const phoneFormatted = formatPhone(phone);

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_OWNER_CHAT_ID;

  // Dev fallback: allow submissions without bot configured for local testing
  if (!token || !chatId) {
    console.warn(
      "[lead] TELEGRAM_BOT_TOKEN / TELEGRAM_OWNER_CHAT_ID not set — log-only mode"
    );
    console.info("[lead] new lead", { phone: phoneFormatted, email, name });
    return NextResponse.json({
      ok: true,
      mode: "log-only",
      message: "Lead received but Telegram bot is not configured",
    });
  }

  const lines = [
    "🔔 *Новий лід з VLOB*",
    "",
    `📞 *Телефон:* ${escapeMarkdown(phoneFormatted)}`,
  ];
  if (name) lines.push(`👤 *Ім&apos;я:* ${escapeMarkdown(name)}`);
  if (email) lines.push(`📧 *Email:* ${escapeMarkdown(email)}`);
  lines.push("");
  lines.push(`🕐 ${new Date().toLocaleString("uk-UA", { timeZone: "Europe/Kyiv" })}`);
  lines.push(`🌐 Джерело: VLOB landing page`);

  const text = lines.join("\n");

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });

    if (!tgRes.ok) {
      const tgErr = await tgRes.text();
      console.error("[lead] telegram error:", tgRes.status, tgErr);
      return NextResponse.json(
        { error: "Telegram API error", details: tgErr.slice(0, 200) },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[lead] fetch failed", e);
    return NextResponse.json(
      { error: "Failed to reach Telegram" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "ok", endpoint: "lead" });
}
