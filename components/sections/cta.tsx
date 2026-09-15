"use client";

import { motion } from "framer-motion";
import { LeadForm } from "@/components/lead-form";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Send } from "lucide-react";

export function Cta() {
  return (
    <section id="lead-form" className="py-20 sm:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border bg-card p-8 sm:p-12"
        >
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

          <div className="relative text-center">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="mr-1.5 h-3.5 w-3.5 text-accent" />
              Місць у першому потоці — обмежено
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Запишіть дитину <br className="hidden sm:block" />
              <span className="gradient-text">на&nbsp;перший потік</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Залиште номер — напишемо в Telegram, розкажемо деталі й допоможемо стартувати.
              Безкоштовно, без зобов&apos;язань.
            </p>

            <div className="mt-8">
              <LeadForm variant="section" />
            </div>

            <p className="mt-5 text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Send className="h-3.5 w-3.5" />
              Напишемо у Telegram протягом години
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
