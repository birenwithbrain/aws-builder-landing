"use client";

import { ArrowRight, CheckCircle2, ExternalLink, Globe2, Menu, ShieldCheck, Sparkles, X, Zap } from "lucide-react";
import { FormEvent, useState } from "react";

const BITLY_URL = "YOUR_BITLY_LINK_HERE";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Connect this form to Google Sheets / your preferred form endpoint.
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight text-slate-950">
          <span className="grid size-9 place-items-center rounded-xl bg-blue-700 text-sm font-bold text-white shadow-sm">BS</span>
          <span>AWS Builder Center</span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <a href="#register" className="transition hover:text-blue-700">Register</a>
          <a href="#details" className="transition hover:text-blue-700">Your details</a>
          <a href="#why" className="transition hover:text-blue-700">Why join?</a>
        </div>
        <button aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-slate-700 md:hidden">
          {menuOpen ? <X size={21}/> : <Menu size={21}/>} 
        </button>
      </nav>

      {menuOpen && <div className="mx-5 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm md:hidden">
        {[['#register','Register'],['#details','Your details'],['#why','Why join?']].map(([href,label]) => <a key={href} onClick={() => setMenuOpen(false)} href={href} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">{label}</a>)}
      </div>}

      <section id="top" className="relative isolate px-5 pb-20 pt-12 sm:px-8 sm:pt-20">
        <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[radial-gradient(circle_at_50%_15%,rgba(59,130,246,.18),transparent_42%),linear-gradient(#f8fafc,#f8fafc)]" />
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur">
            <Sparkles size={14} /> AWS Builder community
          </div>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-7xl">Build. Learn. Connect.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">Join the AWS Builder community and connect with builders, resources, and learning opportunities.</p>
          <div id="register" className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={BITLY_URL} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 sm:w-auto">Register on AWS <ExternalLink size={16}/></a>
            <a href="#details" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 sm:w-auto">I already registered <ArrowRight size={16}/></a>
          </div>
          <p className="mt-4 text-xs text-slate-500">Registration takes place on AWS Builder Center.</p>
        </div>
      </section>

      <section id="details" className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold text-blue-700">Already registered?</span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Share your Builder details.</h2>
            <p className="mt-4 max-w-md leading-7 text-slate-600">Enter your name and Builder Center alias after completing the registration. This form does not perform or verify the AWS registration itself.</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500"><ShieldCheck size={18} className="text-blue-600"/> Your details are collected separately from AWS registration.</div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_70px_-35px_rgba(15,23,42,.35)] sm:p-8">
            {submitted ? <div className="py-12 text-center"><CheckCircle2 className="mx-auto size-12 text-blue-700"/><h3 className="mt-4 text-xl font-semibold text-slate-950">Details submitted</h3><p className="mt-2 text-sm text-slate-500">We have received your details.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-6 text-sm font-semibold text-blue-700 hover:text-blue-800">Submit another response</button></div> : <>
              <label className="block text-sm font-semibold text-slate-800">Your name<input required name="name" placeholder="Enter your name" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"/></label>
              <label className="mt-5 block text-sm font-semibold text-slate-800">Builder Center alias<input required name="alias" placeholder="Enter your alias / username" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"/></label>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">Submit details <ArrowRight size={16}/></button>
            </>}
          </form>
        </div>
      </section>

      <section id="why" className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl"><span className="text-sm font-semibold text-blue-700">Why join?</span><h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">A place to keep building.</h2></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[{icon:Zap,title:'Learn',text:'Explore learning resources and grow your cloud skills.'},{icon:Globe2,title:'Connect',text:'Meet builders and become part of a global community.'},{icon:Sparkles,title:'Build',text:'Turn ideas into projects and keep experimenting.'}].map(({icon:Icon,title,text}) => <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><div className="grid size-10 place-items-center rounded-xl bg-blue-50 text-blue-700"><Icon size={19}/></div><h3 className="mt-5 font-semibold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>)}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>AWS Builder Center</span><span>aws.birendrasasmal.in</span></div></footer>
    </main>
  );
}
