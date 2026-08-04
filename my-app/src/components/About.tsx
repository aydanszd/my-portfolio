import { profile, services, stats, type Service } from "../const/data";
import SectionHeading from "./SectionHeading";

function ServiceIcon({ icon }: { icon: Service["icon"] }) {
    const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" };
    if (icon === "code") {
        return (
            <svg {...common}>
                <path d="M8 7 3 12l5 5M16 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
    if (icon === "app") {
        return (
            <svg {...common}>
                <rect x="6" y="2.5" width="12" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M11 18.5h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        );
    }
    return (
        <svg {...common}>
            <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
            <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="6.5" cy="7" r="1" fill="currentColor" />
            <circle cx="6.5" cy="17" r="1" fill="currentColor" />
        </svg>
    );
}

export default function About() {
    return (
        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
            <SectionHeading eyebrow="What I Do" title="About" />

            <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
                {/* services list */}
                <ul className="space-y-6 border-l border-border pl-6">
                    {services.map((s, i) => (
                        <li key={s.title} className="relative">
                            <span
                                className={`absolute top-1.5 -left-[29px] h-3 w-3 rounded-full border-2 border-bg ${i === 1 ? "bg-accent" : "bg-border"
                                    }`}
                            />
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 text-accent">
                                    <ServiceIcon icon={s.icon} />
                                </span>
                                <div>
                                    <p className="font-medium text-text">{s.title}</p>
                                    <p className="mt-1 text-sm text-text-muted">{s.description}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                {/* description + stats */}
                <div>
                    <p className="text-lg leading-relaxed text-text-muted">{profile.about}</p>

                    <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <p className="text-2xl font-bold text-text md:text-3xl">
                                    {s.value}
                                    <span className="text-accent">{s.suffix}</span>
                                </p>
                                <p className="mt-1 text-xs text-text-muted md:text-sm">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}