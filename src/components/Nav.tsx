"use client";
import { useEffect, useState } from "react";
import {
  House,
  User,
  GraduationCap,
  Wrench,
  Code,
  Briefcase,
  Flag,
  Mail,
} from "lucide-react";

const items = [
  { id: "home", label: "Home", Icon: House },
  { id: "about", label: "About", Icon: User },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "skills", label: "Skills", Icon: Wrench },
  { id: "projects", label: "Projects", Icon: Code },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "goals", label: "Goals", Icon: Flag },
  { id: "contact", label: "Contact", Icon: Mail },
];

function useHomeOnRefresh() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, []);
}

function useActive() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px",
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

export function Sidebar() {
  useHomeOnRefresh();
  const active = useActive();

  return (
    <nav
      aria-label="Primary"
      className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-56 shrink-0 border-r border-line px-3 py-4 lg:block"
    >
      <ul className="space-y-1">
        {items.map(({ id, label, Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`flex items-center gap-3 rounded-full px-4 py-2 text-sm ${
                active === id
                  ? "bg-soft font-semibold text-fg"
                  : "text-muted hover:bg-soft hover:text-fg"
              }`}
            >
              <Icon size={18} aria-hidden />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function MobileTabs() {
  useHomeOnRefresh();
  const active = useActive();

  return (
    <nav
      aria-label="Sections"
      className="sticky top-14 z-40 overflow-x-auto border-b border-line bg-white lg:hidden"
    >
      <ul className="flex min-w-max px-2">
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`block border-b-2 px-3 py-2.5 text-sm ${
                active === id
                  ? "border-accent font-semibold text-fg"
                  : "border-transparent text-muted"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
