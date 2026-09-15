"use client";

import { motion } from "framer-motion";

const steps = [
  {
    day: "День 1",
    title: "Знайомство з HTML",
    desc: "Дитина пише «Привіт, світе!» і бачить його в браузері. Перший маленький тріумф.",
  },
  {
    day: "День 2–3",
    title: "Сторінка про себе",
    desc: "Додає заголовки, абзаци, фото та улюблені посилання. Це вже справжня сторінка — про неї.",
  },
  {
    day: "День 4–5",
    title: "Одягаємо сторінку в CSS",
    desc: "Кольори, шрифти, рамки. Дитина бачить, як «голі кістки» стають стильним сайтом.",
  },
  {
    day: "День 6",
    title: "Фінальний проєкт",
    desc: "Сторінка про улюбленого героя, гру чи хобі. Повністю її — ідея, текст, дизайн.",
  },
  {
    day: "День 7",
    title: "Деплой і сертифікат",
    desc: "Викладаємо сайт в інтернет — реальне посилання для друзів. Сертифікат «юний розробник» на пошту.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-secondary/30">
      <div className="container">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Як проходить курс
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Крок за кроком, день за днем. Без поспіху, без перевантаження — 15–20 хвилин на день
            достатньо.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-accent/40 to-transparent" />
            {steps.map((step, i) => (
              <motion.div
                key={step.day}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative pl-16 sm:pl-20 pb-8 last:pb-0"
              >
                <div className="absolute left-0 top-0 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white border-2 border-primary/20 shadow-sm">
                  <span className="font-display text-base sm:text-lg font-bold gradient-text">
                    {i + 1}
                  </span>
                </div>
                <div className="rounded-xl bg-card border p-5 sm:p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                    {step.day}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
