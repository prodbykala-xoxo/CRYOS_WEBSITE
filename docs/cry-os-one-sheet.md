# CRY OS — DESIGN SYSTEM ONE-SHEET

**For:** Claude Code, building kala-web (or any new CRY OS surface)
**Version:** 2026.08 · derived from the shipped 2026 EPK
**Read this whole file before writing any code.**

This is the authoritative token/component/voice reference for this project,
provided directly by the client. Where it differs from earlier approximations
in `design-system.md` (which were sampled from EPK screenshots before this
doc was provided), **this file wins.** `design-system.md` layers the
structural/layout patterns pulled from the three external style references
(glass-panel, dropdead.world, Mono X7) on top of the tokens defined here —
those two documents are complementary, not competing.

---

## 1. WHAT CRY OS IS

CRY OS is KALA's visual operating system. Not a theme — a fiction. Every artifact
is presented as a *screen inside a machine that is already running*. The viewer is
never the audience; they're a terminal operator who happened to be looking when the
session was live.

Three ideas hold it together:

**It's a dystopian surveillance OS.** Cold graphite, muted signal-cyan, amber for
anything recording or important. Deliberately not Windows, not macOS, not Bootstrap,
not a SaaS dashboard. Numbered panels imply a signal chain, not a nav menu.

**It borrows late-90s JRPG menu chrome.** Translucent navy menu boxes with a light
steel border, hard black drop shadows on text, an amber ▶ cursor on every row, HP-bar
stat gauges, materia orbs. Final Fantasy VII status screen, not a fantasy pastiche.

**It is never fully exposed.** This comes straight from the KALA brand doc. Restraint
is the design principle, not just the copy principle. Less is louder. Don't fill
every surface.

### Existing apps in the suite (all share these tokens)

| App | Purpose |
|---|---|
| **SIGNAL STUDIO** | WebGL lyric-video compositor for OBS. Canvas → shader signal chain. |
| **MERCH TERMINAL** | B4 merch menu boards. Millimetre document model, one draw path. |
| **CAPSULE TERMINAL** | 105×130mm gashapon front-panel signs. |
| **2026 EPK** | 5-screen artist profile, EN + JP. Source of the JRPG layer. |

New surfaces must look like siblings of these, not cousins.

---

## 2. DESIGN TOKENS — COPY THESE EXACTLY

```css
:root{
  /* surfaces */
  --void:#08090b;        /* page background, the deepest black         */
  --panel:#101215;       /* raised panel                                */
  --sunk:#0b0d0f;        /* inset well                                  */
  --line:#20242a;        /* hairline divider                            */
  --line-hot:#2e343c;    /* active divider                              */
  /* type */
  --ink:#e6ecf2;         /* primary text                                */
  --ink-dim:#8b959f;     /* secondary / chrome labels                   */
  --ink-faint:#4a525b;   /* tertiary, timestamps, unit labels           */
  /* signal */
  --sig:#8fb3b3;         /* dusty signal-cyan — the house accent        */
  --sig-hot:#bfe0dd;     /* bright cyan, headings inside menu boxes     */
  /* status */
  --alert:#d0552f;       /* burnt orange — errors, REC                  */
  --amber:#c98a34;       /* important figures, cursors, awards          */
  --live:#4bbf9a;        /* green — session live, OK, COMPLETE          */
  /* JRPG menu layer */
  --edge:#9fbdd8;        /* menu box border, light steel                */
  --menu-hi:#1b3f7a;     /* menu gradient top                           */
  --menu-lo:#050b1c;     /* menu gradient bottom                        */
}
```

**Colour discipline.** The palette is almost entirely black and steel-blue. Cyan and
amber are *events*, not decoration. If more than ~10% of a screen is coloured, it's
wrong. Never introduce a new hue without a reason — no purple, no pink, no gradients
outside the two defined above.

---

## 3. TYPOGRAPHY

All open-licensed, all on Google Fonts, all free for web and print.

```css
--ui:   "Space Mono", ui-monospace, monospace;          /* body copy, UI      */
--tel:  "Share Tech Mono", ui-monospace, monospace;     /* telemetry, data    */
--disp: "Cinzel", serif;                                /* display headings   */
--px:   "Press Start 2P", monospace;                    /* panel titles, 8-bit */
--jp:   "Zen Kaku Gothic New", "Noto Sans JP",
        "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, sans-serif;
```

