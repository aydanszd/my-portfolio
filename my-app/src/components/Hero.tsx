import { profile, skills } from "../const/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0 h-[640px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-16 md:grid-cols-2 md:pt-24 md:pb-24">
        <div>
          <p className="mb-4 flex items-center gap-2 text-2xl text-text-muted">
            Hello
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </p>
          <p className="text-[20px] text-text-muted md:text-3xl">
            I&apos;m {profile.firstName}
          </p>
          <h1 className="mt-1 text-4xl leading-[1.1] font-bold tracking-tight text-text md:text-4xl">
            {profile.role}
          </h1>

          <p className="mt-6 max-w-md text-text-muted text-2xl">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-[#1a0b06]"
            >
              Got a project?
            </a>

            <a
              href={profile.cvUrl}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-text-muted"
            >
              My resume
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-xl text-text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {profile.status}
          </p>
        </div>
        <div className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-96 md:w-96">
          <div className="spin-slow absolute inset-0 rounded-full border border-dashed border-border" />
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-accent/30 via-accent/10 to-transparent" />
          <div className="float-slow relative flex h-56 w-56 items-center justify-center rounded-full border border-border bg-surface shadow-2xl md:h-72 md:w-72">
            <img
              src="/hero.png"
              alt="Hero"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-8 py-8 text-xl text-text-muted md:justify-between">
          {skills.map((s) => (
            <span key={s} className="transition-colors hover:text-text">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}