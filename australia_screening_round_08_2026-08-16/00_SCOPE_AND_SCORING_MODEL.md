# Round 08 — scope, score model and red-team limits

Checked 2026-08-16. This is a public, read-only discovery and screening run for the AU$800 static one-page offer. No one was contacted; no form was submitted; no login, demo, asset reuse, deployment, purchase, or existing-round modification occurred.

## First-principles test

The target is not the visually worst site. It is an active, locally decidable small business for which a fixed, content-bounded landing page can improve visitor trust, service understanding, or a direct contact route without inheriting an operational system.

| Necessary condition | Misuse / attack | Blocking evidence | Application in this run |
|---|---|---|---|
| A business is real and active | Treating a live domain or an old directory as proof of trading | recent external listing, current chamber/ABN status, or current official page corroborated elsewhere | H1 never passes on a DNS or browser result alone |
| A local decision is plausible | Mistaking a directory listing for ownership | chain, head-office control, or only platform identity | H2 needs an individual/local-business signal; legal ownership remains unknown unless explicitly published |
| Static scope has lasting value | Quietly recreating booking, prices, schedules, quote forms, inventory or client data | those dynamic functions are central to the value proposition | a retained page may use only phone/email plus an existing third-party external link |
| The redesign solves visitor harm | Calling taste, a crawler error, or a CAPTCHA a defect | no observable consequence, or only a tool failure | A scores count only visible copy, hierarchy, CTA, contact, mobile, or stale-content faults |
| Contact is usable, not permission | Treating a listed address as consent | personal/guessed email, no MX where required, or unverified legal basis | D measures contactability only; all outreach packages remain NOT VERIFIED and non-sendable |

## 100-point trial scorecard

| Dimension | Weight | Scored only when the evidence supports it |
|---|---:|---|
| A — website redesign need | 40 | visible brand, mobile, information, CTA/contact, or stale-content harm |
| B — business health and quality | 20 | current operation, external presence, investment signals, and local decision evidence |
| C — static one-page fit | 20 | stable content, no inherited backend, durable page value, bounded client-supplied content |
| D — contactability | 10 | public business email, MX, relationship clue, second channel; never consent |
| E — AU$800 plausibility | 10 | two separate capability/investment proxies, viable job value, acquisition role, narrow demo wedge |

Candidate threshold: total >=70, A >=24, B >=12, C >=15, D >=6, and H1–H6 all PASS. 80–100 is Priority A and 70–79 is Priority B. An unverified score is zero, never an optimistic estimate.

## Red-team result

- A public email and valid MX do **not** establish marketing consent, deliverability, or a right to send.
- A site can be old and still be unsuitable if pricing, availability, booking, products, or ongoing client data are its core function.
- Browser failure, anti-bot behaviour, a blank response, and a crawler report count as **0** redesign evidence.
- Business size, ABN registration, reviews, insurance, equipment, or a chamber listing are capability proxies only. They do not prove budget, authority to purchase, or intent to buy AU$800 work.
- The final pool is three, not five: Mown & More remained below the 70-point total and lacked a completed 390px check after the browser session failed; every other potential replenishment had a clearer hard-gate failure. No threshold was relaxed to fill the quota.

## Tool and evidence protocol

- `agent-reach doctor --json` was run. Its Exa command then failed once with `Unknown MCP server 'exa'`; the one permitted alternative was public web search. Instagram connector was unavailable (Chrome extension absent), so Instagram recency was not used as a pass.
- The in-app browser reviewed the three final candidates at ordinary desktop and an explicit 390px viewport. No page was interacted with beyond read-only navigation and DOM inspection.
- `dig MX` verified `bigpond.com -> extmail.bigpond.com` and `prestigecleaningwagga.com.au -> Google Workspace MX`. No message was sent.
