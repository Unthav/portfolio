"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#home" className="font-display text-lg font-semibold">{site.name}</a>
        <ul className="hidden gap-7 text-sm text-muted md:flex">
          {nav.slice(1).map((n) => (
            <li key={n.href}><a href={n.href} className="hover:text-fg">{n.label}</a></li>
          ))}
        </ul>
        <button
          className="rounded p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-ink px-5 py-3 md:hidden">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)} className="block py-2.5 text-muted hover:text-fg">{n.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
