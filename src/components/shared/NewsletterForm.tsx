"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * NewsletterForm — sits in the dark footer.
 * Not connected to an email service yet: submissions are not stored or sent.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL.test(email)) {
      setError("Enter an email address like name@example.com.");
      return;
    }
    setError("");
    setLoading(true);
    // TODO: send to the newsletter service once it is connected.
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    setEmail("");
    toast("Sign-up not sent", {
      description: "The newsletter isn't connected yet, so your email was not saved.",
    });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="newsletter-email" className="text-sm text-cream/75">
        Email address
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "newsletter-error" : undefined}
          disabled={loading}
          className="min-h-12 w-full rounded-[10px] border border-cream/20 bg-cream/[0.07] px-4 text-base text-cream placeholder:text-cream/40 focus:border-cream/60 focus:outline-none"
          placeholder="name@example.com"
        />
        <button
          type="submit"
          disabled={loading}
          className="min-h-12 shrink-0 rounded-[10px] bg-cream px-5 font-semibold text-green-950 transition-colors hover:bg-paper disabled:opacity-60"
        >
          {loading ? "Signing up…" : "Sign up"}
        </button>
      </div>
      {error && (
        <p id="newsletter-error" className="mt-2 text-sm text-[#f3b7a8]" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