### Role rules — do not swap these around

| Face | Use for | Never use for |
|---|---|---|
| **Cinzel** (900 / 600) | Big titles, numbers, artwork names. All-caps by design. | Sentences. It has **no lowercase**. A full sentence in Cinzel reads as shouting. Learned the hard way. |
| **Space Mono** (400 / 700) | Body copy, menu row values, buttons. | Long Japanese passages. |
| **Share Tech Mono** (400) | Status bars, dates, stat figures, captions, handles, unit labels. Always letterspaced `.10–.16em`. | Paragraphs. |
| **Press Start 2P** (400) | Panel titles only, 9–13px, `text-shadow:2px 2px 0 #000`. | Anything over ~20 characters. It is enormous per glyph. |
| **Zen Kaku Gothic New** (400/700/900) | All Japanese. Also the Latin fallback inside JP documents. | — |

### Suite font library (available across CRY OS apps, use sparingly)

Cinzel Decorative · Cormorant Garamond · EB Garamond · Marcellus · Uncial Antiqua ·
MedievalSharp · Grenze Gotisch · Pirata One · IM Fell English · VT323 ·
Major Mono Display · JetBrains Mono · IBM Plex Mono · DotGothic16 · Silkscreen ·
Noto Serif JP · Shippori Mincho · Zen Old Mincho · Kaisei Tokumin · Yuji Syuku · M PLUS 1p

### Japanese typesetting

Japanese needs **more leading than Latin at the same size**. Body copy: `line-height:1.86–1.95`,
`letter-spacing:.02em`. A layout tuned for English will overflow when the copy is
swapped to Japanese — budget roughly 8–10% more vertical space per panel.

---

## 4. COMPONENT LANGUAGE

Lift these verbatim. They are the system.

### Scanline overlay (on every screen)

```css
.screen::after{
  content:"";position:absolute;inset:0;pointer-events:none;z-index:60;
  background:repeating-linear-gradient(0deg,
    rgba(0,0,0,.22) 0px, rgba(0,0,0,.22) 1px, transparent 1px, transparent 3px);
  mix-blend-mode:multiply;opacity:.55;
}
```

### Vignette

```css
.vig{position:absolute;inset:0;z-index:55;pointer-events:none;
  background:radial-gradient(120% 90% at 50% 45%,transparent 40%,rgba(0,0,0,.55) 100%)}
```

### Status bar (top and bottom chrome)

44px tall, Share Tech Mono 14px, `letter-spacing:.16em`, `background:#05070a`.
Left: a pulsing `--live` dot + `CRY OS v2.6 · SESSION LIVE` + screen ID.
Right: context + timestamp. This frame is what sells the fiction. Keep it on every page.

```css
.dot{width:7px;height:7px;border-radius:50%;background:var(--live);
  box-shadow:0 0 8px var(--live);display:inline-block}
```

### JRPG menu box — the signature container

```css
.mbox{position:relative;border:2px solid var(--edge);border-radius:5px;
  background:linear-gradient(180deg,
    rgba(27,63,122,.90) 0%, rgba(10,24,58,.93) 48%, rgba(5,11,28,.96) 100%);
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.13),
             inset 0 3px 26px rgba(120,180,255,.12),
             0 0 0 1px #000, 0 12px 34px rgba(0,0,0,.65);
  padding:20px 24px;overflow:hidden}
/* graphite variant — use for SECONDARY / supporting panels */
.mbox.flat{background:linear-gradient(180deg,rgba(14,20,30,.94),rgba(6,9,14,.97));
  border-color:#3d4a58}
```

**Hierarchy rule:** blue box = primary content. Flat graphite box = supporting content.
An all-blue page has no hierarchy.

### Panel title

```css
.mtitle{font-family:var(--px);font-size:11px;letter-spacing:.10em;color:var(--sig-hot);
  text-shadow:2px 2px 0 #000;margin-bottom:14px;display:flex;align-items:center;gap:12px}
```

Pattern: `ENGLISH TITLE` + small JP gloss + right-aligned meta.
**In a Japanese-primary document, flip it:** JP leads in Zen Kaku 900 at 15px, English
becomes the small Press Start 2P tag.

### Menu row with amber cursor

