# KALA / CRY OS — Information Architecture

Goal order per the brief: **LIVE → MERCH → MEDIA → WORLD**, with music/
streaming present but never competing with LIVE/MERCH for primary attention.

## Navigation

Persistent top nav, minimal, OS-chrome feeling:

```
KALA          LIVE   MUSIC   MEDIA   SHOP   SYSTEM          CART [00]
```

- `KALA` — wordmark, links home.
- `CART [00]` — persistent, count-driven, opens the cart drawer (no page
  navigation away from where the visitor is).
- Mobile: collapses to wordmark + cart + hamburger; LIVE and SHOP get a
  sticky bottom quick-access bar on mobile specifically (per brief §18 —
  tickets and merch must stay one tap away at all times).

## Sitemap

```
/                          Homepage
/pages/live                LIVE (upcoming shows + archive teaser)
/pages/live-archive        LIVE ARCHIVE (full past-show database)
/collections/all           SHOP — all products
/collections/[handle]       SHOP — collection (e.g. apparel, LIGHT FADE merch)
/products/[handle]         SHOP — product detail
/cart                      Cart (drawer is primary; page is fallback)
/pages/music               MUSIC
/pages/media               MEDIA / TRANSMISSIONS
/pages/system              SYSTEM / WORLD
/blogs/transmissions/[..]  Individual transmission/media entries (Shopify blog)
/blogs/live-archive/[..]   Individual past-event entries (Shopify blog)
```

## Shopify content-type mapping

Chosen so the client can maintain this without a rebuild, per brief §21.

| Site content | Shopify structure | Why |
|---|---|---|
| Products (merch) | **Products** + **Variants** (size/color) + **Collections** | Native commerce — inventory, checkout, discounts all first-class. |
| Upcoming shows | **Metaobjects** (`event`: date, city, country, venue, tour name, support acts, ticket URL, status) rendered via a homepage/LIVE section that queries a metaobject list | Metaobjects give structured, addable/removable entries without touching code — closest Shopify-native analog to a JRPG "event log." Ticket purchases stay off-platform (Ticketmaster/etc. link-out) unless tickets are later sold as Shopify products themselves (also supported — a ticket is just a product with an "event date" variant). |
| Live archive (past shows) | **Blog** (`live-archive`), one **Article** per past event, tagged by year/tour; article image = poster/photo, body = the structured metadata (date, city, venue, support, gallery) | Blog articles are the Shopify-native way to let a client keep adding dated entries indefinitely from the admin, with tagging/filtering for free. |
| Media / Transmissions | **Blog** (`transmissions`), one **Article** per video/photo drop, video embedded via Shopify's native video block or a metafield URL | Same reasoning — indefinitely extensible from admin, no rebuild. |
| Music / releases | **Metaobjects** (`release`: title, cover art, type EP/single/album, streaming links, release date) — small in number, low churn | Doesn't need full blog treatment; a short curated list rendered from metaobjects keeps MUSIC secondary in visual weight per the brief. |
| SYSTEM / World fragments | **Metaobjects** (`world_fragment`) or a `system` blog — kept deliberately sparse and hand-curated, not auto-listed in full up front (discoverable, not dumped) | Matches §12's "the deeper you explore, the more you discover" — the template reveals a partial index and expands on interaction, not a flat archive dump. |
| Homepage NEXT EVENT | Pulls the single nearest-future entry from the `event` metaobject list — no manual homepage edit needed when a new show is added | Removes a maintenance step; adding a show to LIVE automatically updates the homepage. |

## Page-by-page structure

### Homepage
1. Boot sequence (first visit only) → KALA wordmark + `SYSTEM ONLINE`
2. NEXT EVENT — Glass HUD panel over hero media, pulling the nearest `event`
   metaobject: event ID, date, venue, city/country, ticket status, `[ GET
   TICKETS ]`
3. Ticker marquee (store notices + in-universe lines)
4. LIVE teaser (next 2–3 shows, link to full LIVE page)
5. SHOP teaser (3–4 featured products)
6. MEDIA teaser (latest transmission, large video)
7. MUSIC teaser (latest release only — single card, intentionally small)
8. SYSTEM teaser (one cryptic fragment + link, not a summary of the section)
9. Footer (nav recap, social, newsletter, legal)

### LIVE
- Upcoming shows list (event log pattern, chronological, ticket CTA per row)
- LIVE ARCHIVE teaser strip → link to full `/pages/live-archive`

### LIVE ARCHIVE
- Full filterable list (year/tour) of past-event articles, each opening to
  photography/video/poster/metadata for that show

### SHOP
- Collection grid (commerce-clean cards per design system §4)
- Product detail: gallery, variant/size selector, quantity, add-to-cart,
  description, related products — standard Shopify UX, KALA visual skin only

### MEDIA
- Numbered transmissions, one large video-forward entry at a time with
  metadata below, not a grid wall

### MUSIC
- Latest release (large), discography (compact list), streaming links —
  deliberately smaller footprint than LIVE/SHOP/MEDIA

### SYSTEM
- Sparse entry index, expands on click/scroll; mixes CRY OS "documentation"
  styling with narrative fragments; no full lore dump on first view
