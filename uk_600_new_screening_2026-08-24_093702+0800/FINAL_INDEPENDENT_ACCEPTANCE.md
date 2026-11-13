# Round 7 replacement independent acceptance — 2026-08-24

## Decision

`FINAL INDEPENDENT ACCEPTANCE = PASS — 3/3 ACCEPTED.`

| Candidate | Screening Qualification | Independent result | Independent score / Priority | Demo Readiness |
|---|---|---|---|---|
| JL and TM Cleaning Quality Cleaning Service | QUALIFIED | **ACCEPTED** | 70/100, Priority B (retained) | NOT AUTHORIZED |
| A. J. Ostridge Transport Ltd | QUALIFIED | **ACCEPTED** | 73/100, Priority B | NOT AUTHORIZED |
| Anthony Lewis Ltd | QUALIFIED | **ACCEPTED** | 73/100, Priority B | NOT AUTHORIZED |

This replacement review is independent of the prior Round-7 Reviewer browser record. It does not authorise a Demo, outreach, sending, deployment, account login, form submission, payment, or any external write.

## Scope, authority, and method

- Replacement Reviewer thread ID: `01a031e3-499c-7420-9e98-c271e05bed6d`; delegating source thread: `01a01da9-3825-7ba2-a6bc-c3bacc1f70db`.
- Read before deciding: `AGENTS.md`, `PROJECT_CORE.md` (`Screening Core v1.1.1`), `QUALIFIED_CANDIDATES.md`, `EVIDENCE_LEDGER.md`, `SCREENING_LOG.md`, and historical `INDEPENDENT_ACCEPTANCE.md`. Rounds 1–7 remain historical; this file is the replacement final acceptance only.
- All live checks were no-login, read-only local Playwright/Chromium sessions on 2026-08-24. Each new Track-W site was freshly opened at its official HTTPS URL, then set to **1440×900** and **390×844**. The recorded values below are DOM measurements, not screenshots, HTTP status, Owner SELF-QA, or the prior Reviewer's browser self-report.
- Exact-name/domain search outside this candidate directory returned no earlier matching project record for either AJO or Anthony Lewis. De-duplication supports newness only and is not used to pass a gate.

## Exact viewport evidence

### A. J. Ostridge Transport Ltd — `https://www.ajostridgetransport.co.uk/`

| Set viewport | Title / final URL | Measured viewport | Width check | Visible business evidence |
|---|---|---|---|---|
| 1440×900 | `A J Ostridge Transport Limited` / unchanged official URL | `innerWidth=1440`, `innerHeight=900` | `clientWidth=1440`, `scrollWidth=1440` | “Haulage Contractor & Commercial Garage Repairers”; established family haulage contractor and commercial garage repairers in Maldon, Essex; 25 years; CPC driver training; 2018 GDPR block precedes the commercial-vehicle-repairs list. |
| 390×844 | same title / unchanged official URL | `innerWidth=390`, `innerHeight=844` | `clientWidth=390`, `scrollWidth=390` | The same generic company statement and long 2018 GDPR explanation remain the leading content; later content visibly lists commercial repair, trailer servicing, MOT preparation, safety inspections, roadside assistance, diagnostics, welding and fabrication. Contact text visibly gives The Causeway, Maldon, telephone, `[REDACTED_EMAIL]`, and `[REDACTED_EMAIL]`. |

The exact mobile audit is therefore reproduced. The page does not overflow horizontally, but its mobile content order remains materially weak: an obsolete legal explainer displaces the business's core capability, coverage, fleet/proof and enquiry hierarchy.

### Anthony Lewis Ltd — `https://www.anthonylewis.co.uk/`

| Set viewport | Title / final URL | Measured viewport | Width check | Visible business evidence |
|---|---|---|---|---|
| 1440×900 | `Anthony Lewis – Handmade Kitchens & Furniture, Bespoke Cabinetmakers` / unchanged official URL | `innerWidth=1440`, `innerHeight=900` | `clientWidth=1440`, `scrollWidth=3000` | Full navigation is duplicated; repeated “Handmade Kitchens & Furniture” hero statements precede a cabinetmaker introduction, projects/about/contact routes, and the business address/email footer. |
| 390×844 | same title / unchanged official URL | `innerWidth=390`, `innerHeight=844` | `clientWidth=390`, `scrollWidth=3000` | The same duplicated navigation and repeated hero statements render into a document 2,610px wider than its client width. Visible footer identifies Anthony Lewis Ltd, Unit 3 Leaton Industrial Estate, Bomere Heath, Shrewsbury, telephone 01939 291415 and `[REDACTED_EMAIL]`. |