```css
.row{display:flex;align-items:baseline;gap:14px;padding:8px 0 8px 26px;position:relative;
  border-bottom:1px solid rgba(159,189,216,.16)}
.row::before{content:"";position:absolute;left:4px;top:14px;
  border-left:9px solid var(--amber);
  border-top:6px solid transparent;border-bottom:6px solid transparent;
  filter:drop-shadow(1px 1px 0 #000)}
```

`.k` = key in Share Tech Mono cyan. `.v` = value in Space Mono.

### Materia orb

```css
.orb{width:58px;height:58px;border-radius:50%;flex:0 0 auto;
  background:radial-gradient(circle at 33% 27%,#ffffff 0%,var(--c) 26%,#0a1526 78%,#03060c 100%);
  box-shadow:0 0 16px var(--c),0 0 34px rgba(0,0,0,.8),inset 0 -6px 12px rgba(0,0,0,.6)}
```

Set `--c` per orb. Used for credentials/equipment slots. Four is the right number.

### Stat gauge (HP bar)

```css
.gauge{flex:1;height:14px;background:#060a12;border:1px solid #33445c;
  box-shadow:inset 0 1px 3px rgba(0,0,0,.9)}
.gauge i{display:block;height:100%;
  background:linear-gradient(180deg,#d7f2ee 0%,var(--sig-hot) 34%,#4d8f92 100%);
  box-shadow:0 0 10px rgba(191,224,221,.45)}
.gauge.amb i{background:linear-gradient(180deg,#f4dfae 0%,var(--amber) 34%,#7d5518 100%)}
```

⚠️ **Gauges compare things.** If the smallest bar makes something look weak, use plain
figures instead. The EPK dropped its gauges for exactly this reason.

### Image frame

```css
.shot{position:relative;overflow:hidden;border:2px solid var(--edge);border-radius:4px;
  box-shadow:0 0 0 1px #000,0 10px 30px rgba(0,0,0,.7);background:#05070c}
.shot img{width:100%;height:100%;object-fit:cover;display:block}
.shot figcaption{position:absolute;left:0;right:0;bottom:0;padding:9px 12px;
  background:linear-gradient(180deg,transparent,rgba(3,5,10,.94));
  font-family:var(--tel);font-size:12.5px;letter-spacing:.13em;color:var(--sig-hot)}
```

### Award / callout box

1px `--amber` border, `linear-gradient(180deg,rgba(201,138,52,.20),rgba(201,138,52,.05))`,
title in Press Start 2P `#fbe3b6`, body in Space Mono. Use for the one thing on a screen
that matters most. Maximum one per panel.

### Universal text treatment

Every piece of text over a menu box gets `text-shadow:1px 1px 0 #000` (2px for headings).
This is the single most FF7 detail in the system. Don't skip it.

---

## 5. KALA BRAND RULES (these outrank design preference)

From the 2026 KALA Branding doc.

**Core message.** KALA makes music that gives people permission to feel. Not
performative, not optimised, not filtered.

**The four pillars.**

| Pillar | Meaning |
|---|---|
| Emotional Honesty | Nothing is performative. |
| Restraint | No over-explaining, over-posting, over-exposing. Less increases impact. |
| Mystery | Not everything is revealed. The audience should lean in. |
| Intensity | Quiet or loud, every output carries weight. |

**The look.** Anonymity, scale, contrast. No visible logos or status signals. Palette
almost entirely black. Silhouettes oversized and shapeless — Rick Owens, Yohji Yamamoto.
Face usually obscured by shadow, fabric or eyewear. When visible, contrast is the focal
point: pale skin, tattooed hands, striking blue eyes. **Those moments are rare and
intentional.** Recognisable, never fully exposed.

**Design consequences.**
- Never a full-face hero image above the fold. Hands, silhouette, obscured face.
- Blue eyes are the payoff — use once, late, never as wallpaper.
- Nothing should feel over-designed or over-explained. Empty space is the brand.

---

## 6. COPY VOICE

**English.** Short sentences. Plain words. First person where it's KALA speaking, third
person for bios (press expects it). No marketing adjectives, no "elevate", "unleash",
"seamless". State the fact and stop. Every claim must be checkable — a soft number
costs more credibility than it buys.

**Japanese.** 常体 (plain form), noun-final phrasing, label one-sheet register.
No です・ます, no exclamation marks, no sales voice. Write it, don't translate it —
a literal translation of English marketing copy reads as machine output.

---

## 7. TECHNICAL LESSONS — READ BEFORE YOU DEBUG

