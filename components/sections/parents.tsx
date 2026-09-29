"use client";

import { motion } from "framer-motion";
import { Shield, Clock, HeartHandshake, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/lib/i18n";

const icons = [Shield, Clock, HeartHandshake, GraduationCap];

export function Parents() {
  const { t } = useLanguage();

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-4">
            {t.parents.badge}
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {t.parents.titlePrefix}
            <span className="text-muted-foreground/80">{t.parents.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.parents.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 max-w-4xl mx-auto">
          {t.parents.benefits.map((b, i) => {
            const Icon = icons[i] || Shield;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 rounded-2xl border bg-card p-6"
              >
                <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
