# IFTIKHARI Marriage Hall

The official website for IFTIKHARI Marriage Hall in Hazara Town, Quetta. The site helps guests explore the venue, compare event services, view decor, and contact the hall about bookings.

**Website:** [iftikharihall.pk](https://iftikharihall.pk)

## Features

- Responsive pages for the venue, services, decor gallery, FAQs, and contact details
- Event package information and direct WhatsApp booking enquiries
- Venue address, map directions, phone number, and social links
- Page metadata and structured data for local search visibility
- Generated sitemap and robots directives, plus `llms.txt` resources
- Optimized local venue imagery

## Technology

- Next.js 15 with the App Router
- React 18 and TypeScript
- Tailwind CSS
- Lucide React icons and Framer Motion

## Getting Started

### Requirements

- Node.js 18.18 or later
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The development server reloads as files change.

### Production build

```bash
npm run build
npm run start
```

## Site Pages

| Route | Description |
| --- | --- |
| `/` | Venue overview and booking links |
| `/about` | About the hall |
| `/services` | Event services and packages |
| `/gallery` | Decor and venue gallery |
| `/faq` | Frequently asked questions |
| `/contact` | Contact details and location |

## Project Structure

```text
src/
  app/          Routes, page metadata, sitemap, and robots rules
  components/   Shared navigation, footer, gallery, FAQ, and SEO components
  lib/          Venue information and booking link helpers
public/
  images/       Venue and event photography
  llms.txt      Short site reference for AI crawlers
  llms-full.txt Extended site reference for AI crawlers
```

## Venue Information

Business details, contact links, package information, and FAQs are maintained in [`src/lib/seo-data.ts`](src/lib/seo-data.ts). Update that file when venue information changes so the website and its structured data stay consistent.

## Deployment

Deploy as a standard Next.js application. Install dependencies, run `npm run build`, then use the hosting provider's Next.js deployment workflow. The production site URL is configured in the app metadata and SEO data.
