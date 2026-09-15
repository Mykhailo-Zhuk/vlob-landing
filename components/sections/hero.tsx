"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pt-20 pb-16 sm:pt-28 sm:pb-24">
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-6 px-3 py-1.5 text-sm font-medium">
              <Sparkles className="mr-1.5 h-3.5 w-3.5 text-accent" />
              Для дітей 10–14 років · Без досвіду
            </Badge>
          </motion.div>

          <motion.h1
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Навчіть дитину{" "}
            <span className="gradient-text">HTML/CSS за 7 днів</span>
            <br />
            <span className="text-foreground/80 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              — перший сайт у вас вдома
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Міні-курс, де дитина створює{" "}
            <strong className="text-foreground">власну живу сторінку</strong> вже за перший вечір.
            Без жаргону, через аналогії:{" "}
            <span className="text-foreground">HTML = кістки, CSS = одяг</span>.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild variant="gradient" size="xl" className="w-full sm:w-auto">
              <a href="#lead-form">
                Записати дитину
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
              <a href="#how-it-works">
                <Play />
                Як це працює
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <LeadForm variant="hero" />
          </motion.div>

          <motion.p
            className="mt-5 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            ✓ Безкоштовно · ✓ Напишемо у Telegram · ✓ Відповімо протягом години
          </motion.p>
        </div>
      </div>
    </section>
  );
}
