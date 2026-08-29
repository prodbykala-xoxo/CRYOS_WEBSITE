# KALA / CRY OS — Design System

CRY OS is the visual source of truth for kala's official website. This document
is not a new aesthetic — it is a transcription of the CRY OS interface system
already established in the KALA Artist Profile (CRY OS v2.6 · SESSION LIVE),
extended just enough to cover ecommerce, live ticketing, and media that the
EPK doesn't already show. Every token below with a sampled hex was pulled
directly from screenshots of the real EPK document, not estimated.

Reference lineage (weighted per direction given):
- **Primary structural influence — "glass panel" reference** (Balenciaga-style
  Sneak in Peace style doc): full-bleed cinematic media as the base layer,
  a translucent system panel floating on top rather than a conventional page
  chrome, "broadcast/LIVE status" framing for anything time-sensitive.
- **Primary structural influence — dropdead.world**: a single hyper-cinematic
  full-bleed hero image doing all the "you have entered a world" work, a
  scrolling ticker marquee that carries in-universe copy alongside store
  info, minimal nav floating with zero chrome directly over the hero, and —
  critically — a hard split where commerce screens (the actual product grid)
  go clean, bright/legible, and low-drama the moment a visitor is shopping.
- **Secondary influence — Mono X7 (brutalist bordered grid)**: hairline
  borders as the primary structural device instead of shadows, whisper-weight
  large display type paired with heavily tracked condensed uppercase labels,
  and — validating a pattern already present in the EPK — a bilingual EN/JP
  toggle as a legitimate, load-bearing system element, not decoration.
- **Mood-only**: FF7 / Elden Ring / Kingdom Hearts (JRPG equip-screens,
  item/status UI, summon-tier CG creature moments), Y2K (grain, chrome,
  chain jewelry, contact-sheet photography), high fashion editorial (restraint,
  negative space), loud rock/post-hardcore (live photography, merch energy),
  anime (dramatic contrast, speed/motion).

---

## 1. Brand Foundation

**KALA** — Japan/Canada-based alternative artist. GAME × MUSIC. CRY OS is the
operating-system-like framework the KALA universe runs on. The website is not
a page *about* KALA — it is a live session of CRY OS itself.

Established real terminology (do not invent alternates for these):
- `CRY OS v2.6` — system/version identifier, always paired with a live-state
  descriptor, e.g. `· SESSION LIVE`
- `SCR 0X/0Y — [SCREEN NAME]` — numbered screen/view identifier
- Boot-sequence lines: short `> action ....... STATUS` rows (`OK`, `???`,
  pending states) — used sparingly, at genuine transitions only (first load,
  major state changes), never as decoration on every scroll
- `完了` / `COMPLETE` — status-good marker, paired with a small dot
- `EQUIPPED` — slot-grid pattern (borrowed directly from JRPG/gacha equip
  screens) for affiliations, credits, or curated selections
- Section labels are bilingual pairs: JP term + EN term, e.g. `識別 IDENTITY`,
  `経歴 BIOGRAPHY`, `音源 RECORDINGS`, `競技歴 GAMING HISTORY`, `ライブ THE LIVE
  SHOW`. New sections should follow the same JP+EN pairing convention.
- Existing tour/release names to reuse verbatim: `LIGHT FADE TOUR`,
  `SEKAI//DIVIDE`, tracks `KINGSBLOOD`, `LOCK IN`, `LIGHT FADE`.
- Page furniture: bottom-left breadcrumb, bottom-right `P.0X` page index,
  top-right timestamp, top-left system status line with a small live-state
  dot.

New terminology this project needs to extend the system (kept consistent
with the existing voice, not invented from nothing):
- `LIVE_ARCHIVE`, `EVENT_0XX`, `TRANSMISSION_0XX` — for archive/media, as
  the brief proposes, modeled directly on the EPK's existing `RECORD 01`,
  `EVENT LOG`, `実績 01` numbering pattern.
- `PRODUCT_0XX` — for shop, modeled on the same numbered-record pattern.

---

