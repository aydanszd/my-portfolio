import { experience } from "../const/data";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Journey" title="Experience" />

      <div className="grid gap-5 md:grid-cols-2">
        {experience.map((e) => (
          <div
            key={e.title + e.period}
            className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/60"
          >
            <p className="text-xs font-medium tracking-wide text-accent uppercase">{e.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-text">{e.title}</h3>
            <p className="text-sm text-text-muted">{e.company}</p>
            <ul className="mt-4 space-y-2">
              {e.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}