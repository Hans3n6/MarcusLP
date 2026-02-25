# Transaction Tracker Guide
## Hansen Web Services - Accounting & Tax Preparation

**File Location:** `business-docs/HWS_Transaction_Tracker.csv`

---

## Quick Start

1. **Open the CSV file** in Excel, Google Sheets, or Numbers
2. **Save it as an Excel file (.xlsx)** for better formatting and formulas
3. **Start entering transactions** below the example rows
4. **Update it weekly** to stay organized

---

## Column Explanations

### Required Columns

| Column | What to Enter | Example |
|--------|---------------|---------|
| **Date** | Transaction date | 01/20/2026 |
| **Transaction Type** | Income or Expense | Income |
| **Category** | Type of transaction | Website Package Sale |
| **Description** | What was sold/bought | Professional Package for ABC Co |
| **Payment Method** | How paid | Stripe |
| **Amount** | Total before fees | $495.00 |
| **Net Amount** | What you received/paid | $480.34 |
| **Status** | Transaction status | Completed |

### Optional But Helpful

| Column | Purpose |
|--------|---------|
| **Transaction ID** | Your reference number (TXN-001, etc.) |
| **Client Name** | Who paid you / who you paid |
| **Fees** | Processing fees (Stripe, PayPal, etc.) |
| **Invoice/Receipt #** | Document reference for records |
| **Project** | Which website/client project |
| **Notes** | Additional context |

---

## Income Categories

Use these for business income:

- **Website Package Sale** - One-time website projects
  - Essential Package ($150)
  - Professional Package ($495)
  - Premium Package ($1,200)
- **Care Plan Subscription** - Monthly recurring revenue
  - Basic Care ($25/month)
  - Professional Care ($50/month)
  - Premium Care ($75/month)
- **Down Payment** - 50% deposits on projects
- **Final Payment** - Final 50% when project completes
- **Add-on Service** - Extra features, e-commerce, etc.
- **Consultation Fee** - Discovery calls, technical consulting

---

## Expense Categories

Use these for business expenses (tax deductible):

### Software & Tools
- Hosting services (Vercel, AWS, etc.)
- Domain registrations
- Design tools (Figma, Adobe, etc.)
- Development tools (GitHub Copilot, etc.)
- Project management software

### Business Operations
- **Payment Processing Fees** - Stripe, PayPal fees
- **Marketing & Advertising** - Ads, business cards, flyers
- **Office Supplies** - Computer accessories, office items
- **Professional Services** - Accountant, lawyer fees
- **Education & Training** - Online courses, books, conferences

### Equipment
- Computer/laptop
- Monitor, keyboard, mouse
- Camera for portfolio photos
- Any hardware for business

### Other
- **Travel & Meals** - Client meetings, networking events (50% deductible)
- **Phone & Internet** - Portion used for business
- **Home Office** - If you have dedicated space (ask accountant)

---

## Important Tax Tips

### What to Track

✅ **Every transaction** - Even small ones
✅ **Save receipts** - Keep PDFs/photos of all receipts
✅ **Stripe reports** - Download monthly Stripe statements
✅ **Mileage** - If you drive to meet clients (track miles)
✅ **Percentage of use** - Phone/internet business vs personal use

### Tax Deductions for Freelancers/Sole Proprietors

You can deduct:
- ✅ All business software subscriptions
- ✅ Payment processing fees (Stripe 2.9% + $0.30)
- ✅ Equipment purchases (computer, monitor, etc.)
- ✅ Marketing & advertising costs
- ✅ Education related to web development
- ✅ Professional services (accountant, lawyer)
- ✅ 50% of business meals
- ✅ Home office (if dedicated space)
- ✅ Health insurance (if self-employed)

**Cannot deduct:**
- ❌ Personal purchases
- ❌ Commuting to regular workplace
- ❌ Personal portion of phone/internet

### Quarterly Estimated Taxes

If you expect to owe >$1,000 in taxes, pay quarterly:
- **Q1:** April 15
- **Q2:** June 15
- **Q3:** September 15
- **Q4:** January 15 (next year)

**Simple calculation:**
- Estimate annual income
- Calculate self-employment tax (~15.3%)
- Calculate income tax (depends on bracket)
- Divide by 4 quarters

**Use IRS Form 1040-ES** or pay online at irs.gov/payments

