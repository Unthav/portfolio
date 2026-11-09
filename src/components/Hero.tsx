import { Download } from "lucide-react";
import { site } from "@/data/site";

// Decorative scatter plot with a fitted line. Illustrative only: no real data.
const points = Array.from({ length: 26 }, (_, i) => {
  const x = 30 + i * 13.5;
  const noise = Math.sin(i * 12.9898) * 28;
  return { x: +x.toFixed(1), y: +(250 - i * 7.6 + noise).toFixed(1) };
});

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden /> {site.status}
          </p>
          <p className="mt-8 text-lg text-muted">Hi, I&rsquo;m {site.name}</p>
          <h1 className="mt-2 text-5xl font-semibold sm:text-6xl lg:text-7xl">Building My Future in Machine Learning.</h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            I&rsquo;m a third-year BCA student at Mangaldai College under Gauhati University, passionate about Machine Learning, Python, and solving real-world problems through technology.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
            {site.resumeUrl && (
              <a href={site.resumeUrl} download className="btn btn-ghost"><Download size={16} /> Resume</a>
            )}
          </div>
        </div>

        <div className="md:col-span-5" aria-hidden>
          <svg viewBox="0 0 400 300" className="w-full rounded-2xl border border-line bg-panel/60 p-2">
            <g stroke="#263049" strokeWidth="1">
              {[60, 120, 180, 240].map((y) => <line key={y} x1="20" x2="385" y1={y} y2={y} />)}
              <line x1="20" x2="385" y1="280" y2="280" stroke="#3a4668" />
              <line x1="20" x2="20" y1="20" y2="280" stroke="#3a4668" />
            </g>
            {points.map((p) => <circle key={p.x} cx={p.x} cy={p.y} r="4" fill="#a78bfa" opacity=".85" />)}
            <path className="draw" d="M30 252 L375 66" stroke="#7a97ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
