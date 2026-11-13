# UK new-candidate screening — independent acceptance

## Authority, scope, and method

- **Authority pointer:** [PROJECT_CORE.md](../PROJECT_CORE.md), §12 `Screening Core v1.1.4`, especially `Candidate Independent Acceptance Gate`; this file is the independent column and does not amend Owner `SELF-QA`.
- **Reviewer / date:** independent reviewer, 2026-09-01 (read-only).
- **Scope:** Snoopdogs Grooming Salon, Pawcasso Dog and Cat Grooming, KO Gardening Services, Glebe Cottage Groomers, and Landscaping Greentree. No Demo, outreach, login, submission, deployment, upload, payment, or customer-system change occurred.
- **Method:** direct public-source recheck, real browser inspection at `1440×900` and `390×844` for every Track W site, current-source/H0 recheck, Companies House identity check where applicable, Track N source-surface checks, and exact-name/domain/email dedup search across the active project history excluding protected historical backup/review copies.
- **Dedup result:** no match beyond this same batch was found for any of the five business names, domains, addresses, or public emails. This is a project-history dedup result, not a claim that the businesses have never appeared anywhere on the web.

## Verdict ledger

| Merchant | Owner SELF-QA | Independent acceptance | Screening qualification | Demo readiness | Reason |
| --- | --- | --- | --- | --- | --- |
| Snoopdogs Grooming Salon, East Kilbride | 80 / Priority B / SELF-QA READY | **HOLD — H0 VERIFICATION BLOCKED** | **HOLD** | **HOLD / NOT AUTHORIZED** | The claimed current Yell review/business reply could not be independently opened: direct Yell navigation returned Cloudflare `403` / verification in the current environment. Owner wording cannot substitute for directly reviewable H0 evidence. |
| Pawcasso Dog and Cat Grooming, Glasgow | 76 / Priority B / SELF-QA READY | **FINAL ACCEPT — 71 / Priority B** | **QUALIFIED** | **NOT AUTHORIZED** | Every current hard gate was independently evidenced; the old one-page brochure leaves a specific, static, commercial-persuasion upgrade beyond a cosmetic patch. Acceptance is not Demo Authorization. |
| KO Gardening Services, Beckenham | 83 / labelled Priority B / SELF-QA READY | **HOLD — WEBSITE STATUS UNKNOWN** | **HOLD** | **HOLD / NOT AUTHORIZED** | H0 and public email are independently visible on its official Nextdoor page, but the required Track N three-surface no-owned-website verification could not be completed: Google returned 429 and the alternative exact-name search returned irrelevant results, not a reliable no-site result. |
| Glebe Cottage Groomers, Redhill | 79 / Priority B / SELF-QA READY | **HOLD — H0 NOT VERIFIED** | **HOLD** | **HOLD / NOT AUTHORIZED** | The accessible public profile provides a complete email and business facts, but did not render an independently recordable year-bearing current-trading date. Track N no-site verification is also incomplete. |
| Landscaping Greentree, Mitcham | 77 / Priority B / SELF-QA READY | **FINAL ACCEPT — 75 / Priority B** | **QUALIFIED** | **NOT AUTHORIZED** | Direct Nextdoor evidence establishes H0/email/identity, while the owned Google Sites page visibly fails as a commercial presentation at both mandatory viewports. A static proof-led replacement is a material upgrade, not a cosmetic patch. |

## 1. Snoopdogs Grooming Salon — HOLD

### Independent raw evidence

