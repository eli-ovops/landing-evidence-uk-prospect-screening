# Genuine Playwright + Chrome browser QA — 2026-09-02

## Method

The seven unchanged historical Demo URLs were rendered through the installed Python Playwright runtime and Google Chrome 152.0.7977.65. Each Mobile context used `viewport=390 x 844`, `screen=390 x 844`, `device_scale_factor=1`, `is_mobile=true`, and `has_touch=true`; each Desktop context used 1440 x 900. Screenshots below are actual browser captures; HTTP availability is not used as visual acceptance evidence.

The earlier Chrome CLI `--window-size=390,844` captures are invalidated for acceptance: they rendered a wider CSS viewport and then cropped the capture. They must not be used to infer a mobile defect.

| Target | Desktop 1440 x 900 | Mobile 390 x 844 | Fresh viewport result | Client-visible internal-text result |
|---|---|---|---|---|
| Curtis Tree Lopping Specialists | `evidence/playwright/curtis-desktop-1440x900.png` — PASS; `innerWidth=1440`, both scroll widths `1440` | `evidence/playwright/curtis-mobile-390x844.png` — PASS; `innerWidth=390`, both scroll widths `390` | PASS | PASS — no banned visible/internal-text scan hit | 
| Kimberley Cleaning | `evidence/playwright/kimberley-desktop-1440x900.png` — PASS; `innerWidth=1440`, both scroll widths `1440` | `evidence/playwright/kimberley-mobile-390x844.png` — PASS; `innerWidth=390`, both scroll widths `390` | PASS | PASS — no banned visible/internal-text scan hit | 
| Cairns Pressure Cleaning | `evidence/playwright/cairns-desktop-1440x900.png` — PASS; `innerWidth=1440`, both scroll widths `1440` | `evidence/playwright/cairns-mobile-390x844.png` — PASS; `innerWidth=390`, both scroll widths `390` | PASS | FAIL — visible `PRIVATE WEBSITE CONCEPT` and `NOT PUBLISHED OR AFFILIATED` governance/disclaimer text | 
| Always Love Celebrant Services | `evidence/playwright/always-love-desktop-1440x900.png` — PASS; `innerWidth=1440`, both scroll widths `1440` | `evidence/playwright/always-love-mobile-390x844.png` — PASS; `innerWidth=390`, both scroll widths `390` | PASS | PASS — no banned visible/internal-text scan hit | 
| Cherry Walk Cafe | `evidence/playwright/cherry-walk-desktop-1440x900.png` — PASS; `innerWidth=1440`, both scroll widths `1440` | `evidence/playwright/cherry-walk-mobile-390x844.png` — PASS; `innerWidth=390`, both scroll widths `390` | PASS | FAIL — visible owner-confirmation, placeholder, and asset/final-claim governance text | 
| Bright & District Leisure Tours | `evidence/playwright/bright-desktop-1440x900.png` — PASS; `innerWidth=1440`, both scroll widths `1440` | `evidence/playwright/bright-mobile-390x844.png` — PASS; `innerWidth=390`, both scroll widths `390` | PASS | PASS — no banned visible/internal-text scan hit | 
| The Oasis Mudgee | `evidence/playwright/oasis-desktop-1440x900.png` — PASS; `innerWidth=1440`, both scroll widths `1440` | `evidence/playwright/oasis-mobile-390x844.png` — PASS; `innerWidth=390`, both scroll widths `390` | PASS | PASS — no banned visible/internal-text scan hit | 

## Exact internal-text findings

- **Cairns Pressure Cleaning:** the narrow top announcement strip above the header reads `PRIVATE WEBSITE CONCEPT • NOT PUBLISHED OR AFFILIATED WITH CAIRNS PRESSURE CLEANING`.
- **Cherry Walk Cafe:** the orange top announcement strip reads `ORIGINAL LOCAL CONCEPT · BUSINESS FACTS AND BOOKING METHOD REQUIRE OWNER CONFIRMATION BEFORE USE`. Further down, the location/hours section reads `Exact street address pending owner confirmation`, `Weekly hours pending owner confirmation`, and describes a block as `not placeholders`.

No customer-visible Demo HTML, CSS, JS, assets, URL, or deployment was modified during this check. Cairns and Cherry cannot be used for outreach unless their visible internal/governance text is corrected and independently rechecked. The other five passed the fresh viewport check; their recovered static-output packages and quote-stage plans are recorded in [RECOVERY_AND_SEND_REPORT.md](RECOVERY_AND_SEND_REPORT.md) and [OFFER_TRANSFER_PLAN.md](OFFER_TRANSFER_PLAN.md).
