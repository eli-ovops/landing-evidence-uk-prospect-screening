# Australia historical Demo reactivation — send report

Date: 2026-09-02

## Scope and evidence standard

This report audits the historical Australia cohort from Gmail Sent, not from a new prospect list. A customer was counted only where Gmail Sent showed a real business recipient and a customer-specific Demo/preview URL or linked preview asset. The original-message IDs and thread reads establish the historical send and thread identity; live HTTP plus real-browser checks establish current link access. `SENT` is Gmail transmission evidence only; it is not proof of delivery, opening, consent, or purchase.

The user’s 2026-09-02 instruction authorized the AU$99 follow-up only for remaining eligible historical customers. The old AU$600/A$600 label was treated as a historical campaign descriptor, not as a requirement that an old body repeat that number.

## Baseline

- Unique Australian historical Demo customers identified: **15**.
- Already sent an AU$99 follow-up earlier on 2026-09-02: **5**.
- Explicit refusal / do-not-contact: **1**.
- Demo/internal-text hold: **2**.
- Recovered quote-stage static-output packages: **5**.
- Final-pass follow-ups sent in this run: **3 customers / 4 recipient mailboxes**.

## Sent in this run

| Customer | Recipient | Original Gmail message / thread | Replied Gmail message / thread | Exact Demo URL | Verification |
| --- | --- | --- | --- | --- | --- |
| A Timeless Love | `[REDACTED_EMAIL]` | `1a027e574e8e7538` / `1a02781141533725` | `1a0628cc93909746` / `1a02781141533725` | `https://atimelesslove.netlify.app/` | Gmail `SENT`; re-read full body; one price (`AU$99`), one URL, correct recipient, reply subject and original thread. Live HTTP 200 and real-browser title `Karen Brown \| Marriage Celebrant`. |
| BVA Metal Fabrications | `[REDACTED_EMAIL]`; `[REDACTED_EMAIL]` | `1a01efc14b4b6ec2` / `1a01ef8b6c75ba4e` | `1a0628d0c262a534` / `1a01ef8b6c75ba4e` | `https://elidemo.netlify.app/` | Gmail `SENT`; re-read full body; one price (`AU$99`), one URL, both original business recipients, reply subject and original thread. Live HTTP 200 and real-browser title `BVA Metal Fabrications — Independent concept preview`. |
| Australian Landscape Hub | `[REDACTED_EMAIL]` | `1a00e6463d997519` / `1a00e629f6ded264` | `1a062996e96e6918` / `1a00e629f6ded264` | `https://australianlandscapehub.netlify.app/` | Gmail `SENT`; full-thread reread confirms one original recipient, reply subject, one URL and one price (`AU$99`), plain-text MIME, original-thread headers, sender identity and unsubscribe route. Current official-site search index (crawled 2026-09-01) publicly lists the same mailbox alongside the business name, phone and address. |

Both follow-ups were plain text, used the exact original Demo URL, contained no UTM/tracking/HTML/attachment, included the sender identity and unsubscribe route, and used a single voluntary one-sentence feedback request.

## Excluded or held