- Official site: <https://www.snoopdogsgroomingsalon.co.uk/>. On 2026-09-01 it loaded at both required viewports, identified the salon, address `46–50 The Murray Square, East Kilbride, Glasgow, G75 0BH`, phone, and public `[REDACTED_EMAIL]`; it also shows services, customer-review excerpts, a gallery, phone/WhatsApp paths, and a site contact form.
- Claimed H0 source: <https://www.yell.com/biz/snoopdogs-grooming-salon-glasgow-8173419/>. Two direct browser attempts in the current environment reached Cloudflare verification / `403`; no current dated review or business reply was visible to this reviewer. A later rendered listing screenshot confirms the listing identity only, **not** the claimed 2026-08-29 review/reply.
- Browser artifacts (all captured 2026-09-01):
  - `output/playwright/independent-snoopdogs-desktop-1440x900-20260901.png` — SHA-256 `14d87879e190fed92573456b59525b063d049fb4d33ab2231f58508a9765f8a5`
  - `output/playwright/independent-snoopdogs-mobile-390x844-20260901.png` — SHA-256 `ecc3b8c238879adcb67a8a2737b410e40f51779b93ae0d94493ec0a144480f0f`
  - `output/playwright/independent-snoopdogs-yell-20260901.png` — SHA-256 `27ea820053ff604ba48856d7c68faa27a3dabf0fd027bd0915b60e5c375f4fe5`

### Gate result

| Item | Independent result | Evidence-bound reason |
| --- | --- | --- |
| H0 / H1 current operation | **H0 VERIFICATION BLOCKED — CURRENT TRADING STATUS NOT VERIFIED** | The only date-specific H0 evidence supplied by Owner is behind a current Cloudflare verification/403. A live homepage, static opening hours, or `Open now` cannot replace it. |
| Track | Track W observed, but not eligible to progress | The official owned site is live and was visually checked at 1440×900 and 390×844. |
| Public business email / H3 | PASS as an isolated fact | Full plaintext `[REDACTED_EMAIL]` is co-published with the business name, address and phone on the official contact area. It does not overcome H0. |
| H0.5, H2, H4–H6, score/Priority | **NOT ASSESSED FOR QUALIFICATION** | v1.1.4 requires H0 before these gates and scoring. The visually reviewed brochure is not a substitute for a current-trading pass. |
| Evidence confidence | LOW for current qualification | The decisive H0 source is currently inaccessible, not disproven. |

**Decision:** do not count this record toward the qualified target. It may be re-reviewed only when a direct, year-bearing H0 source is independently accessible. This is neither a finding that the salon is closed nor a Demo/outreach authorization.

## 2. Pawcasso Dog and Cat Grooming — FINAL ACCEPT

### Independent raw evidence

- Official site: <https://pawcassogrooming.co.uk/>. On 2026-09-01, it directly showed a review dated **2026-07-12** by “Mags,” business name, `990 Crow Rd, Anniesland, Glasgow G13 1JN`, phone and public `[REDACTED_EMAIL]`; the dated review lies within the rolling 90-day H0 window.
- Identity / local decision source: <https://find-and-update.company-information.service.gov.uk/company/SC564830>. On 2026-09-01, Companies House showed `PAWCASSO PET GROOMING LTD`, active, private limited company, registered office `990 Crow Road, Glasgow, Scotland, G13 1JN`, matching the official-site address.
- Browser artifacts (all captured 2026-09-01):
  - `output/playwright/independent-pawcasso-desktop-1440x900-20260901.png` — SHA-256 `a5e2d87b1063ec1f9dafcf79bedec9390f5d098dfdb3ba3b752e4fb64511aabc`
  - `output/playwright/independent-pawcasso-mobile-390x844-20260901.png` — SHA-256 `d360f089be2db25d2b575abb89192de4a85d6df5824d4dd19ecf1cbea6226b5e`

### Independent gate recheck

