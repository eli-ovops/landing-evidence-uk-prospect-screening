# UK £600 new-candidate independent acceptance — 2026-08-24

## Decision

`INDEPENDENT ACCEPTANCE = FAIL`.

| Candidate | Independent result | Controlling reason |
|---|---|---|
| Jack Donaghy Photography — Glasgow | **BLOCKED** | The sole recorded H0 direct source is presently Cloudflare-challenged in a no-login browser, so its dated gallery evidence cannot be independently read. |
| DM Carpet Clean — Cardiff | **REJECTED** | H3/Public Business Email fails: the claimed same-domain source currently shows no visible email or `mailto:` address, so `[REDACTED_EMAIL]` cannot be accepted from that source. |
| Studio 31 Sports Photography — Leeds | **BLOCKED** | Track N cannot be accepted: independent search surfaced a possible same-business independent domain, `studio31.uk`; it could not be safely opened because of `ERR_CERT_AUTHORITY_INVALID`, so its ownership/status remains unresolved. |

Only three `ACCEPTED` records could make the batch PASS. This batch has zero; no replacement was sought and no Owner conclusion was altered.

## Authority, scope and identity correction

- Reviewer role: independent, read-only acceptance; no Demo, outreach, login, submission, deployment, or candidate-file edits were made.
- Authority read: `AGENTS.md`; `PROJECT_CORE.md` Screening Core v1.1.1, including H0, Track, H0.5, H1–H6, score/Priority and Candidate Independent Acceptance Gate; `OUTREACH_EMAIL_SOP.md`; `prospecting/SKILL.md`; `website-delivery-sop/SKILL.md`; and the three submitted Owner files.
- Correct execution Owner task ID: `01a03163-18de-73b0-863f-ffe6f13f2cc3`.
- Owner final report incorrectly used the PMO task ID `01a01da9-3825-7ba2-a6bc-c3bacc1f70db`; that field is not adopted as the execution identity.
- Reviewer task ID: `01a0316d-9cec-7201-88f8-8243b8186d83`.
- Review timestamp: `2026-08-24T09:43:19+0800` (browser checks during this review, no-login).

## Evidence-status convention

`SELF-QA` below is a record of the Owner's submitted assertion only. `INDEPENDENT` is what this Reviewer directly reopened or reproduced. A challenged, certificate-invalid, or absent current source is never converted to PASS from a ledger description, score, HTTP status, search summary, or Owner statement.

## Candidate gate review

### 1. Jack Donaghy Photography — Glasgow

| Gate | SELF-QA assertion | INDEPENDENT evidence / result |
|---|---|---|
| H0 current trading | PASS: `Fraser's 1st Birthday Party — 2026-08-01` at `https://galleries.donaghy.photo/`. | **BLOCKED**. Direct no-login opening redirected to a `Just a moment...` Cloudflare challenge; no dated gallery content was visible. The home-page text `Currently booking 2026–27` has no page evidence date and cannot substitute for H0. |
| Track / Website Status | Track W, owned `https://www.donaghy.photo/`. | **PASS**. Direct browser opened the stated URL at 1440×900 and 390×844. Both showed the business, `Wedding & event photography`, `Glasgow / Scotland`, the gallery link and `mailto:[REDACTED_EMAIL]`; desktop navigation showed Weddings, Events, My Approach and Get in Touch. |
| H0.5 / H5 | PASS: sparse presentation can be upgraded by static service/proof/contact presentation. | **UNPROVEN / blocked upstream**. The current home is visibly sparse and a static landing-page concept is technically plausible, but H0 has not independently passed, so H0.5/H5 cannot be accepted as a qualifying chain. |
| Public business email / H3 | PASS: `[REDACTED_EMAIL]` on official home/gallery. | **PASS** for the home source: visible `mailto:[REDACTED_EMAIL]`, business identity and retrieved date are independently reproducible. The blocked gallery is not needed for this email result. |
| H1–H2, H4, H6 | PASS. | **UNPROVEN / not qualifying**. The submitted evidence is consistent with an individual local photography business and a bounded page that links to external galleries, but these do not cure H0. |
| Score / Priority | 21 + 17 + 16 + 12 + 6 = **72/100, B**. | Arithmetic **correct: 72**. Priority B cannot be accepted because H0 is not independently PASS; it is not a purchase-probability judgement. |
| £600 static one-page fit | PASS. | **Plausible but not qualifying**: it could consolidate offering, selected work and contact while retaining external gallery workflows; no CMS/payment/self-hosted booking is required by the proposal. |

**Candidate conclusion: BLOCKED.** Required evidence to reconsider: a directly readable current, date-explicit and attributable H0 source within the rolling 90-day window.

### 2. DM Carpet Clean — Cardiff

| Gate | SELF-QA assertion | INDEPENDENT evidence / result |
|---|---|---|
| H0 current trading | PASS: Yell review dated `2026-05-07`, `https://www.yell.com/biz/d-m-carpet-clean-cardiff-8088596/`. | **BLOCKED** on current independent reading. The direct no-login Yell URL opened a `Just a moment...` Cloudflare challenge, not the review/date. It cannot be converted to PASS from the ledger. |
| Track / Website Status | Track W, owned `https://www.dmcarpetclean.co.uk/`. | **PASS**. Browser reopened the site at 1440×900 and 390×844. Both visual/DOM states showed the cookie layer, repeated hero panels, service links, quote/book prompts and the business phone; mobile had a cookie layer before content. This is direct viewport evidence, not an Owner self-report. |
| H0.5 / H5 | PASS: repeated/generic presentation and crowded structure map to a static upgrade. | **UNPROVEN / blocked upstream**. The direct desktop/mobile observations do provide a reproducible presentation issue, but the qualification chain cannot pass without H0 and H3. |
| Public business email / H3 | PASS: `[REDACTED_EMAIL]`, claimed visible on the official same-domain page. | **FAIL**. On the exact current official URL `https://www.dmcarpetclean.co.uk/`, direct browser inspection found zero `mailto:` links and no visible `[REDACTED_EMAIL]` (or `[REDACTED_EMAIL]`). Phone, WhatsApp, request-a-quote and contact-form paths are not substitutes. The Owner's cited root-page/line claim is therefore not currently reproducible as a public-email source. |
| H1–H2, H4, H6 | PASS. | **UNPROVEN / not qualifying**. The site visibly describes Cardiff/South Wales carpet/upholstery/car-interior cleaning and includes form/booking routes, but a static display page could only link out; it does not cure failed H3. |
| Score / Priority | 22 + 18 + 18 + 10 + 6 = **74/100, B**. | Arithmetic **correct: 74**. Priority B is invalid because its mandatory H3 gate fails (and H0 cannot presently be independently read). |
| £600 static one-page fit | PASS. | **Technically plausible only**: presentation of services, territory, proof and an external contact route could remain static; it cannot establish candidate eligibility. |

**Candidate conclusion: REJECTED.** Controlling hard failure: H3/Public Business Email. A later screening run would need a currently readable public business-email source with the original address, URL, retrieval date and business attribution; it would also need a directly readable H0 source.

### 3. Studio 31 Sports Photography — Leeds

