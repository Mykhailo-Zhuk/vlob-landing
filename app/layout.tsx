import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VLOB — Ваша дитина створить свій перший сайт за 7 днів",
  description:
    "Міні-курс HTML/CSS для дітей 10–14 років. 3 уроки, власний проєкт і сертифікат «юний розробник». Без жаргону, з аналогіями та гейміфікацією.",
  keywords: [
    "HTML для дітей",
    "CSS для дітей",
    "програмування для дітей",
    "курс HTML",
    "VLOB",
    "міні-курс",
    "веброзробка для школярів",
  ],
  openGraph: {
    title: "VLOB — Перший сайт вашої дитини за 7 днів",
    description:
      "Міні-курс HTML/CSS для дітей 10–14 років. 3 уроки, власний проєкт і сертифікат.",
    type: "website",
    locale: "uk_UA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-background font-sans">{children}</body>
    </html>
  );
}
