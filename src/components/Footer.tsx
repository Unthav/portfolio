import { site } from "@/data/site";
import Year from "./Year";

const links = [
  { label: "Instagram", href: site.instagram },
].filter((l): l is { label: string; href: string } => Boolean(l.href));

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-sm text-muted">
        <p><span className="font-semibold text-fg">{site.name}</span> · {site.status}</p>
        <ul className="flex flex-wrap gap-5">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-fg">{l.label}</a>
            </li>
          ))}
        </ul>
        <p>&copy; <Year /> {site.name}</p>
      </div>
    </footer>
  );
}