| Gate | SELF-QA assertion | INDEPENDENT evidence / result |
|---|---|---|
| H0 current trading | PASS: `Wortley Reserves — 2026-08-17` on `https://studio31sportsphotography.pixieset.com/`. | **PASS**. Direct no-login browser page visibly showed Studio 31 identity, Leeds address/phone/email, and `WORTLEY RESERVES — 17TH AUGUST, 2026`, plus June 2026 galleries. This is within the rolling 90-day window and attributable to the same profile. |
| Track / Website Status | Track N — no owned website verified; three search faces logged as queries only. | **BLOCKED**. Independent exact-name/local search displayed `studio31.uk` with the same Electron Works, Leeds address and `07960 141134` phone as the Pixieset profile. Directly opening `https://www.studio31.uk/` stopped at `ERR_CERT_AUTHORITY_INVALID`; no bypass was attempted. A potentially owned domain therefore remains unresolved, so `NO OWNED WEBSITE VERIFIED` cannot be accepted. Owner's query-only record lacks direct result URLs/outcomes sufficient to clear this conflict. |
| H0.5 / H5 | PASS: a static landing page could orient clubs/schools/events and link to Pixieset. | **BLOCKED**. Track classification is unresolved. The current official Pixieset page was directly visible, but that does not authorize treating the business as Track N or advancing H0.5/H5. |
| Public business email / H3 | PASS: `[REDACTED_EMAIL]` on Pixieset. | **PASS**. Direct profile contained visible `mailto:[REDACTED_EMAIL]`, business name, phone and Leeds address; retrieved in this review. |
| H1–H2, H4, H6 | PASS. | **UNPROVEN / not qualifying**. The profile describes a local group and page scope can remain an external-gallery link-out, but unresolved owned-domain status prevents an accepted H2/H0.5/H5/H6 chain. |
| Score / Priority | 20 + 18 + 16 + 12 + 7 = **73/100, B**. | Arithmetic **correct: 73**. Priority B cannot be accepted while Track/H0.5/H1–H6 are not all independently PASS. It is not a purchase-probability judgement. |
| £600 static one-page fit | PASS. | **Plausible but unaccepted**: a static orientation/contact page could link out to existing Pixieset galleries and any ordering/payment rather than recreate them. Whether it provides meaningful incremental value depends on the unresolved owned site. |

**Candidate conclusion: BLOCKED.** Required evidence to reconsider: resolve `studio31.uk` ownership and current state without bypassing its certificate failure, then redo mutually exclusive Website Status/Track and the dependent H0.5/H1–H6 review.

## Cross-candidate checks

- **De-duplication:** a literal repository scan excluding this submitted directory found no prior match for `Jack Donaghy Photography`, `DM/D M Carpet Clean`, or `Studio 31 Sports Photography`. This supports the submitted new-candidate claim, but cannot override any hard gate.
- **Cities/industries:** the submitted set spans Glasgow/Cardiff/Leeds and photography/cleaning; this coverage condition is met but is non-curative.
- **Score recomputation:** Owner arithmetic is 72, 74 and 73 respectively. The sums do not establish eligibility; each Priority B record requires every H0, Track, H0.5, public email and H1–H6 gate to pass.
- **Static-product boundary:** all three proposed concepts can in principle remain HTML/CSS/small JS and link to external gallery/booking/contact flows. No positive fit conclusion is treated as authority for Demo, email, deployment or external contact.

## Final acceptance record

```text
Jack Donaghy Photography: BLOCKED
DM Carpet Clean: REJECTED
Studio 31 Sports Photography: BLOCKED
INDEPENDENT ACCEPTANCE: FAIL
Accepted count: 0 / 3
```

This review creates no Demo authorization, outreach authorization, compliance finding, or send-ready status.

---

# Round 2 — replacement-candidate independent acceptance — 2026-08-24

## Round 2 decision

The Round 1 `FAIL` above is retained as a historical, permanent record. It is not rewritten by this replacement review.

`ROUND 2 INDEPENDENT ACCEPTANCE = FAIL` — **1/3 ACCEPTED**.

| Replacement candidate | Independent result | Controlling result |
|---|---|---|
| JL and TM Cleaning Quality Cleaning Service — Merthyr Tydfil / RCT | **ACCEPTED** | All required gates independently reproducible from the official site; independently recalculated 70/100, Priority B. |
| First Impressions Yorkshire Ltd — Doncaster | **BLOCKED** | The only stated H0 source, the direct Yell review URL, currently opens a Cloudflare `Just a moment...` challenge. The review/date cannot be read independently. |
| Drive with Darren — Swansea | **BLOCKED** | The only stated H0 source, the direct Yell review URL, currently opens a Cloudflare `Just a moment...` challenge. The review/date cannot be read independently. |

No substitute candidate was researched, and no Owner screening record was edited.

## Round 2 scope, evidence method and status separation

- Reviewer task ID: `01a0316d-9cec-7201-88f8-8243b8186d83`; execution Owner task ID remains `01a03163-18de-73b0-863f-ffe6f13f2cc3`.
- Updated `QUALIFIED_CANDIDATES.md`, `EVIDENCE_LEDGER.md` and `SCREENING_LOG.md` were read in full before this review. The Round 1 section above remains the authoritative record of the prior batch's 0/3 result.
- All page observations below are this Reviewer's current, no-login browser checks on 2026-08-24. `SELF-QA` describes only the submitted Owner record. No consent control, form, booking path, email, account, payment, or external write was used.
- A literal project-tree de-duplication scan excluding this output directory found no earlier match for the three replacement names. The three replacement cities and industries are distinct, but those facts do not cure a failed or blocked hard gate.
- `Demo Readiness` remains `NOT AUTHORIZED` for every record. Acceptance never authorises a Demo, outreach, sending, or deployment.

## Round 2 individual gate review

### JL and TM Cleaning Quality Cleaning Service — Merthyr Tydfil / RCT

| Gate | SELF-QA | INDEPENDENT evidence and disposition |
|---|---|---|
| H0 — Current Trading Status | PASS: official review dated 2026-08-10. | **PASS.** `https://jlandtmcleaning.co.uk/` directly displayed the review by Angela Funning dated `10 August 2026`, naming Tracy and James, alongside the business identity/contact details. It is an attributable, date-explicit official-page customer review within the 90-day window. |
| Website Status / Track W / dual viewport | Owned site; 1440×900 and 390×844 reviewed. | **PASS.** The official owned URL opened at 1440×900 and 390×844. Both were visibly the same JL and TM business; desktop showed a long template-style navigation, stock-led presentation and cookie overlay; mobile retained the lengthy navigation and initial cookie layer. The home content identifies Cardiff/surrounding service while the contact block says Merthyr Tydfil: that is a documented geographic-content inconsistency, not an identity substitution. |
| H0.5 — Meaningful Demo Opportunity | PASS. | **PASS.** The official page is service-rich but its template-led/stock presentation, dense hierarchy and weak narrow-view continuity leave a reproducible static-presentation opportunity: a concise area/service/proof/contact page. This does not require invented claims, a CMS, payment, self-hosted form, or booking system. |
| H1 / H2 | PASS. | **PASS.** The directly readable current review establishes current operation; current page copy says family-run and identifies Tracy/James, supporting independent/local decision context. |
| H3 — Public Business Email | PASS: `[REDACTED_EMAIL]`. | **PASS.** Exact address was visibly present in the official contact block and as `mailto:[REDACTED_EMAIL]`; source URL `https://jlandtmcleaning.co.uk/`; retrieved in this review on 2026-08-24; source type official business website. Gmail MX does not prove receipt and is not used as such. |
| H4 — Static single-page fit | PASS. | **PASS.** A static page can present verified service categories, service areas, selected customer proof and phone/email contact; existing `Book`/message paths are not proposed for recreation or operation. |
| H5 / H6 | PASS. | **PASS.** Direct dual-viewport observations map to an honest static improvement, and no core requirement found in the visible page requires the proposed product to implement a portal, live inventory, payment, self-hosted booking, database, CMS, or ongoing content operation. |
| Independent score / Priority | 76/100, B. | **70/100, Priority B.** Recalculation: Website Opportunity **21/30** (5+5+4+3+4), Business Health **16/20** (4+5+4+3), Single-page Fit **17/20**, Purchase Signal **9/20** (2+2+5+0), Contact Viability **7/10**. The changed score reflects the already substantial service/pricing content and generic shared inbox; it does not predict purchase. All mandatory B hard gates independently pass. |
| £600 static fit | PASS. | **PASS.** The static scope can solve the core presentation/clarity gap while preserving external/manual contact workflows. The Cardiff/Merthyr wording must be reconfirmed before any client-facing work; it does not expand this acceptance into an authorisation. |

