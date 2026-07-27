# Marcus Hansen — Personal Resume Site

**Project:** HWS (hansenwebservices.com)
**Type:** Single-page personal resume/portfolio site. Sole purpose: market Marcus Hansen for a full-time engineering role.
**Framework:** Next.js 16 (App Router, static export via `output: 'export'`) + React 19 + Tailwind CSS 4 + framer-motion
**Deployment:** AWS Amplify (builds `out/` per `amplify.yml`), domain hansenwebservices.com
**History:** This repo previously hosted the Hansen Web Services GEO agency site (audit tool, blog, pricing, Luminary demo). All of that was stripped in July 2026 and rebuilt as a resume site. Old code is in git history if ever needed.

## Structure

`/` is a GENERAL "get to know Marcus" page — deliberately role-neutral (problem-solver framing, story, "Hiring?" router to lanes, contact; no resume download, no GitHub) so a hiring team from ANY lane can land on the bare domain without confusion. Composed of GeneralHero + Story + HiringRouter + Contact + Footer (with `recruiterLinks`).

Job-specific lane pages (`/gtm` is the PRIMARY lane as of 2026-07-27 — Marcus's focus is CSM/GTM startup roles):

| Route | Lane | Data file | Resume PDF | Notes |
|---|---|---|---|---|
| `/gtm` | GTM Engineer / CSM (PRIMARY) | `src/data/gtm.ts` | `Marcus_Hansen_CS_Resume.pdf` | "AI systems builder + trusted customer advisor"; Admin Ambassadors leads, then BS&Co GTM automation, then Landmark Transcription ops; noindex |
| `/ai` | AI / dev | (bare defaults) | `Marcus_Hansen_Resume.pdf` | Full site with Projects section; noindex |
| `/healthcare` | Healthcare ops | `src/data/healthcare.ts` | `Marcus_Hansen_Healthcare_Resume.pdf` | Leads 3 Sanford roles; NO GitHub links (flight-risk); ACSM/BLS; noindex |
| `/customer-success` | Implementation / health-tech CS | `src/data/customerSuccess.ts` | `Marcus_Hansen_CS_Resume.pdf` | Healthcare-trifecta positioning; noindex |

Lane pages are reachable from `/` only via the "Hiring?" router (leads with GTM) and the footer's "For Recruiters" links; applications carry the lane URL directly. Section components (Hero/Experience/About/Story/Contact/Footer) take props with AI-lane defaults, so `/` uses them bare.

**Magic link pages — TWO MODES** (`/for?c=<Company>[&r=<Role>][&mode=peer]`). Frontend `src/app/for/page.tsx` + `src/components/CompanyPage.tsx`; backend `backend/lambda/CompanyPageHandler` (Claude Haiku 4.5 via `ANTHROPIC_API_KEY`, structured JSON, DynamoDB cache `hws-company-pages`, ~$0.005/gen, view-tracking to `hws-page-views`). Function URL in `src/config/companyPage.ts`.
- **pitch mode** (default): "Why Marcus fits <Company>" + 4 fit points + lane-matched resume. For APPLICATIONS and HIRING MANAGERS (funnel phases 2 & 4).
- **peer mode** (`&mode=peer`): curiosity-first page (headline/intro/aboutMe/whyCurious/soft close), NO pitch, NO resume, NO fit points, LinkedIn-first CTA. For PEER outreach in the humanity funnel (phases 1 & 3) — sending a peer a pitch page breaks the curiosity-first premise. Caches under a `--peer` slug suffix so pitch caches stay intact; legacy pitch pages (no `mode` field) still render as pitch.
Lane enum is `gtm|cs|ai|healthcare`. Pre-warm per phase: `curl "<url>?c=Company&r=Role"` (pitch) and `curl "<url>?c=Company&r=Role&mode=peer"` (peer). See folder README for deploy/regenerate.

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
