# UK Cold Demo Rework Lessons — 2026-09-01

**Scope.** Read-only retrospective of the recent UK Demo/rework/outreach-prep chain. This report adds no new authority and changes neither `AGENTS.md`, `PROJECT_CORE.md`, nor `OUTREACH_EMAIL_SOP.md`. It is a reusable working guide, not a replacement SOP.

**Reviewed task records.**

| Customer | Task title / thread ID | Evidence reviewed |
| --- | --- | --- |
| Nothing But Nails (UKR-260) | `英国£99/£199客户研究｜UKR-260 Nothing But Nails` — `01a05a68-eebd-7921-b109-952cb2173113` | research ledger, v1/v2 pre-code and image ledgers, QA reports, Desktop/Mobile captures, task feedback |
| Fluffandtuff Dog Groomers | `英国客户研究｜Fluffandtuff Dog Groomers` — `01a05af9-ccb5-77d1-8a87-78935be2ddde` | rebuild direction, independent pre-code/static/visual reviews, skill receipt, screenshots |
| Romiley Paws | `制作 Romiley Paws 本地 Concept Demo` — `01a05b58-0535-7ce3-a720-40139f8b8ccb` | intelligence, asset inventory, pre-code decision, self-QA, Desktop/Mobile evidence |
| Shelley’s Poochie Parlour | `英国客户研究｜Shelley’s Poochie Parlour Stamford` — `01a05afa-6cb9-76f3-ba92-ca515208e6c7` | intelligence, asset/image ledgers, pre-code, QA, Desktop/Mobile/full-page evidence |

## Executive conclusion

The strongest recurring failure was **starting from a stylish generic landing-page solution and then trying to add customer truth, visual rhythm, and mobile proof afterwards**. The repairs that improved pages were direction-level: use the merchant’s real assets and actual service structure; give every major section a distinct visual/business job; and accept only on final full-page Desktop/Mobile evidence. Small CSS polish did not repair a weak page thesis.

The review identifies **six high-confidence patterns**, one documented email-delivery incident, and two evidence limits:

1. Asset/fact discovery was sometimes treated as a Hero-input task rather than a full-page storyboard input.
2. A good Hero could hide an unproven middle/bottom page, generic service cards, or a repeatable closing.
3. “Premium” became too easily confused with a colour gradient, oversized type, animation, or abstract concept imagery.
4. Owner self-check and static lint were repeatedly stronger than the independent final-render evidence actually available.
5. Mobile was often addressed after Desktop; where trustworthy 390px evidence was missing, it must remain a fail/awaiting state.
6. The public-email gate was correctly a sourcing gate, but it must not be silently treated as fresh deliverability evidence at send time.

## Most important rework roots