**Round 2 candidate conclusion: ACCEPTED.** `Screening Qualification: QUALIFIED (INDEPENDENT ACCEPTANCE)`; `Demo Readiness: NOT AUTHORIZED`.

### First Impressions Yorkshire Ltd — Doncaster

| Gate | SELF-QA | INDEPENDENT evidence and disposition |
|---|---|---|
| H0 — Current Trading Status | PASS: direct Yell review dated 2026-08-13. | **BLOCKED.** Exact URL `https://www.yell.com/biz/first-impressions-yorkshire-landscaping-and-driveways-doncaster-8622906/` currently redirected the no-login browser to `Just a moment...` with no review, author, date or business content visible. The ledger assertion is not a current independent H0 proof. |
| Website Status / Track W / dual viewport | PASS. | **PASS.** The owned official site opened at 1440×900 and 390×844 as First Impressions Yorkshire: a dense, repetitive services/slogan presentation; full Doncaster address and `mailto:[REDACTED_EMAIL]` were visible. This does not cure H0. |
| H0.5 / H1–H6 / Priority | PASS, 77/100 B. | **NOT ACCEPTED.** H0 is the first hard gate; therefore H0.5 and dependent H1–H6 cannot form an independent qualifying chain, whatever the Owner score. For information only, Owner arithmetic is correct: 22+18+18+12+7 = 77; it is not an independently accepted Priority B status. |
| H3 / static fit | PASS. | Official email is independently visible, and a narrowed static service page is technically conceivable, but neither fact substitutes for dated current-trading evidence. |

**Round 2 candidate conclusion: BLOCKED.** Needed to reconsider: a no-login, directly readable, date-explicit and attributable H0 source inside the rolling 90-day window. No conclusion is drawn that the business is inactive.

### Drive with Darren — Swansea

| Gate | SELF-QA | INDEPENDENT evidence and disposition |
|---|---|---|
| H0 — Current Trading Status | PASS: direct Yell review dated 2026-08-20. | **BLOCKED.** Exact URL `https://www.yell.com/biz/drive-with-darren-swansea-10970834/` currently redirected the no-login browser to `Just a moment...` with no readable review/date/attribution. Owner text cannot substitute. |
| Website Status / Track W / dual viewport | PASS. | **PASS.** Official `https://www.drive-with-darren.co.uk/` opened at 1440×900 and 390×844, displaying manual lesson copy, Swansea/Llanelli/Neath/Port Talbot coverage, prices, phone and `mailto:[REDACTED_EMAIL]`. Both current views carried the consent panel; mobile remained low-information above it. |
| H0.5 / H1–H6 / Priority | PASS, 79/100 B. | **NOT ACCEPTED.** The static proposal is bounded (coverage, verified lesson/pricing information, proof and contact; no live schedule/booking), but H0 remains blocked and no subsequent gate or Priority B score can override it. Owner arithmetic is correct: 25+17+17+11+9 = 79; it is not independently accepted. |
| H3 | PASS. | **PASS.** `[REDACTED_EMAIL]` is visible as the current official page's `mailto:` address and business contact. It cannot substitute for H0. |

**Round 2 candidate conclusion: BLOCKED.** Needed to reconsider: a directly readable, date-explicit, attributable current-trading source within 90 days. No inference of closure is made.

## Round 2 final record

```text
Round 1: FAIL — 0/3 accepted (historical record retained)
Round 2:
  JL and TM Cleaning Quality Cleaning Service: ACCEPTED — 70/100, Priority B
  First Impressions Yorkshire Ltd: BLOCKED — H0 direct source not readable
  Drive with Darren: BLOCKED — H0 direct source not readable
ROUND 2 INDEPENDENT ACCEPTANCE: FAIL — 1/3 accepted
```

The outcome is evidence-limited, not a negative trading claim for either blocked business. No replacement, Demo, outreach, deployment, or other external action was performed.

---

# Round 3 — final-candidate independent acceptance — 2026-08-24

## Round 3 decision

Rounds 1 and 2 above remain historical audit records and are not overwritten.

`ROUND 3 INDEPENDENT ACCEPTANCE = FAIL` — **1/3 ACCEPTED**.

| Final candidate | Independent result | Controlling reason |
|---|---|---|
| JL and TM Cleaning Quality Cleaning Service — Merthyr Tydfil / RCT | **ACCEPTED** | The current Owner record preserves the same directly readable H0 date, official email, owned-site identity and dual-viewport evidence accepted in Round 2; independent score remains 70/100, Priority B. |
| The Lash Lounge — Newcastle upon Tyne | **REJECTED** | H0/email/Track W are current and readable, but H0.5 fails: the current site already gives a credible local introduction, treatment selection, local proof/contact and an existing external Phorest booking route. A £600 static page has no independently demonstrated meaningful transformation basis. |
| The Bingley Arms — Bardsey / Leeds | **REJECTED** | Current official `/index` and its visible official `/events` link do not reproduce the Owner's claimed `22nd August, 2026` Summer Garden Party. Without independently readable, date-explicit current trading evidence, H0 fails. |

The required result is 3/3 `ACCEPTED`; this final table has 1/3. No substitute was sought.

## Round 3 scope and method

- Reviewer task ID: `01a0316d-9cec-7201-88f8-8243b8186d83`; execution Owner task ID: `01a03163-18de-73b0-863f-ffe6f13f2cc3`.
- Re-read in full before review: current `QUALIFIED_CANDIDATES.md`, `EVIDENCE_LEDGER.md`, and `SCREENING_LOG.md`. The final table correctly preserves the previously barred candidates and records JL as the retained Round-2 accepted record.
- All observations below were independently obtained in a no-login browser on 2026-08-24. No form, consent action, booking, login, email, upload, deployment or other external write occurred.
- A literal project-tree scan excluding this output folder found no earlier match for JL and TM Cleaning, The Lash Lounge / `lash-lounge.co.uk`, or The Bingley Arms / `bingleyarms.com`. De-duplication does not cure a hard gate.

