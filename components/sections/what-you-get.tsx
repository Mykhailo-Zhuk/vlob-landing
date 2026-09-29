"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Trophy } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const icons = [Code2, Palette, Rocket, Trophy];

export function WhatYouGet() {
  const { t } = useLanguage();

  return (
    <section id="what-you-get" className="py-20 sm:py-28">
      <div className="container">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {t.whatYouGet.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.whatYouGet.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.whatYouGet.items.map((item, i) => {
            const Icon = icons[i] || Code2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative rounded-2xl border bg-card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
