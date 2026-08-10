# LOCKOUT: Coach-Run Barbell Club

**LOCKOUT** is a high-performance, editorial landing page and Web app crafted for a fictional coach-run strength and powerlifting facility located in Pittsburgh's Strip District. Built as a showcase portfolio project, it combines industrial brutalist design, dynamic scroll-driven micro-interactions, custom typographic pairing, and complete search engine optimization (SEO). It's also available as a starting point for real strength gyms and barbell clubs looking for a premium, non-templated web presence.

---

## Why This Exists

Most gym and barbell club websites run on generic templates that don't reflect the intensity, discipline, or brand identity of the business behind them. LOCKOUT demonstrates what a custom-built, editorial-grade site looks like when it's designed specifically for a strength-focused gym, built to hold up under review from developers and recruiters, and to give gym owners a clear picture of what a premium web presence for their business could look like.

---

## Key Features

* **Brutalist Editorial Aesthetic**: High-contrast, warm neutral color scheme paired with bold display typography (`Archivo Black`, `Fraunces`, `Space Grotesk`, and `JetBrains Mono`).
* **Scroll-Driven Micro-Interactions**:

  * **Manifesto Line-Striking**: Dynamic scroll-progress calculator that strikes through text lines as the user scrolls.
  * **Text Stagger & Intersection Observer**: Responsive reveal animations built without heavy third-party animation runtimes.
  * **Horizontal Program Rail**: Smooth horizontal motion showcasing training tracks (Foundations, Hypertrophy, Powerlifting, Peaking).
  * **Scroll Progress Bar**: Real-time reading timeline pinned to the top viewport edge.
* **Production-Grade SEO Suite**:

  * Dynamic `sitemap.ts` and `robots.ts` generation via Next.js App Router.
  * Structured data (`SportsActivityLocation` JSON-LD schema) for local search context.
  * Comprehensive OpenGraph and Twitter card metadata.
  * Multi-format favicon fallback chain (`SVG` and `.ico`).
* **Accessibility & UX**:

  * `prefers-reduced-motion` detection across all animation components.
  * Keyboard skip links (`#main`) for screen reader and keyboard accessibility.
  * Mobile-first responsive layout across all device viewports.

---

## Tech Stack

* **Framework**: Next.js 16 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS v4
* **Fonts**: `@next/font/google` (Archivo Black, Fraunces, Space Grotesk, JetBrains Mono)
* **Icons**: Lucide React
* **Optimization**: Turbopack, Next.js Image Optimization

---

## Configuration

No environment variables are required for the current static build. The structure below is scaffolded for future integrations (forms, booking, analytics):

```bash
# .env.example

# Form submission (e.g. Resend, SendGrid)
# FORM_ENDPOINT=
# RESEND_API_KEY=

# Booking integration (Cal.com)
# CAL_COM_API_KEY=

# Analytics
# NEXT_PUBLIC_GA_ID=
```

---

## Project Structure

```text
.
├── app/
│   ├── favicon.ico         # Standard ICO fallback
│   ├── globals.css         # Custom CSS design system & Tailwind setup
│   ├── icon.svg            # SVG Brand icon
│   ├── layout.tsx          # Root layout with Google Fonts & Metadata
│   ├── page.tsx            # Main single-page application & JSON-LD schema
│   ├── robots.ts           # Robots.txt route handler
│   └── sitemap.ts          # Sitemap XML route handler
├── components/
│   ├── AdmissionCriteria.tsx  # Membership qualification criteria
│   ├── Coaches.tsx            # Coach profiles and credentials dossier
│   ├── CtaFinal.tsx           # Application CTA & modal
│   ├── Footer.tsx             # Footer & operating details
│   ├── Hero.tsx               # Primary editorial split view
│   ├── Manifesto.tsx          # Scroll-based strike-through statement
│   ├── Navbar.tsx             # Navigation header & mobile menu drawer
│   ├── Pricing.tsx             # Tiered membership structure
│   ├── Programs.tsx            # Training tracks horizontal rail
│   ├── Reveal.tsx              # Intersection observer scroll-reveal wrapper
│   └── ScrollProgress.tsx      # Top viewport scroll progress indicator
│   └── TextStagger.tsx         # Character/word staggering animation wrapper
├── public/
│   └── favicon.svg         # Clean vector favicon
└── metadata.json           # Application descriptor metadata
```

---

## Getting Started

### Prerequisites

* **Node.js**: `v18.17.0` or higher
* **Package Manager**: `npm`, `yarn`, or `pnpm`

### Installation

1. Clone the repository and navigate into the root directory:

   ```bash
   git clone https://github.com/aawaizazhar/lockout-gym.git
   cd lockout-gym
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the local development server:

   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser to view the application.

---

## Build & Production Verification

To build the application for production:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

---

## License

MIT License. The code in this repository is open for reference and learning. The design, content, and branding are intended as a portfolio case study rather than a drop-in template. If you're a gym or service business interested in a customized version of this site, reach out directly via the contact info below rather than reskinning the repo as-is.

---

## Contact

Built by **Aawaiz Azhar**, freelance web developer & AI automation specialist.

* **Email**: [aawaizazhar.dev@gmail.com](mailto:aawaizazhar.dev@gmail.com)
* **LinkedIn**: [linkedin.com/in/aawaizazhar](https://www.linkedin.com/in/aawaizazhar)

Available for custom website builds for gyms, physiotherapy clinics, and local service businesses.