The exact desktop audit is therefore reproduced. A 3000px document width at both requested sizes, combined with duplicated navigation/hero content, is a material responsive hierarchy and browsing defect—not merely an aesthetic preference.

## Individual independent gate review

### JL and TM Cleaning Quality Cleaning Service

| Review item | Independent disposition |
|---|---|
| Final-file integrity | **PASS, retained.** The four protected source files are present and internally consistent with the prior accepted chain: official dated review (`10 August 2026`, naming Tracy and James), owned Track-W site, visible public `mailto:[REDACTED_EMAIL]`, dual-viewport basis, and 70-point Reviewer calculation. No later candidate record replaces these facts with weaker or conflicting evidence. Current SHA-256 records: `QUALIFIED_CANDIDATES.md` `346d141d45dfcd984ec25e42d801ec1891c2b7a326b60b5fc8dcd96c307cee09`; `EVIDENCE_LEDGER.md` `57630d36959dffea2821856173c0059f35761a41aa889c41f09cc0741f29057a`; `SCREENING_LOG.md` `a6e8326e8d31af4ce52336bb171c98326447f5138e4f0dd3cf4439fd1888eba1`; historical acceptance `a8d630ddc188c4f29d46d4af7e645dc3a46ba846faf94c6d9fd223c97fb4a462`. |
| H0 / Track / H1–H6 / H3 | **PASS, retained.** The prior independently accepted evidence remains adequate and uncontradicted: current attributable official review; independent/local context; public official business email; bounded static service/area/proof/contact scope; and no dynamic-core exclusion. |
| H0.5 / H5 / H6 | **PASS, retained.** The template-led hierarchy and narrow-view continuity issues still map to a credible static presentation upgrade rather than a CMS, booking, payment, or self-hosted-form requirement. |
| Score | **70/100, Priority B retained** — Opportunity 21, Health 16, Fit 17, Purchase 9, Contact 7. |

**Conclusion: ACCEPTED.**

### A. J. Ostridge Transport Ltd — Maldon, Essex

