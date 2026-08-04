import { profile } from "../../const/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-text-muted md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}