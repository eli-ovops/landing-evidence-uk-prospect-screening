# PREMERGE 5-COUNTRY AUDIT

Audit date: 2026-08-22  
Role: independent pre-merge audit owner; read-only review of the five supplied formal country samples.  
Scope: United States, United Kingdom, Singapore, Ireland, Malaysia. No country sample, summary, or source ledger was modified.

## Governing frame

This audit applies the PMO's current formal frame: four common industries, five records per industry (20 records per country). It does not use the historical United States official-active-site pilot as the formal method. `static_fit_status` is authoritatively permitted to be `YES`, `NO`, or `UNKNOWN`: where the required observation records Cloudflare/TLS/loading failure or another real access outcome, `UNKNOWN` is a completed business conclusion, not a missing-field failure. `UNKNOWN` blocks PASS only when it represents an uncompleted required audit or missing evidence.

## Overall conclusion

**PREMERGE 5-COUNTRY AUDIT FAIL**

United Kingdom, Singapore, and Ireland are eligible to enter the six-country merge now. United States and Malaysia must be repaired and independently re-audited before inclusion. The defects below are evidence-state defects; they do not establish that a business has ceased trading or that a website is defective.

| Country | Structural sample gate | Evidence / date gate | `UNKNOWN` gate | Frozen-pool / selection-bias evidence | Pre-merge decision |
|---|---|---|---|---|---|
| United States | PASS | FAIL | PASS | PASS | FAIL — do not merge |
| United Kingdom | PASS | PASS | PASS — permitted completed conclusions | PASS | PASS — eligible |
| Singapore | PASS | PASS | PASS — permitted completed conclusions | PASS | PASS — eligible |
| Ireland | PASS | PASS | PASS | PASS | PASS — eligible |
| Malaysia | PASS | FAIL | PASS — permitted completed conclusions | PASS | FAIL — do not merge |

## Common checks completed

- Every CSV has exactly 20 data rows and 20 fields; each contains five records in each of the four current industries, at least two cities, no duplicate `business_name`, and only `audit_status=VALID`.
- Every record has non-empty H0 URL and identity/city evidence. Where an owned site is recorded, both desktop and mobile observations are present; no-site records contain the three-search field. All non-`NOT VERIFIED` public emails have a direct source URL. All `static_fit_status` values are in `YES/NO/UNKNOWN`.
- Each CSV contains neutral discovery sources: discovery URL was not the same domain as the official site for any US/UK/SG/IE row and for 15/20 Malaysia rows; therefore no country is composed solely of self-site discovery URLs.
- Summaries and sources contain the required frozen discovery-pool / permitted-continuation evidence and each industry's `selection_bias_audit` is documented as `PASS` or `REMEDIATED=PASS`.

## Country findings

### United States — FAIL

The sample structure, static-fit enum values, no-duplicate check, neutral discovery evidence, and all `VALID` statuses pass. However, three H0 evidence dates fall after the audit date and outside the required inclusive range `2026-05-24` to `2026-08-22`:

| CSV line | Business | Field | Invalid value |
|---:|---|---|---|
| 6 | The Ice Plant Bldg. | `h0_evidence_date` | `2026-10-02` |
| 9 | Stan's Heating Air & Plumbing | `h0_evidence_date` | `2026-08-31` |
| 14 | BelVer Studio | `h0_evidence_date` | `2026-08-31` |

Repair: replace each future date only with an already-public, direct, attributable H0 record dated within the audit window; if none exists, the row cannot remain `VALID` in this formal sample. Recheck its corresponding H0 URL and identity/city evidence after correction. Until then, United States is not eligible for the six-country merge.

### United Kingdom — PASS

Structure, dates, required evidence fields, neutral discovery, and frozen-pool/selection-bias documentation pass. The following two `static_fit_status=UNKNOWN` values are accepted completed conclusions because each row preserves the actual owned-site access outcome and the required audit fields; they are not an audit incompleteness:

| CSV line | Business | Current website status | Accepted conclusion |
|---:|---|---|---|
| 11 | Photography By Michelle Jane | `OWNED_SITE_ACCESS_BLOCKED` | `static_fit_status=UNKNOWN` |
| 19 | Aequitas Legal | `OWNED_SITE_ACCESS_BLOCKED` | `static_fit_status=UNKNOWN` |

