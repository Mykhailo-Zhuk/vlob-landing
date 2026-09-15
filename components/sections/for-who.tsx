"use client";

import { motion } from "framer-motion";
import { Check, X, Baby } from "lucide-react";

const forWho = [
  "Дитині 10–14 років",
  "Нуль досвіду в програмуванні",
  "Цікавиться ґаджетами, іграми, YouTube",
  "Хоче «зробити щось своє», а не тільки дивитися",
];

const notForWho = [
  "Дитина вже впевнено пише HTML/CSS",
  "Шукаємо серйозний курс з JavaScript чи фреймворків",
  "Дитині менше 9 років — інший формат буде комфортнішим",
];

export function ForWho() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
            <Baby className="h-6 w-6" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Для кого цей курс
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Чесно кажемо, кому підійде, а кому — ні. Економимо ваш час.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border bg-card p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Check className="h-4 w-4" />
              </div>
              <h3 className="font-display text-xl font-semibold">Підійде, якщо</h3>
            </div>
            <ul className="space-y-3">
              {forWho.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-base text-foreground/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border bg-card p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-100 text-rose-700">
                <X className="h-4 w-4" />
              </div>
              <h3 className="font-display text-xl font-semibold">Не підійде, якщо</h3>
            </div>
            <ul className="space-y-3">
              {notForWho.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                  <span className="text-base text-foreground/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
