# 03 — KEEP evidence card and red-team

## P1 — Peter Izzard Photography

- **Official site:** https://www.peterizzardphotography.com.au/ (retrieved 2026-08-15; HTTPS returned 200 in a header check).
- **Independent/local-operation evidence:** Peter's site names him, gives `2a Collins St Kiama NSW 2533` and phone `0431 776 036`; the [Destination Kiama 2026 visitor guide](https://kiama.com.au/wp-content/uploads/2025/12/DK-2026-Visitor-Guide_FINAL-1.pdf) independently lists the business, phone and domain in its creative-arts directory. The directory is independent confirmation of a local operating listing; it does not prove legal ownership.
- **Public commercial email:** `[REDACTED_EMAIL]`, published on [Peter Izzard Fine Art Photography contact](https://peterizzardfineartphotography.com.au/pages/contact), retrieved 2026-08-15. The fine-art site is linked from the main site's `Landscape`/`Shop` navigation. DNS check on 2026-08-15 returned `peterizzardphotography-com-au.mail.protection.outlook.com` for MX. This verifies a routable domain's MX record, **not** mailbox delivery or marketing consent.
- **Instagram:** main site links `@southcoast_photographic`; direct current-post verification was **not available** because agent-reach's Instagram backend requires an unavailable Chrome extension. Instagram is not relied on to pass contact eligibility.

### Evidence of business quality / ability to pay

1. **Independent evidence:** the current Destination Kiama directory retains Peter in the local Creative Arts / Photography list with a dedicated domain and phone. [Source](https://kiama.com.au/wp-content/uploads/2025/12/DK-2026-Visitor-Guide_FINAL-1.pdf), retrieved 2026-08-15.
2. **Merchant self-description:** the home page states 15+ years' photographic career, work for diverse clients, and describes itself as award-winning across wedding, portrait and commercial photography. [Source](https://www.peterizzardphotography.com.au/), retrieved 2026-08-15. This is a self-claim, not independently verified.
3. **Merchant self-description:** the site presents a physical Kiama address, telephone number, named photographer, testimonials, and distinct commercial/fine-art destinations. [Source](https://www.peterizzardphotography.com.au/), retrieved 2026-08-15. These are brand-investment signals, not evidence of budget or willingness to pay AU$800.

### Reproducible online-presentation problems

1. **Fragmented primary journey:** the home navigation exposes `Weddings`, `Family`, `Pets`, `Commercial`, `Landscape`, `Blog`, `Contact` and `Shop`, while `Commercial` and `Landscape/Shop` lead to different domains. A first-time visitor has no focused, single service path from the home page. Reproduce by opening the homepage and inspecting the menu/links. [Source](https://www.peterizzardphotography.com.au/), retrieved 2026-08-15.
2. **Email CTA is not a usable direct mail link on the main page:** its visible `Send an email` target resolves to `javascript: void(0)` in the public page representation, while the public business email is surfaced only on the separate fine-art contact page. Reproduce by opening the home page and inspecting/activating the `Send an email` link, then compare the dedicated contact page. [Home](https://www.peterizzardphotography.com.au/) · [email source](https://peterizzardfineartphotography.com.au/pages/contact), retrieved 2026-08-15.
3. **Secondary editorial signal, not independently sufficient:** the lead body repeats “Based on the NSW South Coast” consecutively. This is a visible copy-quality defect. [Source](https://www.peterizzardphotography.com.au/), retrieved 2026-08-15.

### Static one-page scope (only if later authorised)

**Can be static:** named photographer/brand, a narrow selected service (e.g. portrait or wedding introduction), curated licensed/approved images, short process, a small testimonial set approved by owner, service-area text, phone, public email, Instagram link, and links out to existing commercial/fine-art sites.

**Explicitly excluded:** product catalogue, print sales, cart/checkout, inventory, price calculator, availability/calendar, bookings, login, CMS, database, server-side form, payment, client galleries, blog, and recurring updates. Enquiries would be `mailto:`/phone only; any existing third-party/shop workflow remains untouched.

**Static viability:** YES for a deliberately narrow introductory/campaign page; NO as a replacement for the existing whole multi-service and shop estate. Backend dependency: NONE. Ongoing content responsibility: CLIENT / NONE FOR US.

### AU$800 case, red team, and decision

- **Support:** the scoped remedy is a one-time restructure of stable identity, selected portfolio, proof and direct contact—bounded enough for a static page, with no integration work.
- **Against:** the existing business spans multiple audiences and owns a shop/blog plus external commercial/fine-art destinations. A real replacement could require SEO preservation, image-rights review, content selection and dynamic commerce, none of which fit the offer. Budget willingness is UNKNOWN.
- **Strongest red-team objection:** an experienced, award-claiming photographer may deliberately use the current multi-site structure; reducing it to a single page could remove important funnels. The observable defects alone do not prove a buyer problem.
- **Why it remains KEEP:** the offer is viable only as an optional, non-replacement, fixed-scope landing concept; core services and direct enquiry remain stable without mutable data, the business is locally listed and contactable through an email on its own related brand domain, and there are two concrete home-page faults.
- **Priority:** P1 (only KEEP).
- **Falsifiable go/no-go before any later Demo/outreach:** GO only if the owner independently confirms a single stable service focus, approves use of named/images/testimonials, accepts no booking/shop/content-maintenance obligations, and wants the page as an addition rather than a replacement. NO-GO if the desired outcome includes inventory, gallery/client login, booking calendar, packages/prices that change, migration/SEO promises, or replacement of existing shop/workflows.

### Evidence gaps

- No current Instagram-post evidence; no login or extension installation attempted.
- No owner confirmation, price/budget signal, or permission to use imagery/testimonials.
- DNS MX validates only the domain route, not this mailbox's deliverability.
- The `squirrel` quick audit received a Cloudflare “One moment” response and crawled only one protection page; its 37/100 score and findings are **not used** as visitor-facing evidence. Audit record is local to this round only.

