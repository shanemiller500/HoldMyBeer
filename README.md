# HMB-CO — holdmybeer.info

Marketing and product showcase site for **Hold My Beer CO**, a privacy-first software company building AI-powered apps for people who care about their data.

**Live site:** [holdmybeer.info](https://holdmybeer.info)

---

## About

HMB-CO builds software that puts users first — no ads, no tracking, no selling your data. This repo is the public-facing website that showcases the company and its products.

**Developer:** Shane Miller — [shanemiller.ninja](https://shanemiller.ninja)

---

## Products

| Product | Status | Description |
|---|---|---|
| [ApplyPro.ai](https://applypro.ai) | Live | AI-generated, research-backed cover letters and tailored resumes |
| UMail.ai | In Testing | Ad-free, privacy-first smart email client with Gmail integration |
| Talent Acquisition Platform | Coming Soon | Bulk resume scanning, candidate ranking, and AI-generated hiring summaries |
| AI Allergy Check App | Coming Soon | Scan food labels for allergens with instant personalized safety insights |
| AI Search Engine | Coming Soon | Clean, ad-free search with no sponsored links or tracking |

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Theming:** next-themes (dark / light mode)
- **Animations:** AOS (Animate on Scroll)
- **Analytics:** Mixpanel + Vercel Analytics
- **Deployment:** Vercel

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
npm run start
```

---

## Project Structure

```
app/                  # Pages (Next.js App Router)
  about/              # About page
  allergy/            # Allergy Check App page
  applyPro/           # ApplyPro page
  contact/            # Contact form (powered by UMail)
  Search/             # AI Search Engine page
  Talent/             # Talent Acquisition Platform page
  transparent/        # Transparency Policy page
  umail/              # UMail page
components/           # Reusable UI components
  ui/                 # Header, Footer, Mobile Menu, Theme Toggle
public/               # Static assets (images, videos)
```

---

## Privacy Commitment

HMB-CO applications never sell user data, never run ads, and never use your content to train AI models. This is baked into every product we ship.
