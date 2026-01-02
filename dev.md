# STK Static Site (Joomla Snapshot) — Developer Notes

## Project overview
This repository contains a **static snapshot** of a Joomla site (Helix3 + SP Page Builder) that was **rebranded** from *Friends Of Lake Turkana (FoLT)* to **Seryeetaab Kaa Cultural Heritage Organization (STK)**.

The goal of this work was to:
- Replace old branding (FoLT) with STK branding.
- Replace Turkana-focused visible content with **Mt. Elgon** context (text-only changes, preserve structure).
- Remove **Publications** references/links.
- Keep the existing theme, layout, CSS, JS, and file organization intact.

## Key constraints / guiding rules used during changes
- **Preserve site structure** (do not redesign pages).
- Prefer **text node / visible text** updates; avoid changing URLs/paths/filenames unless explicitly required.
- When HTML files are heavily minified or difficult to patch reliably, use **exact-string replacements** or a controlled script to avoid structural damage.
- Keep dropdown navigation behavior intact.

## How to run locally
Any static server will work.

Examples:

```bash
python3 -m http.server 8000
```

Then open:

- `http://127.0.0.1:8000/index.html`

## Repository notes
- This is not a live Joomla install; it’s a **static export**. Some pages include traces of Joomla-generated markup.
- Many pages are duplicated/mirrored under `hope/` and `hope/index.php/`.

## Major content and branding updates (high level)
- **Organization name:** FoLT → STK
- **Domain references:** old references → `stk.example` placeholders
- **Social links:** replaced with placeholders (`#`) where applicable
- **Logo/favicon:** updated to STK logo across pages
- **Location/ecosystem narrative:** Turkana/lake-specific visible text updated to **Mt. Elgon ecosystem** context
- **Publications:** removed links/sections referring to publication downloads

## Navigation / UX changes
- Restored/kept dropdown navigation behavior while rebranding.
- Disabled some pages from being clickable until later:
  - **The Team**
  - **Strategic Plan**
  - **Press Release**
  These links were changed to `href="javascript:void(0)"` so they remain visible but do not navigate.

## Contact details updates
- Footer contact block updated site-wide:
  - `P.O Box 515-30500 Lodwar` → `P.O Box 23-30200`
  - `Tel:+254-703486996` → `Tel: 0720742361/0734387155`

- Contact page address updated:
  - Address is now: `KITALE, KENYA`

## Image updates
- Replaced certain homepage section images with the STK logo:
  - `images/2024/06/23/news1.jpg`
  - `images/2024/06/23/rep1.jpg`

## Header logo fix
Normalized the header logo tag (`img.sp-default-logo`) so the `src` is absolute and works on nested pages:
- `src="WhatsApp%20Image..."` → `src="/WhatsApp%20Image..."`

## Verification checks used
Typical verification was done by repo-wide searching to confirm removal of:
- `FoLT`, `Friends Of Lake Turkana`
- `Gibe`, `Omo`, `Koysha`
- publication PDFs (e.g., `status-report.pdf`, `strategic-framework-...pdf`)

## Commit history (key commits)
From newest to oldest:

- `194db89` — Update contact address to Kitale
- `ee6d42a` — Fix header logo path
- `2067227` — Disable Team/Strategic Plan/Press Release links
- `bd7064c` — Replace homepage images with STK logo
- `ef9dc1f` — Update footer contact details
- `7a7ef7c` — Rebrand site to STK (Mt. Elgon) and remove publications
- `de17f6a` — Rebrand: restore navbar, keep STK logo, remove Donate button

## Known pending / follow-ups
- If a local browser preview still shows old content after changes, check:
  - whether the server is serving the correct directory (`/Users/aimtech/stk`)
  - whether browser caching is involved (hard refresh / incognito)

## Chat transcript
I cannot automatically extract the full IDE chat transcript.

Paste the full chat transcript below (or send it in chat and it can be appended):

---

<!-- PASTE CHAT TRANSCRIPT BELOW -->

---
