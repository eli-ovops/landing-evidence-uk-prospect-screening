# UK low-price new-screen — expanded discovery and self-QA screen

Date: 2026-09-01  
Authority: Screening Core v1.1.4; United Kingdom current mapping `GBP / £99 AS-SHOWN HANDOVER or £199 ONE PERSONALISED UPDATE`.

## Result

Two new businesses have reached the Owner-only state `SELF-QA READY FOR CANDIDATE INDEPENDENT ACCEPTANCE`. They are not independent passes or `CURRENT QUALIFIED CANDIDATE`s. Separately, this continuation supplied independent FINAL ACCEPT outcomes for two older rows and a FINAL REJECT outcome for Bee Barbers; those decisions were not re-run in this screen.

| Result | Count |
| --- | ---: |
| New Owner self-QA ready for candidate independent acceptance | 2 |
| Prior independent FINAL ACCEPT supplied | 2 |
| Prior independent FINAL REJECT supplied | 1 |
| New exact-name old-pool duplicates | 0 |

The ledger now covers 70 new, exact-name-non-duplicate discoveries. Most remain source-triage records pending individual H0, email and H0.5 evidence. `DISCOVERY_POOL.csv` conserves every discovery; the detailed `HOLD.csv` and `REJECTED.csv` currently document the individually investigated first tranche only. No HOLD row is a shadow candidate. The two new self-QA rows are separately preserved in `QUALIFIED_CANDIDATES.csv`, with independent acceptance explicitly not run.

## Current self-QA handover

- `Hounds on the Hill Stamford` — 88, Priority A, Track N, `HIGH` evidence confidence. Direct Fresha shows a 2026-08-27 customer review, 159 reviews, Kellie as owner/stylist and 20 portfolio items; SumUp publishes a business email but visibly contains a generic service-description placeholder and raw `test` item. The static case retains Fresha as the outbound booking action.
- `Shelley's Poochie Parlour - Stamford Limited` — 90, Priority A, Track W, `HIGH` evidence confidence. Direct Fresha shows current 2026-08-27/26 reviews, 1,070 reviews and the Stamford address; the official site publishes the business email. Actual 1440x900/390x844 renders show a dense desktop entry and mobile clipping. A simple current enquiry form is not proposed for reproduction; public email/phone and Fresha can remain external actions.
- `Romiley Paws Dog Groomers` and `Fluffandtuff dog groomers` — prior independent `FINAL ACCEPT` outcomes supplied in this continuation.
- `Bee Barbers` — prior independent `FINAL REJECT` supplied in this continuation: WooCommerce/cart/product pages make H4/H6 fail. It is not a scope exception.

The £99/£199 mapping did not relax H0, Public Business Email, H0.5 or H1–H6. The two new rows have complete owner trails from H0 through H6 and remain subject to a separate independent acceptance owner.

## Status and boundaries

- `Candidate Independent Acceptance`: **NOT RUN** — the two new Owner self-QA rows require a different, read-only acceptance owner.
- `Demo Authorization`: **NOT AUTHORIZED** for the two new rows.
- Demo, email/DM, login, deployment, upload, payment, installation, deletion and Git external write: **NOT PERFORMED**.
- Every discovery and source-level disposition is recorded in `DISCOVERY_POOL.csv`; the detailed first-tranche evidentiary records are in `HOLD.csv` and `REJECTED.csv`; the two new full-chain Owner self-QA records are in `QUALIFIED_CANDIDATES.csv`.

## Recommended successor scope

Send only the two new identified rows to a different Owner for read-only Candidate Independent Acceptance. If either is rejected, continue individually from the remaining triage rows or new local sources; do not contact any business. Prioritise source pages that expose a full public email and a dated customer review in the rolling window, then verify the three Track-N website-search surfaces or the two-viewport Track-W audit before H0.5. Preserve this ledger and recheck all old-pool names before any future advance.