| # | Pattern and confidence | Concrete evidence | Reusable correction |
| --- | --- | --- | --- |
| 1 | **High confidence — generic first pass.** A category-looking page can be polished yet still fail customer ownership. | Fluffandtuff’s first direction was rejected; the rebuild explicitly rejects pale-sage paw-card / testimonial-carousel defaults in `REBUILD_DIRECTION_20260901.md` and replaces them with a distinct service rail, asymmetric crop, proof interruption and dark booking close. | Begin with the specific customer’s “why this page” thesis and explicit anti-default list. Do not open code with interchangeable Hero + three cards + gallery + CTA. |
| 2 | **High confidence — assets were under-used or incorrectly substituted.** One Hero image cannot carry customer relevance for the full scroll. | Nothing But Nails research initially records no eligible owned visual corpus and prohibits platform images as customer work (`research_20260901/BUSINESS_FIDELITY_MAP.md`). Later v2 records distinct real-work placements and replaces the rejected Hero. Shelley maps logo plus distinct official gallery images across Hero/service/care/gallery. | Inventory every candidate Logo, official image, service fact, address, proof and CTA before layout. Map each usable item to one placement/purpose or record an explicit exclusion. |
| 3 | **High confidence — Hero strength was confused with page completion.** | Fluffandtuff’s independent review calls the Desktop Hero coherent, yet fails the Demo because only Hero/early-page Desktop proof existed and supplied mobile evidence was clipped. Nothing But Nails’ revisions show repeated Hero iterations and later need service/mobile/full-page corrections. | Review top/middle/bottom together. First screenshot pass must include 1440×900, 390×844, and full-page/top-middle-bottom evidence before calling a direction ready for review. |
| 4 | **High confidence — business fidelity needs a mapping, not only tasteful copy.** | Fluffandtuff reviewer found the unsupported outcome statement “sent home feeling their best”. Shelley’s later QA passes because its full list of actual grooming boundaries/services is directly mapped and conflicting hours are intentionally omitted. | Build a Business-fidelity map for Hero, each service, CTA and key visual. Any outcome, review, hours, result or role needs a source; otherwise remove it. |
| 5 | **High confidence — mobile evidence/postponed responsive structure.** | Fluffandtuff nominal 390px captures clipped header, title, lede and figcaption; reviewer correctly kept `CLIENT-SHOWABLE DEMO: FAIL`. Nothing But Nails v2 explicitly converts the mobile service list to a readable single column. | Select mobile order, type scale, crop and CTA visibility in the implementation map—not as a final breakpoint patch. Require actual 390×844 render evidence. |
| 6 | **High confidence — Bottom 40% often lacks new commercial information.** | Shelley’s later page creates a useful sequence: care for nervous dogs, local contact ticket, distinct official gallery, then a single Fresha action. Romiley uses proof/gallery/booking but its recorded closing can otherwise become a reusable grooming-page pattern. | Before coding, choose the one appropriate close: Proof, Reassurance, Specificity, Conversion, or Brand Close. It must introduce a new, source-backed reason to continue, not repeat Hero contact details. |
| 7 | **Medium confidence — static checks and named Skills were over-read as visual acceptance.** | Fluffandtuff static review says the Skill mappings are real but explicitly says final visual acceptance is still required. The independent visual review subsequently fails final acceptance. | Report Skill state separately from visual acceptance. A detector, hash ledger, or pre-code document is never a viewport verdict. |
| 8 | **Medium confidence — animation can become decoration.** | Romiley uses several automatic animations with reduced-motion fallback; Shelley deliberately chooses `SPECTACLE 3` static composition; Fluffandtuff’s final rebuild uses a static CSS Hero. The accepted evidence supports the static/ restrained choices more directly than automatic motion. | Use motion only if it clarifies a service, creates an intentional brand beat, or helps the booking handoff. Never add it solely to signal “premium”; build reduced-motion/static behaviour first. |

## What actually improved the pages

### Customer facts and assets

- **Shelley’s Poochie Parlour:** full official asset/fact coverage drove a markedly stronger page. The page uses official logo and different official dog images in different roles, shows verified care/collection/delivery boundaries, two locations/contact paths, and defers live hours and platform prices. Evidence: `research_20260901/CUSTOMER_PUBLIC_INTELLIGENCE.md`, `demo_20260901/IMAGE_LEDGER.md`, `demo_20260901/qa/QA.md`.
- **Romiley Paws:** real logo artwork and complete real dog photographs create quick recognition; the pre-code direction uses the one-to-one/Krista/Romiley proposition rather than a generic pet-spa promise. Evidence: `PRE_CODE_DECISION.md`, `ASSET_INVENTORY.csv`, `evidence/redesign-desktop-1440.png`.
- **Nothing But Nails:** the early concept-only asset boundary was honest but visually thin. Rework becomes stronger only after the Hero is unquestionably nail-specific and the service/feet/closing visual roles are separated. Evidence: `demo_20260901_v2/docs/IMAGE_LEDGER.md`, `qa/QA_REPORT.md`, `qa/nine-point-final-desktop-1440x4200.png`.
- **Fluffandtuff:** the repair correctly treats the problem as visual/material selection rather than cosmetic spacing. However, the retained final acceptance is **FAIL** because the required final mobile/full-page evidence was not trustworthy/complete—not because the CSS/static rebuild lacked craft. Evidence: `INDEPENDENT_VISUAL_ACCEPTANCE.md`.