## Round 3 individual gate review

### JL and TM Cleaning Quality Cleaning Service — Merthyr Tydfil / RCT

| Gate | Independent result |
|---|---|
| H0 | **PASS.** Official home currently displays Angela Funning's `10 August 2026` review, attributable to the named business and Tracy/James, within the 90-day window. |
| Track W / dual viewport | **PASS.** `https://jlandtmcleaning.co.uk/` again opened at 1440×900 and 390×844 with the same business identity, template-like hierarchy and mobile continuity defect documented in Round 2. |
| H0.5, H1–H6 | **PASS.** No key evidence in the final files was changed: the direct public email, family-run/local context, static bounded-scope basis and no-system-dependency conclusion remain reproducible. |
| H3 | **PASS.** Official page still visibly exposes `mailto:[REDACTED_EMAIL]`; it is a public business address, not an inferred mailbox. |
| Score / Priority | **70/100, Priority B retained.** Reviewer calculation remains Opportunity 21/30, Health 16/20, Fit 17/20, Purchase 9/20, Contact 7/10. It is a prioritisation heuristic, not purchase probability. |
| £600 static fit | **PASS.** A fixed service/area/proof/contact page can link out to the existing contact route without recreating booking, data collection, CMS or payments. The Cardiff/Merthyr wording remains a client-facing verification risk, not an acceptance authorisation. |

**Round 3 candidate conclusion: ACCEPTED.** `Demo Readiness: NOT AUTHORIZED`.

### The Lash Lounge — Newcastle upon Tyne

| Gate | Independent result |
|---|---|
| H0 | **PASS.** Direct no-login opening of `http://www.lash-lounge.co.uk/blog` shows `WHAT REALLY HAPPENS DURING A SKIN CONSULTATION?`, dated `20/8/2026`, signed `By Ellis, Skin Therapist at The Lash Lounge`, with a £20 30-minute consultation and visible external booking CTA. It is date-explicit, attributable owned-site current-trading evidence. |
| Track W / dual viewport | **PASS.** Official home `http://www.lash-lounge.co.uk/` opened at 1440×900 and 390×844. The mobile view visibly introduces the Newcastle salon, shows named treatment choices, local address/parking, contact and the external Phorest booking route. |
| H3 | **PASS.** Direct official contact page showed `mailto:[REDACTED_EMAIL]`; source is public and business-attributable, retrieved in this review. Deliverability stays `UNKNOWN`, not presumed from the address. |
| H1 / H2 / H4 | **PASS.** The owned current blog/home establish operation and local salon context; a theoretical page could remain static and leave Phorest external. |
| H0.5 / H5 / H6 | **FAIL.** The evidence does not demonstrate a meaningful, honest 30–60 minute static transformation. The currently rendered site already contains a clear local value proposition, selected treatments, treatment detail, local proof/contact and a direct external booking path. A replacement would be cosmetic/narrowing rather than a clearly material presentation or conversion upgrade. Consequently its visible current presentation is not a sufficient H5 demo basis, and H6's exclusion condition applies. |
| Independent score / Priority | **64/100, HOLD.** Recalculation: Opportunity 18/30 (3+5+4+4+2), Health 18/20, Single-page Fit 14/20, Purchase 8/20 (2+2+4+0), Contact 6/10. Owner's 72 is arithmetically stated but not independently supported as Priority B; score is not a purchase prediction. |
| £600 static fit | Technically bounded but **not qualifying**: retaining a rich existing treatment/booking flow leaves no independently evidenced core problem that a static single-page product would solve. |

**Round 3 candidate conclusion: REJECTED.** The H0 pass does not establish website need or demo opportunity.

### The Bingley Arms — Bardsey / Leeds

| Gate | Independent result |
|---|---|
| H0 | **FAIL — CURRENT TRADING STATUS NOT VERIFIED.** Direct no-login opening of the claimed source `https://www.bingleyarms.com/index` showed the pub identity, food/booking/contact content and no dated `22nd August, 2026` Summer Garden Party. The site's visible `What's On` link, `https://www.bingleyarms.com/events`, was then directly opened; it displayed undated recurring weekly offers but not the claimed dated event. Copyright year, opening hours and page accessibility cannot substitute for H0. This is not a claim that the business is closed. |
| Track W / dual viewport | **PASS.** Official `index` opened at 1440×900 and 390×844 as The Bingley Arms, with contact address, `mailto:[REDACTED_EMAIL]`, practical opening information and external booking CTAs. |
| H3 | **PASS.** `mailto:[REDACTED_EMAIL]` is visibly published on the owned official pages and attributable to the Bardsey business. Deliverability remains `UNKNOWN`; no mailbox result was inferred. |
| H0.5 and H1–H6 | **NOT QUALIFYING.** H0 is the first hard gate. The potentially static heritage/food/private-hire page idea and visible owned-site evidence cannot override missing current H0 proof. The existing site also depends on current food/events/booking information that must remain external or owner-updated. |
| Independent score / Priority | **NOT A QUALIFYING SCORE.** Owner arithmetic is 19+19+16+10+6 = 70, but no Priority B result may be accepted after H0 failure. A post-H0 score would improperly mask the missing hard evidence, so it is not reclassified as a qualified priority. |
| £600 static fit | Plausible only as a bounded, non-qualifying concept: live tables, menus and event updates cannot be represented as static/current facts by this product. |

**Round 3 candidate conclusion: REJECTED.** To reconsider, a directly readable source with a complete ISO-year date, direct URL, signal type and clear business attribution must establish H0 within the rolling window.

## Round 3 final record

```text
Round 1: FAIL — 0/3 accepted (historical record retained)
Round 2: FAIL — 1/3 accepted (historical record retained)
Round 3:
  JL and TM Cleaning Quality Cleaning Service: ACCEPTED — 70/100, Priority B
  The Lash Lounge: REJECTED — H0.5/H5/H6 no meaningful static transformation basis
  The Bingley Arms: REJECTED — H0 current trading status not verified
ROUND 3 INDEPENDENT ACCEPTANCE: FAIL — 1/3 accepted
```

No Demo, outreach, deployment, or other external action is authorised by this report.

---

# Round 4 — takeover final-candidate independent acceptance — 2026-08-24

## Round 4 decision

Rounds 1–3 above remain intact historical evidence. This round does not alter their conclusions.

`ROUND 4 INDEPENDENT ACCEPTANCE = FAIL` — **1/3 ACCEPTED**.

| Candidate | Independent result | Controlling reason |
|---|---|---|
| JL and TM Cleaning Quality Cleaning Service — Merthyr Tydfil / RCT | **ACCEPTED** | Final files preserve the Round-2/3 evidence chain; H0, email, Track W and Reviewer 70/100 Priority B calculation remain directly reproducible. |
| Gwithian Farm Campsite — Gwithian / Hayle | **REJECTED** | The current same-domain “Book Now” path is a dynamic reservation workflow with date/guest/pitch selection, personal-data form fields, availability handling, £80 deposit and Stripe. H4/H6 fail: a £600 static page cannot solve this primary online booking/availability need. |
| The Cyclogical Shop — Deddington | **REJECTED** | The local-organisation page is readable and identity-matched, but its `August 2026` calendar/sponsor slot dates the organiser's annual display—not a dated, attributable merchant operating action. H0 is not verified. |

