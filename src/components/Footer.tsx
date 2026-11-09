import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-line">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-6 text-sm text-muted">
        <p>© Bishal Deka {new Date().getFullYear()}</p>

        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-fg"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