| Gate / required field | Result | Independent evidence and finding |
| --- | --- | --- |
| Target market / offer | PASS | United Kingdom; `GBP`; `£99 AS-SHOWN HANDOVER / £199 ONE PERSONALISED UPDATE`. No £600 inference or other-country price was used. |
| H0 / H1 | PASS — MEDIUM confidence | The official, attributable public review has the complete visible date `2026-07-12` and matches business name/location; it is in the rolling 90-day window. Companies House `Active` is identity support only, not the H0 substitute. |
| Track W / dual viewport | PASS | Owned official site loaded at the required 1440×900 and 390×844 viewports on the verification date. Desktop exposes the identity, store-front photo, services and phone CTA; mobile has a working menu and the same underlying page. First-view cookie consent obstructs part of the mobile content but does not prevent the visual/page-structure recheck. |
| Public business email / H3 | PASS | `[REDACTED_EMAIL]` is plaintext on the official site and linked as `mailto:`, co-published with the phone, address and brand. |
| H2 independent/local decision | PASS | Matching active private limited company and local registered/operating address. |
| H0.5 | PASS — meaningful commercial one-page opportunity verified | The current page is a single basic brochure: a dense generic claim block, an unstructured grooming list, one dated review, two uncontextualised images and a `Bookings` navigation item that resolves to appointment instructions. It has the facts but not a clear dog-versus-cat service story, proof hierarchy, or an intentional enquiry narrative. A finished static page can reorganise the verified services, premises/brand image, qualified-since-2002 claim, dated review, location and call/email route without inventing outcomes or adding a system. This is a material service/proof/decision-path upgrade, not a font, colour, cookie, SEO, or spacing patch. |
| H4 static single-page fit | PASS | The proposed value is a static presentation and call/email/existing appointment route; no CMS, payment, portal, self-hosted booking or server form is needed. |
| H5 evidence-backed demo basis | PASS | The official hero, services, dated review, location and appointment sections are direct source-mapped to a static service/proof/contact narrative. |
| H6 exclusion check | PASS | No observed core need for inventory, ecommerce, account, payment, dynamic booking, heavy content operations or multi-location management. Existing appointment instructions support an external/call route. |
| Customer-specific asset & fact sufficiency | PASS | Official logo/store-front image, dog/cat positioning, address, phone/email, service list, experience/membership claims and dated review provide a customer-specific concept basis. Membership claims must remain accurately sourced/worded in any later authorized work. |

### Independent score recalculation

| Component | Score | Evidence-bound rationale |
| --- | ---: | --- |
| Presentation Opportunity / Commercial One-page Increment | 22 / 30 | Directly evidenced persuasion and information hierarchy gap; a static Before/After is feasible, though the existing site already provides basic service and contact coverage. |
| Current Offer Purchase Value | 16 / 25 | £99/£199 is recorded correctly; long-standing local operation, premises, brand and appointment demand support testing, but no purchase intent, revenue, or live growth trigger is asserted. |
| Customer-specific Asset & Fact Sufficiency | 18 / 25 | Sufficient official identity, shop visual, service facts, location and dated review for a truthful concept; limited current review/project depth caps the score. |
| Current Trading / Business Quality / Commercial Credibility | 15 / 20 | Current dated review, active matching company, physical premises and consistent branding; current review volume is limited. |
| **Total / priority** | **71 / 100 — Priority B** | All hard gates pass. This is a priority for testing under the current heuristic, **not** a purchase/reply prediction. |

**Decision:** `FINAL ACCEPT`. `Screening Qualification: QUALIFIED`. `Demo Readiness: NOT AUTHORIZED` — Candidate Independent Acceptance does not authorize a Demo, asset use, deployment, outreach, email, or any external action. Before any future Demo Authorization, recheck H0 freshness, the two viewports, official email source and the H0.5 commercial-gap conclusion.

## 3. KO Gardening Services — HOLD

### Independent raw evidence

- Official business profile: <https://nextdoor.co.uk/pages/kogardeningservices/>. The current public page identifies `KO Gardening Services`, displays a rich photo gallery, and co-publishes `[REDACTED_EMAIL]` / `mailto:[REDACTED_EMAIL]` with phone `07814 452885`. Its signed business story identifies Kevin, the gardening service, regular clients, quotes, and the email/phone.
- H0 source on the same public profile: a verified-neighbour recommendation visibly dated `11 Jul · Verified in 2026`, describing Kevin and team completing bamboo removal, root removal, advice, transparent pricing and communication. The page also contains an official business activity post, but the dated verified recommendation is the H0 evidence.
- Track N check: (1) official Nextdoor profile — no owned website is linked in the profile; (2) the claimed Yell identity source was not used as a website-status substitute because it was not independently re-opened in this continuation; (3) exact-name/location Google search was blocked with 429, while an independent Bing exact-name/location search returned unrelated results rather than a reliable business/no-site result. Therefore the mandatory three-surface no-owned-website verification is incomplete.
- Browser artifact: `output/playwright/independent-ko-nextdoor-1440x900-20260901.png` — SHA-256 `8f58509d3a90f98be1f98dd0de28c110e68973fb13294f482eef443b3830bdd0`.

