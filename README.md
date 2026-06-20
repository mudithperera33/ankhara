# ANKHARA — Minispazia 4.0

A cinematic, mobile-first single-page invitation for the Freshers' Welcome
event "ANKHARA". Built with Next.js (App Router) and Framer Motion.

## The experience

1. **Awakening** — a dark void, three lines of text fade in one at a time,
   then a glowing Eye of Horus appears. Tapping it triggers a vibration,
   a gold screen flash, and an optional rumble sound.
2. **Temple Gates** — two carved stone doors slide apart, revealing golden
   light and the proclamation lines.
3. **Ankhara Reveal → Event Tablet → The Summons** — a normal vertical
   scroll through the temple hall: the monumental ANKHARA title, a carved
   stone tablet with the event details, and a final glowing
   "Enter Ankhara" call-to-action button.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — 2 things to update

1. **Registration / WhatsApp link**
   Open `components/SummonsCTA.jsx` and replace:
   ```js
   const REGISTRATION_LINK = "https://chat.whatsapp.com/your-invite-code-here";
   ```
   with your real WhatsApp group invite link or registration form URL.

2. **Sound files (optional)**
   Drop two royalty-free .mp3 files into `public/sounds/`:
   - `temple-ambient.mp3` — looping ambient background track
   - `temple-rumble.mp3` — short rumble/horn hit for the Eye of Horus tap

   See `public/sounds/README.txt` for suggested sources. The site works
   fine with no audio files — the toggle just won't produce sound.

## Deploy to Vercel

```bash
npm install -g vercel   # if you don't have it
vercel
```

Or push this folder to a GitHub repo and import it at vercel.com —
no extra configuration needed, it's a standard Next.js app.

## Customizing colors / type

All tokens live in `tailwind.config.js` (colors: `void`, `sandstone`,
`gold`, `bronze`, `amber`) and `app/layout.js` (fonts: Cinzel for display,
Cormorant Garamond for body text).

## Notes on performance

- The ambient particle field is canvas-based, capped and paused when the
  tab is hidden or `prefers-reduced-motion` is set, so it stays light on
  low-end phones.
- All hieroglyph-style wall texture and the Eye of Horus icon are drawn
  with inline SVG/CSS — no image assets to load.
