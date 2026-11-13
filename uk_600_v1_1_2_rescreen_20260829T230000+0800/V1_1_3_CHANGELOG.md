# Screening Core v1.1.3 change record

Date: 2026-08-30

Authority changed from `Screening Core v1.1.2` to `Screening Core v1.1.3` under current user authorization. This is a prospective re-screening authority; it does not rewrite historical CSV/ledger snapshots as if they were made under v1.1.3.

Unchanged hard requirements: attributable rolling-90-day H0, Track classification, publicly verifiable business email, H1–H6, static single-page scope, evidence provenance/portability, and independent read-only acceptance by a different Owner.

Changed H0.5 and independent review standard: the decision is now whether direct evidence shows a customer-specific commercial-persuasion gap that a £600 static page can honestly improve. Existing minimum usability, business identification, a contact route, or a proprietor being able to "make do" no longer automatically fail the opportunity. Track N remains non-automatic; Track W can pass if evidence shows an important missing persuasion layer. Purely aesthetic/technical patches, professionally complete sales presentation, dynamic-system dependence, or invented-content dependence remain failures.

`UK_V1_1_3_RESCREEN_AUDIT.csv` is the live per-record audit. It begins from every existing UKR record while retaining each row's v1.1.2 disposition as a historical column. Only a fresh v1.1.3 SELF-QA PASS may receive a portable evidence package; this file does not fill independent acceptance.