### Gate result

| Item | Independent result | Evidence-bound reason |
| --- | --- | --- |
| H0 / H1 | PASS — MEDIUM confidence | The visible current recommendation is `11 Jul · Verified in 2026`, attributable to the KO profile and Kevin/team's bamboo work. |
| Public business email / H3 | PASS | Public, full, plaintext Gmail is linked on the business's official Nextdoor profile and repeated in Kevin's business story with phone. |
| H2 | PASS | Kevin is named as the local operating owner on the official business profile; no chain/franchise signal was found. |
| Track N / website status | **WEBSITE STATUS UNKNOWN — HOLD** | The required three-surface no-owned-website review is not complete. Neither the Google 429 nor irrelevant Bing results can honestly establish “no owned website.” |
| H0.5, H4–H6, score/Priority | NOT ELIGIBLE FOR FINAL QUALIFICATION | A strong static portfolio/proof opportunity is plausible from the current before/after work, gallery and contact facts, but Track N status must pass before it can be scored or accepted. |

**Decision:** `HOLD`. Do not count this candidate toward the target. A later reviewer may resume from the existing H0/email evidence after completing the three required Track N sources with direct URL, query and result.

## 4. Glebe Cottage Groomers — HOLD

### Independent raw evidence

- Official business profile: <https://nextdoor.co.uk/pages/glebe-cottage-groomers-redhill-england-1/>. It publicly co-publishes `[REDACTED_EMAIL]` / `mailto:`, phone `07894609105`, and Bletchingley Road / Redhill identity.
- The public page shows the business announcement that canine and feline grooming is now on site and states Level 3 City & Guilds qualification. However, this reviewer could not retrieve an auditable, year-bearing date for that activity. The Owner's asserted `2026-08-19` is therefore not used as H0 evidence.
- Track N check: the official profile does not expose an owned-site link; Google exact-name search returned 429 and the independent Bing exact-name search returned unrelated results. This is insufficient for the required three-surface no-owned-website verification.
- Browser artifact: `output/playwright/independent-glebe-nextdoor-1440x900-20260901.png` — SHA-256 `6d718232c5917d15df4bd72b8bd2c8ff4bccc6395deabbe75ef03c27d58ed63a`.

### Gate result

| Item | Independent result | Evidence-bound reason |
| --- | --- | --- |
| H0 / H1 | **H0 NOT VERIFIED** | No direct, full-year recent trading date was retained from the accessible profile. The business announcement's content and a current page copyright do not satisfy rolling H0. |
| Public business email / H3 | PASS as an isolated fact | Full plaintext public Gmail is co-published with dedicated grooming phone and location. It cannot overcome H0. |
| Track N | WEBSITE STATUS UNKNOWN — HOLD | Official profile alone plus blocked/irrelevant exact-search surfaces do not prove no owned site. |
| H0.5, H2, H4–H6, score/Priority | NOT ASSESSED FOR QUALIFICATION | H0 and Track N do not pass. |

**Decision:** `HOLD`. This is not a closure finding and does not justify a Demo or outreach. Owner must provide a directly accessible, year-bearing H0 source and complete Track N source coverage before resubmission.

## 5. Landscaping Greentree — FINAL ACCEPT

### Independent raw evidence

