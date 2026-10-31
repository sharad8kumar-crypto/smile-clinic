# SmileCare Dental Clinic Website

A modern, mobile-first website for a dental clinic (concept project).

**Live demo:** https://smile-clinic-ecru.vercel.app/

## Features
- Hero with live "Open now / Closed now" status and animated stats
- Six service detail pages (dynamic routes) with pricing and process
- "Smile Finder" quiz that suggests a treatment
- Before/after slider, FAQ accordion, testimonials, doctor profile
- Appointment form with validation, WhatsApp and one-tap call buttons
- SEO: metadata, LocalBusiness schema, sitemap, share previews
- Accessible: keyboard friendly, reduced-motion support, labelled forms

## Tech stack
Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion, Lenis, deployed on Vercel.

## Run locally
```bash
npm install
npm run dev
```

## Customizing
All clinic content (name, services, timings, FAQs) lives in `data/site.ts`.
Change that file, one brand color in `app/globals.css`, and the photos in
`public/images` to adapt this site for another clinic or business.

## Note
This is a concept project. Clinic name, doctor, reviews and prices are sample
content. Photos are from Unsplash/Pexels.