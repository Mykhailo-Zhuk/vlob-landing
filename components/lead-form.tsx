"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const schema = z.object({
  phone: z
    .string()
    .min(1, "Введіть номер телефону")
    .refine(
      (v) => {
        const digits = v.replace(/\D/g, "");
        return digits.length === 12 && digits.startsWith("380");
      },
      { message: "Невірний формат: потрібно +380 XX XXX XX XX" }
    ),
  email: z
    .string()
    .email("Невірний формат email")
    .optional()
    .or(z.literal("")),
  name: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 12);

  if (digits.length === 0) return "";
  if (digits.startsWith("380")) {
    const rest = digits.slice(3);
    let out = "+380 ";
    if (rest.length > 0) out += rest.slice(0, 2);
    if (rest.length > 2) out += " " + rest.slice(2, 5);
    if (rest.length > 5) out += " " + rest.slice(5, 7);
    if (rest.length > 7) out += " " + rest.slice(7, 9);
    return out;
  }
  // If user starts typing without 380, prepend it
  if (digits.length === 1 && digits[0] !== "3") {
    return "+380 ";
  }
  return digits;
}

interface LeadFormProps {
  variant?: "hero" | "section";
}

export function LeadForm({ variant = "section" }: LeadFormProps) {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const phoneValue = useWatch({ control, name: "phone" }) || "";

  const onPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setValue("phone", formatted, { shouldValidate: true });
  };

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Помилка відправки");
      }
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch (e) {
      setErrorMessage(e instanceof Error ? e.message : "Щось пішло не так");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="mx-auto max-w-md rounded-2xl border-2 border-green-200 bg-green-50 p-6 text-center"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600 mb-3" />
        <h3 className="font-display text-lg font-semibold text-green-900">Готово!</h3>
        <p className="mt-1 text-sm text-green-800">
          Написали вам у Telegram протягом години. Перевірте повідомлення.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        variant === "hero"
          ? "mx-auto max-w-xl rounded-2xl border bg-card/80 backdrop-blur p-4 sm:p-5 shadow-lg"
          : "mx-auto max-w-md space-y-4"
      }
      noValidate
    >
      {variant === "hero" ? (
        <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
          <div>
            <Input
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+380 XX XXX XX XX"
              {...register("phone")}
              onChange={onPhoneChange}
              value={phoneValue}
              disabled={status === "submitting"}
              className="bg-white"
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="Email (необов&apos;язково)"
              {...register("email")}
              disabled={status === "submitting"}
              className="bg-white"
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.email.message}
              </p>
            )}
          </div>
          <Button
            type="submit"
            size="lg"
            variant="gradient"
            disabled={status === "submitting"}
            className="h-12 sm:h-12 px-6"
          >
            {status === "submitting" ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <Phone className="h-4 w-4" />
                Записатися
              </>
            )}
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="space-y-1.5">
            <Label htmlFor={`${id}-phone`} className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              Номер телефону
              <span className="text-destructive">*</span>
            </Label>
            <Input
              id={`${id}-phone`}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+380 XX XXX XX XX"
              {...register("phone")}
              onChange={onPhoneChange}
              value={phoneValue}
              disabled={status === "submitting"}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <p className="text-xs text-destructive flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor={`${id}-name`}>Ім&apos;я (необов&apos;язково)</Label>
            <Input
              id={`${id}-name`}
              type="text"
              autoComplete="name"
              placeholder="Як до вас звертатися?"
              {...register("name")}
              disabled={status === "submitting"}
            />
          </div>

          <details className="rounded-lg border bg-secondary/30 px-3 py-2 group">
            <summary className="text-sm text-muted-foreground cursor-pointer flex items-center gap-1.5 list-none select-none">
              <Mail className="h-3.5 w-3.5" />
              Додати email (необов&apos;язково)
            </summary>
            <div className="mt-2">
              <Input
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="email@example.com"
                {...register("email")}
                disabled={status === "submitting"}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email.message}
                </p>
              )}
            </div>
          </details>

          <Button
            type="submit"
            size="lg"
            variant="gradient"
            disabled={status === "submitting"}
            className="w-full"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Надсилаємо...
              </>
            ) : (
              <>
                <Phone className="h-4 w-4" />
                Записатися на міні-курс
              </>
            )}
          </Button>
        </div>
      )}

      <AnimatePresence>
        {status === "error" && errorMessage && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={
              variant === "hero"
                ? "mt-3 text-sm text-destructive flex items-center justify-center gap-1.5"
                : "text-sm text-destructive flex items-center gap-1.5"
            }
          >
            <AlertCircle className="h-3.5 w-3.5" />
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