Three `ACCEPTED` records are required for batch PASS. No substitute candidate was sought.

## Identity correction and method

- Correct Round-4 takeover execution task ID: `01a03199-ffd9-7fa1-8ea5-2f050f2ee5e2`.
- The execution Owner's final report incorrectly stated PMO task ID `01a01da9-3825-7ba2-a6bc-c3bacc1f70db`. This identity error is recorded; it neither replaces the execution task ID nor determines any evidence result.
- Reviewer task ID: `01a0316d-9cec-7201-88f8-8243b8186d83`.
- Current `QUALIFIED_CANDIDATES.md`, `EVIDENCE_LEDGER.md`, and `SCREENING_LOG.md` were read in full. All browser checks were no-login and read-only; no booking step, consent action, form entry/submission, payment, login, deployment or outreach occurred.
- Literal project-tree scan excluding this output directory found no prior matching record for Gwithian Farm / domain, Cyclogical / domain, or JL and TM Cleaning. This supports newness only; it is not a hard-gate substitute.

## Round 4 individual gate review

### JL and TM Cleaning Quality Cleaning Service — Merthyr Tydfil / RCT

| Gate | Independent Round-4 result |
|---|---|
| H0 / H1 | **PASS.** Official home still directly shows Angela Funning's `10 August 2026` review naming Tracy and James, an attributable within-window operating signal. |
| Track W / viewport | **PASS.** Owned home re-opened at 1440×900, retaining the same template-led hierarchy and mobile-continuity basis accepted in Round 2/3. |
| H2–H6 / H3 | **PASS.** The official page continues to show the family-run/local context and `mailto:[REDACTED_EMAIL]`; static service/area/proof/contact scope remains bounded without recreating its current contact workflow. |
| Score / Priority | **70/100, Priority B retained.** No submitted final-file change affected Reviewer calculation: Opportunity 21, Health 16, Fit 17, Purchase 9, Contact 7. |

**Round-4 candidate conclusion: ACCEPTED.** `Demo Readiness: NOT AUTHORIZED`.

### Gwithian Farm Campsite — Gwithian / Hayle

| Gate | Independent Round-4 result |
|---|---|
| H0 / H1 / H2 | **PASS.** Direct official home visibly states `Campsite OPEN` and `FULLY BOOKED from 26th July until last week of August 2026`, together with the business identity, Clair/Mike/family and Cornwall contact details. This is a direct, current, date-explicit official operating/availability update. |
| Track W / dual viewport / H3 | **PASS.** Official owned home opened at 1440×900 and 390×844; each showed the campsite, current booking emphasis and public `mailto:[REDACTED_EMAIL]`. |
| H0.5 / H4 / H5 / H6 | **FAIL.** Direct read-only opening of the visible same-domain `https://www.gwithianfarm.co.uk/book-now-2/` exposes the primary booking workflow, not merely an external link: live date/pitch/guest selections, availability/manual confirmation, personal details, booking-deposit terms (`£80`) and Stripe payment components. Dynamic availability and reservation/payment handling are central to the campsite's core digital need. Replacing that with a static page would leave the main customer task unsolved; rebuilding it violates the static boundary. A prettier coastal marketing page is therefore not an honest H0.5/H5 basis and H6's exclusion condition applies. |
| Score / Priority | Owner arithmetic is **75** (24+19+16+10+6), but **no independent Priority B may be assigned** after H4/H6 failure. A score cannot mask dynamic-system dependency or turn online booking/payment into a static-page fit. |
| £600 static fit | **FAIL.** A static concept could only be a supplementary brochure; it cannot resolve the primary availability/reservation/deposit workflow. |

**Round-4 candidate conclusion: REJECTED.** This does not claim the campsite is inactive or unsuitable for every web service; it is unsuitable for the defined £600 static-page offer as the primary solution.

### The Cyclogical Shop — Deddington

| Gate | Independent Round-4 result |
|---|---|
| H0 | **FAIL — CURRENT TRADING STATUS NOT VERIFIED.** `https://www.friendsofdeddingtonlibrary.org/2026-parish-calendar` directly opened and its **August 2026** calendar entry names The Cyclogical Shop, Hudson Street, James, matching phone, `[REDACTED_EMAIL]` and owned domain. This establishes identity and a public annual-sponsor profile, but not a dated merchant operating action: the date labels the Friends of Deddington Library's calendar slot/annual sponsor display, not a shop post, customer review, business response, delivery, event, recruitment or other trade action on a stated day. It is therefore not sufficient H0 evidence under the current-trading gate. |
| Track W / dual viewport / H3 | **PASS.** `http://www.cyclogicalshop.co.uk/` opened at 1440×900 and 390×844 with matching Hudson Street/phone/service identity and visible `mailto:[REDACTED_EMAIL]`. Its nonresponsive table layout and obsolete Flash notice are directly observable. |
| H0.5 / H1–H6 | **NOT QUALIFYING.** A static repair/sales/contact page could technically address the legacy site, but no later gate may advance until H0 passes. Website weakness and matching email do not prove current trade. |
| Score / Priority | Owner raw arithmetic is **75** (29+11+18+11+6), but **not a qualifying score or Priority B** after H0 failure. In particular, calendar sponsorship is not independently converted into purchasing, investment or current-trading evidence. |
| £600 static fit | Technically plausible only; not eligible without qualifying H0. No claim of business closure is made. |

**Round-4 candidate conclusion: REJECTED.** To reconsider, provide a no-login directly readable source containing a full current date, direct URL, signal type and clear evidence of the shop's own operating action within the rolling 90-day window.

## Round 4 final record

```text
Round 1: FAIL — 0/3 accepted (historical record retained)
Round 2: FAIL — 1/3 accepted (historical record retained)
Round 3: FAIL — 1/3 accepted (historical record retained)
Round 4:
  JL and TM Cleaning Quality Cleaning Service: ACCEPTED — 70/100, Priority B
  Gwithian Farm Campsite: REJECTED — H4/H6 dynamic booking, availability and payment are core
  The Cyclogical Shop: REJECTED — H0 current trading status not verified
ROUND 4 INDEPENDENT ACCEPTANCE: FAIL — 1/3 accepted
```

No Demo, outreach, deployment, payment, booking, or other external action is authorised by this report.

---

# Round 5 — final-candidate independent acceptance — 2026-08-24

## Round 5 decision

Rounds 1–4 remain intact historical audit records. This review changes none of their conclusions.

`ROUND 5 INDEPENDENT ACCEPTANCE = FAIL` — **1/3 ACCEPTED**.

| Candidate | Independent result | Controlling reason |
|---|---|---|
| JL and TM Cleaning Quality Cleaning Service — Merthyr Tydfil / RCT | **ACCEPTED** | The retained official H0 review, public email, owned-site identity and Reviewer 70/100 Priority B calculation are unchanged and directly reproducible. |
| GC Roofing Contractors 1 Ltd — Cannock | **REJECTED** | The direct Checkatrade page renders the review as `Posted 24 July` with no year. H0 requires a complete year-bearing date; neither current date, retrieval date nor Owner ledger may supply `2026`. |
| GRD Landscaping Ltd — Bromley | **REJECTED** | The direct Checkatrade page renders the review as `Posted 22 July` with no year. This is fixed `H0 NOT VERIFIED`; Owner's `2026` assertion cannot fill the missing year. |

