# Marcus Hansen — Personal Resume Site

**Project:** HWS (hansenwebservices.com)
**Type:** Single-page personal resume/portfolio site. Sole purpose: market Marcus Hansen for a full-time engineering role.
**Framework:** Next.js 16 (App Router, static export via `output: 'export'`) + React 19 + Tailwind CSS 4 + framer-motion
**Deployment:** AWS Amplify (builds `out/` per `amplify.yml`), domain hansenwebservices.com
**History:** This repo previously hosted the Hansen Web Services GEO agency site (audit tool, blog, pricing, Luminary demo). All of that was stripped in July 2026 and rebuilt as a resume site. Old code is in git history if ever needed.

## Structure

Three routes, one per job-type lane (mirrors the three resume templates in `/Users/marcushansen/Job Hunt/`):

| Route | Lane | Template source | Resume PDF | Notes |
|---|---|---|---|---|
| `/` | AI / dev | MASTER_REFERENCE.md | `Marcus_Hansen_Resume.pdf` | Full site with Projects section |
| `/healthcare` | Healthcare ops | HEALTHCARE_RESUME_TEMPLATE.md | `Marcus_Hansen_Healthcare_Resume.pdf` | Leads 3 Sanford roles; NO GitHub links anywhere (kills flight-risk read); ACSM/BLS certs; noindex |
| `/customer-success` | CS / implementation / health-tech | CS_HEALTHTECH_RESUME_TEMPLATE.md | `Marcus_Hansen_CS_Resume.pdf` | Trifecta positioning: Admin Ambassadors leads, Sanford consolidated; noindex |

Variant pages are NOT linked from the main page — they're direct URLs Marcus puts on applications. Their data lives in `src/data/healthcare.ts` and `src/data/customerSuccess.ts`; section components (Hero/Experience/About/Story/Contact/Footer) take props with AI-lane defaults, so `/` uses them bare.

**Magic link pages:** `/for?c=<Company>[&r=<Role>]` generates a personalized "Why Marcus fits <Company>" page. Frontend: `src/app/for/page.tsx` + `src/components/CompanyPage.tsx` (loading theater → fit points → lane-matched resume CTA). Backend: `backend/lambda/CompanyPageHandler` — Claude Haiku 4.5 via `ANTHROPIC_API_KEY` env var, structured JSON output, cached in DynamoDB `hws-company-pages` so each company generates once (~$0.005) and repeat visits are instant. Function URL goes in `src/config/companyPage.ts` (empty = offline fallback). Marcus's workflow: when applying, pre-warm with `curl "<url>?c=Company&r=Role"` and put the magic link on the application. See that folder's README for deploy/regenerate commands.

**Dormant:** `backend/lambda/InterviewHandler` + `src/components/InterviewMe.tsx` + `src/config/interview.ts` — a fully built "Interview My AI" persona chatbot (same key/env pattern), intentionally NOT wired into any page. Marcus decided passive magic beats chat interaction; kept in case he wants it later.

Main route `/` composed in `src/app/page.tsx`:

| Section | Component | Content source |
|---|---|---|
| Hero | `src/components/Hero.tsx` | inline (name, title, pitch, resume download, GitHub links) |
| Experience | `src/components/Experience.tsx` | `src/data/experience.ts` |
| Featured Projects | `src/components/Projects.tsx` | `src/data/projects.ts` |
| Skills & Credentials | `src/components/About.tsx` | `src/data/about.ts` (skills, certifications, education) |
| My Journey | `src/components/Story.tsx` | inline (football walk-on → All-American, Star Tribune story, self-taught dev) |
| Contact | `src/components/Contact.tsx` | form posts to ContactFormHandler Lambda (URL hardcoded in component) |
| Footer | `src/components/Footer.tsx` | inline |

- All three resume PDFs live in `public/`; regenerate with the canonical builder `/Users/marcushansen/Job Hunt/resume_builder.py` (see that file's docstring for the one standard layout). Source docx/pdf copies archived as `Job Hunt/Word/Site_*`. The healthcare resume uses `Resume(compact=True)` and omits the Cardiac Rehab entry to hold one page under the WeasyPrint font fallback — verify page count with pypdf after any rebuild.
- Contact details: Marcush1802hansen@gmail.com · 507-201-7442 · github.com/Hans3n6 (primary) · github.com/marcus740 (BS&Co work).
- Content should stay in sync with `/Users/marcushansen/Job Hunt/MASTER_REFERENCE.md`.
- `backend/lambda/ContactFormHandler/` is the only remaining backend piece (deployed manually to AWS; the function URL is in Contact.tsx).

## Commands

```bash
npm run dev    # dev server on port 4000
npm run build  # static export to out/
```

## Conventions

- Dark theme: slate-900 background, cyan-400 → purple-400 gradient headings, slate-800/50 cards with slate-700 borders.
- Every section heading uses the same gradient `h2` pattern; keep new sections consistent.
- framer-motion `whileInView` entrance animations on all cards.
