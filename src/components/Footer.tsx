import { site } from "@/data/site";
import Year from "./Year";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="font-display text-xl font-semibold">{site.name}</p>
          <p className="text-muted">{site.status}</p>
          <a href={`mailto:${site.email}`} className="mt-2 inline-block text-muted underline underline-offset-4 hover:text-fg">{site.email}</a>
        </div>

        <p className="text-sm text-muted md:col-span-12">&copy; <Year /> {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
