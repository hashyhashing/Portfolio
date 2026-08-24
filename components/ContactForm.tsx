"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "pending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (String(data.get("company") || "").trim().length > 0) {
      setStatus("success");
      return;
    }

    setStatus("pending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong sending that.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong sending that.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-paper p-8 text-center">
        <p className="font-display text-xl">Message sent.</p>
        <p className="mt-2 text-sm text-ink/70">Thanks for reaching out — I'll reply from ahmadhashmi04@outlook.com.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="focus-ring mt-2 w-full border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/60"
          placeholder="Jane Smith"
        />
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="focus-ring mt-2 w-full border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/60"
          placeholder="jane@dteenergy.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.08em] text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="focus-ring mt-2 w-full border border-line bg-paper px-4 py-3 text-ink placeholder:text-muted/60"
          placeholder="Let's talk about a full-time role..."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "pending"}
        className="focus-ring w-full bg-copper px-5 py-3.5 font-mono text-[0.8125rem] uppercase tracking-[0.08em] text-paper transition-colors hover:bg-copper-bright disabled:opacity-60"
      >
        {status === "pending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
