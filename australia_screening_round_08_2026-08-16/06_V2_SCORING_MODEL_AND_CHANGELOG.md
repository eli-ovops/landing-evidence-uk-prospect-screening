# Round 08 v2 — authoritative scoring model

**Authority:** user attachment `pasted-text.txt`, read 2026-08-16. This v2 overrides the Round 08 v1 weighting only. `00_`–`05_` remain preserved historical evidence and are not overwritten.

## Model

| Dimension | Weight | Subcomponents |
|---|---:|---|
| A. Website Opportunity | 30 | Visual / Brand Gap 8; Mobile Experience 7; Information Hierarchy 5; Conversion Path 5; Demo Transformation Potential 5 |
| B. Business Health | 20 | Review Quality & Recency 6; Operating Activity 5; Business Quality 5; Brand Investment 4 |
| C. Single-page Fit | 20 | stable presentation, bounded content, explicit external-system boundary, no backend/data responsibility |
| D. Purchase Signal / AU$800 Fit | 20 | Ability to Pay 5; Willingness to Invest in Presentation 5; Website Commercial Importance 5; Why Now / Trigger 5 |
| E. Decision-maker Contact Viability | 10 | whether a published business channel plausibly reaches a decision maker; this is not legal consent |

Priority: 80–100 `Priority A`; 70–79 `Priority B`; 60–69 `HOLD`; below 60 `DROP`.

Minimum lines for `Priority A`: A >=18, B >=12, C >=15, D >=12, E >=6; H1–H6 all PASS; Evidence Confidence >= MEDIUM; and completed ordinary desktop plus approximately 390px visual review. A lower line can be labelled `Priority B` only when H1–H6 pass, but never authorizes a Demo or outreach.

## Evidence and access rules

- `HIGH`, `MEDIUM`, and `LOW` are the only Evidence Confidence labels.
- `403`, WAF, verification page, timeout, or access denial is recorded as `ACCESS_BLOCKED_FROM_CURRENT_ENVIRONMENT`; it is never a website defect.
- A candidate not actually visually checked is `VISUAL_REVIEW_BLOCKED`; no mobile/visual opportunity points are invented.
- No trigger evidence means the exact value `NO CLEAR TRIGGER FOUND` and 0/5 for D4.
- Demo Effort is `LOW`, `MEDIUM`, or `HIGH`; the cold-demo target is 30–60 minutes. `HIGH` reduces practical Demo priority.

## Change log from v1

| v1 | v2 change |
|---|---|
| A 40 | A 30, now separates visual/brand, actual mobile, hierarchy, conversion, and transformation feasibility |
| D 10 commercial plausibility | D 20 purchase signal, including an evidence-led Why Now score |
| Contactability 10 | E 10 decision-maker contact viability; a general mailbox normally earns only 5–6 |
| candidate ranking | adds Evidence Confidence, Demo Effort, required five-question narrative, and real outcome fields |

No Demo was created, no outreach was sent, and no source evidence was deleted or changed.

