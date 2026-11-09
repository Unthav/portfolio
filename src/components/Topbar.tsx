import { GitBranch, Link2, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-50 h-14 border-b border-line bg-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-2.5 font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-accent text-fg" aria-hidden>B</span>
          <span>{site.name}</span>
        </a>
        <div className="flex items-center gap-1">
          {site.github && (
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="rounded-full p-2 text-muted hover:bg-soft hover:text-fg"><GitBranch size={20} /></a>
          )}
          {site.linkedin && (
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="rounded-full p-2 text-muted hover:bg-soft hover:text-fg"><Link2 size={20} /></a>
          )}
          <a href={`mailto:${site.email}`} className="btn btn-primary ml-2"><Mail size={16} /> Email Me</a>
        </div>
      </div>
    </header>
  );
}
