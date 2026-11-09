import { Mail, Phone, GitBranch, Link2, GraduationCap, ExternalLink, User, Wrench, Code, Briefcase, Flag, AtSign } from "lucide-react";
import { site, education, skills, projects, internship, journey } from "@/data/site";

function Card({ id, title, icon, children }: { id: string; title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 rounded-lg border border-line bg-white lg:scroll-mt-20">
      <h2 className="flex items-center gap-2 border-b border-line px-5 py-3 text-base font-semibold">
        <span className="text-muted" aria-hidden>{icon}</span> {title}
      </h2>
      <div className="p-5">{children}</div>
    </section>
  );
}

export function About() {
  return (
    <Card id="about" title="About me" icon={<User size={18} />}>
      <div className="max-w-3xl space-y-4 text-muted">
        <p>I&rsquo;m a third-year student pursuing a Bachelor of Computer Applications at Mangaldai College, Gauhati University. What draws me to Machine Learning is the idea of getting a computer to learn patterns from data instead of being told every rule.</p>
        <p>I&rsquo;ve completed a one-month Machine Learning internship and built my first project, a student performance predictor. I learn best by doing: working with data, seeing where a model falls short, and working out why.</p>
        <p>My goal is to become a Machine Learning expert. I&rsquo;m early on that path and I&rsquo;d rather say so than overstate it. For now I&rsquo;m focused on strong foundations, steady learning, and building projects that are actually useful.</p>
      </div>
    </Card>
  );
}

export function Education() {
  return (
    <Card id="education" title="Education" icon={<GraduationCap size={18} />}>
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-soft text-muted" aria-hidden><GraduationCap size={22} /></div>
        <div>
          <h3 className="font-semibold">{education.degree}</h3>
          <p className="text-muted">{education.college} · {education.university}</p>
          <p className="mt-2"><span className="chip">{education.year}</span></p>
        </div>
      </div>
    </Card>
  );
}

export function Skills() {
  return (
    <Card id="skills" title="Technical skills" icon={<Wrench size={18} />}>
      <p className="mb-5 text-sm text-muted">Tools I use and keep learning as a student. No percentage bars, just an honest list.</p>
      <div className="space-y-5">
        {skills.map((g) => (
          <div key={g.group}>
            <h3 className="mb-2 text-sm font-semibold">{g.group}</h3>
            <ul className="flex flex-wrap gap-2">{g.items.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </Card>
  );
}

const stages = ["Data", "Preprocess", "Features", "Model", "Evaluate"];

function Workflow() {
  return (
    <svg viewBox="0 0 500 90" className="w-full" role="img" aria-label="Workflow: data, preprocessing, features, model, evaluation">
      {stages.map((s, i) => (
        <g key={s}>
          {i > 0 && <line x1={i * 100 - 18} x2={i * 100 + 4} y1="45" y2="45" stroke="#bdc1c6" strokeWidth="2" />}
          <rect x={i * 100 + 4} y="25" width="82" height="40" rx="8" fill="#fff" stroke={i === 3 ? "#20beff" : "#dadce0"} strokeWidth={i === 3 ? 2 : 1} />
          <text x={i * 100 + 45} y="50" textAnchor="middle" fontSize="12" fill="#202124">{s}</text>
        </g>
      ))}
    </svg>
  );
}

export function Projects() {
  return (
    <Card id="projects" title="Projects" icon={<Code size={18} />}>
      <div className="space-y-4">
        {projects.map((p) => (
          <article key={p.title} className="grid overflow-hidden rounded-lg border border-line md:grid-cols-12">
            <div className="flex items-center border-b border-line bg-soft p-4 md:col-span-5 md:border-b-0 md:border-r"><Workflow /></div>
            <div className="p-5 md:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-link">{p.category}</p>
              <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
              <div className="mt-4 flex flex-wrap gap-3">
                {p.repoUrl ? (
                  <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="btn"><GitBranch size={16} /> GitHub repository</a>
                ) : (
                  <span className="btn text-muted" aria-disabled="true">GitHub link coming soon</span>
                )}
                {p.demoUrl && <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><ExternalLink size={16} /> Live demo</a>}
              </div>
            </div>
          </article>
        ))}
        <p className="text-sm text-muted">More projects will be added here as I build them.</p>
      </div>
    </Card>
  );
}

export function Experience() {
  return (
    <Card id="experience" title="Experience" icon={<Briefcase size={18} />}>
      <h3 className="font-semibold">{internship.title}</h3>
      {internship.organization && <p className="text-muted">{internship.organization}</p>}
      <p className="mt-2 flex flex-wrap gap-2"><span className="chip">Duration: {internship.duration}</span><span className="chip">Certificate: {internship.certificate}</span></p>
      <p className="mt-3 max-w-2xl text-sm text-muted">{internship.description}</p>
    </Card>
  );
}

export function Goals() {
  return (
    <Card id="goals" title="Career goals" icon={<Flag size={18} />}>
      <p className="max-w-3xl text-muted">My goal is to develop strong foundations in Machine Learning, improve my problem-solving ability, and eventually build intelligent systems that solve practical problems.</p>
      <p className="mt-5 text-sm font-semibold">Learning path <span className="font-normal text-muted">(goals, not completed achievements)</span></p>
      <ol className="mt-3 grid gap-2 sm:grid-cols-2">
        {journey.map((j, i) => (
          <li key={j} className="flex items-center gap-3 rounded-lg border border-line px-4 py-3 text-sm">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-soft text-xs font-semibold text-muted" aria-hidden>{i + 1}</span>{j}
          </li>
        ))}
      </ol>
    </Card>
  );
}

export function Contact() {
  return (
    <Card id="contact" title="Contact" icon={<AtSign size={18} />}>
      <h3 className="max-w-xl text-2xl font-bold tracking-tight">Have an opportunity or project in mind?</h3>
      <dl className="mt-4 space-y-1 text-sm text-muted">
        <div className="flex gap-2"><dt>Email:</dt><dd><a className="text-link underline underline-offset-2" href={`mailto:${site.email}`}>{site.email}</a></dd></div>
        <div className="flex gap-2"><dt>Phone:</dt><dd><a className="text-link underline underline-offset-2" href={site.phoneHref}>{site.phone}</a></dd></div>
      </dl>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={`mailto:${site.email}`} className="btn btn-primary"><Mail size={16} /> Email Me</a>
        <a href={site.phoneHref} className="btn"><Phone size={16} /> Call</a>
        {site.github && <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn"><GitBranch size={16} /> GitHub</a>}
        {site.linkedin && <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn"><Link2 size={16} /> LinkedIn</a>}
      </div>
    </Card>
  );
}
