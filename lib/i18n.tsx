"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "uk";

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  shortLabel: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
    shortLabel: "EN",
    flag: "🇬🇧",
  },
  {
    code: "uk",
    label: "Ukrainian",
    nativeLabel: "Українська",
    shortLabel: "UA",
    flag: "🇺🇦",
  },
];

export const translations = {
  en: {
    hero: {
      badge: "For kids 10–14 years old · No experience needed",
      titleStart: "Teach your child ",
      titleGradient: "HTML/CSS in 7 days",
      titleEnd: "— their first website built at home",
      descriptionBefore: "A mini-course where your child creates their ",
      descriptionHighlight: "own live webpage",
      descriptionAfter: " on the very first evening. No jargon, just clear analogies: ",
      descriptionAnalogy: "HTML = bones, CSS = clothes.",
      btnEnroll: "Enroll your child",
      btnHowItWorks: "How it works",
      features: "✓ Free · ✓ We'll message on Telegram · ✓ Response within an hour",
    },
    whatYouGet: {
      title: "What your child will achieve",
      subtitle: "Not \"just another online course\" — a tangible result your child can proudly show you in a single evening.",
      items: [
        {
          title: "3 short lessons",
          desc: "≈ 26 minutes of video. No lengthy lectures — pure hands-on practice.",
        },
        {
          title: "Personal project",
          desc: "Your child styles a webpage in their unique design — their very first creation.",
        },
        {
          title: "Live website online",
          desc: "Final step — deployment. A real link to share with friends and family.",
        },
        {
          title: "Certificate",
          desc: "«Junior Developer» certificate — proof for parents and pride for your child.",
        },
      ],
    },
    howItWorks: {
      title: "How the course works",
      subtitle: "Step by step, day by day. No rush, no overwhelm — 15–20 minutes a day is all it takes.",
      steps: [
        {
          day: "Day 1",
          title: "Introduction to HTML",
          desc: "Child writes \"Hello, world!\" and sees it in the browser. The first small victory.",
        },
        {
          day: "Day 2–3",
          title: "About Me page",
          desc: "Adds headings, paragraphs, photos, and favorite links. A real webpage about them.",
        },
        {
          day: "Day 4–5",
          title: "Styling with CSS",
          desc: "Colors, fonts, borders. The child sees how \"bare bones\" turn into a stylish website.",
        },
        {
          day: "Day 6",
          title: "Final project",
          desc: "A page about a favorite hero, game, or hobby. Completely their own idea, text, and design.",
        },
        {
          day: "Day 7",
          title: "Deployment & Certificate",
          desc: "Publishing the website to the internet — a real link for friends. «Junior Developer» certificate sent to email.",
        },
      ],
    },
    forWho: {
      title: "Who this course is for",
      subtitle: "We are honest about who it's for and who it's not. Saving your time.",
      suitableTitle: "Great fit if",
      suitableItems: [
        "Child is 10–14 years old",
        "Zero prior programming experience",
        "Interested in gadgets, games, YouTube",
        "Wants to «make something of their own», not just watch",
      ],
      notSuitableTitle: "Not a fit if",
      notSuitableItems: [
        "Child already writes HTML/CSS confidently",
        "Looking for an advanced course in JavaScript or frameworks",
        "Child is under 9 years old — a different format will be more comfortable",
      ],
    },
    parents: {
      badge: "For parents",
      titlePrefix: "Why this is valuable ",
      titleHighlight: "specifically for your child",
      subtitle: "Not \"just more screen time\". A course that yields visible results, logic, and self-confidence.",
      benefits: [
        {
          title: "Safe",
          desc: "Closed environment, no interaction with strangers. Dedicated mentor support.",
        },
        {
          title: "15–20 min / day",
          desc: "Short 7–10 min lessons. Hands-on practice from minute one, no boring lectures.",
        },
        {
          title: "Mentor support",
          desc: "Hints, project reviews, and answers to questions — by their side, never left alone.",
        },
        {
          title: "Certificate",
          desc: "After the final project — «Junior Developer». Proof for parents and pride for your child.",
        },
      ],
    },
    cta: {
      badge: "Spots in the first cohort are limited",
      titlePrefix: "Enroll your child ",
      titleHighlight: "in the first cohort",
      subtitle: "Leave your number — we'll message on Telegram, explain the details, and help get started. Free, no obligations.",
      tgNote: "We'll message on Telegram within an hour",
    },
    leadForm: {
      phoneLabel: "Phone number (Telegram)",
      phonePlaceholder: "+380 50 123 45 67",
      emailLabel: "Email (for materials)",
      emailPlaceholder: "example@gmail.com",
      nameLabel: "Child's name (optional)",
      namePlaceholder: "Alex, 12 years old",
      submitButton: "Start learning for free",
      submitHeroButton: "Start free",
      submitting: "Submitting...",
      successTitle: "Awesome! Application received 🎉",
      successDesc: "We'll write to you on Telegram within an hour to help you get started.",
      submitAnother: "Submit another application",
      validationPhoneRequired: "Please enter phone number",
      validationPhoneFormat: "Format needed: +380 XX XXX XX XX",
      validationEmailFormat: "Invalid email format",
      privacyNote: "🔒 No spam. We only use your contacts to communicate about the course.",
    },
    footer: {
      brandSubtitle: "· HTML/CSS mini-course for kids",
      navWhat: "What kids learn",
      navHow: "How it works",
      navEnroll: "Enroll now",
      copyright: "Made with ❤️ for young developers.",
      languageLabel: "Language",
      selectLanguage: "Select language",
    },
  },
  uk: {
    hero: {
      badge: "Для дітей 10–14 років · Без досвіду",
      titleStart: "Навчіть дитину ",
      titleGradient: "HTML/CSS за 7 днів",
      titleEnd: "— перший сайт у вас вдома",
      descriptionBefore: "Міні-курс, де дитина створює ",
      descriptionHighlight: "власну живу сторінку",
      descriptionAfter: " вже за перший вечір. Без жаргону, через аналогії: ",
      descriptionAnalogy: "HTML = кістки, CSS = одяг.",
      btnEnroll: "Записати дитину",
      btnHowItWorks: "Як це працює",
      features: "✓ Безкоштовно · ✓ Напишемо у Telegram · ✓ Відповімо протягом години",
    },
    whatYouGet: {
      title: "Що отримає ваша дитина",
      subtitle: "Не «ще один онлайн-курс» — а конкретний результат, який дитина зможе показати вам за один вечір.",
      items: [
        {
          title: "3 короткі уроки",
          desc: "≈ 26 хвилин відео. Без довгих лекцій — тільки практика.",
        },
        {
          title: "Власний проєкт",
          desc: "Дитина «одягне» сторінку власного стилю — це її перша робота.",
        },
        {
          title: "Сайт в інтернеті",
          desc: "Фінальний крок — деплой. Справжнє посилання, яким можна ділитися.",
        },
        {
          title: "Сертифікат",
          desc: "«Юний розробник» — доказ для батьків і гордість для дитини.",
        },
      ],
    },
    howItWorks: {
      title: "Як проходить курс",
      subtitle: "Крок за кроком, день за днем. Без поспіху, без перевантаження — 15–20 хвилин на день достатньо.",
      steps: [
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
      ],
    },
    forWho: {
      title: "Для кого цей курс",
      subtitle: "Чесно кажемо, кому підійде, а кому — ні. Економимо ваш час.",
      suitableTitle: "Підійде, якщо",
      suitableItems: [
        "Дитині 10–14 років",
        "Нуль досвіду в програмуванні",
        "Цікавиться ґаджетами, іграми, YouTube",
        "Хоче «зробити щось своє», а не тільки дивитися",
      ],
      notSuitableTitle: "Не підійде, якщо",
      notSuitableItems: [
        "Дитина вже впевнено пише HTML/CSS",
        "Шукаємо серйозний курс з JavaScript чи фреймворків",
        "Дитині менше 9 років — інший формат буде комфортнішим",
      ],
    },
    parents: {
      badge: "Для батьків",
      titlePrefix: "Чому це корисно ",
      titleHighlight: "саме для дитини",
      subtitle: "Не «чергові уроки з екрану». Це курс, який дає видимий результат, логіку та впевненість у власних силах.",
      benefits: [
        {
          title: "Безпечно",
          desc: "Закрите середовище, без спілкування з незнайомцями. Підтримка наставника.",
        },
        {
          title: "15–20 хв на день",
          desc: "Короткі уроки 7–10 хв. Практика з першої хвилини, без довгих лекцій.",
        },
        {
          title: "Підтримка наставника",
          desc: "Підказки, перевірка проєктів і відповіді на запитання — поруч, не залишимо самих.",
        },
        {
          title: "Сертифікат",
          desc: "Після фінального проєкту — «Юний розробник». Доказ для батьків і гордість для дитини.",
        },
      ],
    },
    cta: {
      badge: "Місць у першому потоці — обмежено",
      titlePrefix: "Запишіть дитину ",
      titleHighlight: "на перший потік",
      subtitle: "Залиште номер — напишемо в Telegram, розкажемо деталі й допоможемо стартувати. Безкоштовно, без зобов'язань.",
      tgNote: "Напишемо у Telegram протягом години",
    },
    leadForm: {
      phoneLabel: "Номер телефону (Telegram)",
      phonePlaceholder: "+380 50 123 45 67",
      emailLabel: "Email (для матеріалів)",
      emailPlaceholder: "example@gmail.com",
      nameLabel: "Ім'я дитини (необов'язково)",
      namePlaceholder: "Сашко, 12 років",
      submitButton: "Почати навчання безкоштовно",
      submitHeroButton: "Записатися",
      submitting: "Відправляємо...",
      successTitle: "Чудово! Заявку прийнято 🎉",
      successDesc: "Ми напишемо вам у Telegram протягом години, щоб допомогти стартувати.",
      submitAnother: "Надіслати ще одну заявку",
      validationPhoneRequired: "Введіть номер телефону",
      validationPhoneFormat: "Невірний формат: потрібно +380 XX XXX XX XX",
      validationEmailFormat: "Невірний формат email",
      privacyNote: "🔒 Без спаму. Використовуємо контакти лише для зв'язку щодо курсу.",
    },
    footer: {
      brandSubtitle: "· міні-курс HTML/CSS для дітей",
      navWhat: "Що отримає дитина",
      navHow: "Як проходить",
      navEnroll: "Записатися",
      copyright: "Зроблено з ❤️ для маленьких розробників.",
      languageLabel: "Мова",
      selectLanguage: "Оберіть мову",
    },
  },
};

export type SiteTranslations = typeof translations.en;

const STORAGE_KEY = "vlob_language";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: SiteTranslations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "en" || saved === "uk") {
        document.documentElement.lang = saved;
        if (saved !== "en") {
          setTimeout(() => {
            setLanguageState(saved);
          }, 0);
        }
      }
    } catch {
      // Ignore storage read error
    }
  }, []);

  const setLanguage = React.useCallback((nextLang: Language) => {
    setLanguageState(nextLang);
    try {
      localStorage.setItem(STORAGE_KEY, nextLang);
      document.documentElement.lang = nextLang;
    } catch {
      // Ignore storage write error
    }
  }, []);

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
