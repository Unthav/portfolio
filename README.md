# Bishal Deka: Portfolio

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Lucide icons. No backend, database, analytics or API keys.

**Edit everything in one file:** `src/data/site.ts` (profile, links, skills, projects, internship, learning path).

## 1. Run locally on Windows
1. Install Node.js LTS (20.9 or newer) from https://nodejs.org and Git from https://git-scm.com.
2. Open PowerShell in this folder:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000.
4. Before deploying: `npm run typecheck`, `npm run build`, `npm audit`.

## 2. Upload to GitHub
1. Create an empty repository at https://github.com/new (e.g. `portfolio`). Do not add a README there.
2. In PowerShell inside this folder:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
   git push -u origin main
   ```
   `.gitignore` already excludes `node_modules`, `.next` and `.env*`.

## 3. Deploy on Vercel (free Hobby plan)
1. Sign in at https://vercel.com with your GitHub account.
2. Add New → Project → import your `portfolio` repo. Next.js is detected automatically; keep the defaults.
3. Deploy. You get a free `https://your-project.vercel.app` URL with HTTPS.
4. Optional: in Project Settings → Environment Variables add `NEXT_PUBLIC_SITE_URL` = your final URL (used for sitemap and social metadata), then redeploy.
Every `git push` to `main` redeploys automatically.

## 4. Information you still need to provide
- GitHub profile URL → `site.github`
- LinkedIn URL → `site.linkedin`
- Resume PDF → put in `/public/resume.pdf`, set `site.resumeUrl = "/resume.pdf"`
- Project repository URL → `projects[0].repoUrl`; live demo URL only if one exists → `demoUrl`
- Internship organization name (optional) → `internship.organization`
- Optional: social preview image (`src/app/opengraph-image.png`, 1200×630)

Until you add them, those buttons stay hidden or show "coming soon". Nothing is invented.
