# Round 04 — scope and method

**Research date:** 2026-08-15 (AEST/Asia Shanghai session).  **Status:** research complete; awaiting PMO acceptance.  **Authorization:** public-source research and draft-only copy only. No login, contact, message, form submission, demo, deployment, payment, or scraping of Maps/Instagram occurred.

## ICP and non-negotiable boundary

The offer is AU$800 once-only for a static HTML/CSS/light-JS landing page. A fit must be an active, independently controlled local business with an enduring story/service proof that can live on one page. It may link to the customer's existing booking service, phone, email, or Instagram, but it must not carry availability, prices, inventory, ecommerce, payments, account data, CMS, server forms, or ongoing content work for us.

A candidate can be marked **KEEP** only where the evidence shows: current operation; local control; two reproducible presentation problems; two credible budget/brand signals; and either a published business email with a valid mail domain/MX, or an official Instagram active in the prior 90 days. `UNKNOWN` is never treated as a pass.

## Tools and evidence boundary

- `agent-reach doctor --json` was run before research. Its Jina web-reader route was available. The advertised Exa command failed once with `Unknown MCP server 'exa'`; it was not retried or installed. Browser-search results and direct public business pages were used instead.
- Instagram's configured OpenCLI backend required an unavailable browser extension/login. No account was logged into and no IG activity was claimed from that route. A public email is therefore the contact route relied on for each shortlisted business.
- Google Maps was not bulk extracted. The Maps URLs below are manual, reproducible search links; official site/directories are the substantive evidence.
- MX checks used `dig +short MX` on 2026-08-15. An MX record is only domain-routing evidence, not mailbox deliverability, consent, or permission to send.

## Selected destination: Daylesford / Hepburn Springs, Victoria

| Option considered | Visitor/local-SMB signal | Single-page fit | Decision |
| --- | --- | --- | --- |
| Daylesford / Hepburn Springs, VIC | Visit Victoria describes a wellness/mineral-springs destination and a community of artists, healers and small businesses. | High for stable massage/wellness positioning; booking can remain external. | **SELECTED** |
| Margaret River, WA | Strong tourism and independent creative ecosystem. | Medium; wineries, galleries and menus frequently need updates. | HOLD |
| Hahndorf / Adelaide Hills, SA | Historic visitor town with many retail, food and wine businesses. | Low-medium; products, menus and stock make a single evergreen page weak. | HOLD |
| Airlie Beach / Whitsundays, QLD | Visitor demand is strong. | Low; tours, weather, capacity and timetable are core content. | DROP |
| Strahan / West Coast, TAS | Authentic tourism identity. | Low; small independently verifiable pool and booking/timetable dependence. | DROP |

Destination source, retrieved 2026-08-15: https://www.visitvictoria.com/hepburnsprings/ . This source establishes destination context only; it does not establish any merchant's current operation or buying intent.

## Scoring discipline

`KEEP` = hard gates evidenced; `HOLD` = promising but one or more hard gates is unproven; `DROP` = an exclusion applies. A high numerical-looking business signal never overrides a contact, current-operation, ownership, or static-scope failure.
