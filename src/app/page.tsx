"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { name: "HTML5", emoji: "🌐" },
  { name: "CSS3", emoji: "🎨" },
  { name: "JavaScript", emoji: "⚡" },
  { name: "TypeScript", emoji: "🔷" },
  { name: "React", emoji: "⚛️" },
  { name: "Next.js", emoji: "▲" },
  { name: "Tailwind CSS", emoji: "💨" },
  { name: "Python", emoji: "🐍" },
  { name: "Machine Learning", emoji: "🤖" },
  { name: "Prompt Engineering", emoji: "💬" },
  { name: "Git & GitHub", emoji: "🐙" },
  { name: "Problem Solving", emoji: "🧩" },
];

const PROJECTS = [
  {
    title: "StudyBuddy Planner",
    emoji: "📚",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
    description:
      "A responsive study planner for university students with task tracking, deadline reminders, and a clean weekly timetable view.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "AI Notes Summarizer",
    emoji: "🧠",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    description:
      "A small AI-powered tool that turns long lecture notes into short, easy-to-revise summaries and key-point lists.",
    tech: ["Python", "NLP", "React"],
  },
  {
    title: "Campus Events Hub",
    emoji: "🎓",
    gradient: "from-sky-400 via-blue-600 to-slate-900",
    description:
      "A landing page and event listing site for university societies, featuring category filters, event cards, and a simple RSVP form.",
    tech: ["Next.js", "Tailwind CSS", "Responsive UI"],
  },
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen scroll-smooth bg-[#0a1128] text-slate-200 antialiased">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-blue-500/10 bg-[#0a1128]/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a
            href="#home"
            className="text-xl font-extrabold tracking-tight text-white transition hover:text-blue-400"
          >
            Narmeen<span className="text-blue-500">.</span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-slate-300 transition hover:text-blue-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="rounded-xl border border-blue-500/30 p-2 text-blue-400 transition hover:bg-blue-500/10 md:hidden"
          >
            <span className="block text-xl leading-none">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </nav>

        {menuOpen && (
          <ul className="flex flex-col gap-1 border-t border-blue-500/10 bg-[#0a1128] px-5 pb-4 pt-2 md:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-slate-300 transition hover:bg-blue-500/10 hover:text-blue-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main>
        {/* HERO */}
        <section
          id="home"
          className="relative overflow-hidden px-5 pb-24 pt-20 sm:pt-28"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/30 blur-[120px]" />
          <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-indigo-600/20 blur-[100px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 text-5xl shadow-2xl shadow-blue-500/30 ring-4 ring-blue-500/20">
              👩‍💻
            </div>
            <p className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
              👋 Welcome to my portfolio
            </p>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Narmeen Fatima
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
              Aspiring web developer &amp; AI enthusiast crafting clean,
              responsive and intelligent digital experiences.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#projects"
                className="w-full rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/40 sm:w-auto"
              >
                View My Work 🚀
              </a>
              <a
                href="#contact"
                className="w-full rounded-2xl border border-blue-500/40 px-8 py-4 font-semibold text-blue-400 transition duration-300 hover:-translate-y-1 hover:bg-blue-500/10 sm:w-auto"
              >
                Contact Me ✉️
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              About <span className="text-blue-500">Me</span>
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-5">
              <div className="rounded-3xl border border-blue-500/10 bg-[#101b3d] p-8 shadow-xl shadow-black/30 md:col-span-3">
                <p className="leading-relaxed text-slate-300">
                  I&apos;m a BS student at the{" "}
                  <span className="font-semibold text-blue-400">
                    University of Sargodha
                  </span>{" "}
                  with a growing passion for building things on the web. I
                  started with simple HTML pages and have since moved on to
                  modern tools like Next.js, TypeScript and Tailwind CSS.
                </p>
                <p className="mt-4 leading-relaxed text-slate-300">
                  Alongside web development, I&apos;m exploring artificial
                  intelligence, from Python basics to machine learning
                  concepts, because I believe the future of the web is smart,
                  fast and accessible to everyone. When I&apos;m not coding,
                  you&apos;ll find me reading tech blogs or helping classmates
                  debug their projects.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 md:col-span-2">
                {[
                  { n: "10+", l: "Mini Projects", e: "🛠️" },
                  { n: "2+", l: "Years Learning", e: "📅" },
                  { n: "5+", l: "Certificates", e: "🏅" },
                  { n: "∞", l: "Curiosity", e: "🔭" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-3xl border border-blue-500/10 bg-[#101b3d] p-5 text-center shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
                  >
                    <div className="text-3xl">{s.e}</div>
                    <div className="mt-2 text-3xl font-extrabold text-blue-400">
                      {s.n}
                    </div>
                    <div className="text-sm text-slate-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              My <span className="text-blue-500">Skills</span>
            </h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              Technologies and tools I&apos;m using and learning every day.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
              {SKILLS.map((skill) => (
                <span
                  key={skill.name}
                  className="cursor-default rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-300 shadow-md shadow-black/20 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-600 hover:text-white hover:shadow-blue-500/30 sm:text-base"
                >
                  <span className="mr-2">{skill.emoji}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="px-5 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              Featured <span className="text-blue-500">Projects</span>
            </h2>
            <p className="mt-4 max-w-2xl text-slate-400">
              A few things I&apos;ve built while learning and experimenting.
            </p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <article
                  key={p.title}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-blue-500/10 bg-[#101b3d] shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-blue-500/20"
                >
                  <div
                    className={`flex h-44 items-center justify-center bg-gradient-to-br ${p.gradient} text-6xl`}
                  >
                    <span className="transition duration-300 group-hover:scale-125">
                      {p.emoji}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-white">{p.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-400 transition-all hover:gap-3 hover:text-blue-300"
                    >
                      Learn more <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-5 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-4xl font-extrabold text-white sm:text-5xl">
              Get In <span className="text-blue-500">Touch</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-slate-400">
              Have a project idea, internship opportunity, or just want to say
              hello? Send me a message and I&apos;ll get back to you soon.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5 rounded-3xl border border-blue-500/10 bg-[#101b3d] p-6 shadow-2xl shadow-black/40 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-blue-500/20 bg-[#0a1128] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-blue-500/20 bg-[#0a1128] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your idea..."
                  className="w-full resize-none rounded-xl border border-blue-500/20 bg-[#0a1128] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/40"
              >
                Send Message 📨
              </button>
              {sent && (
                <p className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-center text-sm font-medium text-green-400">
                  ✅ Thanks for reaching out! Your message has been sent.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-blue-500/10 px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Narmeen Fatima. Built with Next.js
            &amp; Tailwind CSS 💙
          </p>
          <div className="flex gap-3 text-xl">
            {["🐙", "💼", "🐦", "📧"].map((icon) => (
              <a
                key={icon}
                href="#home"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-500/20 bg-[#101b3d] transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}