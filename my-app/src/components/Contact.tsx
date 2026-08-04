import { profile } from "../const/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="dot-grid-safe relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center md:px-16">
        <p className="relative z-10 mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          Contact
        </p>

        <h2 className="relative z-10 text-3xl font-bold tracking-tight text-text md:text-5xl">
          Got a project?
          <br />
          Let&apos;s talk.
        </h2>

        <p className="relative z-10 mx-auto mt-5 max-w-xl text-text-muted">
          Feel free to reach out for collaboration, project inquiries, or just
          to say hello — I typically respond quickly.
        </p>

        <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="relative z-10 whitespace-nowrap rounded-full bg-accent px-7 py-3 text-xl font-medium text-[#1a0b06] opacity-100 shadow-lg transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
          </a>

          <a
            href="https://github.com/aydanszd"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 whitespace-nowrap rounded-full border border-border px-7 py-3 text-xl font-medium text-text transition-colors hover:border-text-muted"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/aydan-abbaszade-08214838b?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 whitespace-nowrap rounded-full border border-border px-7 py-3 text-xl font-medium text-text transition-colors hover:border-text-muted"
          >
            LinkedIn ↗
          </a>
        </div>

        <p className="relative z-10 mt-8 text-xl text-text-muted">
          {profile.location} · {profile.phone}
        </p>
      </div>
    </section>
  );
}