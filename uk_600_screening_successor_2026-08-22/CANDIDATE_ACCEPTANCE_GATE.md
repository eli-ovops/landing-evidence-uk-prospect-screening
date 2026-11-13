# Candidate Independent Acceptance Gate

Use this checklist only with a different, independent acceptance Owner performing a read-only review of original public evidence. Do not accept this file, historical CSV text, prior QA or Owner narration as the evidence itself.

## Per-candidate checklist

- [ ] Authority pointer opens both listed targets; otherwise `AUTHORITY_MISSING — STOP`.
- [ ] H0 has full ISO date, direct URL, signal type, attribution reason, verification date and visible/reproducible proof; day/month-only date is `H0 NOT VERIFIED`.
- [ ] Public business email is visibly published by an attributable source and its current source URL opens.
- [ ] Track classification and H0.5 are independently reproducible; H1–H6 each have original evidence.
- [ ] Track W has current Desktop and approximately 390px audit artefacts carrying URL, viewport and verification date; otherwise `VISUAL_REVIEW_BLOCKED`.
- [ ] Score arithmetic, threshold minima and Priority are checked against original evidence; Priority is not treated as Demo Ready.
- [ ] Freshness check immediately before Demo Authorization: H0 still inside its rolling window, owned site and email source open, and both viewports reproduce. Any 403/WAF/timeout => `Demo Readiness: HOLD`.
- [ ] Record separate `Screening Qualification: QUALIFIED/HOLD/REJECTED` and `Demo Readiness: READY/CONDITIONAL/HOLD/NOT AUTHORIZED`.

## PASS / FAIL record template

```text
Candidate:
Independent acceptance Owner (must differ from screening Owner):
Review date:
Original evidence paths/URLs reviewed:
H0: PASS/FAIL — ISO date / URL / signal / attribution / visible proof:
Public business email: PASS/FAIL — address / source URL / retrieved date:
Track and H0.5: PASS/FAIL — evidence:
H1–H6: PASS/FAIL — evidence:
Viewport: PASS/FAIL/VISUAL_REVIEW_BLOCKED — desktop/mobile URL, viewport, date:
Score/Priority: PASS/FAIL — arithmetic and thresholds:
Screening Qualification: QUALIFIED/HOLD/REJECTED
Demo Readiness: READY/CONDITIONAL/HOLD/NOT AUTHORIZED
INDEPENDENT ACCEPTANCE: PASS/FAIL
Authorization: no Demo/outreach/send/deployment authorization is implied
```