No repair is required for these two values. United Kingdom is eligible for the six-country merge.

### Singapore — PASS

Structure, dates, required evidence fields, neutral discovery, and all four `REMEDIATED=PASS` selection-bias records pass. The following eight `static_fit_status=UNKNOWN` values are permitted, completed business conclusions: the preserved statuses record actual access, mobile, or no-owned-site outcomes rather than missing required audit evidence.

| CSV line | Business | Current website status |
|---:|---|---|
| 7 | Monday Rascals | `OWNED_SITE_ACCESS_BLOCKED` |
| 8 | Iluminen Singapore | `OWNED_SITE_MOBILE_FAILURE` |
| 9 | Iriswave | `OWNED_SITE_ACCESS_BLOCKED` |
| 10 | More than Bloom | `OWNED_SITE_ACCESS_BLOCKED` |
| 13 | Paint Shoppe Nails Spa & Wellness at The Red House | `NO_OWNED_WEBSITE_VERIFIED` |
| 14 | The Glow Facial Room | `NO_OWNED_WEBSITE_VERIFIED` |
| 15 | Zensational Sports Massage Therapy | `NO_OWNED_WEBSITE_VERIFIED` |
| 17 | Association of Professional Kin-Mentors (APKIM) | `OWNED_SITE_ACCESS_BLOCKED` |

No repair is required for these eight values. Singapore is eligible for the six-country merge.

### Ireland — PASS

All current pre-merge checks pass: 20 valid rows/20 fields; four industries × five; five cities; no duplicates; H0 dates within the required window; non-empty H0 and identity/city evidence; complete dual viewport observations for each owned site; email-source rule satisfied; static fit is `YES` for all rows; neutral discovery and frozen-order/selection-bias evidence are documented. Ireland is eligible for the six-country merge.

### Malaysia — FAIL

Structure, required fields, neutral discovery, and frozen-pool/selection-bias documentation pass. The following defects block merge.

H0 date failures:

| CSV line | Business | Field | Invalid value |
|---:|---|---|---|
| 11 | Malaysia Bridal Fashion Week | `h0_evidence_date` | `2026-08-28` |
| 12 | LYLA Beauty Lounge | `h0_evidence_date` | `2026-08-23` |
| 13 | Thefabulousskin.my Aesthetic & Academy | `h0_evidence_date` | `2026-08-23` |
| 14 | Skin Oria Beauty | `h0_evidence_date` | `2026-08-23` |

The following `static_fit_status=UNKNOWN` values are accepted completed conclusions and are not merge blockers:

| CSV line | Business | Current website status |
|---:|---|---|
| 12 | LYLA Beauty Lounge | `NO_OWNED_WEBSITE_FOUND` |
| 13 | Thefabulousskin.my Aesthetic & Academy | `NO_OWNED_WEBSITE_FOUND` |
| 14 | Skin Oria Beauty | `NO_OWNED_WEBSITE_FOUND` |
| 15 | D Carys Skin Solution | `NO_OWNED_WEBSITE_FOUND` |
| 16 | Twinkle Nail Spa | `NO_OWNED_WEBSITE_FOUND` |

Repair: do not use post-audit booking availability as historical H0 evidence. Replace each future-dated H0 fact with a directly attributable fact dated no later than 2026-08-22 and inside the 90-day window. Malaysia is not eligible for merge until those four date defects are closed.

## Limited public spot-check record

One H0 URL per industry per country (20 total) was opened read-only. The check assessed URL accessibility/redirect behavior and whether the recorded date and identity/city claim were logically consistent with the row's stated evidence; it did not rerun full browser QA. Fifteen sources were reachable with HTTP 200 after redirects. Five sources returned HTTP 403 from this environment: Twisted Ranch Weddings, TAT Plumbing & Heating, Christy Photography, Monday Rascals, and Pamela Brady Photography. The 403 outcomes are access limits, not evidence of inactivity. No spot-check overcame the listed future-date defects.

## Merge action

Merge United Kingdom, Singapore, and Ireland now. Keep United States and Malaysia out of the six-country denominator/ranking until their future-dated H0 facts are repaired and a successor pre-merge audit records PASS.
