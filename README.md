# RLabZ Brand Identity Portal

Official internal brand identity hub for RLabZ Design | Development | Training — logo system, color tokens, typography, voice & tone, collateral mockups, and downloadable brand assets, all sourced from and consistent with the approved brand collateral (presentation deck, letterhead, and email signature).

## Pages

- **Story** (`/`) — brand narrative and the crucible metaphor
- **Logos** (`/logos`) — official lockups, clear-space rules, do's & don'ts
- **Palette** (`/colors`) — color tokens sourced from the official deck/letterhead/email signature
- **Typography** (`/typography`) — type scale and font specs
- **Voice** (`/voice`) — brand voice pillars, approved boilerplate copy, writing guidelines
- **Collateral** (`/mockups`) — business card, ID badge, slide deck, and email signature previews
- **Assets** (`/downloads`) — official template downloads plus a master brand kit ZIP

## Color themes

The portal ships three selectable UI themes (switcher in the navbar) — the 4 core brand colors (Navy, Cyan, Green, Flame) never change between them, only the background/surface treatment does:

- **Corporate Navy** (default) — refined dark navy, mirrors the official deck's dark slides
- **Slate Light** — true light mode, mirrors the letterhead and light deck slides
- **Midnight** — a quieter, near-black alternate dark mood

Theme tokens live in `src/index.css` (`[data-theme="…"]` blocks) and are consumed via CSS custom properties (`var(--rl-heading)`, `var(--rl-surface)`, etc.) throughout the components. State is managed in `src/context/ThemeContext.jsx` and persisted to `localStorage`.

## Official template downloads

`public/toolkit/` holds the real, approved RLabZ templates (presentation deck, letterhead, email signature) served as static files and bundled into the "Download Brand Kit" ZIP alongside generated logo/token assets.

## Development

```bash
npm install
npm run dev       # start dev server
npm run build      # production build
npm run lint       # oxlint
npm run preview    # preview a production build
```

Built with React 19, React Router, Tailwind CSS v4, and Vite.
