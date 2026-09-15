# VLOB Landing Page

Landing page for the **VLOB mini-course** — HTML/CSS for kids aged 10–14, Ukrainian-language product.
Lead capture is wired to a Telegram bot (recommended over email for UA market: 100% open rate,
higher conversion).

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**-style
components, and **framer-motion** for subtle 2026-style animations.

> Mobile-first. 90% of the traffic is mobile. Light theme with serious-for-parents palette
> (deep blue / violet) and a soft gradient accent — no "kids colours".

## Stack

- **Next.js 14** (App Router, server components)
- **TypeScript** (strict)
- **Tailwind CSS** + shadcn-style tokens
- **framer-motion** for fade-in / slide-up / micro-interactions
- **react-hook-form + zod** for typed form validation
- **lucide-react** for icons
- `/api/lead` route → **Telegram Bot API** (`sendMessage`)

## Local setup

```bash
# 1. install deps (Node 18+)
npm install

# 2. configure env
cp .env.example .env
#   ↳ fill in TELEGRAM_BOT_TOKEN and TELEGRAM_OWNER_CHAT_ID (see below)

# 3. run dev server
npm run dev
#   ↳ http://localhost:3000
```

### Without a bot (dev-only)

If `TELEGRAM_BOT_TOKEN` or `TELEGRAM_OWNER_CHAT_ID` is missing, the `/api/lead` route will
log the lead to the server console and return `mode: "log-only"`. Useful for preview /
local UI work.

## Telegram bot setup

1. Open Telegram, find **@BotFather**, send `/newbot`.
2. Follow the prompts. Suggested name: **VLOB Mini-Course Bot**
   (username example: `@vlob_minicourse_bot`).
3. BotFather returns an HTTP API token. Copy it.
4. Start a chat with your new bot (any "hi" message) — this is required before the bot can DM you.
5. Get your personal chat ID:
   - Option A: message **@userinfobot** — it replies with your numeric ID.
   - Option B: message **@RawDataBot** — copy the `id` field from the JSON it returns.
6. Put both values into `.env`:

   ```env
   TELEGRAM_BOT_TOKEN=123456789:AA...your-real-token
   TELEGRAM_OWNER_CHAT_ID=987654321
   ```

7. Restart the dev server. Submit a test lead — you should see a message like:

   ```
   🔔 Новий лід з VLOB

   📞 Телефон: +380 67 123 45 67
   👤 Ім'я: Олег
   📧 Email: oleg@example.com

   🕐 02.09.2026, 10:42:13
   🌐 Джерело: VLOB landing page
   ```

**Important:** `.env` is gitignored. Never commit the real token. Only `.env.example` is
checked in.

## Production build

```bash
npm run build
npm start
```

Deploys cleanly to **Vercel** (zero config), **Netlify**, or any Node host.

### Vercel quick deploy

```bash
npx vercel          # one-time interactive setup
npx vercel --prod   # ship
# then set TELEGRAM_BOT_TOKEN and TELEGRAM_OWNER_CHAT_ID in the Vercel dashboard
#   → Project → Settings → Environment Variables
```

## Project structure

```
app/
  layout.tsx           root layout, fonts, metadata
  page.tsx             composes all sections
  globals.css          tailwind + theme tokens
  api/lead/route.ts    POST → Telegram Bot API
components/
  ui/                  shadcn-style primitives
    button.tsx
    card.tsx
    input.tsx
    label.tsx
    badge.tsx
  lead-form.tsx        phone-mask + zod-validated form (hero & section variants)
  footer.tsx
  sections/
    hero.tsx           headline + lead form
    what-you-get.tsx   3 уроки + проєкт + сертифікат
    how-it-works.tsx   day-by-day timeline
    for-who.tsx        "Підійде / Не підійде"
    parents.tsx        "Для батьків" (безпека, користь)
    cta.tsx            final lead form block
lib/
  utils.ts             cn() helper
```

## Form behaviour

- **Phone (required)** — auto-formatted to `+380 XX XXX XX XX`, only digits after `380`, validated client-side and server-side (zod schema enforces `12` digits and `380` prefix).
- **Email (optional)** — collapsed in the section form (`<details>`), inline in the hero form. Validated only if present.
- **Name (optional)** — for a personal greeting in the Telegram message.
- All lead data is sent to `/api/lead`, which forwards it to Telegram via `sendMessage` (Markdown). Markdown special characters in user input are escaped.

## Content sources

Hero, section copy, and value proposition are taken from the internal
`course-plan-html-css-kids.md` (G-225) and adapted for landing-page tone.
