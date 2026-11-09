import { Mail, Phone, GitBranch, Link2, GraduationCap, ExternalLink } from "lucide-react";
import { site, education, skills, projects, internship, journey } from "@/data/site";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-12">
        <h2 className="text-3xl font-semibold md:col-span-4 md:sticky md:top-24 md:self-start">{title}</h2>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About me">
      <div className="max-w-2xl space-y-5 text-lg text-muted">
        <p>
          I&rsquo;m a third-year student pursuing a Bachelor of Computer Applications at Mangaldai College, Gauhati University. What draws me to Machine Learning is the idea of getting a computer to learn patterns from data instead of being told every rule.
        </p>
        <p>
          I&rsquo;ve completed a one-month Machine Learning internship and built my first project, a student performance predictor. I learn best by doing: working with data, seeing where a model falls short, and working out why.
        </p>
        <p>
          My goal is to become a Machine Learning expert. I&rsquo;m early on that path and I&rsquo;d rather say so than overstate it. For now I&rsquo;m focused on strong foundations, steady learning, and building projects that are actually useful.
        </p>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex gap-4 rounded-2xl border border-line bg-panel/60 p-6">
        <GraduationCap className="mt-1 shrink-0 text-accent" />
        <div>
          <h3 className="text-xl font-semibold">{education.degree}</h3>
          <p className="mt-1 text-muted">{education.college}</p>
          <p className="text-muted">{education.university}</p>
          <p className="mt-3 inline-block rounded-full border border-line px-3 py-1 text-sm">{education.year}</p>
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <p className="mb-8 max-w-xl text-muted">The tools I use and keep learning as a student. I&rsquo;m not rating myself with percentages.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.group} className="rounded-2xl border border-line bg-panel/60 p-5 first:sm:col-span-2">
            <h3 className="text-lg font-semibold">{g.group}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-md border border-line px-3 py-1 text-sm text-muted">{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

const stages = ["Data", "Preprocess", "Features", "Model", "Evaluate"];

function Workflow() {
  return (
    <svg viewBox="0 0 500 90" className="w-full" role="img" aria-label="Workflow: data, preprocessing, features, model, evaluation">
      {stages.map((s, i) => (
        <g key={s}>
          {i > 0 && <line x1={i * 100 - 18} x2={i * 100 + 4} y1="45" y2="45" stroke="#3a4668" strokeWidth="2" />}
          <rect x={i * 100 + 4} y="25" width="82" height="40" rx="8" fill="#0d1220" stroke={i === 3 ? "#7a97ff" : "#3a4668"} />
          <text x={i * 100 + 45} y="50" textAnchor="middle" fontSize="12" fill="#e8ecf7">{s}</text>
        </g>
      ))}
    </svg>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-6">
        {projects.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-2xl border border-line bg-panel/60">
            <div className="border-b border-line bg-ink/60 p-6"><Workflow /></div>
            <div className="p-6">
              <p className="text-sm text-accent">{p.category}</p>
              <h3 className="mt-1 text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 max-w-2xl text-muted">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => <li key={t} className="rounded-md border border-line px-2.5 py-0.5 text-sm text-muted">{t}</li>)}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.repoUrl ? (
                  <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><GitBranch size={16} /> GitHub repository</a>
                ) : (
                  <span className="btn text-muted" aria-disabled="true">GitHub link coming soon</span>
                )}
                {p.demoUrl && (
                  <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary"><ExternalLink size={16} /> Live demo</a>
                )}
              </div>
            </div>
          </article>
        ))}
        <p className="text-sm text-muted">More projects will be added here as I build them.</p>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="rounded-2xl border border-line bg-panel/60 p-6">
        <h3 className="text-xl font-semibold">{internship.title}</h3>
        {internship.organization && <p className="text-muted">{internship.organization}</p>}
        <p className="mt-2 text-sm text-muted">Duration: {internship.duration} &nbsp;|&nbsp; Certificate: {internship.certificate}</p>
        <p className="mt-4 max-w-2xl text-muted">{internship.description}</p>
      </div>
    </Section>
  );
}

export function Goals() {
  return (
    <Section id="goals" title="Career goals">
      <p className="max-w-2xl text-lg text-muted">
        My goal is to develop strong foundations in Machine Learning, improve my problem-solving ability, and eventually build intelligent systems that solve practical problems.
      </p>
      <p className="mt-8 text-sm text-muted">Learning path (goals, not completed achievements)</p>
      <ol className="mt-4 border-l border-line">
        {journey.map((j, i) => (
          <li key={j} className="relative py-3 pl-8">
            <span className="absolute -left-[9px] top-[1.15rem] h-4 w-4 rounded-full border-2 border-accent bg-ink" aria-hidden />
            <span className="mr-3 text-sm text-muted">Step {i + 1}</span>{j}
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <h3 className="max-w-xl text-3xl font-semibold sm:text-4xl">Have an opportunity or project in mind?</h3>
      <dl className="mt-6 space-y-1 text-muted">
        <div className="flex gap-2"><dt>Email:</dt><dd><a className="text-fg underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a></dd></div>
        <div className="flex gap-2"><dt>Phone:</dt><dd><a className="text-fg underline underline-offset-4" href={site.phoneHref}>{site.phone}</a></dd></div>
      </dl>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${site.email}`} className="btn btn-primary"><Mail size={16} /> Email Me</a>
        <a href={site.phoneHref} className="btn btn-ghost"><Phone size={16} /> Call</a>
        {site.github && <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><GitBranch size={16} /> GitHub</a>}
        {site.linkedin && <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Link2 size={16} /> LinkedIn</a>}
      </div>
    </Section>
  );
}