---

## Recommended Formulas (Excel)

### Add These to Your Spreadsheet

**1. Total Income (add at bottom)**
```
=SUMIF(D:D,"Income",H:H)
```
This adds up all amounts where Transaction Type = "Income"

**2. Total Expenses**
```
=SUMIF(D:D,"Expense",H:H)
```

**3. Total Fees Paid**
```
=SUM(I:I)
```

**4. Net Profit**
```
=Total_Income - Total_Expenses
```

**5. Monthly Income (create separate sheet)**
```
=SUMIFS(H:H, D:D, "Income", A:A, ">=1/1/2026", A:A, "<=1/31/2026")
```
Adjust dates for each month

---

## Monthly Routine

**At the End of Each Month:**

1. ✅ Review all transactions for accuracy
2. ✅ Download Stripe statement and reconcile
3. ✅ Check for any missing receipts
4. ✅ Calculate total income and expenses
5. ✅ Set aside 25-30% for taxes (in separate account)
6. ✅ Save a copy of the spreadsheet (backup)

**At Tax Time (April 15):**

1. Export full year data
2. Summarize by category
3. Provide to accountant OR use for Schedule C (Form 1040)
4. Keep spreadsheet + all receipts for 3-7 years

---

## Example: Recording Stripe Transaction

**Client pays $495 for Professional Package via Stripe:**

| Field | Value | Notes |
|-------|-------|-------|
| Date | 01/20/2026 | Payment date |
| Transaction ID | TXN-001 | Your reference |
| Client Name | ABC Company | Who paid |
| Transaction Type | Income | |
| Category | Website Package Sale | |
| Description | Professional Package - ABC Co | |
| Payment Method | Stripe | |
| Amount | $495.00 | Before fees |
| Fees | $14.66 | Stripe fee (2.9% + $0.30) |
| Net Amount | $480.34 | What you received |
| Status | Completed | |
| Invoice # | INV-2026-001 | Your invoice |
| Project | ABC Company Website | |
| Notes | First client of 2026! | |

**Also record the Stripe fee as expense:**

| Field | Value |
|-------|-------|
| Date | 01/20/2026 |
| Transaction Type | Expense |
| Category | Payment Processing Fees |
| Description | Stripe fee - TXN-001 |
| Amount | $14.66 |
| Net Amount | $14.66 |

---

## Backing Up Your Data

**Option 1: Cloud Storage**
- Save to Google Drive, Dropbox, or iCloud
- Enable version history
- Access from anywhere

**Option 2: Local Backup**
- Save monthly copies with date
- Example: `HWS_Transactions_Jan2026.xlsx`
- Store on external drive

**Option 3: Wave or QuickBooks**
- Import CSV into accounting software
- Automatic backups
- Better reporting

---

## When to Upgrade to Accounting Software

**Consider Wave (Free) or QuickBooks when:**
- You have 5+ clients
- Monthly income exceeds $2,000
- You hire contractors/employees
- You need invoicing automation
- Tax time becomes overwhelming

**Wave Accounting (Free):**
- Bank account sync
- Automatic categorization
- Professional invoices
- Receipt scanning
- Free!

**QuickBooks Self-Employed ($15/month):**
- Mileage tracking
- Quarterly tax estimates
- Receipt capture
- Expense categorization
- TurboTax integration

---

## Tax Filing Reminder

As a **sole proprietor**, you'll file:

**Federal:**
- **Form 1040** - Personal tax return
- **Schedule C** - Business profit/loss
- **Schedule SE** - Self-employment tax
- **Form 1040-ES** - Quarterly estimated taxes (if applicable)

**State (Minnesota):**
- **Form M1** - Individual income tax
- **Schedule M1C** - Minnesota credits

**Due Date:** April 15, 2027 (for 2026 income)

**Recommendation:** Hire a CPA for your first year, then you'll understand the process for future years.

---

## Questions?

Contact a tax professional or:
- **IRS:** irs.gov or 1-800-829-1040
- **Minnesota DOR:** revenue.state.mn.us
- **SCORE:** Free business mentoring - score.org
- **Small Business Development Center:** Local assistance

---

**Last Updated:** January 19, 2026
**Maintained By:** Marcus Hansen
**Purpose:** Track all Hansen Web Services income and expenses for tax purposes