### Copy that reads as templated versus customer-specific

Avoid unsupported, abstract or self-congratulatory phrases such as “a friendly place”, “sent home feeling their best”, “beautiful website”, “more enquiries”, or a generic “ready to book?” close. They either sound AI-written, imply unverified outcomes, or can be swapped between merchants.

Use a specific public fact + a specific page decision + the actual visitor benefit:

- Romiley: one-to-one, home-based care and City & Guilds training → dog-first gallery/proof story and external Fresha handoff.
- Shelley: nervous-dog private bookings and collection/delivery → a reassurance/care band and a practical local-contact/booking close.
- Nothing But Nails: verified nail/pedicure service hierarchy and Arundel booking route → menu clarity and an external Fresha action, without fabricated salon portfolio claims.

This is not permission to copy live ratings, prices, schedules, testimonials, or platform copy. Every sentence still needs its own source map and freshness check.

### Layout and visual rhythm

The useful pattern is not a fixed section order. It is a sequence of different jobs:

`recognition → service understanding → credible proof/reassurance → local specificity → singular action`.

- Hero: one clear image whose category/business signal survives without the headline; name, place, core service, one action.
- Services: use the merchant’s true grouping, not equal generic cards. Make the information form different from the Hero (rail, menu, split factual composition, or relevant image/fact pairing).
- Proof/gallery: only real, source-ledgered assets or explicit concept imagery; each unique image must earn a different business role.
- Bottom 40%: introduce a new fact/decision aid—care process, local route, applicable boundary, genuine proof or practical next step—not a giant generic CTA.
- Closing: one booking intent label and a truthful external route. Repeating the Hero button, contact list and headline with a new background is not a commercial close.
- Mobile: deliberate stack/order; show key imagery and action without clipping; reduce multi-column price/service structures to a readable single stream where required.

## Skill effectiveness — evidence classification

`USED` below means a read receipt plus inspectable pre-code artifact plus one-to-one visible-code/asset/QA mapping. It does **not** mean the overall Demo passed final visual acceptance.

| Skill | Nothing But Nails | Fluffandtuff | Romiley | Shelley | Retrospective verdict |
| --- | --- | --- | --- | --- | --- |
| `website-delivery-sop` | USED for L0/static boundary | USED / mapped boundary | ARTIFACT MAPPED in pre-code | READ / L0 boundary | Effective for scope control; not a design-quality substitute. |
| `finesse-ui` | USED; Hero/layout tokens and later refinements mapped | USED; strongest direct selector-to-decision evidence | ARTIFACT MAPPED; palette/hero/layout decisions | ARTIFACT MAPPED; Soul/substrate/hero mapped | Effective when it changed palette, Hero engine, rhythm and anti-default choices. Merely naming it is ineffective. |
| `design-taste-frontend` | mapped in later visual refinement | USED in rebuild receipt | mapped in pre-code | ARTIFACT MAPPED | Effective for anti-template and layout-family decisions; cannot prove final pixels. |
| `media-use` | USED for eligibility ledger and later asset mapping | USED; manifest/hash/render paths reconcile | mapped asset workflow | ARTIFACT MAPPED | Essential for asset truth and placement; a ledger alone cannot supply a compelling story. |
| `finesse-brief` | `DEMO_BRIEF.md` exists in v2 | not evidenced as used in the rebuild receipt | not evidenced as a separate artifact | `DEMO_BRIEF.md` exists | **ARTIFACT, not automatically USED.** It helped when it specified commercial hierarchy, but reports must show its mapping. |
| `frame-smith` | No inspected runtime-gate/connected loop evidence | No inspected runtime-gate/connected loop evidence | No inspected runtime-gate/connected loop evidence | No inspected runtime-gate/connected loop evidence | **NOT VERIFIED; do not claim USED.** Ordinary CSS animation is not a Frame Smith asset. |
| `motion-design` | Not triggered/verified (motion intensity recorded low) | no automatic motion required | automatic CSS motion present, but no inspected motion-design receipt | deliberately static | **NOT VERIFIED as USED.** Use only above the explicit trigger and only for a business role. |

