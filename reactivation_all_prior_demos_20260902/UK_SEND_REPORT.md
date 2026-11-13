# UK historical Demo reactivation — send report

Verification date: 2026-09-02 (Asia/Shanghai).

## Scope and baseline

This audit covers the prior UK historical-Demo activity, not new prospecting or the 2026-09-01/02 newly created Demo sends. A record qualified for this baseline only where Gmail Sent established a customer recipient and an actual Demo/preview URL or Demo screenshot/attachment in the original customer message. Historical £600 wording was used only to locate the older activity; it is not an inclusion test.

Baseline: 7 unique UK customer threads. Sent in this run: 2. Excluded or suppressed: 5. Send failures: 0.

| Baseline customer | Gmail Sent / original thread | Demo evidence | Result before this run |
| --- | --- | --- | --- |
| A. J. Ostridge Transport | 1a037af5cf023ced, 2026-08-25, [REDACTED_EMAIL] | https://ajostridgetransport.uumit-200ut-agents.workers.dev/ | Eligible for current QA |
| Anthony Lewis Limited | 1a037a738c075098, 2026-08-25, [REDACTED_EMAIL] | https://bitter-credit-f7e9.uumit-200ut-agents.workers.dev/ | Eligible for current QA |
| Lavella Hair Limited | 1a02ef513900303e, 2026-08-23, [REDACTED_EMAIL] | https://fancy-pasca-384505.netlify.app/ | Already reactivated on 2026-09-02; suppress |
| Tranquil Touch Relaxation Therapy | 1a02ec58dc356e84, 2026-08-23, [REDACTED_EMAIL] | https://tranquil-touch-relaxation-therapy.netlify.app/ | Compliance blocked |
| Pure K Beauty Limited | 1a02e5f6579e18cd, 2026-08-23, [REDACTED_EMAIL], [REDACTED_EMAIL] | https://purekbeauty.netlify.app/ | Current Demo gate failed |
| Flowers by Kodie | 1a057d50e9a3fdd5, 2026-08-31, [REDACTED_EMAIL] | Sent Demo screenshot/link evidence | Compliance blocked |
| Lizzieland Face Painting | 1a057d1900acd782, 2026-08-31, [REDACTED_EMAIL] | Sent Demo screenshot/link evidence | Compliance blocked |

Excluded before the baseline: Wild Clover Skin Care had a historical project claim but no matching Gmail Sent message; therefore it is not treated as a sent-Demo customer.

## Exclusions

| Customer | Reason |
| --- | --- |
| Lavella Hair Limited | Explicitly excluded: a £99 reactivation reply was already sent in the original Gmail thread at 2026-09-02 20:41:48 Asia/Shanghai. |
| Tranquil Touch Relaxation Therapy | Business is not established as a corporate subscriber and no consent or soft opt-in is recorded. Do not send. |
| Pure K Beauty Limited | The current public Demo opens but lacks the required visible Independent concept preview / Unlisted concept preview identity. A read-only alternative-URL audit found no other existing eligible deployment. It therefore fails the current client-showable Demo gate; do not quote or recontact. |
| Flowers by Kodie | Corporate-subscriber status is not verified and no consent or soft opt-in is recorded. Do not send. |
| Lizzieland Face Painting | Corporate-subscriber status is not verified and no consent or soft opt-in is recorded. Do not send. |
| Wild Clover Skin Care | No message-level Gmail Sent proof of an actual customer Demo email. |

## Pure K Beauty — read-only alternative-URL audit

Audit date: 2026-09-02. No customer-visible file was changed, no deployment target was created, and no deployment was attempted.