Each of these cost real time during the EPK build.

**Class-name collisions with scoped selectors.** `#s4 .btm` (specificity 101) silently
beat the chrome rule `.bar.btm` (20) and blew out the layout. Namespace utility classes.

**Auto margins eat flex-grow.** `margin-top:auto` on a flex child consumes free space
*before* `flex-grow` on a sibling. A container that "won't fill" is usually this.

**Fixed-height flex children still shrink.** `height:520px` on a column-flex child does
nothing without `flex:0 0 auto`. Always pair them.

**Audit for clipping programmatically.** Don't eyeball it:
```js
[...document.querySelectorAll('.mbox,.body')]
  .filter(e => e.scrollHeight > e.clientHeight + 1)
```

**Chromium's PDF export is not mobile-safe.** Live CSS produced 129 transparency groups,
165 soft masks and 142 shadings per page. Desktop readers coped; phones rendered a blank
white page. Fix: render each page to PNG at 2× and rebuild with `img2pdf`. Verify with
`sum(pdf.count(k) for k in [b'/Group',b'/SMask',b'/Shading',b'/BM']) == 0`.

**Embed fonts, subset the Japanese.** The full JP face is ~1MB per weight. Subset to the
glyphs actually used (`fontTools.subset --text-file=`) → ~51KB. Verify coverage:
```python
set(document_chars) - set(chr(c) for c in TTFont(f).getBestCmap())  # must be empty
```

**Crop images at the source, don't fight `object-position`.** A 5-person group photo will
never fit a 3.8:1 letterbox. Re-cut the asset to the target ratio instead.

**Colour grading.** Selective-colour masks bleed badly on lavender/blue source footage.
A gentle global grade — desaturate to ~0.52, tint `[0.90, 0.96, 1.06]`, contrast 1.20
biased dark, soft vignette — keeps the blue iris dominant without artifacts.

---

## 8. BUILDING THE WEBSITE — CONSTRAINTS

**Do**
- Extract these tokens into a standalone `cryos.css`, imported everywhere.
- Keep the top/bottom status bar chrome. It's the whole identity.
- Rebuild layouts responsively. The EPK is locked to 1920×1080 and **cannot** be resized
  into a phone layout — mobile needs its own grid.
- Load real image files (WebP + fallback), not base64. The EPK embeds because it must
  work offline; a site must not.
- Respect `prefers-reduced-motion` — scanlines and flicker are an accessibility issue.
- Check contrast. `--ink-dim` on `--void` passes; `--ink-faint` does not — decoration only.

**Don't**
- Don't put CRY OS on a template platform. Squarespace/Wix will fight this the whole way.
- Don't build release links, tour dates, store or mailing list yourself.
  Use Linkfire/Feature.fm, Bandsintown, Shopify, Mailchimp.
- Don't add hues outside the palette.
- Don't fill the empty space. Restraint is a pillar.

**Stack.** Static site, hand-coded, on Netlify / Vercel / Cloudflare Pages.

**Check first:** does SACRA MUSIC already run an official KALA site or landing page?
Don't build a competing one.

> **Project decision (2026.08.29):** for *this* build, the client confirmed Shopify is
> the platform for the whole site — LIVE, SHOP, MEDIA, and SYSTEM/WORLD all live in one
> Shopify theme, per the original brief. The "static site + third-party point tools"
> guidance above is this one-sheet's generic default for lightweight one-off CRY OS
> surfaces; it does not apply to kala-web. Everything else in this document (tokens,
> components, brand rules, copy voice, technical lessons) still applies in full.

---

## 9. ASSET INVENTORY

- **Logo:** KALA wordmark, black-on-transparent original; white version generated by
  recolouring the alpha channel. Never modify or redraw the mark.
- **Photography:** artist portraits (obscured face), live shots (Zepp Yokohama, clubasia),
  band group shot, MV stills (desert/creature, blue room, snow, grass, arch), B&W hand
  and contact-sheet frames, graded blue-eye macro.
- **Reference builds:** `KALA_EPK_2026_EN.html` and `KALA_EPK_2026_JP.html` are the
  canonical implementations. Every component above is live in those files.

---

## 10. THE ONE-LINE TEST

Before shipping any CRY OS screen, ask:

> Does this look like a machine that was already running before anyone opened it,
> and does it show less than it knows?

If no to either, it isn't CRY OS yet.