Three accepted records are required for batch PASS. No alternative candidate was sought.

## Round 5 independent evidence and gate review

- Updated `QUALIFIED_CANDIDATES.md`, `EVIDENCE_LEDGER.md` and `SCREENING_LOG.md` were read in full. No candidate/screening file was modified.
- All web checks below were independent, no-login and read-only at 1440×900 and 390×844 where applicable. No form, quote, cookie-consent, login, email or payment action occurred.
- A literal project-tree scan excluding this output directory found no earlier match for the two new business/domain names or the retained JL record. Newness never overrides H0.

### JL and TM Cleaning Quality Cleaning Service

| Gate | Independent Round-5 result |
|---|---|
| H0 / Track W / H1–H6 / H3 | **PASS, unchanged.** Official page still shows the attributable `10 August 2026` review naming Tracy and James, the owned site and `mailto:[REDACTED_EMAIL]`. |
| Score / Priority | **70/100, Priority B retained** (Opportunity 21, Health 16, Fit 17, Purchase 9, Contact 7). |
| Static £600 fit | **PASS.** Stable services, area, proof and contact remain separable from the existing contact workflow. |

**Round-5 candidate conclusion: ACCEPTED.** `Demo Readiness: NOT AUTHORIZED`.

### GC Roofing Contractors 1 Ltd — Cannock

| Gate | Independent Round-5 result |
|---|---|
| H0 | **FAIL — CURRENT TRADING STATUS NOT VERIFIED.** Direct `https://www.checkatrade.com/trades/gcroofingcontractors1ltd` was readable and identity-attributable: GC Roofing Contractors 1 Ltd, Cannock and Mr George Clee. It visibly showed Chris P's `Tile replacement` review at WS14, but the only displayed date was `Posted 24 July`, with no year. Candidate Independent Acceptance requires the original H0 evidence to retain a complete year-bearing date; current browser date, the page's current state and Owner's `2026-07-24` notation cannot add that missing fact. |
| Track W / H3 / visual evidence | **PASS but non-curative.** Official site opened at both requested viewports and presents roofing services/quote paths; official email visibility and the email-to-George alignment are independently observable. |
| H0.5, H1–H6 | **NOT QUALIFYING.** H0 is the first hard gate. Static quote-page plausibility and paid-directory/membership claims cannot advance the candidate or substitute for a year-complete current trading signal. |
| Score / Priority | Owner arithmetic is **76** (24+17+18+11+6), but no independent Priority B or qualifying score can be assigned after H0 failure. Scores do not override hard gates or demonstrate purchase intent. |
| £600 static fit / H6 | A static roofing lead page may be technically plausible, and Checkatrade membership is visible, but both are **non-curative**; no conclusion on candidate eligibility follows. |

**Round-5 candidate conclusion: REJECTED.** Required to reconsider: a directly readable, attributable H0 source with an explicit full date including year, within the rolling 90-day window. No closure/inactivity claim is made.

### GRD Landscaping Ltd — Bromley

| Gate | Independent Round-5 result |
|---|---|
| H0 | **FAIL — CURRENT TRADING STATUS NOT VERIFIED.** Direct `https://www.checkatrade.com/trades/grdlandscapingltd1138671` was readable and identifies GRD Landscaping LTD, Bromley and Mr Romica Dinu. Its `Composite Decking` review names Romy/team at RH1, but renders only `Posted 22 July`, without a year. The year is required original evidence, so the Owner ledger may not convert it into `22 July 2026`. |
| Track W / H3 / visual evidence | **PASS but non-curative.** Official Wix site opened at 1440×900 and 390×844; public `mailto:[REDACTED_EMAIL]`, company identity and generic services/contact presentation were directly visible. |
| H0.5, H1–H6 | **NOT QUALIFYING.** A proof-first static landscaping page might be feasible, but the core sequence stops at failed H0. No membership, testimonial, generic service card or readable email can repair that gap. |
| Score / Priority | Owner arithmetic is **72** (19+17+18+12+6), but there is no independently accepted Priority B after H0 failure. The score is not a purchase, investment or qualification substitute. |
| £600 static fit / H6 | Technically plausible only and not eligible. The claimed Checkatrade membership evidence does not cure missing year-bearing H0 proof. |

**Round-5 candidate conclusion: REJECTED.** Required to reconsider: an independently readable current-business signal with a complete explicit year-bearing date and direct identity attribution.

## Round 5 final record

```text
Round 1: FAIL — 0/3 accepted (historical record retained)
Round 2: FAIL — 1/3 accepted (historical record retained)
Round 3: FAIL — 1/3 accepted (historical record retained)
Round 4: FAIL — 1/3 accepted (historical record retained)
Round 5:
  JL and TM Cleaning Quality Cleaning Service: ACCEPTED — 70/100, Priority B
  GC Roofing Contractors 1 Ltd: REJECTED — H0 date has no year
  GRD Landscaping Ltd: REJECTED — H0 date has no year
ROUND 5 INDEPENDENT ACCEPTANCE: FAIL — 1/3 accepted
```

No Demo, outreach, sending, deployment, payment or other external action is authorised by this report.

# Round 6 — final-candidate independent acceptance — 2026-08-24

## Round 6 decision

Rounds 1–5 remain intact historical audit records. This round changes none of their conclusions.

`ROUND 6 INDEPENDENT ACCEPTANCE = FAIL` — **1/3 ACCEPTED**.

| Candidate | Independent result | Controlling reason |
|---|---|---|
| JL and TM Cleaning Quality Cleaning Service — Merthyr Tydfil / RCT | **ACCEPTED** | The final files retain the already independently accepted official review, public business email, Track-W evidence and Reviewer 70/100 Priority B calculation. No conflicting replacement of that evidence was found. |
| Clarkson and Son Ltd — Tenterden | **REJECTED** | H0, email, Track W and a real static-page opportunity pass, but the independent, non-duplicated recomputation is **67/100, Priority HOLD**, not Owner 70 / Priority B. The single apprenticeship/wage event cannot simultaneously supply Business Health brand/workforce points, Purchase-Signal presentation-investment points and a separate H6 investment conclusion. |
| M and M Welding and Fabrication Ltd — Hoddesdon | **REJECTED** | The GOV.UK H0 and official email pass, but the current site is already a comprehensive responsive commercial brochure with services, sectors, team, case studies/gallery, certifications, full contact route and no dynamic-core deficit. Therefore **H0.5/H5/H6 fail**: a £600 static one-page replacement is cosmetic, not an honest material primary-path upgrade. |

Three accepted records are required for batch PASS. No substitute candidate was sought.

## Independent method and current evidence

- Reviewer task ID: `01a0316d-9cec-7201-88f8-8243b8186d83`.
- Updated `QUALIFIED_CANDIDATES.md`, `EVIDENCE_LEDGER.md` and `SCREENING_LOG.md` were completely reread. The historical Round 1–5 record above was preserved.
- All live checks were independent, no-login and read-only. No cookie choice, form entry/submission, booking, payment, login, email, deployment or outreach occurred.
- The authoritative pages—not HTTP status, Owner score, SELF-QA or a search summary—were reopened. The requested 1440×900 and 390×844 browser checks were performed for both Round-6 Track-W sites; the temporary viewport override was reset after review.