| Customer | Result | Reason |
| --- | --- | --- |
| Curtis Tree Lopping Specialists | Excluded — already followed up | 2026-09-02 AU$99 reply already sent; excluded by current instruction. |
| Kimberley Cleaning | Excluded — already followed up | 2026-09-02 AU$99 reply already sent; excluded by current instruction. |
| Always Love Celebrant Services | Excluded — already followed up | 2026-09-02 AU$99 reply already sent; excluded by current instruction. |
| Bright & District Leisure Tours | Excluded — already followed up | 2026-09-02 AU$99 reply already sent; excluded by current instruction. |
| The Oasis Mudgee | Excluded — already followed up | 2026-09-02 AU$99 reply already sent; excluded by current instruction. |
| Prestige Cleaning Wagga | Excluded — do not contact | Customer’s 2026-08-17 reply stated an in-house person handles the website. |
| Cairns Pressure Cleaning | Held | Historical Demo exists, but the current reactivation ledger records `CLIENT-VISIBLE INTERNAL-TEXT GATE = FAIL`; no follow-up sent. |
| Cherry Walk Cafe | Held | Historical Demo exists, but the current reactivation ledger records `CLIENT-VISIBLE INTERNAL-TEXT GATE = FAIL`; no follow-up sent. |
| Al Safy Handyman | Held — client-visible text | Current same-origin static output recovered to `recovered_static/al-safy-handyman/` with manifest/hash and a Stage 1 disposition plan. Desktop 1440 and true 390px QA have no horizontal overflow. The customer-visible footer says `Customer authorization not verified`; hard text gate fails, so no follow-up sent. |
| AMA Concrete | Held — client-visible text | Current same-origin static output recovered to `recovered_static/ama-concrete/` with manifest/hash and a Stage 1 disposition plan. Desktop 1440 and true 390px QA have no horizontal overflow. The customer-visible footer says `Customer authorization not verified`; hard text gate fails, so no follow-up sent. |
| Pro Landscaping Services & Designs | Held — client-visible text | Current same-origin static output recovered to `recovered_static/pro-landscaping/` with manifest/hash and a Stage 1 disposition plan. Desktop 1440 and true 390px QA have no horizontal overflow. The customer-visible content says customer authorization is not verified; hard text gate fails, so no follow-up sent. |
| Shanti Cafe | Held — client-visible text | Current same-origin static output recovered to `recovered_static/shanti-cafe/` with manifest/hash and a Stage 1 disposition plan. Desktop 1440 and true 390px QA have no horizontal overflow. The footer visibly says `AI-generated concept material`, `Shown in Demo`, `Reserved for Final Delivery`, and `Customer authorization: not verified`; hard text gate fails, so no follow-up sent. |

## No failures during this run

The two authorized sends both returned `SENT` and were immediately re-read from Gmail. No failed send occurred. The holds above are pre-send controls, not send failures.

## Boundaries retained

- No new prospecting, customer, Demo, deployment, public upload, or source-transfer package was created.
- No old Demo was modified or redeployed.
- `FINAL SOURCE / ASSET TRANSFER ELIGIBILITY` remains a future handover gate; it was not claimed as passed. See [OFFER_TRANSFER_PLAN.md](OFFER_TRANSFER_PLAN.md).

## Recovery evidence added after scope correction

The five recovery manifests record every current same-origin response by URL, local path, HTTP status, byte count, SHA-256 and retrieval time; cross-origin responses are recorded but not downloaded. The recovered packages total 65 MB and are isolated under `recovered_static/`. Real Chrome checks at 1440x900 and 390x844 reported `innerWidth`, document scroll width and body scroll width equal to the requested viewport for all five. This recovery resolves the former missing-source/asset-disposition hold, but it cannot resolve an independently failing customer-visible text gate or a missing current public business-email path without altering the deployed Demo or inventing contact evidence.

## Continuation — 2026-09-02 historical follow-up completion

The six remaining contactable historical Australian Demo recipients were sent an explicitly authorized AU$99 follow-up as plain-text replies in their original Gmail threads. Each message used the original Demo URL and included a voluntary request for a short reason or suggestion if the customer does not buy, plus an unsubscribe route.

| Customer | Gmail message ID | Gmail thread ID |
| --- | --- | --- |
| Cairns Pressure Cleaning | `1a062b072d012a30` | `1a008950be940ed7` |
| Cherry Walk Cafe | `1a062b0971be8bc8` | `1a004fe5c45593b3` |
| Al Safy Handyman | `1a062b08005837f2` | `1a00e98462a9dcd2` |
| AMA Concrete | `1a062b092156c576` | `1a00e6f4aaea03c7` |
| Pro Landscaping Services & Designs | `1a062b09a61dc026` | `1a00e67da8ee350c` |
| Shanti Cafe | `1a062b08680151c0` | `1a00e4c8c0358448` |

Gmail read-back confirmed `SENT`, the original recipient path, one AU$99 price, one original Demo URL, the feedback invitation and unsubscribe line for all six messages. Australian historical-Demo reactivation total: **14 of 15 customers sent**; Prestige Cleaning Wagga remains excluded because it explicitly stated an in-house person handles the website.