## 2. Color

Sampled directly from the EPK screenshots (not estimated). This *is* the CRY
OS palette — nothing here is a new invention.

| Token | Hex | Sampled from | Role |
|---|---|---|---|
| `--cry-bg` | `#06070a` | page 1 background | Page canvas, near-black, the dominant ground |
| `--cry-panel-deep` | `#0d1730` | page 1 EQUIPPED panel base | Deepest panel fill, card base |
| `--cry-panel` | `#1c3564` | pages 2/3/5 panel body (avg of `#213e68`,`#1b3666`,`#224068`,`#234069`) | Standard card/panel fill (often a subtle vertical gradient from `--cry-panel-deep` to `--cry-panel-light`) |
| `--cry-panel-light` | `#4a6690` | page 4 lighter panel tint (`#536d97`) | Panel gradient highlight, hover/active card state |
| `--cry-border` | `#2a4a78` | panel edges, interpolated | Hairline panel borders (1px) |
| `--cry-teal` | `#3aa080` | pages 1–5 status/"OK" accent (avg of `#3fa484`,`#369b7d`,`#3caa8d`,`#359a7c`,`#3f977e`) | Status-good, live dot, links, active nav, primary interactive accent |
| `--cry-teal-dim` | `#224e44` | page 1 darker teal | Teal at low emphasis / borders / disabled-adjacent |
| `--cry-amber` | `#c8842c` | pages 2–5 callout accent (avg of `#bb811e`,`#d2892b`,`#be8826`,`#d08a35`) | Highlighted callout boxes, secondary status, achievement/record markers |
| `--cry-white` | `#e2edff` | page 2 heading sample | Headings, primary text — a cool-tinted off-white, never pure `#fff` |
| `--cry-gray` | `#9aa8bc` | interpolated from panel-adjacent body copy | Body copy, secondary metadata |
| `--cry-gray-dim` | `#5c6b80` | interpolated | Tertiary/disabled text, faint dividers |

Usage discipline (carried over from the Mono X7 and glass-panel references):
color is rationed. Teal and amber are the *only* two accent hues in the
system. Never introduce a third chromatic accent. Everything else is the
near-black ground, the navy panel family, and off-white/gray text.

---

## 3. Typography

The EPK is a flattened/rasterized document with no embedded font data, so
these are visual-match specs (substitute fonts named), not literal extracted
font files.

| Role | Character | Substitute stack |
|---|---|---|
| **Display / KALA wordmark** | The existing gothic/tribal wordmark logo — treat as a locked logotype, never reset in a system font | (logo asset only) |
| **Major headings** ("ARTIST PROFILE", section titles) | Bold serif, high contrast, slab-adjacent, confident | `"Zodiak", "Canela", "Georgia", serif` |
| **System labels / metadata** (`CRY OS v2.6`, timestamps, `SCR 0X/0Y`, page index) | Monospace, all-caps or as-is, wide tracking | `"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace` |
| **UI / body / nav** | Clean grotesque sans, tight-to-neutral tracking at body sizes, wider tracking at label sizes (≤12px) — pattern borrowed from both the glass-panel and Mono X7 references | `"Inter", "Neue Haas Grotesk", -apple-system, sans-serif` |
| **JP text** | Paired inline with EN, never isolated or purely decorative | `"Noto Sans JP", "Hiragino Sans", sans-serif` |

