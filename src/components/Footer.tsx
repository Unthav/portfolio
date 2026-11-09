import { site } from "@/data/site";
import Year from "./Year";

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-sm text-muted">
        <p><span className="font-semibold text-fg">{site.name}</span> · {site.status}</p>
        <p>&copy; <Year /> {site.name}</p>
      </div>
    </footer>
  );
}
