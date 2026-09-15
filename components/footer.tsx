"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg">VLOB</span>
            <span className="text-sm text-muted-foreground">· міні-курс HTML/CSS для дітей</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#what-you-get" className="hover:text-foreground transition-colors">
              Що отримає дитина
            </Link>
            <Link href="#how-it-works" className="hover:text-foreground transition-colors">
              Як проходить
            </Link>
            <Link href="#lead-form" className="hover:text-foreground transition-colors">
              Записатися
            </Link>
          </div>
        </div>
        <p className="mt-6 text-xs text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} VLOB. Зроблено з ❤️ для маленьких розробників.
        </p>
      </div>
    </footer>
  );
}
