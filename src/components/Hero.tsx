import { Download } from "lucide-react";
import { site, projects } from "@/data/site";

// Decorative scatter plot with a fitted line. Illustrative only: no real data.
const points = Array.from({ length: 26 }, (_, i) => ({
  x: +(30 + i * 13.5).toFixed(1),
  y: +(250 - i * 7.6 + Math.sin(i * 12.9898) * 28).toFixed(1),
}));

const stats = [
  { label: "Degree", value: "BCA · Year 3" },
  { label: "Internship", value: "ML · 1 month" },
  { label: "Projects", value: String(projects.length) },
  { label: "Main language", value: "Python" },
];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-28 overflow-hidden rounded-lg border border-line lg:scroll-mt-20">
      <div className="h-20 bg-gradient-to-r from-[#d9f3ff] to-[#ece8ff] sm:h-24" aria-hidden />
      <div className="grid gap-8 px-5 pb-8 md:grid-cols-12 md:px-8">
        <div className="md:col-span-7">
          <div className="-mt-10 grid h-20 w-20 place-items-center rounded-full border-4 border-white bg-fg text-2xl font-bold text-white" aria-hidden>BD</div>
          <p className="mt-4 text-muted">Hi, I&rsquo;m {site.name}</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Building My Future in <span className="mark">Machine Learning.</span></h1>
          <p className="mt-3"><span className="chip">{site.status}</span></p>
          <p className="mt-4 max-w-xl text-muted">
            I&rsquo;m a third-year BCA student at Mangaldai College under Gauhati University, passionate about Machine Learning, Python, and solving real-world problems through technology.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href="#contact" className="btn">Contact Me</a>
            {site.resumeUrl && <a href={site.resumeUrl} download className="btn"><Download size={16} /> Resume</a>}
          </div>
        </div>
        <div className="self-end md:col-span-5" aria-hidden>
          <svg viewBox="0 0 400 300" className="w-full rounded-lg border border-line bg-soft p-2">
            <g stroke="#e3e6ea" strokeWidth="1">
              {[60, 120, 180, 240].map((y) => <line key={y} x1="20" x2="385" y1={y} y2={y} />)}
              <line x1="20" x2="385" y1="280" y2="280" stroke="#bdc1c6" />
              <line x1="20" x2="20" y1="20" y2="280" stroke="#bdc1c6" />
            </g>
            {points.map((p) => <circle key={p.x} cx={p.x} cy={p.y} r="4" fill="#8b6cf0" opacity=".8" />)}
            <path className="draw" d="M30 252 L375 66" stroke="#0b9bd6" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <dl className="grid grid-cols-2 border-t border-sun-line bg-sun sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-b border-r border-sun-line px-5 py-3 last:border-r-0 sm:border-b-0">
            <dt className="text-xs uppercase tracking-wide text-muted">{s.label}</dt>
            <dd className="font-semibold">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
