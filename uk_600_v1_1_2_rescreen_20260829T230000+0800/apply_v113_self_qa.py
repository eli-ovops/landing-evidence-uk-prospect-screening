#!/usr/bin/env python3
"""Apply only the explicitly documented v1.1.3 SELF-QA results; no independent result is written."""
import csv
from pathlib import Path

path = Path(__file__).resolve().parent / "UK_V1_1_3_RESCREEN_AUDIT.csv"
rows = []
with path.open(newline="", encoding="utf-8") as stream:
    reader = csv.DictReader(stream)
    rows = list(reader)
    fields = reader.fieldnames

updates = {
    "UKR-249": {
        "v113_h0": "PASS — 2026-08-27 raw package post",
        "h0_evidence_refresh": "P249-A dated 27/08/2026 attributable nail-work post; captured 2026-08-30",
        "track_refresh": "PASS — Track N; P249-A official social links + P249-B identity + P249-C exact Bing no owned domain",
        "email_refresh": "PASS — [REDACTED_EMAIL]; P249-A business descriptor",
        "persuasion_gap_refresh": "PASS — essential services/coverage/price context and work proof are split across chronological posts, an image-only card and social; no stable owned persuasion page",
        "h1_h6": "PASS/PASS/PASS/PASS/PASS/PASS — documented V1_1_3_SELF_QA.md",
        "score": "76/100", "priority": "Priority B", "self_qa": "PASS — v1.1.3",
        "portable_package": "PASS — P249-A/B/C in PORTABLE_EVIDENCE_PACKAGE.md",
        "final_rescreen_status": "SELF-QA PASS — AWAITING POOL COMPLETION", "rescreen_note": "Historical v1.1.2 independent H0.5 rejection is not a v1.1.3 independent result",
    },
    "UKR-301": {
        "v113_h0": "PASS — 2026-08-25 raw package appointment/service post",
        "h0_evidence_refresh": "P301-A dated 25/08/2026 attributable booking/service post; captured 2026-08-30",
        "track_refresh": "PASS — Track N; P301-A Facebook destination + P301-B identity + P301-C exact Bing no owned domain",
        "email_refresh": "PASS — [REDACTED_EMAIL]; P301-A dated business post",
        "persuasion_gap_refresh": "PASS — permanent service/qualification/value narrative is dependent on a dated availability post and separate social stream rather than an owned structured proof/enquiry page",
        "h1_h6": "PASS/PASS/PASS/PASS/PASS/PASS — documented V1_1_3_SELF_QA.md",
        "score": "75/100", "priority": "Priority B", "self_qa": "PASS — v1.1.3",
        "portable_package": "PASS — P301-A/B/C in PORTABLE_EVIDENCE_PACKAGE.md",
        "final_rescreen_status": "SELF-QA PASS — AWAITING POOL COMPLETION", "rescreen_note": "Historical v1.1.2 independent H0.5 rejection is not a v1.1.3 independent result",
    },
    "UKR-311": {
        "v113_h0": "PASS — 2026-07-29 raw package tribute/order post",
        "h0_evidence_refresh": "P311-A dated 29/07/2026 attributable florist order post; captured 2026-08-30",
        "track_refresh": "PASS — Track N; P311-A Facebook destination + P311-B local-news identity + P311-C exact Bing no owned domain",
        "email_refresh": "PASS — [REDACTED_EMAIL]; P311-A order post",
        "persuasion_gap_refresh": "PASS — bouquet/tribute/gift-shop proof and shop story are dispersed across dated posts/news; a factual page can form a stable occasion/trust/enquiry narrative",
        "h1_h6": "PASS/PASS/PASS/PASS/PASS/PASS — documented V1_1_3_SELF_QA.md",
        "score": "74/100", "priority": "Priority B", "self_qa": "PASS — v1.1.3",
        "portable_package": "PASS — P311-A/B/C in PORTABLE_EVIDENCE_PACKAGE.md",
        "final_rescreen_status": "SELF-QA PASS — AWAITING POOL COMPLETION", "rescreen_note": "Historical v1.1.2 independent H0.5 rejection is not a v1.1.3 independent result",
    },
}
for row in rows:
    if row["id"] in updates:
        row.update(updates[row["id"]])
with path.open("w", newline="", encoding="utf-8") as stream:
    writer = csv.DictWriter(stream, fieldnames=fields)
    writer.writeheader()
    writer.writerows(rows)
