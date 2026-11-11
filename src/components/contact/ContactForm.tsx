"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/shared/Button";
import { cn } from "@/lib/utils";

export const subjects = {
  fund: "Funding a grant",
  partner: "Partnership",
  volunteer: "Volunteering",
  trader: "I'm a trader and want to take part",
  media: "Press and media",
  general: "Something else",
} as const;

export type Subject = keyof typeof subjects;

const formSchema = z.object({
  fullName: z.string().min(2, "Enter your full name."),
  email: z.string().email("Enter an email address like name@example.com."),
  phone: z.string().min(7, "Enter a phone number we can call you on."),
  organization: z.string().optional(),
  subject: z.enum(Object.keys(subjects) as [Subject, ...Subject[]]),
  message: z.string().min(15, "Tell us a little more: at least 15 characters."),
});

type ContactFormValues = z.infer<typeof formSchema>;

const field =
  "w-full min-h-12 rounded-[10px] border bg-paper px-4 text-base text-ink placeholder:text-muted/70 focus:border-green-700 focus:outline-none focus:ring-2 focus:ring-green-700/20";

function Label({ htmlFor, children, optional }: { htmlFor: string; children: string; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block font-medium text-ink">
      {children}
      {optional && <span className="font-normal text-muted"> (optional)</span>}
    </label>
  );
}

/**
 * ContactForm — enquiries for funding, partnership, volunteering and traders.
 * Not connected to an inbox yet: submissions are not sent anywhere.
 */
export default function ContactForm({ defaultSubject = "general" }: { defaultSubject?: Subject }) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      subject: defaultSubject,
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // TODO: send `data` to the foundation's inbox (e.g. a Server Action with an email service).
    void data;
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-[14px] border border-line bg-paper p-8 sm:p-10" role="status">
        <h3 className="text-[1.75rem]">Message not sent yet</h3>
        <p className="mt-3 max-w-[52ch] text-muted">
          This form isn&apos;t connected to our inbox yet, so your message was not delivered. Please
          email info@smofoundation.org or call 0706 069 4252.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 font-semibold text-green-900 underline underline-offset-4"
        >
          Back to the form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full name</Label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            {...register("fullName")}
            aria-invalid={errors.fullName ? true : undefined}
            className={cn(field, errors.fullName ? "border-[#b4432e]" : "border-line")}
          />
          {errors.fullName && <p className="mt-1.5 text-sm text-[#b4432e]">{errors.fullName.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            aria-invalid={errors.email ? true : undefined}
            className={cn(field, errors.email ? "border-[#b4432e]" : "border-line")}
          />
          {errors.email && <p className="mt-1.5 text-sm text-[#b4432e]">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            aria-invalid={errors.phone ? true : undefined}
            className={cn(field, errors.phone ? "border-[#b4432e]" : "border-line")}
            placeholder="0803 000 0000"
          />
          {errors.phone && <p className="mt-1.5 text-sm text-[#b4432e]">{errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="organization" optional>
            Organisation
          </Label>
          <input
            id="organization"
            type="text"
            autoComplete="organization"
            {...register("organization")}
            className={cn(field, "border-line")}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="subject">What is this about?</Label>
        <select id="subject" {...register("subject")} className={cn(field, "border-line")}>
          {(Object.keys(subjects) as Subject[]).map((key) => (
            <option key={key} value={key}>
              {subjects[key]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          aria-invalid={errors.message ? true : undefined}
          className={cn(field, "py-3", errors.message ? "border-[#b4432e]" : "border-line")}
        />
        {errors.message && <p className="mt-1.5 text-sm text-[#b4432e]">{errors.message.message}</p>}
      </div>

      <p className="text-sm text-muted">
        We only use your details to reply to you. See our{" "}
        <Link href="/privacy" className="underline underline-offset-4">
          privacy policy
        </Link>
        .
      </p>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