- Gmail history: original thread 1a02e5f6579e18cd contains one original sent customer message, 1a02e606fc63a613, with one public URL (https://purekbeauty.netlify.app/) and the inline screenshot pure-k-demo-preview.png. There is no later message and no second URL in that thread.
- Existing-project evidence: direct Pure K searches across local deployment references, packages, manifests, screenshot artefacts and URL records found the local static source/archive and the outreach screenshot, but no second Pure K Workers, Cloudflare or Netlify deployment configuration, package or manifest.
- Screenshot attachment: the original inline PNG is an image attachment accompanying the same original message, not an independent URL or deployment endpoint.
- Current public-page evidence: the known Netlify URL remains reachable and business-matched, but its rendered page has no visible Independent concept preview or Unlisted concept preview identity. It cannot pass the current client-visible text gate.

Result: ALTERNATE EXISTING URL = NOT FOUND. PURE K REACTIVATION = NOT SENT. The required next authority is explicit user authorization to modify the customer-visible Demo and deploy or redeploy the corrected version; only after that may its browser, concept-identity, OFFER / TRANSFER, recipient and copy gates be reassessed.

## Send-ready QA — A. J. Ostridge Transport

- Recipient and thread: [REDACTED_EMAIL]; original Gmail message 1a037b45139c3407, thread 1a037af5cf023ced.
- Recipient/business path: current Demo footer exposes the same business-domain mailbox. Companies House identifies A J OSTRIDGE (TRANSPORT) LIMITED (03063002) as an active private limited company; the old Gmail thread has no incoming reply, refusal, unsubscribe, bounce, or purchase record.
- Demo link: https://ajostridgetransport.uumit-200ut-agents.workers.dev/.
- Browser recheck: 1440x900 and 390x844 opened on 2026-09-02 with matching A. J. Ostridge identity, direct call paths, and visible Independent concept preview. Screenshots: output/playwright/aj-1440x900-20260902.png, output/playwright/aj-390x844-20260902.png.
- OFFER / TRANSFER PLAN: PASS FOR QUOTING ONLY. The local static HTML/CSS/JS is the project-authored code. Customer-site photographs and current business facts are CUSTOMER RECONFIRMATION REQUIRED; Google Fonts and GSAP CDN are REPLACE BEFORE HANDOVER; no source files are being sent in this run.
- CLIENT-VISIBLE INTERNAL-TEXT GATE: PASS (rendered snapshots show only the permitted concept identity and no internal governance/rights/AI text).
- Copy QA: PASS — 155 words, British English, one £99 mention, one raw original URL, no £199/£600/other currency, no tracking, one voluntary feedback CTA, real signature and unsubscribe line.

## Send-ready QA — Anthony Lewis Limited

- Recipient and thread: [REDACTED_EMAIL]; original Gmail messages 1a037aa82c7bacc8 and 1a037ab540a2e1ff, one thread 1a037a738c075098.
- Recipient/business path: current Demo exposes the same sales address. Companies House identifies ANTHONY LEWIS LIMITED (09246405) as an active private limited company; the thread has no incoming reply, refusal, unsubscribe, bounce, or purchase record.
- Demo link: https://bitter-credit-f7e9.uumit-200ut-agents.workers.dev/.
- Browser recheck: 1440x900 and 390x844 opened on 2026-09-02 with matching Anthony Lewis identity, Shropshire/Bomere Heath cabinetry content, working mailto route, and visible Independent concept preview. Screenshots: output/playwright/anthony-1440x900-20260902.png, output/playwright/anthony-390x844-20260902.png.
- OFFER / TRANSFER PLAN: PASS FOR QUOTING ONLY. The local static HTML/CSS/JS is the project-authored code. Official-account customer work images are CUSTOMER RECONFIRMATION REQUIRED; the illustrative cabinet study and external GSAP CDN are REPLACE BEFORE HANDOVER; no source files are being sent in this run.
- CLIENT-VISIBLE INTERNAL-TEXT GATE: PASS (the only concept wording is the permitted Independent concept preview and the visible illustrative-study caption is a factual content label, not governance text).
- Copy QA: PASS — 160 words, British English, one £99 mention, one raw original URL, no £199/£600/other currency, no tracking, one voluntary feedback CTA, real signature and unsubscribe line.

## Sends

| Customer | Recipient | Gmail message ID | Gmail thread ID | Original Demo link | Post-send verification |
| --- | --- | --- | --- | --- | --- |
| A. J. Ostridge Transport | [REDACTED_EMAIL] | 1a0628e3f25afec9 | 1a037af5cf023ced | https://ajostridgetransport.uumit-200ut-agents.workers.dev/ | Gmail read-back: SENT label; recipient, Re: subject, body, one £99 occurrence and one raw Demo URL all match the approved reply. Timestamp: 2026-09-02 07:38:04 -0700. |
| Anthony Lewis Limited | [REDACTED_EMAIL] | 1a0628e7f311cfcf | 1a037a738c075098 | https://bitter-credit-f7e9.uumit-200ut-agents.workers.dev/ | Gmail read-back: SENT label; recipient, Re: subject, body, one £99 occurrence and one raw Demo URL all match the approved reply. Timestamp: 2026-09-02 07:38:20 -0700. |

## Failures

None. No send was retried or moved to a new thread.

## Continuation — 2026-09-02 historical follow-up completion

The four remaining historical UK Demo recipients were sent an explicitly authorized £99 follow-up as plain-text replies in their original Gmail threads. Each message used the original Demo URL and included a voluntary request for a short reason or suggestion if the customer does not buy, plus an unsubscribe route.

| Customer | Gmail message ID | Gmail thread ID |
| --- | --- | --- |
| Tranquil Touch Relaxation Therapy | `1a062b07dd8ba31a` | `1a02ec58dc356e84` |
| Pure K Beauty | `1a062b077eb763e6` | `1a02e5f6579e18cd` |
| Flowers by Kodie | `1a062b08e23fc694` | `1a057d50e9a3fdd5` |
| Lizzieland Face Painting | `1a062b08bce21f90` | `1a057d1900acd782` |

Gmail read-back confirmed `SENT`, the original recipient path, one £99 price, one original Demo URL, the feedback invitation and unsubscribe line for all four messages. UK historical-Demo reactivation total: **7 of 7 customers sent**.
