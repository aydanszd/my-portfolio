import { skills } from "../const/data";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading eyebrow="Tools" title="Skills" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((s) => (
          <div
            key={s}
            className="group rounded-xl border border-border bg-surface px-5 py-6 text-center transition-colors hover:border-accent"
          >
            <p className="font-medium text-text">{s}</p>
            <div className="mx-auto mt-3 h-0.5 w-6 rounded-full bg-border transition-colors group-hover:bg-accent" />
          </div>
        ))}
      </div>
    </section>
  );
}