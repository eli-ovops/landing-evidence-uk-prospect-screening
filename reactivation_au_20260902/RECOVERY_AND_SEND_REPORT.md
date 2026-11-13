# Historical static-output recovery and send evidence — 2026-09-02

## Recovery scope

Only the exact existing Netlify Demo origin was recovered per target. Each package retains current deployed HTML plus browser-requested same-origin static responses, with URL, local path, HTTP status, bytes, SHA-256, and retrieval time in its `RECOVERY_MANIFEST.json`. Cross-origin dependencies were recorded but not downloaded. No customer website was crawled; no deployed Demo was modified.

| Target | Recovered path | Same-origin saved resources | Saved bytes | Cross-origin recorded | Local QA result |
|---|---|---:|---:|---:|---|
| Curtis Tree Lopping Specialists | `recovered_static/curtis/` | 8 | 18,439,581 | 0 | Desktop and true 390px Mobile HTTP 200, no same-origin resource error, text/links match online, all images loaded. |
| Kimberley Cleaning | `recovered_static/kimberley/` | 9 | 10,468,994 | 3 | Desktop and true 390px Mobile HTTP 200, no same-origin resource error, text/links match online, all images loaded. |
| Bright & District Leisure Tours | `recovered_static/bright/` | 20 | 1,441,353 | 0 | Desktop and true 390px Mobile HTTP 200, no same-origin resource error, all 22 images loaded. |
| The Oasis Mudgee | `recovered_static/oasis/` | 8 | 321,111 | 3 | Desktop and true 390px Mobile HTTP 200, no same-origin resource error, all images loaded. |
| Always Love Celebrant Services | `recovered_static/always-love/` | 28 | 3,636,129 | 3 | Desktop and true 390px Mobile HTTP 200; after each native lazy image was scrolled into view, all 23 images loaded with no same-origin resource error. |

The recovered packages are static runtime outputs, not a claim that the historical development workspaces have been recovered. Their quotation-stage dispositions are in [OFFER_TRANSFER_PLAN.md](OFFER_TRANSFER_PLAN.md); `FINAL SOURCE / ASSET TRANSFER ELIGIBILITY` remains a separate pre-handover gate.

## Gmail native reply sends

| Target | Recipient | Gmail message ID | Thread ID | Date shown by Gmail | Verification |
|---|---|---|---|---|---|
| Curtis Tree Lopping Specialists | `[REDACTED_EMAIL]` | `1a0623058801b0d1` | `1a009c0b613f59cb` | Wed, 2 Sep 2026 05:55:30 -0700 | `SENT` label; reply subject; exact English plain-text body; one Demo URL; link reopened at HTTP 200. |
| Kimberley Cleaning | `[REDACTED_EMAIL]` | `1a06230da67eaf82` | `1a0093d2930dc5d2` | Wed, 2 Sep 2026 05:56:03 -0700 | `SENT` label; reply subject; exact English plain-text body; one Demo URL; link reopened at HTTP 200. |
| Bright & District Leisure Tours | `[REDACTED_EMAIL]` | `1a062315cade72f8` | `1a003593f2d9ae68` | Wed, 2 Sep 2026 05:56:37 -0700 | `SENT` label; reply subject; exact English plain-text body; one Demo URL; link reopened at HTTP 200. |
| The Oasis Mudgee | `[REDACTED_EMAIL]` | `1a06231c9abf2920` | `1a003304def9cdc7` | Wed, 2 Sep 2026 05:57:04 -0700 | `SENT` label; reply subject; exact English plain-text body; one Demo URL; link reopened at HTTP 200. |
| Always Love Celebrant Services | `[REDACTED_EMAIL]` | `1a06235ce1602688` | `1a0051073da659c2` | Wed, 2 Sep 2026 06:01:28 -0700 | `SENT` label; reply subject; exact English plain-text body; one Demo URL; link reopened at HTTP 200. |

All five sends use the supplied AU$99 AS-SHOWN historical-target exception. No HTML, Chinese translation, internal QA content, screenshot, or tracking element was included in the customer email bodies.

## Remaining holds

- Cairns Pressure Cleaning — client-visible internal-text gate fails.
- Cherry Walk Cafe — client-visible internal-text gate fails.
- Prestige Cleaning Wagga — permanently excluded due its explicit reply.
