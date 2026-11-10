
import { site } from "@/data/site";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b border-line bg-white">
      <div className="mx-auto flex h-full max-w-7xl items-center px-4">
        <a href="#home" className="flex items-center gap-2.5 font-bold">
          <span
            className="grid h-8 w-8 place-items-center rounded-md bg-accent text-fg"
            aria-hidden="true"
          >
            B
          </span>
          <span>{site.name}</span>
        </a>
      </div>
    </header>
  );
}
