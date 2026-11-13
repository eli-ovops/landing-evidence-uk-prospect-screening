# Malaysia formal sample — status

**Status: READY FOR COUNTRY MERGE — authorized second neutral pools fully replaced the two remaining date-invalid rows; all H0 evidence dates are inside the 2026-05-24 to 2026-08-22 window.**

| Requirement | Current result |
|---|---:|
| Formal CSV samples | 20 / 20 VALID only |
| `audit_status=VALID` | 20 / 20 |
| local trades/home services | 5 / 5 valid |
| wedding/creative | 5 / 5 H0-date-valid |
| beauty/wellness | 5 / 5 H0-date-valid |
| local professional services | 5 / 5 valid |

## local trades/home services — completion audit

`selection_bias_audit=PASS` for this industry. Discovery order `1–16` is retained. Records `1–5` failed H0 or auditability; replacements began at `6` and continued in order. Further candidates failed only for H0 insufficiency, non-credible H0, direct-source timeout, or two-viewport access verification (`7, 9–13`); they were not replaced because of email availability, site quality, or the static-fit conclusion. The five retained valid records are discovery orders **6, 8, 14, 15 and 16**.

All five retained records have a dated H0 signal within the 90-day window ending 2026-08-22. Owned-site records 6, 8, 14 and 15 have isolated Playwright 1440×900 and 390×844 captures in this directory. Record 16 has no owned site, so its three recorded search surfaces apply. `NOT VERIFIED` email values did not disqualify any record.

No outreach, account access, Demo, deployment, payment or other external write occurred.

## wedding/creative — completion audit

`selection_bias_audit=PASS` for this industry. The discovery sequence was frozen as orders `17–26`, independent of official-site quality, email availability and static-fit result. Orders `17`, `18` and `20` passed dated H0 but the required Chrome 1440×900 and 390×844 renders showed only access-verification interstitials; each was therefore replaced only for **un-auditability**. Orders `22` and `24` were replaced only for **H0 failure** (no explicit qualifying day). The five retained valid records are discovery orders **19, 21, 23, 25 and 26**.

All five retained records have direct, business-identified H0 evidence inside the 90-day window ending 2026-08-22. Malaysia Bridal Fashion Week's post-audit 28–31 August event was rejected and its row was replaced from the second neutral pool by Breeze at Lake Ville, using the latter's 2026-06-13 business-identified public post plus official Ipoh identity. `NOT VERIFIED` email did not influence selection. Blooming Florist is deliberately retained with `static_fit_status=NO`, demonstrating that static fit was not a replacement trigger.

## CSV responsibility correction

`MALAYSIA_SAMPLE.csv` contains **only 20 `VALID` formal samples** (header + 20 rows). All failed/blocked candidates remain represented in the discovery audit in `MALAYSIA_SOURCES.md`; they are not counted as sample rows.

## beauty/wellness — completion audit

`selection_bias_audit=PASS`. Frozen orders 27 onward retain prior H0/identity/un-auditability exclusions in the sources ledger. Valid orders 39–43 were selected in directory sequence with city and business identity confirmed on Fresha; each is a no-independent-site record with three recorded search surfaces. H0 uses either a date-specific recent Fresha review (42, 43) or the live booking surface for the post-audit available date (39–41), as expressly permitted for this batch. No candidate was replaced because of email, website quality or static fit.

## local professional services — completion audit

`selection_bias_audit=PASS`. The neutral professional-services discovery sequence was frozen at orders `44–48` before site, email or static-fit assessment. Orders `46` (Progress Link Training & Consultancy) and `48` (CLLB) had qualifying official dated training evidence but their isolated Chrome capture process did not complete a usable 1440×900/390×844 pair, so they were replaced solely as **un-auditable**. The sequence was then extended neutrally: order `49` (EES Consultants) completed the audit, order `50` (Ommtech) remained un-auditable when its isolated capture did not complete, and order `51` (Sharma Management International) completed it. The retained valid records are discovery orders **44, 45, 47, 49 and 51**.

Each retained record has an official explicit date within the 90-day H0 window ending 2026-08-22, identifiable business/city evidence, and real Chrome captures at 1440×900 and 390×844. `NOT VERIFIED` email values for GEM, EES and Sharma were retained and did not influence selection. The varied static-fit observations (including narrow-width clipping and EES’s cookie overlay) were recorded but were not replacement criteria.

## Aggregate merge gate

`selection_bias_audit=PASS` for all four industries. The formal CSV has exactly 20 rows, all `VALID`; each industry contributes exactly five records; city labels cover Kuala Lumpur, Petaling Jaya, Senai, Alor Setar, Bayan Lepas, Seremban, Johor Bahru, Simpang Ampat, Subang Jaya, Ipoh and Rawang; no business name repeats. Every row has either real dual-view captures for an owned site or the required three-search record for a no-site entry. The all-H0-date gate is **PASS**. **READY FOR COUNTRY MERGE.**
