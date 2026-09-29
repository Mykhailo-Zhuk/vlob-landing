"use client";

import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg">VLOB</span>
            <span className="text-sm text-muted-foreground">
              {t.footer.brandSubtitle}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link
              href="#what-you-get"
              className="hover:text-foreground transition-colors"
            >
              {t.footer.navWhat}
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-foreground transition-colors"
            >
              {t.footer.navHow}
            </Link>
            <Link
              href="#lead-form"
              className="hover:text-foreground transition-colors"
            >
              {t.footer.navEnroll}
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} VLOB. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
