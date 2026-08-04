export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <p className="mb-3 font-mono text-xs tracking-[0.25em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-14 rounded-full bg-accent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}