Scale (8px base grid, consistent with the EPK's compact metadata sizing):
`10 / 12 / 14 / 16 / 20 / 25 / 32 / 40 / 64 / 96px` — the top two sizes
(64/96) are new, for hero-scale display moments the EPK doesn't need but the
homepage/hero does.

Tracking discipline (borrowed from Mono X7 + glass-panel references): labels
and system metadata at ≤12px track wide (+0.05–0.12em); anything ≥20px tracks
tight to normal. Never track-out a large display headline.

---

## 4. Components (system inventory)

Patterns already proven in the EPK, kept as-is:
- **Panel** — navy gradient fill, 1px `--cry-border`, small interior padding,
  optional JP+EN label header row.
- **Boot line** — `> action ......... STATUS`, monospace, status word colored
  by state (teal = OK, amber = pending/notable, gray = neutral).
- **Status dot** — 4–6px circle, teal when live/online.
- **Equip slot grid** — 2×2 (or N) grid of circular icon + label pairs inside
  a panel, `0X / 0X SLOTS` counter top-right.
- **Record card** — numbered (`RECORD 01`), image, title, spec rows, small
  highlighted callout box in amber-on-dark for the standout achievement line.
- **Event log row** — date, name, venue, right-aligned chevron/arrow marker.
- **Page furniture** — breadcrumb (bottom-left), `P.0X` index (bottom-right),
  timestamp (top-right), system status line (top-left).

New components this build needs, designed as direct extensions of the above
(not a new visual language) plus the two primary reference patterns:
- **Glass HUD panel** (from the glass-panel reference) — translucent
  `--cry-panel` at ~70–80% opacity with backdrop blur, pinned over full-bleed
  media rather than a solid panel. Used for: the homepage NEXT EVENT
  notification, the MEDIA now-playing panel, the persistent cart rail.
- **Broadcast/LIVE badge** (from the glass-panel reference) — filled
  `--cry-teal` (KALA's actual accent, not the reference's red), small,
  uppercase, reserved strictly for genuinely live/on-sale/time-sensitive
  status — never decorative.
- **Ticker marquee** (from dropdead.world) — persistent thin scrolling bar,
  monospace, mixing real store notices (`TICKETS: LIGHT FADE TOUR — TOKYO
  ON SALE NOW`) with in-universe system lines (`CRY OS SYNC ... 98%`). Used
  once, top of homepage, never repeated site-wide so it stays a signal not
  noise.
- **Commerce-clean product card** (from dropdead.world) — the one deliberate
  deviation from the dark system: product grid tiles sit on a near-white or
  neutral-light `--cry-white`-on-dark-ground card so photography and price
  stay maximally legible; system chrome (numbered `PRODUCT_0XX`, status
  label) frames the tile but never sits on top of the product photo itself.
- **Bordered data cell** (from Mono X7, used sparingly) — hairline-border
  grid cells with no radius, for dense data readouts only (tour date tables,
  spec sheets) — not for primary marketing surfaces, which stay in the
  panel/gradient language.

---

## 5. Motion Principles

Priority order, per the brief: **fast → responsive → usable → immersive.**
A single well-placed system animation beats twenty ambient ones.

- Boot-sequence text reveal: once, on first homepage load only (session-
  gated, not repeated on every navigation).
- Panel/HUD entrances: short opacity+translate (150–250ms), never bouncy.
- Ticker marquee: constant slow linear scroll, pausable on hover/focus.
- Hover states: instant color/border changes on interactive elements, no
  more than 120ms.
- Countdown/live-status: numeric tick, no flashy re-render.
- Page transitions: fast crossfade, never a full-screen loader unless a real
  asset (video) needs it.
- No glitch/scanline effects as ambient decoration — reserved, if used at
  all, for a single deliberate state change (e.g. going live).

---

## 6. Photography & Imagery Direction

From the shared reference set: desaturated teal-and-warm cinematic grain,
hoodie silhouettes against open sky, a recurring thorny/organic CG "entity"
motif (summon/aeon-adjacent — flag as a possible recurring World/SYSTEM motif
worth asking about), blue-lit live stage photography with strong beam/haze,
black-and-white contact-sheet close-ups (Y2K digicam energy, chain jewelry,
black nail polish, rings), chain-link and spike-fence textures.

Direction: hero/world moments get the full cinematic treatment (dropdead.world
model). Product photography stays clean and consistent (editorial, minimal,
on a controlled ground) so the shop doesn't inherit hero-level drama at the
cost of legibility.

**Open flag:** actual logo master files, photo/video assets, and any brand
fonts still need to land in this repo as real files (not pasted chat images)
before final production swap-in — see `/assets/README.md` once scaffolding
lands.