## Public-email finding: evidence does not support a “no email was found after Demo” narrative

**Concrete incident: Nothing But Nails / UKR-260 / `01a05a68-eebd-7921-b109-952cb2173113`.** The research record marked `PUBLIC BUSINESS EMAIL = PASS` because a full address was publicly printed on the named Old Print Works business listing alongside matching identity/contact evidence; it explicitly marked deliverability `UNKNOWN` (`research_20260901/CUSTOMER_PUBLIC_INTELLIGENCE.md`, `SOURCE_LEDGER.md`). The later task record contains a delivery failure for that address.

Therefore the evidence supports this narrower conclusion:

- It was **not** a documented case of making a Demo without ever having a complete, attributable public business email.
- It **was** a stale/third-party-contact-source and dispatch-preflight failure: the H3 source was an older landlord/location listing, while live deliverability had remained `UNKNOWN`; a fresh recipient-path/deliverability observation was not completed before actual send.
- The public-email sourcing gate and the later transport result must remain separate. A bounce does not prove that the research record was invented, and an old visible address does not prove present deliverability or legal-send readiness.

For the other three recent customers, the inspected records show public-email `PASS` with attributed sources (Fluffandtuff: public SumUp/contact block plus official-social corroboration; Romiley: matching public business profile; Shelley: official site). This retrospective found no evidence that a Demo was completed first and only then discovered to lack a complete public business email. **Do not infer current deliverability from those historical PASS records.**

## First-pass 80% workflow

The goal is a credible first visual pass, not more paperwork or more stopping gates. The Owner completes every normal front-loaded item below; none is pushed back to the user.

1. **Qualification refresh:** confirm H0, Track, complete attributed public business email, website status, H0.5 and specific Demo authorisation. Capture source URL/date/attribution; label deliverability and legal basis separately.
2. **Customer intelligence sweep:** collect official-site/social Logo, images/video frames, services, place/address, hours only if reconcilable, reviews/qualifications only if usable, contact/third-party booking route, existing CTA, assets and exclusions. Produce intelligence + inventory + source/image ledgers.
3. **Coverage map:** map every usable fact/asset to Hero, service, proof/process, local/closing, or record why it is unused. Build business-fidelity map before writing copy.
4. **Reference and design choice:** open 3–5 current relevant references. Record one non-copy principle each, a one-line Design Read, three dials, anti-default list and **two materially different directions** (Hero, cadence, assets, bottom 40%, purchase thesis—not colour swaps).
5. **Skill route honestly:** write `NAMED / READ / ARTIFACT / MAPPED / USED` separately. Use `website-delivery-sop`; use `finesse-ui`, `design-taste-frontend`, and `media-use` for a new/rebuild brand demo; activate other Skills only if their actual trigger/runtime exists.
6. **Pre-code review:** independent reviewer checks business recognition, fact/asset coverage, two-direction difference, current-offer purchase thesis and similarity to recent pages. Correct direction now, not after implementation.
7. **Implement full story:** make Hero, service explanation, proof/reassurance, bottom-40% payoff and closing each visually and commercially distinct. Add motion only where it improves comprehension/brand memory and ensure reduced-motion fallback.
8. **First render:** capture Desktop 1440×900 + Mobile 390×844 top/middle/bottom or full page; check mobile reading order/crop/CTA and all key resource loads.
9. **Independent visual acceptance:** reviewer checks the ten-point rubric, 5-second recognition, before/after commercial upgrade, owner-reply perspective, image uniqueness, factual mapping and internal-text gate. A user judgement of low/template/not-80% overrides self-review and returns to direction, not a P2 queue.

