# Victoria Tarantino — Personal Website

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com). Deploys automatically to Vercel.

## Getting Started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
```

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Astro — no extra config needed
4. Every push to `main` triggers a new deploy

## Swapping in Real Photos

Add photos to `public/images/` and reference them in the components:

| File | Component | Description |
|------|-----------|-------------|
| `public/images/victoria.jpg` | `About.astro` | Headshot / portrait (portrait ratio, ~800×1067px) |
| `public/images/sun-valley.jpg` | `Portfolio.astro` | Sun Valley Conference (4:5 ratio, ~800×1000px) |
| `public/images/allen-co.jpg` | `Portfolio.astro` | Allen & Co Arizona (4:5 ratio, ~800×1000px) |
| `public/images/endeavor.jpg` | `Portfolio.astro` | Endeavor Global Events (4:5 ratio, ~800×1000px) |

To swap a placeholder with a real image, open the component and replace the gradient `<div>` with:
```html
<img src="/images/filename.jpg" alt="Description" class="portfolio-card-img w-full h-full object-cover" />
```

## Connecting the Contact Form

The contact form uses [Formspree](https://formspree.io) (free tier — 50 submissions/month):

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy your endpoint URL
3. Open `src/components/Contact.astro`
4. Replace `REPLACE_WITH_YOUR_FORM_ID` in the form `action` with your endpoint

## Updating Content

All content lives in the component files under `src/components/`:

| Section | File |
|---------|------|
| Navigation | `Nav.astro` |
| Hero headline & CTA | `Hero.astro` |
| Bio & stats | `About.astro` |
| Service descriptions | `Services.astro` |
| Portfolio events | `Portfolio.astro` |
| Contact info & email | `Contact.astro` |
| Social links | `Footer.astro` |

## Updating Social Links & Email

Search for `victoriatarantino` across the project and replace with the real handles/URLs:
- Email: `hello@victoriatarantino.com` → Contact.astro & Footer.astro
- Instagram: `instagram.com/victoriatarantino` → Contact.astro & Footer.astro
- LinkedIn: `linkedin.com/in/victoriatarantino` → Contact.astro & Footer.astro

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| `cream` | `#FAF8F4` | Page background |
| `ink` | `#0F0E0B` | Text, dark sections |
| `gold` | `#B89A6C` | Accents, labels |
| `ink-muted` | `#6B6560` | Secondary text |
| `warm-border` | `#E4DDCF` | Dividers |
