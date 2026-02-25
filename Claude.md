# Marcus Hansen Portfolio Website - Project Documentation

**Project Name:** HWS (Hansen Web Services)
**Type:** Professional Web Development Business Website & Portfolio
**Framework:** Next.js 16.1.2 with React 19.2.3
**Last Updated:** January 19, 2026 - Production Ready
**Status:** ✅ Live at https://hansenwebservices.com

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Development Timeline](#development-timeline)
4. [Key Features & Components](#key-features--components)
5. [Technology Stack](#technology-stack)
6. [Recent Organizational Changes](#recent-organizational-changes)
7. [Business Documents & Client Materials](#business-documents--client-materials)
8. [Payment Processing & Subscriptions](#payment-processing--subscriptions)
9. [Deployment & Infrastructure](#deployment--infrastructure)
10. [Getting Started](#getting-started)
11. [Future Enhancements](#future-enhancements)

---

## Project Overview

This is a modern, responsive portfolio website for Marcus Hansen, showcasing professional services, personal story, and client testimonials. The site emphasizes Marcus's journey from football to web development and highlights his unique perspective and resilience.

**Key Objectives:**
- Showcase professional web development services
- Tell Marcus's personal story ("Finding My Voice")
- Provide clear pricing and service packages
- Enable client contact through integrated form
- Demonstrate technical skills through the site itself

---

## Project Structure

```
HWS/
├── src/                 # Frontend code (Next.js source directory)
│   ├── app/             # Next.js app router
│   │   ├── page.tsx     # Homepage (Hero, About, Story, Services, Contact)
│   │   ├── pricing/     # Pricing page with service packages
│   │   │   └── page.tsx # Pricing page with Stripe payment buttons
│   │   ├── payment/     # Payment redirect pages
│   │   │   ├── success/ # Payment success page
│   │   │   │   └── page.tsx
│   │   │   └── cancel/  # Payment cancel page
│   │   │       └── page.tsx
│   │   ├── layout.tsx   # Root layout with metadata
│   │   ├── globals.css  # Global styles and Tailwind config
│   │   └── icon.svg     # Favicon (HWS logo)
│   ├── components/      # React components
│   │   ├── Hero.tsx     # Hero section with football background
│   │   ├── About.tsx    # About section
│   │   ├── Story.tsx    # "Finding My Voice" personal story
│   │   ├── Services.tsx # Services overview with cards
│   │   ├── Projects.tsx # Projects showcase (removed from main page)
│   │   ├── Contact.tsx  # Contact form (integrated with AWS SES)
│   │   └── Footer.tsx   # Footer with contact info and links
│   ├── config/          # Configuration files
│   │   └── stripe.ts    # Stripe Payment Links (LIVE MODE - Production)
│   └── data/            # Static data files
│       ├── about.ts     # About section content
│       └── projects.ts  # Project data
│
├── public/              # Static assets (served from root URL)
│   ├── marcus-football.png         # Hero background image
│   ├── marcus-football-nobg.png    # No-background version
│   └── logo-concept-1-monogram.svg # Site logo
│
├── backend/             # Backend code
│   ├── lambda/          # AWS Lambda functions
│   │   └── ContactFormHandler/  # Contact form email handler (deployed to AWS)
│   │       ├── index.mjs        # Lambda function code
│   │       └── README.md        # Function documentation
│   └── api/             # API utilities and shared code
│
├── business-docs/       # Business documents and client materials
│   ├── contract_template_updated.md      # Website Development Agreement
│   ├── proposal_template_updated.md      # Client proposal template
│   ├── sales_sheet_updated.md            # Quick reference sales sheet
│   ├── payment_solution_recommendation.md # Stripe implementation guide
│   ├── Transaction_Tracker_Guide.md      # Guide for using transaction tracker
│   └── HWS_Transaction_Tracker.xlsx      # Excel file for tracking income/expenses
│
├── scripts/             # One-time test scripts and utilities
│
├── archive/             # Archived/deprecated code
│   └── marcus-landing-page/  # Previous version of project
│
├── .vscode/             # VS Code workspace settings
│   ├── settings.json    # File nesting, exclusions, sorting
│   └── extensions.json  # Recommended extensions
│
├── HWS.code-workspace   # Multi-root workspace configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── next.config.ts       # Next.js configuration
├── amplify.yml          # AWS Amplify deployment config
└── README.md            # Project README
```

---

## Development Timeline

### Initial Setup (January 15, 2026)
- **Created Next.js project** with TypeScript and Tailwind CSS
- **Built core components**: Hero, About, Projects, Services, Contact, Story
- **Designed responsive layout** with modern gradient aesthetics
- **Integrated Framer Motion** for smooth animations
- **Added hero image** (Marcus football photo) with subtle opacity effects

### Content & Branding Refinement
- **Updated hero section**: Changed title from "Full-Stack Developer" to "Web Developer" for clarity
- **Refined "Finding My Voice" section**: Emphasized resilience, perseverance, and unique perspective gained from football background
- **Removed hero background**: Prevented color interference with gradient design
- **Optimized hero image**: Added no-background version for flexibility

### Backend Integration
- **Connected contact form to AWS SES via Lambda**: Enabled email functionality
- **Fixed CORS issues**: Resolved cross-origin request problems with Lambda function
- **Configured AWS Amplify**: Set up deployment pipeline for static export

### Recent Updates (January 16, 2026)
- **Added pricing page**: Created dedicated `/pricing` route with service packages
- **Updated Services component**: Added "View Pricing & Packages" CTA button
- **Updated Hero component**: Added "View Pricing" button with gradient styling
- **Removed Projects section**: Simplified main page layout, removed featured projects

### Project Reorganization (January 19, 2026 - Morning)
- **Created organized folder structure**: Separated frontend, backend, scripts, and archive
- **Set up VS Code workspace**: Added file nesting, exclusions, and multi-root workspace
- **Archived old project**: Moved duplicate `marcus-landing-page` to archive folder
- **Preserved important assets**: Copied `marcus-football-nobg.png` to current project
- **Added documentation**: Created README files for each major folder

### Website Polish & Updates (January 19, 2026 - Midday)
- **Updated favicon**: Replaced default Next.js favicon with HWS logo (icon.svg)
- **Updated contact form**: Changed "Full-Stack Development" to "Web Page Development" in project type dropdown
- **Updated Lambda function**: Changed email source from personal Gmail to professional custom domain `Hansen Web Services <noreply@hansenwebservices.com>`
- **Fixed pricing page**: Removed "MOST POPULAR" badge, standardized care plan borders to cyan, fixed gradient text clipping
- **Verified AWS SES**: Added marcush1802hansen@gmail.com to SES sandbox for testing

### Business Launch Preparation (January 19, 2026 - Afternoon)
- **Created professional business documents**:
  - Website Development Agreement (contract template) - Ready for national clients
  - Client Proposal Template - Comprehensive with social proof and portfolio links
  - Sales Sheet - Quick reference with all packages and pricing
  - Payment Solution Recommendation - Complete Stripe implementation guide
- **Researched payment solutions**: Evaluated options for handling one-time payments ($150-$1,200) and recurring subscriptions ($25-$75/month)
- **Recommended Stripe**: Industry-standard platform for professional payment processing and subscription management
- **Updated contract for national growth**: Removed Minnesota-specific language, added payment methods, dispute resolution clause, and contact information (507-201-7442)
- **Enhanced proposal template**: Added "Why Choose Hansen Web Services" section, social proof, and clear CTAs
- **Created sales sheet**: Professional one-page reference with contact info, tagline, and all package details

### Business Accounting & Branding (January 19, 2026 - Evening)
- **Created transaction tracker**: Excel spreadsheet with Python script for tracking income/expenses
  - Professional formatting with colored headers and currency formatting
  - Three sheets: Transactions, Categories & Help, Summary with automatic calculations
  - Example transactions and comprehensive guide for tax preparation
  - File: `business-docs/HWS_Transaction_Tracker.xlsx`
  - Script: `scripts/create_transaction_tracker.py`
- **Logo conversion for Stripe**: Converted SVG logo to multiple PNG formats
  - 512x512 PNG with white background (recommended for Stripe)
  - 1000x1000 PNG with transparency
  - 1000x1000 JPG with white background
  - All formats ready for payment platform branding
- **Documented brand colors**:
  - Primary gradient: Cyan (#22d3ee) to Purple (#a855f7)
  - Consistent usage across all website components and CTAs

### Stripe Payment Integration (January 19, 2026 - Night)
- **Implemented Stripe hosted checkout integration**:
  - Created centralized configuration file (`src/config/stripe.ts`)
  - Added 6 payment/subscription buttons to pricing page
  - Built success page with next steps and contact info
  - Built cancel page with return options and alternative payment methods
- **Payment buttons added**:
  - 3 "Get Started" buttons for website packages (Starter, Professional, Premium)
  - 3 "Subscribe Now" buttons for care plans (Essential, Standard, Growth)
  - All buttons open Stripe hosted checkout in new tab
  - Gradient styling matching brand colors with hover effects
- **Redirect pages created**:
  - Success: `/payment/success` - Confirmation with timeline and contact info
  - Cancel: `/payment/cancel` - Friendly return options with alternative payment methods
- **Payment structure**:
  - Website packages: Down payment only (50% deposit: $50, $100, $200)
  - Final payments handled via Stripe Invoicing after project completion
  - Care plans: Monthly recurring subscriptions ($25, $45, $75)
- **Tax handling**: No sales tax collection (web development services are tax-exempt in Minnesota)
- **Status**: ✅ LIVE MODE - Production payment links active
- **Live payment links**: All 6 Stripe products created and payment links configured for production

### Email Forwarding Setup (January 19, 2026 - Night)
- **AWS Lambda email forwarder deployed**:
  - Lambda function: `SESEmailForwarder` (Node.js 20.x, 256MB memory, 30s timeout)
  - Automatically forwards emails from contact@hansenwebservices.com to marcush1802@gmail.com
  - S3 bucket: `hws-incoming-emails-1768860162` for storing incoming emails
  - Preserves original sender in Reply-To header for easy responses
- **SES receipt rules configured**:
  - Rule set: `hws-email-forwarding` (active)
  - Rule: `forward-to-gmail` (enabled)
  - Actions: Save to S3 → Trigger Lambda → Forward to Gmail
  - Spam scanning enabled
- **MX record added to Route53**:
  - Priority 10: `inbound-smtp.us-east-1.amazonaws.com`
  - DNS propagated and verified
- **Status**: ✅ Fully operational - Emails to contact@hansenwebservices.com forward to Gmail
- **Cost**: $0/month (within free tier for expected volume)

### Website Footer Added (January 19, 2026 - Night)
- **Created professional footer component** (`src/components/Footer.tsx`):
  - Contact information with clickable phone/email links
  - Quick navigation to all site sections
  - Copyright and branding
  - Consistent gradient design matching site theme
- **Added to all pages**:
  - Home page (`src/app/page.tsx`)
  - Pricing page (`src/app/pricing/page.tsx`)
- **Contact details displayed**:
  - Phone: 507-201-7442
  - Email: contact@hansenwebservices.com

---

## Key Features & Components

### 🎨 Hero Section (`Hero.tsx`)
- Full-width hero with gradient background
- Football hero image with subtle opacity
- Two primary CTAs: "View Pricing" and "Get in Touch"
- Removed "View Projects" button for cleaner layout
- Animated scroll indicator (bouncing chevron)
- Responsive design with mobile optimization

### 📖 About Section (`About.tsx`)
- Personal introduction
- Professional background
- Mission statement
- Animated on scroll

### 🏈 Story Section (`Story.tsx`)
- "Finding My Voice" narrative
- Journey from football to web development
- Emphasis on resilience and perseverance
- Unique perspective from athletic background
- Emotional connection with visitors

### 💼 Services Section (`Services.tsx`)
- Service cards with icons (Lucide React)
- Hover animations
- "View Pricing & Packages" CTA
- Responsive grid layout

### 📝 Contact Form (`Contact.tsx`)
- React Hook Form with Zod validation
- Integrated with AWS Lambda function
- Sends emails via AWS SES
- Form validation and error handling
- Success/error feedback to users

### 💰 Pricing Page (`app/pricing/page.tsx`)
- Detailed service packages with Stripe payment buttons
- 6 total offerings: 3 website packages + 3 care plans
- Website packages: Starter ($150-300), Professional ($400-700), Premium ($800-1200)
- Care plans: Essential ($25/mo), Standard ($45/mo), Growth ($75/mo)
- Stripe integration for instant payment/subscription signup
- Feature comparison table
- Live payment links (production mode)

### 📧 Footer Component (`Footer.tsx`)
- Professional footer on all pages
- Contact information: 507-201-7442, contact@hansenwebservices.com
- Quick navigation links (Services, About, Pricing, Contact)
- Copyright and branding information
- Consistent design matching site theme

---

## Technology Stack

### Frontend
- **Next.js 16.1.2** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion 12.26.2** - Animations and transitions
- **Lucide React 0.562.0** - Icon library
- **React Hook Form 7.71.1** - Form state management
- **Zod 4.3.5** - Schema validation

### Backend
- **AWS Lambda** - Serverless functions
- **AWS SES** - Email service
- **AWS Amplify** - Hosting and deployment

### Development Tools
- **ESLint 9** - Code linting
- **PostCSS** - CSS processing
- **VS Code** - Primary IDE with custom workspace settings

---

## Recent Organizational Changes

### Folder Restructuring
Reorganized the entire codebase to maintain clarity and scalability:
- **Created `src/` folder**: Consolidated all frontend code (app, components, data, images) - Next.js natively supports this directory structure
- **Created `backend/` folder**: Prepared structure for Lambda functions and API utilities
- **Created `scripts/` folder**: Designated space for test scripts and utilities
- **Created `archive/` folder**: Moved old `marcus-landing-page` project for reference

### VS Code Workspace Configuration
- **File nesting enabled**: Config files (package.json, tsconfig.json, etc.) are grouped
- **Hidden build folders**: `.next`, `node_modules`, and `out` are hidden from explorer
- **Folder sorting**: Directories appear before files
- **Multi-root workspace**: `HWS.code-workspace` provides organized view of project sections
- **Recommended extensions**: ESLint, Prettier, Tailwind CSS IntelliSense, GitLens, etc.

### Asset Management
- **Preserved important images**: Copied `marcus-football-nobg.png` from archived project
- **Organized images**: All images moved to `public/` directory (Next.js requirement for static assets)
- **Cleaned up duplicates**: Removed redundant Next.js template files
- **Updated favicon**: Replaced default favicon with HWS logo at `src/app/icon.svg`
- **Fixed TypeScript paths**: Updated `@/*` alias to point to `./src/*` for proper module resolution

---

## Business Documents & Client Materials

Hansen Web Services is now equipped with professional business documents ready for client outreach. All documents are stored in the `business-docs/` folder and are formatted in markdown for easy conversion to PDF or Word.

### 📄 Contract Template (`contract_template_updated.md`)

Comprehensive Website Development Agreement designed for national scalability:

**Key Features:**
- **No state restrictions** - Removed Minnesota-specific language for national growth
- **Flexible client responsibilities** - Added "(if applicable)" for optional requirements
- **Multiple payment methods** - Venmo, Zelle, PayPal, Check, Bank Transfer
- **Dispute resolution clause** - Professional arbitration and mediation process
- **Complete contact information** - Phone (507-201-7442), email, website
- **Three service packages** - Essential ($150), Professional ($495), Premium ($1,200)
- **Ongoing care plans** - Basic ($25/mo), Professional ($50/mo), Premium ($75/mo)
- **Clear payment terms** - 50% down payment, 50% upon completion
- **30-day warranty** - Post-launch support and bug fixes
- **Intellectual property rights** - Client ownership upon final payment

### 📝 Proposal Template (`proposal_template_updated.md`)

Professional client proposal template with persuasive elements:

**Sections Included:**
- **Executive Summary** - Project goal and recommended package
- **Why Choose Hansen Web Services?** - Unique value propositions and differentiators
- **Understanding Your Needs** - Client situation, goals, and target audience analysis
- **Proposed Solution** - Detailed package breakdown with deliverables
- **Project Timeline** - 4-phase timeline (Discovery, Design, Development, Launch)
- **Ongoing Care & Maintenance** - Optional subscription plans
- **Client Testimonials** - Social proof section with testimonial templates
- **Portfolio Link** - Direct link to hansenwebservices.com
- **Investment Breakdown** - Clear pricing table with payment schedule
- **Next Steps** - Clear call-to-action for moving forward

**Improvements Over Original:**
- Added "Why Choose Me?" section highlighting personal attention and modern technology
- Included social proof templates for client testimonials
- Added portfolio/examples link to showcase previous work
- Enhanced professional branding and persuasive copy
- Clearer timeline and deliverables

### 📋 Sales Sheet (`sales_sheet_updated.md`)

Quick reference one-page sales tool for client conversations:

**Features:**
- **Contact info at top** - Phone, email, website prominently displayed
- **Tagline** - "Empowering rural Minnesota businesses and small businesses across America"
- **All packages detailed** - Essential, Professional, Premium with pricing and features
- **Ongoing care plans** - All three tiers with monthly pricing
- **Payment options listed** - Complete list of accepted methods
- **FAQ section** - Common questions answered (timeline, ownership, hosting, changes)
- **Process overview** - 5-step workflow visualization
- **Additional services** - Custom features, content writing, logo design
- **Scannable format** - Easy to read during calls or send as follow-up

**Best Use Cases:**
- Reference during sales calls
- Email attachment for initial outreach
- Leave-behind after in-person meetings
- Quick proposal for simple projects

### 📊 Business Document Status

| Document | Status | Ready for Use |
|----------|--------|---------------|
| Contract Template | ✅ Complete | Yes |
| Proposal Template | ✅ Complete | Yes |
| Sales Sheet | ✅ Complete | Yes |
| Payment Guide | ✅ Complete | Yes |

**Next Steps for Documents:**
1. Convert markdown files to PDF for client distribution
2. Add actual client testimonials as they come in
3. Update portfolio section with completed projects
4. Customize each proposal for specific client needs

---

## Payment Processing & Subscriptions

### Current Payment Status

**Stripe hosted checkout integration is fully implemented and connected!** The website has functional payment buttons on the pricing page that redirect to Stripe's secure checkout pages.

**Current Capabilities:**
- ✅ Contact form for inquiries
- ✅ Pricing display on website
- ✅ Stripe Payment Links for website packages (Starter, Professional, Premium)
- ✅ Stripe Subscription Links for care plans (Essential, Standard, Growth)
- ✅ Professional success and cancel pages
- ✅ Gradient-styled payment buttons matching brand
- ✅ Test mode payment links connected to all 6 buttons
- ✅ Ready for testing with Stripe test cards
- ⏭️ **Next step**: Test thoroughly, then switch to live mode for production

### Recommended Solution: Stripe

A comprehensive payment solution recommendation has been created in `business-docs/payment_solution_recommendation.md`.

**Why Stripe:**
- **Handles one-time payments** - Website packages ($150 - $1,200)
- **Recurring subscriptions** - Ongoing care plans ($25 - $75/month)
- **Professional invoicing** - Branded invoices with automated reminders
- **Customer self-service** - Client portal for subscription management
- **Payment Links** - No coding required to start accepting payments
- **National scalability** - Works for clients anywhere in the US
- **Industry standard** - Trusted by millions of businesses
- **Competitive pricing** - 2.9% + $0.30 per transaction, no monthly fees

**Implementation Timeline:**
- **Week 1** - Create Stripe account, set up products, generate payment links
- **Week 2-4** - Use for real clients (send links, invoices, subscriptions)
- **Month 2-3** - Optimize branding and automation
- **Future** - Integrate checkout into website for automated payments

**Cost Examples:**
| Package | Price | Stripe Fee | You Receive |
|---------|-------|------------|-------------|
| Essential | $150 | $4.65 | $145.35 |
| Professional | $495 | $14.66 | $480.34 |
| Premium | $1,200 | $35.10 | $1,164.90 |
| Basic Care (monthly) | $25 | $1.03 | $23.97 |
| Professional Care | $50 | $1.75 | $48.25 |
| Premium Care | $75 | $2.48 | $72.52 |

**Features Needed:**
- ✅ One-time website package payments
- ✅ Recurring monthly subscription billing
- ✅ Professional invoicing
- ✅ Payment reminders
- ✅ Customer portal
- ✅ Automatic receipts
- ✅ Fraud protection

**Alternative Options Considered:**
- ❌ PayPal - Clunky subscription management, less professional
- ❌ Square - Better for in-person/retail, limited online features
- ❌ Wave - Free invoicing but no native subscriptions
- ❌ Venmo/Zelle - No invoicing, no subscriptions, unprofessional for large amounts

**Implementation Guide Includes:**
- Step-by-step Stripe account setup
- Product and pricing configuration
- Payment Link generation
- Email templates for sending payment requests
- Customer portal setup
- Invoice customization
- Frequently asked questions
- Tax and legal considerations

### Current Payment Workflow (Manual)

**For Website Projects:**
1. Send proposal to client
2. Manually request 50% down payment via Venmo/Zelle
3. Wait for payment confirmation
4. Build website
5. Manually request final 50% payment
6. Launch site after payment received

**For Ongoing Care (Not Yet Active):**
1. No current subscription management
2. Would require manual monthly invoicing
3. Chasing down late payments manually
4. Tracking active subscriptions manually

### Future Payment Workflow (With Stripe)

**For Website Projects:**
1. Send proposal with Stripe Payment Link
2. Client clicks and pays 50% instantly
3. Automatic email notification
4. Build website
5. Send Stripe invoice for final 50%
6. Automatic payment and notification
7. Launch site

**For Ongoing Care:**
1. Client clicks Stripe Subscription Link
2. Automatic monthly billing
3. Automatic receipts sent
4. Client manages own subscription via portal
5. Automatic payment notifications
6. Focus on providing service, not chasing payments

---

## Deployment & Infrastructure

### AWS Amplify Setup
- **Configuration file**: `amplify.yml` defines build settings
- **Static export**: Next.js configured for static site generation
- **Deployment branch**: Main branch auto-deploys to production

### AWS Lambda (Contact Form)
- **Function**: `ContactFormHandler` - Processes contact form submissions
- **Integration**: AWS SES sends emails via custom domain
- **Email Settings**:
  - From: `Hansen Web Services <noreply@hansenwebservices.com>`
  - To: `marcush1802@gmail.com`
  - Reply-To: Submitter's email
- **Features**: Sends notification email to Marcus + confirmation email to submitter
- **CORS**: Configured to allow requests from deployed domain
- **Status**: Deployed to AWS Lambda (us-east-1)
- **Logs**: CloudWatch log group `/aws/lambda/ContactFormHandler`
- **Code Location**: `backend/lambda/ContactFormHandler/`

### Environment
- **Development server**: Runs on port 4000 (`npm run dev`)
- **Production**: Deployed via AWS Amplify
- **Region**: us-east-1

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd HWS

# Install dependencies
npm install

# Run development server
npm run dev
```

The site will be available at `http://localhost:4000`

### Available Scripts

```bash
npm run dev      # Start development server on port 4000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Development Workflow
1. Make changes to files in `src/` directory
2. Next.js hot-reload will update the browser automatically
3. Test contact form with Lambda integration
4. Build and deploy via Git push to main branch

---

## Future Enhancements

### Business Launch (High Priority)
- [✅] **Set up Stripe account** - Live mode activated and configured
- [✅] **Create payment links** - All 6 live payment links generated and connected
- [✅] **Set up subscription products** - Care plans configured in Stripe live mode
- [✅] **Switch to Stripe live mode** - Production payment links active on website
- [✅] **Set up email forwarding** - contact@hansenwebservices.com forwards to Gmail via AWS Lambda
- [✅] **Configure MX records** - DNS configured for email delivery
- [✅] **Add website footer** - Professional footer with contact info on all pages
- [ ] **Convert business docs to PDF** - Make client-ready versions of contract, proposal, sales sheet
- [ ] **Request SES production access** - Move contact form out of sandbox mode (submitted request)
- [ ] **Add actual client testimonials** - Collect and add to website and proposal template
- [ ] **Build portfolio section** - Showcase completed projects on website
- [ ] **Consider LLC formation** - Register business entity for liability protection
- [ ] **Obtain EIN** - Get tax ID for business (free from IRS)
- [ ] **Set up business bank account** - Separate business and personal finances
- [✅] **Create transaction tracker** - Excel file with automatic tax calculations ready to use

### Website Features
- [ ] Add blog section for technical articles and thought leadership
- [ ] Create case studies page for detailed project showcases
- [ ] Add testimonials section with client reviews (currently placeholder text)
- [ ] Implement analytics (Google Analytics or Plausible)
- [ ] Add dark mode toggle
- [ ] Add SEO optimization and meta tags (partially done)
- [ ] Implement sitemap and robots.txt
- [ ] Add structured data for rich snippets
- [ ] Create privacy policy and terms of service pages
- [ ] Add cookie consent banner (if using analytics)

### Payment Integration (Future Phase)
- [ ] Integrate Stripe Checkout into website
- [ ] Add "Buy Now" buttons to pricing page
- [ ] Create automated client onboarding flow
- [ ] Build customer dashboard for subscription management
- [ ] Add payment receipts/invoices to website
- [ ] Create webhook handlers for payment events

### Backend Development
- [✅] Move Lambda function code to `backend/lambda/` (DONE)
- [✅] Add Lambda function documentation (DONE)
- [ ] Create reusable API utilities in `backend/api/`
- [ ] Set up local Lambda testing environment
- [ ] Add backend unit tests
- [ ] Create API documentation

### Content Updates
- [ ] Add more projects to portfolio section
- [ ] Update services with more detailed descriptions
- [ ] Create blog posts for SEO and thought leadership
- [ ] Add actual client testimonials to website
- [ ] Create privacy policy and terms of service pages

---

## Notes for Future Development

### Important Files
- **Contact form handler**: Lambda function code in `backend/lambda/ContactFormHandler/`
- **Business documents**: Professional templates in `business-docs/` folder
- **Payment guide**: Comprehensive Stripe implementation guide in `business-docs/payment_solution_recommendation.md`
- **Images**: Two versions of football photo available (with/without background)
- **Archive**: Old project in `archive/marcus-landing-page/` - contains AWS Amplify config for reference

### Business Launch Readiness

**✅ Production Ready - Accepting Clients:**
- Professional website live at https://hansenwebservices.com
- Contact form integrated with AWS SES (sandbox mode - works for manual outreach)
- Email forwarding: contact@hansenwebservices.com → marcush1802@gmail.com
- Professional footer with contact info on all pages
- Pricing page with 6 live Stripe payment buttons
- Stripe LIVE MODE - Ready to accept real payments
- Website packages: $50, $100, $200 down payments
- Care plans: $25/mo, $45/mo, $75/mo subscriptions
- Contract template (national, no state restrictions)
- Proposal template with social proof and portfolio
- Sales sheet for quick reference
- Transaction tracker with automatic tax calculations
- AWS Lambda email forwarder operational

**⚠️ Recommended Before Mass Marketing:**
1. **Convert business docs to PDF** - For professional client distribution
2. **SES production access** - Submitted request, awaiting approval (contact form will work for all visitors once approved)
3. **Add real testimonials** - Replace placeholder text with actual client feedback after first few projects
4. **Test Stripe payments** - Verify checkout flow end-to-end with small test transaction

**📋 Legal/Business Items (Can Do After First Client):**
- Register LLC for liability protection
- Obtain EIN (Employer Identification Number)
- Open business bank account
- Set up bookkeeping (QuickBooks or Wave)
- File for business license (if required in Minnesota)

### VS Code Workspace
- **Open workspace**: Use `File → Open Workspace from File` and select `HWS.code-workspace`
- **Multi-root view**: Provides organized sections for Frontend, Backend, Scripts, Business Docs, and Archive
- **File nesting**: Config files are automatically grouped under `package.json`

### Git Workflow
- **Main branch**: `main` (auto-deploys to production via AWS Amplify)
- **Commits**: Use descriptive commit messages
- **Recent pattern**: "Update/Fix/Add [description]"
- **Deployment**: Automatic on push to main branch

### Contact Form Integration
- **Form**: `src/components/Contact.tsx` with React Hook Form + Zod validation
- **Backend**: AWS Lambda function in `backend/lambda/ContactFormHandler/`
- **Email service**: AWS SES (custom domain: noreply@hansenwebservices.com)
- **Notifications**: Sends to marcush1802@gmail.com + confirmation to submitter
- **Status**: Deployed and functional (sandbox mode - verified emails only)
- **CORS**: Configured to allow requests from deployed domain
- **Logs**: CloudWatch log group `/aws/lambda/ContactFormHandler`

### Payment Processing
- **Current**: Manual payment methods (Venmo, Zelle, PayPal)
- **Recommended**: Stripe for professional payment processing and subscriptions
- **Implementation**: Follow step-by-step guide in `business-docs/payment_solution_recommendation.md`
- **Timeline**: Can be set up in 1-2 hours
- **Cost**: 2.9% + $0.30 per transaction, no monthly fees

---

**Last Updated:** January 19, 2026 - PRODUCTION LIVE
**Status:** ✅ Accepting clients - Stripe live, email forwarding operational, website deployed
**Maintained By:** Claude Code (AI Assistant)
**Project Owner:** Marcus Hansen
**Contact:** 507-201-7442 | contact@hansenwebservices.com | https://hansenwebservices.com