## Required content for future Demo task briefs

Use this compact, customer-specific task payload:

```text
Customer / candidate ID / target market / current £99 and £199 offer mapping:
Authority and explicit local-Demo authorisation:
Qualification refresh: H0, Track, H3 public-email source/date/attribution; deliverability and legal basis kept separate:
Current presentation and one-page purchase thesis:
Known official facts and usable assets; mandatory page mapping / explicit exclusions:
Business-fidelity constraints (facts never to infer or claim):
3–5 reference URLs and non-copy principles:
Design Read + Soul/Spectacle/Density + anti-default list:
Direction A and Direction B (Hero, cadence, assets, bottom 40%, closing):
Selected direction and why it creates owner purchase desire:
Skill routing with expected artifact-to-selector/asset/QA mapping:
Desktop + 390px implementation requirements:
Required final evidence and independent reviewer:
Explicit non-authorisations: deploy/upload/contact/send/login/payment/source transfer:
```

## Independent reviewer checklist

1. Is the qualifying evidence current, attributable and complete—including the public-email source? If no, stop Demo readiness; do not guess an email.
2. Without primary copy, can I identify the business/category/place from the first view and real visual material?
3. Do actual services, location, booking/contact path, assets and exclusions map one-to-one to sources?
4. Are official assets fully considered, not merely one Hero image? Are all exclusions recorded and honest?
5. Does the middle/bottom page add a real proof/reassurance/specificity/conversion reason, with a distinct visual task?
6. Is the page genuinely different in direction/rhythm from the two most recent category demos?
7. Does any copy imply an outcome, review, price, hours, credential, customer work, staff, or booking capability that has not been verified?
8. Do final 1440×900 and 390×844 renders prove legibility, crop, scrolling, CTA and full-page rhythm? Do not accept static code or clipped screenshots as a substitute.
9. Are Skill outcomes labelled accurately—especially `frame-smith` and `motion-design`—with runtime/asset evidence where required?
10. Is the conclusion correctly scoped: local Demo visual acceptance is not deployment, public preview, email/send, source-transfer or customer acceptance?

## Current ambiguities / follow-up needed

- **Nothing But Nails:** the later bounce establishes a failed recipient path at send time, not whether the original public business listing was accurate at research time. Current email status is **UNKNOWN** unless rechecked from public sources; do not retry or infer a replacement address.
- **Fluffandtuff:** static rebuild/Skill evidence is strong, but the stored independent visual acceptance remains a fail because final trustworthy Mobile/full-page evidence was absent. Any later claim of client-showable status needs new independent final-render proof.
- **Romiley Paws:** only self-QA was inspected in this retrospective; its visual status must not be upgraded without an independent final acceptance record.
- **Shelley’s Poochie Parlour:** its internal QA says independent review passed, but user visual acceptance remains pending; treat user judgement as the final visual acceptance boundary.

## Evidence paths

- `client_uk_nothing_but_nails/research_20260901/CUSTOMER_PUBLIC_INTELLIGENCE.md`
- `client_uk_nothing_but_nails/demo_20260901_v2/docs/PRE_CODE_DECISION.md`
- `client_uk_nothing_but_nails/demo_20260901_v2/qa/QA_REPORT.md`
- `client_uk_fluffandtuff_dog_groomers/demo_20260901/REBUILD_DIRECTION_20260901.md`
- `client_uk_fluffandtuff_dog_groomers/demo_20260901/INDEPENDENT_VISUAL_ACCEPTANCE.md`
- `client_uk_fluffandtuff_dog_groomers/demo_20260901/SKILL_EXECUTION_RECEIPT.md`
- `client_romiley_paws_dog_groomers/PRE_CODE_DECISION.md`
- `client_romiley_paws_dog_groomers/QA_SELF_CHECK.md`
- `client_uk_shelleys_poochie_parlour/demo_20260901/PRE_CODE_DECISION.md`
- `client_uk_shelleys_poochie_parlour/demo_20260901/qa/QA.md`