## Round 6 individual gate review

### JL and TM Cleaning Quality Cleaning Service

| Gate | Independent Round-6 result |
|---|---|
| Final-file integrity / H0 / H1–H6 | **PASS, unchanged.** The final table and ledger still identify the official `10 August 2026` attributable review, the owned website and the same public `mailto:[REDACTED_EMAIL]`; no later file replaces the accepted evidence with a weaker source. |
| Track W / H3 / static fit | **PASS, retained.** The historical independent dual-viewport, public-email and bounded static service/area/proof/contact basis remains internally consistent with the final screening files. |
| Score / Priority | **70/100, Priority B retained** — Opportunity 21, Health 16, Fit 17, Purchase 9, Contact 7. |

**Round-6 candidate conclusion: ACCEPTED.** `Demo Readiness: NOT AUTHORIZED`.

### Clarkson and Son Ltd — Tenterden, Kent

| Gate | Independent Round-6 result |
|---|---|
| H0 | **PASS — CURRENT TRADING STATUS VERIFIED.** Direct no-login reopening of [the GOV.UK vacancy](https://www.findapprenticeship.service.gov.uk/apprenticeship/VAC2000046960) visibly showed `Posted on 14 August 2026`, `Painting and Decorating Apprentice`, `Clarkson and Son`, `TENTERDEN (TN30 6NJ)`, one position, `£15,600 for your first year`, 37.5 hours, and 1 October 2026 start. The owned contact page identifies Clarkson and Son as a Tenterden decorator and names Jacob Clarkson. The matching distinctive name, trade and locality make this a sufficient employer-identity cross-check; it is not a directory update or search snippet. |
| Track W / required viewports | **PASS.** `https://www.clarksonandson.co.uk/` rendered as the owned decorating site at 1440×900 and, after a fresh mobile reopen, at 390×844 with no horizontal overflow. Desktop visibly exposes phone, official mailto, service/area/project navigation, five repetitions of the same latest-project message and testimonials dated 2020; mobile makes the dense all-caps navigation and repeated project treatment directly observable. |
| H1 / H2 / H3 | **PASS.** The paid current vacancy establishes operation; the named local Tenterden decorating firm and Jacob Clarkson support local/independent context; `mailto:[REDACTED_EMAIL]` is currently visible on the owned home and contact pages. It is a public generic business mailbox; deliverability was not inferred. |
| H0.5 / H4 / H5 | **PASS.** The stale testimonial dates, repeated project slot and weaker mobile hierarchy are specific, re-openable presentation problems. A proof-first static services/current-projects/area/phone-email page can resolve the principal display-and-enquiry job without CMS, booking, payment, stock, database or ongoing editorial work. The proposed improvement maps directly to those observed gaps. |
| H6 / wage interpretation | **PASS as an exclusion check, with limitation.** The site has static lead-generation needs and is not professionally mobile-complete; its old proof and repeated presentation leave durable single-page value. The paid apprenticeship is strong current-operation context, but it proves workforce spend—not a separate commitment to website presentation—and is not scored again as an additional purchase signal. |
| Independent score / Priority | **67/100, Priority HOLD — not Priority B.** Opportunity **24/30** (visual 7, mobile 6, hierarchy 3, conversion 3, transformation 5); Business Health **12/20** (reviews 0: only visible 2020 proof; operating 5; business quality 4; existing-brand presentation 3); Fit **19/20**; Purchase Signal **6/20** (ability 2; presentation-investment 0; website commercial importance 4; no clear sourced trigger 0); Contact **6/10**. The recruitment/wage is used only for current operation/H0 context, not repeatedly in Health, Purchase and H6. |

**Round-6 candidate conclusion: REJECTED.** This is not a claim that the business is inactive or unfit for all web work. It cannot enter the required Priority-B candidate set on the independently supported score.

### M and M Welding and Fabrication Ltd — Hoddesdon, Hertfordshire

| Gate | Independent Round-6 result |
|---|---|
| H0 | **PASS — CURRENT TRADING STATUS VERIFIED.** Direct no-login reopening of [the GOV.UK vacancy](https://www.findapprenticeship.service.gov.uk/apprenticeship/reference/2000047910) visibly showed `Posted on 12 August 2026`, `M & M WELDING & FABRICATION LTD`, `HERTS (EN11 0EE)`, two positions, `£16,640 for your first year`, 40 hours, and 28 September 2026 start. The same page links the official site and gives Unit 7–8 Rawmec Business Park, Hoddesdon EN11 0EE, exactly matching the owned site. |
| Track W / H1 / H2 / H3 | **PASS.** The owned `https://www.mmwelding.co.uk/` rendered at 1440×900 and 390×844. Both views identify the business; desktop visibly has the official `mailto:[REDACTED_EMAIL]`, phone, address, company/VAT details, services, staff/team links, gallery/case-study navigation and certifications. Mobile has a usable `Show mobile menu`, business proposition and no horizontal overflow. The named family-run company, company number and address support local/independent context. |
| H0.5 | **FAIL — NO MEANINGFUL DEMO OPPORTUNITY.** Contrary to the Owner description, the current site already gives a clear commercial fabrication proposition, extensive capabilities, sectors, accreditation, staff, projects/gallery/case studies, opening hours and direct contact. Image captions or a tighter CTA would be incremental polish, not a credible 30–60-minute transformation of the main presentation/enquiry path. |
| H4 | **PASS in isolation.** The business could use static content and a phone/email enquiry route; no booking, payment, ecommerce, inventory or availability system is core. This technical fit cannot repair the failed meaningful-upgrade gate. |
| H5 / H6 | **FAIL.** The alleged slider/service-list/mobile issues do not establish a material evidence-backed demo basis against the current comprehensive, responsive site. The paid two-role vacancy is valid active-workforce evidence but neither makes the existing presentation weak nor establishes distinct willingness to invest in website presentation. The mature conversion content triggers the H6 exclusion condition for this offer. |
| Independent score / Priority | **58/100, not qualifying.** Opportunity **7/30**; Health **14/20**; Fit **20/20**; Purchase **11/20**; Contact **6/10**. No wage amount was also credited as a presentation-investment point; in any event, failed H0.5/H5/H6 forbids Priority B regardless of arithmetic. |

**Round-6 candidate conclusion: REJECTED.** The business may be active and technically compatible with a static brochure, but it is not a genuine £600 static-page replacement opportunity under the gate.

## Round 6 final record

```text
Round 1: FAIL — 0/3 accepted (historical record retained)
Round 2: FAIL — 1/3 accepted (historical record retained)
Round 3: FAIL — 1/3 accepted (historical record retained)
Round 4: FAIL — 1/3 accepted (historical record retained)
Round 5: FAIL — 1/3 accepted (historical record retained)
Round 6:
  JL and TM Cleaning Quality Cleaning Service: ACCEPTED — 70/100, Priority B
  Clarkson and Son Ltd: REJECTED — 67/100, Priority HOLD after non-duplicated recomputation
  M and M Welding and Fabrication Ltd: REJECTED — H0.5/H5/H6, existing site already materially covers the primary path
ROUND 6 INDEPENDENT ACCEPTANCE: FAIL — 1/3 accepted
```

No Demo, outreach, sending, deployment, payment or other external action is authorised by this report.

---

# Round 7 — final independent acceptance — 2026-08-24

## Decision

Rounds 1–6 remain intact historical audit records. `ROUND 7 INDEPENDENT ACCEPTANCE = FAIL` — **1/3 ACCEPTED, 2/3 BLOCKED**.

| Candidate | Independent result | Controlling reason |
|---|---|---|
| JL and TM Cleaning Quality Cleaning Service | **ACCEPTED** | The final files retain its prior independently accepted H0, owned-site email/Track-W and Reviewer 70/100 Priority-B evidence; no conflicting replacement was found. |
| A. J. Ostridge Transport Ltd | **BLOCKED** | Direct H0, identity, public emails, 1440×900 page evidence and a static opportunity are independently visible, but the current **390×844** Track-W audit could not be reproduced. |
| Anthony Lewis Ltd | **BLOCKED** | Direct H0, UK date meaning, public email and exact 390×844/3000px-overflow evidence are independently visible, but the current **1440×900** Track-W audit could not be reproduced. |

Three accepted records are required. No substitute candidate was sought.

## Method

- Reviewer task ID: `01a0316d-9cec-7201-88f8-8243b8186d83`.
- Updated `QUALIFIED_CANDIDATES.md`, `EVIDENCE_LEDGER.md` and `SCREENING_LOG.md` were reread. A literal project-tree scan excluding this output directory found no earlier record for either new name or official domain.
- All live checks were no-login and read-only; no cookie choice, form, booking, payment, login, email, deployment or outreach occurred.
- Two independent real-browser surfaces were used when the first failed to apply all requested viewports. Neither yielded both exact viewports for either new candidate; Owner SELF-QA, page text and HTTP state were not substituted. Temporary overrides were reset.

## Individual gate evidence

### JL and TM Cleaning Quality Cleaning Service

| Gate | Independent Round-7 result |
|---|---|
| H0, Track W, H1–H6, H3, static fit | **PASS, unchanged.** Final records preserve the attributable official `10 August 2026` review naming Tracy and James, public `mailto:[REDACTED_EMAIL]`, accepted viewport basis and bounded static service/area/proof/contact scope. |
| Score / Priority | **70/100, Priority B retained** — Opportunity 21, Health 16, Fit 17, Purchase 9, Contact 7. |

**Conclusion: ACCEPTED.** `Demo Readiness: NOT AUTHORIZED`.

### A. J. Ostridge Transport Ltd — Maldon, Essex

| Gate | Independent Round-7 result |
|---|---|
| H0 / identity / H6 | **PASS.** Direct no-login reopening of [Business News Wales’ report](https://businessnewswales.com/newports-monex-group-expands-with-acquisition-stake/) visibly showed `6 JULY 2026`, Monex’s 45% stake in `A J Ostridge (Transport) Ltd`, Alan Ostridge, the Maldon family operation and stated financial/commercial/operational support for expansion. This is a dated, attributable investment transaction—not a directory or recruitment proxy. |
| H1 / H2 / H3 | **PASS.** Owned-site text identifies the established Maldon haulage/garage business and publicly displays `[REDACTED_EMAIL]` and `[REDACTED_EMAIL]` with address and telephone. The investment report identifies Alan and his wife as family operators. Deliverability/consent are not inferred. |
| Track W | **BLOCKED.** Official-site 1440×900 render confirmed that exact viewport, generic proposition, obsolete GDPR content, sparse repair list and both emails. Two fresh no-login attempts at 390×844 instead reported 1440×900 and 1280×720. The claimed Owner mobile audit cannot fill this missing independent evidence. |
| H0.5 / H4 / H5 | Supporting only: the 2018 GDPR block and absent haulage/fleet/coverage/proof hierarchy map to a static improvement; primary enquiry does not require booking, payment, stock, checkout, availability or ongoing content. It cannot advance past blocked Track W. |
| Score / Priority | **No qualifying independent score.** Mobile is a required component of both Track W and the 100-point model, so Owner 80/100 cannot be independently reproduced or used as Priority B. |

**Conclusion: BLOCKED.** No finding of inactivity or universal web-service unfitness is made.

### Anthony Lewis Ltd — Bomere Heath, Shrewsbury

| Gate | Independent Round-7 result |
|---|---|
| H0 / date interpretation / H6 | **PASS.** Direct no-login reopening of [Shropshire Council’s newsroom outcome](https://newsroom.shropshire.gov.uk/2026/08/small-equipment-grants-help-shropshire-businesses-invest-grow-and-create-jobs/) visibly displayed `07/08/2026 - Permalink` under a Shropshire Council UK local-government masthead. In that explicit UK context it means **7 August 2026 (DD/MM/YYYY)**, not a US-formatted inferred date. The body names Anthony Lewis Ltd and its grant-funded machinery, new briquette income stream and additional job: an attributable current capital/expansion action. |
| H1 / H2 / H3 | **PASS.** The Council outcome names owner Anthony Dargue; the owned site identifies Anthony Lewis Ltd, Bomere Heath workshop, phone and `[REDACTED_EMAIL]`. Deliverability, consent and personal mailbox status are not inferred. |
| Track W / H0.5 evidence | **BLOCKED.** Exact 390×844 no-login render confirmed `clientWidth: 375`, `scrollWidth: 3000`, duplicate full navigation and repeated hero content—a material responsive defect with a clear static-page mapping. But attempted 1440×900 reopens on independent browser surfaces remained at 390×844 or 1281×1121, not the required desktop viewport. Owner desktop SELF-QA cannot substitute. |
| H4 / H5 / H6 | Supporting only: static services/projects/process/proof/contact can address the observed path; no booking/payment/stock/checkout/availability core was visible; Council machinery/product/job evidence is independent capital expansion. These facts cannot cure missing desktop Track W proof. |
| Score / Priority | **No qualifying independent score.** Owner 78/100 cannot be recomputed under the complete required dual-viewport model and cannot override Track W. |

**Conclusion: BLOCKED.** Current trading and the real mobile defect are not disputed; only the mandated independent 1440×900 evidence is missing.

## Round 7 final record

```text
Round 1: FAIL — 0/3 accepted (historical record retained)
Round 2: FAIL — 1/3 accepted (historical record retained)
Round 3: FAIL — 1/3 accepted (historical record retained)
Round 4: FAIL — 1/3 accepted (historical record retained)
Round 5: FAIL — 1/3 accepted (historical record retained)
Round 6: FAIL — 1/3 accepted (historical record retained)
Round 7:
  JL and TM Cleaning Quality Cleaning Service: ACCEPTED — 70/100, Priority B
  A. J. Ostridge Transport Ltd: BLOCKED — independent 390×844 Track-W evidence not reproduced
  Anthony Lewis Ltd: BLOCKED — independent 1440×900 Track-W evidence not reproduced
ROUND 7 INDEPENDENT ACCEPTANCE: FAIL — 1/3 accepted
```

No Demo, outreach, sending, deployment, payment or other external action is authorised by this report.
