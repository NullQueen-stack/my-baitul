# Baitul — Website Rebuild

A modern, premium React + Vite rebuild of the Baitul corporate website, covering
Home, About, Services, Projects, Gallery, Clients, Careers, Blog and Contact,
plus a Privacy Policy page.

## Stack
- React 18 + Vite
- Tailwind CSS (custom navy / gold / sky-blue theme, see `tailwind.config.js`)
- React Router DOM v6
- Framer Motion (page + scroll animations)
- React Icons
- Swiper.js (testimonials & client logo sliders)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Content

**Important:** this build could not access the real content of the archived
Baitul site (baitulkw.com), so all copy, project names, team members, client
names, blog posts and stats are realistic placeholders for a Kuwait-based
engineering / industrial / IT company. Everything is centralised in
`src/data/` so you can swap in the real company content without touching any
component or page:

- `src/data/company.js` — company info, stats, mission/vision/values
- `src/data/services.js` — services, industries, "why choose us"
- `src/data/projects.js` — project portfolio
- `src/data/gallery.js` — photo & video gallery
- `src/data/misc.js` — testimonials, clients, blog posts, careers, team, achievements

## Media

Hero background video and most photography are pulled from Unsplash/Coverr
placeholder URLs — replace these with your own licensed assets before
launch (see `src/assets/` for where to drop local files, and update the
relevant `src/data/*.js` entries to point at them).

## Folder structure

```
src/
  components/   reusable UI building blocks
  pages/        route-level views
  layouts/      MainLayout (navbar + footer + WhatsApp button wrapper)
  data/         all editable site content
  assets/       place local images/video here
  router/       (routes are defined directly in App.jsx)
  styles/       (Tailwind handles most styling via index.css)
```
