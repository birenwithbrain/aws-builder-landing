"use client";

import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Loader2,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { FormEvent, useState } from "react";

const BITLY_URL = "https://birendrasasmal.in";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const alias = String(formData.get("alias") || "").trim();

    if (!name || !alias) return;

    setSubmitting(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          alias,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      {/* NAVBAR */}
      <nav className="relative z-50 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 font-semibold tracking-tight"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-blue-700 text-sm font-bold text-white shadow-lg shadow-blue-700/20">
            BS
          </span>

          <span className="text-[15px] sm:text-base">
            AWS Builder Community
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a
            href="#register"
            className="transition-colors hover:text-blue-700"
          >
            Register
          </a>

          <a
            href="#details"
            className="transition-colors hover:text-blue-700"
          >
            Your details
          </a>

          <a
            href="#why"
            className="transition-colors hover:text-blue-700"
          >
            Why join?
          </a>

          <a
            href="#details"
            className="rounded-lg bg-slate-950 px-4 py-2.5 text-white shadow-sm transition hover:bg-blue-700"
          >
            Get started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-sm md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="relative z-40 mx-5 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl md:hidden">
          {[
            ["#register", "Register"],
            ["#details", "Your details"],
            ["#why", "Why join?"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-700"
            >
              {label}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section
        id="top"
        className="relative isolate px-5 pb-24 pt-14 sm:px-8 sm:pb-28 sm:pt-20"
      >
        {/* Background */}
        <div className="absolute inset-x-0 top-0 -z-10 h-[650px] overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.14),transparent_42%)]" />
        </div>

        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur">
            <Sparkles size={14} />
            AWS Builder community
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-balance text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
            Build.
            <span className="text-blue-700"> Learn.</span>
            <br className="hidden sm:block" />
            Connect.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Join the AWS Builder community and connect with builders,
            resources, and learning opportunities.
          </p>

          {/* CTA */}
          <div
            id="register"
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={BITLY_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-700/20 transition hover:bg-blue-800 hover:shadow-blue-700/30 sm:w-auto"
            >
              Register on AWS
              <ExternalLink
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#details"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700 sm:w-auto"
            >
              I already registered
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck size={14} className="text-blue-600" />
            Registration takes place on AWS Builder Center
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section id="details" className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold text-blue-700">
              Already registered?
            </span>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Share your Builder details.
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              Enter your name and Builder Center alias after completing the
              registration.
            </p>

            <div className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-500">
              <ShieldCheck
                size={18}
                className="mt-0.5 shrink-0 text-blue-600"
              />

              <span>
                Your details are collected separately from the AWS
                registration.
              </span>
            </div>
          </div>

          {/* FORM CARD */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.35)] sm:p-8"
          >
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto grid size-14 place-items-center rounded-full bg-blue-50">
                  <CheckCircle2 className="size-7 text-blue-700" />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  Details submitted
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Your Builder details have been received successfully.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <>
                <label className="block text-sm font-semibold text-slate-800">
                  Your name

                  <input
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </label>

                <label className="mt-5 block text-sm font-semibold text-slate-800">
                  Builder Center alias

                  <input
                    required
                    name="alias"
                    autoComplete="username"
                    placeholder="Enter your alias / username"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit details
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                  This form does not perform or verify the AWS registration
                  itself.
                </p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* WHY JOIN */}
      <section id="why" className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <span className="text-sm font-semibold text-blue-700">
            Why join?
          </span>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            A place to keep building.
          </h2>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Learn",
                text: "Explore learning resources and grow your cloud skills.",
              },
              {
                icon: Globe2,
                title: "Connect",
                text: "Meet builders and become part of a global community.",
              },
              {
                icon: Sparkles,
                title: "Build",
                text: "Turn ideas into projects and keep experimenting.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="grid size-11 place-items-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  <Icon size={19} />
                </div>

                <h3 className="mt-5 font-semibold">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>AWS Builder Community</span>
          <span>aws.birendrasasmal.in</span>
        </div>
      </footer>
    </main>
  );
}