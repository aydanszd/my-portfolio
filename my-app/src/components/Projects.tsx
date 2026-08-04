import Image from "next/image";
import { projects } from "../const/data";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="My Work" title="Projects" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/60"
          >
            <div className="relative h-40 w-full overflow-hidden">
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div
                  className="flex h-full items-center justify-center text-4xl font-bold text-white/90"
                  style={{
                    background: `linear-gradient(135deg, ${p.accent}, ${p.accent}33)`,
                  }}
                >
                  {p.slug}
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-text">
                {p.name}
              </h3>

              <p className="mt-2 text-sm text-text-muted">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-4 pt-5 text-sm">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:underline"
                >
                  View ↗
                </a>

                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-text"
                  >
                    Code ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}