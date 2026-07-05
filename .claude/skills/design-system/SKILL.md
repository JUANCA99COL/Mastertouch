---
name: design-system
description: Mastertouch Colombia design system — typography scale, 8px spacing grid, color tokens, and component patterns. Reference this before building or editing any UI on this site.
---

# Mastertouch Design System

Mastertouch is a bold, adventurous Colombian tour/transport brand — black backgrounds, huge
uppercase display type, real destination photography (never stock illustration or 3D blobs),
and a single confident orange accent. It should feel like an outdoor-adventure brand, not a
generic dark-mode SaaS template.

**Heads up:** this is a plain HTML/CSS/jQuery site (no build step), so "component" below means
a reusable CSS class + markup pattern, not a framework component. All tokens live in
`css/style.css`.

## Typography

Two fonts, loaded via `@import` at the top of `css/style.css`:

- **Display** — `Anton`: every heading (`h1`, `h2`, section titles). Always uppercase
  (`text-transform: uppercase` is already global for `h1`), tight `letter-spacing: -.01em`,
  heavy by default — never fight it with a lighter `font-weight`.
- **Body** — `Satoshi` (weights 300–900 via Fontshare): paragraphs, buttons, nav, form labels.

Never substitute a system font for headings — Anton is the brand's entire "bold/adventurous"
identity. Losing it makes the page look like a stock template immediately.

**Scale to use for any new section** (the legacy pre-redesign CSS has inconsistent one-off
sizes like `15px`/`18px`/`25px`/`34px`/`37px`/`39px` scattered around — don't add more of
those; new work should land on this scale):

| Use | Size |
|---|---|
| Eyebrow label (`.eyebrow`) | `0.8rem`, uppercase, `letter-spacing: .15em`, color `var(--orange)` |
| Card/subsection heading (`h3`, `.event-card-v2__body h2`) | `1.5–1.9rem` |
| Section heading (`h2`) | `2.5–4rem` |
| Hero headline (`.hero-v2 h1`) | `clamp(2.6rem, 9vw, 8rem)` — already defined, reuse this pattern for any new full-bleed hero |
| Body copy | `1rem` base, `0.85–0.95rem` for card descriptions |

Every content section should open with an `.eyebrow` label above its heading (see `#eventos`,
`.servicios-v2__head`, `.faq-v2` for the pattern) — it's load-bearing for the brand voice, not
optional decoration.

## Spacing — 8px grid

The legacy CSS has ad-hoc pixel values everywhere. **New or edited CSS should round to
multiples of 8:** `8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144px`.

Reference rhythm already established in the redesigned sections:
- **Section vertical padding:** `110px` desktop (round to `112px` going forward), `80px` on
  the `≤480px` mobile breakpoint.
- **Card padding** (`.event-card-v2__body`): `26px` → prefer `24px` or `32px` in new work.
- **Component gaps** (`.events-grid-v2`, `.servicios-list`): `32–36px` → prefer `32px`.
- **Button padding:** vertical sizing is handled via fixed `height` (44–48px) rather than
  padding — keep new buttons on a `44px` (mobile minimum touch target) to `48px` height.

## Color tokens

Defined in `:root` in `css/style.css` — reference the variable, never a raw hex, in new CSS:

| Token | Value | Role |
|---|---|---|
| `--black` | `#000` | Page background |
| `--white` | `#fff` | Primary text on dark backgrounds |
| `--orange` | `#f46434` | **The** brand accent — every CTA, eyebrow label, hover state, active link |
| `--light-grey` | `#d8d8d8` | Muted text/borders (used sparingly) |
| `--dark-grey` | `#2b2b2b` | Secondary UI, form field backgrounds |

One documented exception: the Contacto section background uses `#E07325`, a distinct
warmer/redder orange from `--orange`, applied only as a gradient wash behind the contact form
(`.contacto-v2`). Don't reuse `#E07325` elsewhere or introduce a third orange — if a section
needs an accent, it's `var(--orange)`.

There is **no secondary brand color.** Don't introduce a blue/green/purple accent for
"variety" — the palette is strictly black, white, and one orange, plus real photography.

## Component patterns

- **Buttons** (`.btn-detalles`, `.btn-detalles2`, `.btn-detalles-contact`) — fully pill-shaped
  (`border-radius: 999px`), `--orange` background, white uppercase bold text. Hover: inverts
  to white background + orange text + `translateY(-3px)` lift + orange glow shadow. Minimum
  height `44px` on mobile (`48px` preferred) for a comfortable touch target.
- **Cards** (`.event-card-v2`) — `rounded-2xl` (20px), near-black surface (`#0c0c0c`), subtle
  `rgba(255,255,255,.08)` border. Structure is always: image top → `.eyebrow` location label →
  heading → 1-sentence description → full-width pill button. Hover: card lifts
  `translateY(-8px to -10px)`, border shifts to `orange/40`, image inside scales up ~10%.
- **Hero** (`.hero-v2`) — full-bleed 100vh background (video on desktop, a static image swap
  below 768px — see `.hero-v2__poster--mobile` / `.hero-v2__video--desktop`), dark gradient
  overlay for legibility, centered content: eyebrow → giant Anton headline (word-by-word
  stagger reveal via `.hero-word` / `js-hero-heading`) → sub copy → pill CTA(s) → scroll cue.
- **Nav** — fixed `.home-nav` (logo + links, adds blurred dark background once scrolled via
  `.scrolled`), plus a full-screen `.sec-nav` mobile overlay: solid dark scrim (not blurred —
  backdrop-filter was intentionally removed for a rendering bug), big stacked Anton links,
  staggered fade-up reveal on open.
- **FAQ accordion** (`.faq-item`) — plus/rotate icon toggle, `max-height` transition, only one
  item open at a time.

## Avoid generic AI aesthetic

- **No purple/blue gradients, ever.** This is an outdoors/adventure brand — black, white, one
  orange, and real photography of actual destinations. A synthetic color wash immediately
  reads as generic template.
- **No stock illustration or 3D blob graphics.** Every visual should be a real photo of the
  actual place, guide, or vehicle.
- **Don't soften the type.** Anton is meant to feel loud and confident — don't reduce its
  weight, add excessive letter-spacing, or swap it for a "safer" geometric sans.
- **Don't round everything the same amount.** Pills (`999px`) for buttons only; cards use
  `20px` (`rounded-2xl`-equivalent). Mixing radii consistently by element type is what makes
  this look designed rather than templated.
- **CTAs are always action-specific**, tied to WhatsApp or a real next step (`Reservar`,
  `Ver Eventos`, `Detalles`, `más info`) — never a vague "Learn more" or "Click here".
- **Keep the eyebrow-label pattern everywhere.** A new section without one will look
  inconsistent with the rest of the site.
