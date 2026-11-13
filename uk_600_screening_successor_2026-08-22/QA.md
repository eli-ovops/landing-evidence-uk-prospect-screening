# SELF-QA ONLY — NOT INDEPENDENT ACCEPTANCE

This retained 2026-08-22 QA is a historical Owner self-check. It cannot produce FINAL PASS; use [CANDIDATE_ACCEPTANCE_GATE.md](CANDIDATE_ACCEPTANCE_GATE.md) for a future independent read-only review.

# Structural QA — 2026-08-22

| Check | Result | Evidence |
| --- | --- | --- |
| Exactly three current candidates | PASS | `QUALIFIED_CANDIDATES.csv` has one header plus three data rows. |
| No old object contamination | PASS | Only successor-directory rows are candidates; predecessor files remain unchanged. |
| H0 date and direct URL each candidate | PASS | Candidate CSV `h0_date` / `h0_evidence_url`; sources register repeats them. |
| Attributable public email and source each candidate | PASS | Candidate CSV email and source URL; all retrieved 2026-08-22. |
| H0, H0.5, H1–H6 all PASS | PASS | All columns are explicit PASS. |
| Dual viewports | PASS | 1440x900 and 390x844 current-browser observations are in every candidate row. |
| Score arithmetic | PASS | JLM 26+18+19+15+6=84; Pure K 22+17+17+16+6=78; TMB 27+19+19+17+6=88. |
| Priority consistency | PASS | 84/88 are A and meet A minima; 78 is B; all are MEDIUM confidence. |
| Future-date contamination | PASS | Evidence dates are within 2026-05-24 through 2026-08-22; no evidence date is after research date. |
| Authorization boundary | PASS | No external write occurred; all rows retain the fixed no-outreach/no-demo/no-deployment/no-send boundary. |

The H0 review of all 20 Batch-10 discovery rows is in `DISCOVERY_POOL.csv`; failure or HOLD rows were not scored or promoted.