| Gate | Independent disposition |
|---|---|
| H0 / H1 | **PASS — CURRENT TRADING STATUS VERIFIED.** A fresh no-login reopening of [Business News Wales' report](https://businessnewswales.com/newports-monex-group-expands-with-acquisition-stake/) visibly showed `6 JULY 2026`, a 45% Monex stake in A J Ostridge (Transport) Ltd, Alan Ostridge and his wife, the Maldon family operation, and stated financial/commercial/operational support for expansion. The full date is within the rolling window and the action is directly attributable to the target. |
| Track W / required viewports | **PASS.** The exact 1440×900 and 390×844 measurements above independently reproduce the owned site and its commercially weak content order. |
| H2 / H3 | **PASS.** The dated source identifies a family-run operation led by Alan and his wife; the owned site identifies the Maldon business and publicly displays Alan's and Joanne's business email addresses in the contact block. Deliverability and marketing consent are not inferred. |
| H0.5 / H5 | **PASS — MEANINGFUL DEMO OPPORTUNITY VERIFIED.** Generic introduction plus a lengthy, obsolete 2018 GDPR explainer ahead of sparse repair content fails to present the actual haulage/garage offer, fleet/capacity, coverage, safety/compliance, commercial proof, or a clear recurring enquiry path. A static capability/proof/area/contact page addresses that verified primary-path deficit without inventing claims. |
| H4 | **PASS.** The customer task is to assess haulage/garage capability and telephone/email the business. Static services, fleet/team, compliance, proof and contact modules can cover it; no booking, payment, inventory, checkout, live availability, CMS or server-side form is core. |
| H6 | **PASS.** The current site is neither professionally complete nor mobile-content-complete, and no dynamic-core requirement was observed. The investment report is current operating context and a dated trigger, not a claim that the company will buy a website. |
| Score / Priority | **73/100, Priority B.** Website Opportunity 26/30; Business Health 11/20; Single-page Fit 19/20; Purchase Signal 10/20; Contact Viability 7/10. This conservatively avoids treating the 45% transaction as evidence of willingness to buy a website: it is counted only as a current `Why now` trigger; presentation-investment remains 0. The total is a research-priority heuristic, not a purchase prediction. |
| De-duplication | **PASS.** Exact business/domain search outside this directory found no prior project record; this does not substitute for any gate. |

**Conclusion: ACCEPTED.**

### Anthony Lewis Ltd — Bomere Heath, Shrewsbury

| Gate | Independent disposition |
|---|---|
| H0 / H1 | **PASS — CURRENT TRADING STATUS VERIFIED.** A fresh no-login reopening of [Shropshire Council's newsroom outcome](https://newsroom.shropshire.gov.uk/2026/08/small-equipment-grants-help-shropshire-businesses-invest-grow-and-create-jobs/) visibly showed `07/08/2026 - Permalink` under the UK local-government masthead. In that explicit UK context this is **7 August 2026**. The body names Anthony Lewis Ltd and its grant-funded mitre guillotine, briquette machine and bandsaw, resulting new product/income stream and additional job. |
| Track W / required viewports | **PASS.** The exact 1440×900 and 390×844 measurements above independently reproduce the owned site. Its 3000px scroll width at both requested widths, duplicated navigation, and repeated hero copy are current, material and directly observable. |
| H2 / H3 | **PASS.** The Council source identifies owner Anthony Dargue; the official site identifies the matching local workshop and publicly exposes `[REDACTED_EMAIL]` beside address and telephone. Deliverability, consent and personal-mailbox status are not inferred. |
| H0.5 / H5 | **PASS — MEANINGFUL DEMO OPPORTUNITY VERIFIED.** The reproducible 3000px-wide document and duplicated navigation/hero break the primary browse-confidence-enquiry path. A stable responsive hierarchy for kitchens, bedrooms, bespoke work, selected projects, workshop/quality proof and direct contact maps to the defect without fabricating content. |
| H4 | **PASS.** The core visitor task is evaluating bespoke work and requesting an initial conversation. It can be served by static content and existing phone/email; booking, payment, stock, checkout, availability, database, CMS and a self-hosted form are not core to the proposed scope. |
| H6 | **PASS.** The site is not mobile-complete or conversion-clear, while no dynamic-core need was found. The Council award is current operational evidence only; it does not imply consent, demand, or a website purchase. |
| Score / Priority | **73/100, Priority B.** Website Opportunity 27/30; Business Health 13/20; Single-page Fit 19/20; Purchase Signal 7/20; Contact Viability 7/10. The council grant is used for H0/current-operation, not duplicated as a presentation-investment or purchase point; `Why now` remains `NO CLEAR WEBSITE-SPECIFIC TRIGGER FOUND`. The total is a research-priority heuristic, not a purchase prediction. |
| De-duplication | **PASS.** Exact business/domain search outside this directory found no prior project record; this does not substitute for any gate. |

**Conclusion: ACCEPTED.**

## Final record

```text
Round 1: FAIL — historical record retained
Round 2: FAIL — historical record retained
Round 3: FAIL — historical record retained
Round 4: FAIL — historical record retained
Round 5: FAIL — historical record retained
Round 6: FAIL — historical record retained
Round 7 prior review: FAIL — superseded only as to the two viewport reproduction gaps
Round 7 replacement final acceptance:
  JL and TM Cleaning Quality Cleaning Service: ACCEPTED — 70/100, Priority B
  A. J. Ostridge Transport Ltd: ACCEPTED — 73/100, Priority B
  Anthony Lewis Ltd: ACCEPTED — 73/100, Priority B
FINAL INDEPENDENT ACCEPTANCE: PASS — 3/3 ACCEPTED
```

`Demo Readiness: NOT AUTHORIZED` for all three candidates. Acceptance is not Demo, outreach, sending, deployment, payment, or production authority.
