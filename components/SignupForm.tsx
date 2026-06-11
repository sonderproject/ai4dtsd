"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const ROLES = ["Owner", "Executive", "Manager", "Other"];

export default function SignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessName: "",
    role: "",
    timeSink: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent/30 bg-surface-card p-8 text-center shadow-md sm:p-10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
          <svg
            className="h-7 w-7 text-accent"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-semibold text-navy">
          You&apos;re on the list
        </h3>
        <p className="mt-2 text-base text-slate-600">
          We&apos;ll email you the date first.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-navy placeholder:text-slate-400 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/25";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-surface-card p-6 shadow-md sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Jane Doe"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="jane@business.com"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="businessName" className="mb-1.5 block text-sm font-semibold text-navy">
            Business Name <span className="text-accent">*</span>
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            autoComplete="organization"
            value={form.businessName}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Your business"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="role" className="mb-1.5 block text-sm font-semibold text-navy">
            Role <span className="text-accent">*</span>
          </label>
          <select
            id="role"
            name="role"
            required
            value={form.role}
            onChange={handleChange}
            className={`${inputClasses} appearance-none bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230e7490' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
            }}
          >
            <option value="" disabled>
              Select your role
            </option>
            {ROLES.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="timeSink" className="mb-1.5 block text-sm font-semibold text-navy">
            What&apos;s the biggest time-sink in your business?
          </label>
          <input
            id="timeSink"
            name="timeSink"
            type="text"
            value={form.timeSink}
            onChange={handleChange}
            className={inputClasses}
            placeholder="e.g. scheduling, invoicing, customer emails…"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-lg bg-accent px-6 py-3.5 text-base font-bold text-white transition hover:bg-accent-ink focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-card disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Reserving…" : "Reserve Your Spot — Free"}
      </button>

      <p className="mt-4 text-center text-xs text-slate-500">
        Your info is only used for event updates.
      </p>
    </form>
  );
}