- Official business profile: <https://nextdoor.co.uk/pages/green-tree-landscaping/>. It co-publishes business name, Mitcham, phone `07538 386948`, owned Google Sites URL, and public `[REDACTED_EMAIL]` / `mailto:`.
- H0 source: on the same public profile, an attributable verified-neighbour recommendation visibly reads `6 Aug · Verified in 2026` and says the team are affordable, reliable and complete the job. This is current, identity-matched H0 evidence.
- Owned website: <https://sites.google.com/view/greentree-landscaping-/home>. It was opened on 2026-09-01 at actual 1440×900 and 390×844. At both viewports it presents a cropped/oversized banner, repeated unstructured service lists, conflicting/garbled service copy, weak hierarchy, and truncated/cut-off contact material. The browser-visible page nevertheless identifies the business, services, phone and email consistently with the Nextdoor profile.
- Browser artifacts:
  - `output/playwright/independent-greentree-desktop-1440x900-20260901.png` — SHA-256 `d83579997eb562e2db104a2061010c874d906125f6ec89b092533749243ea281`
  - `output/playwright/independent-greentree-mobile-390x844-20260901.png` — SHA-256 `f536bb78308f3aaecc25b3a43b581eae2fa42d2860858f8832ac18cfcc396b7d`

### Independent gate recheck

| Gate / required field | Result | Independent evidence and finding |
| --- | --- | --- |
| Target market / offer | PASS | United Kingdom; `GBP`; `£99 AS-SHOWN HANDOVER / £199 ONE PERSONALISED UPDATE`. |
| H0 / H1 | PASS — MEDIUM confidence | Current, attributable public recommendation `6 Aug · Verified in 2026`, with matching profile identity; no growth/purchase claim inferred. |
| Track W / dual viewport | PASS | Owned Google Sites URL is directly linked by the business profile and was actually inspected at both mandatory viewports. |
| Public business email / H3 | PASS | Full public Gmail, co-published with the business profile, local area, phone and linked site. |
| H2 | PASS | Public profile presents a local Mitcham landscaping business with a single identity/phone; no chain or headquarters-control signal found. |
| H0.5 | PASS — meaningful commercial one-page opportunity verified | The current site has severe, direct persuasion failures rather than a cosmetic issue: its first screen crops key business/contact content, then exposes repeated generic lists and conflicting/garbled building/landscaping copy. A focused static page can clearly select verified landscaping services, use distinct official work images, state the local quote route, and make evidence legible without inventing a result or adding a workflow. |
| H4 | PASS | The commercial need is a static service/proof/contact page; customer contact can remain phone/email/existing external route. No CMS, payment, self-hosted quote form, portal or ongoing content service is necessary. |
| H5 | PASS | Current screenshot and live DOM directly map the current presentation failure, service claims, contact route, photo gallery and review to a static replacement concept. |
| H6 | PASS | No observed dynamic-system dependency; the poor owned brochure is neither professional nor conversion-complete. |
| Customer-specific asset & fact sufficiency | PASS | Verified business identity, local contact facts, broad service scope, recommendation and a large official profile photo gallery support an honest customer-specific concept. Each asset would require later source/rights recording; this acceptance does not authorize use. |

### Independent score recalculation

| Component | Score | Evidence-bound rationale |
| --- | ---: | --- |
| Presentation Opportunity / Commercial One-page Increment | 27 / 30 | Direct desktop/mobile evidence establishes a major commercial-persuasion and comprehension failure; static replacement has a clear Before/After. |
| Current Offer Purchase Value | 14 / 25 | Established local profile, broad service offering and proof justify testing the recorded £99/£199 offer, but no revenue, purchase intent or current growth trigger is claimed. |
| Customer-specific Asset & Fact Sufficiency | 19 / 25 | Adequate official gallery, services, contact, local area and current recommendation; project-by-project factual proof is still limited. |
| Current Trading / Business Quality / Commercial Credibility | 15 / 20 | Current verified recommendation, public local business profile and consistent contacts; evidence quality is MEDIUM, not a purchase prediction. |
| **Total / priority** | **75 / 100 — Priority B** | All hard gates pass. |

**Decision:** `FINAL ACCEPT`. `Screening Qualification: QUALIFIED`. `Demo Readiness: NOT AUTHORIZED`. Before any future Demo Authorization, recheck H0 freshness, linked website/email availability, both viewports and the commercial-gap conclusion.
