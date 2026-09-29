"use client";

import * as React from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LANGUAGES, useLanguage, type Language } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  const currentLanguage =
    LANGUAGES.find((item) => item.code === language) ?? LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "h-9 px-3 gap-2 bg-background/80 hover:bg-accent/10 border-border/70 text-foreground font-medium text-xs sm:text-sm shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-ring",
            className
          )}
          aria-label={t.footer.languageLabel}
        >
          <Globe className="h-4 w-4 text-muted-foreground shrink-0" />
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true">{currentLanguage.flag}</span>
            <span>{currentLanguage.nativeLabel}</span>
          </span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground/80 shrink-0 opacity-70 transition-transform duration-200" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        side="top"
        sideOffset={8}
        className="w-48 p-1.5"
      >
        <DropdownMenuLabel className="px-2 py-1.5 text-xs text-muted-foreground font-normal">
          {t.footer.selectLanguage}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        {LANGUAGES.map((lang) => {
          const isSelected = language === lang.code;
          return (
            <DropdownMenuItem
              key={lang.code}
              onSelect={() => setLanguage(lang.code as Language)}
              onClick={() => setLanguage(lang.code as Language)}
              className={cn(
                "flex items-center justify-between px-2.5 py-2 text-sm rounded-md cursor-pointer transition-colors",
                isSelected
                  ? "bg-accent/15 text-accent-foreground font-semibold"
                  : "hover:bg-muted/60"
              )}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-base" aria-hidden="true">
                  {lang.flag}
                </span>
                <div className="flex flex-col">
                  <span>{lang.nativeLabel}</span>
                  {lang.nativeLabel !== lang.label && (
                    <span className="text-[11px] text-muted-foreground">
                      {lang.label}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                  {lang.shortLabel}
                </span>
                {isSelected && (
                  <Check className="h-4 w-4 text-primary shrink-0 stroke-[2.5]" />
                )}
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
