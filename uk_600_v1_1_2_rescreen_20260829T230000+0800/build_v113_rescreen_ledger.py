#!/usr/bin/env python3
"""Mechanical initializer for the v1.1.3 audit; it does not alter discovery history."""
import csv
from pathlib import Path

root = Path(__file__).resolve().parent
source = root / "DISCOVERY_POOL.csv"
target = root / "UK_V1_1_3_RESCREEN_AUDIT.csv"
columns = [
    "id", "business", "location", "industry", "source_url", "legacy_status", "legacy_reason",
    "v113_h0", "h0_evidence_refresh", "track_refresh", "email_refresh",
    "persuasion_gap_refresh", "h1_h6", "score", "priority", "self_qa",
    "portable_package", "final_rescreen_status", "rescreen_note",
]

with source.open(newline="", encoding="utf-8") as inp, target.open("w", newline="", encoding="utf-8") as out:
    writer = csv.DictWriter(out, fieldnames=columns)
    writer.writeheader()
    for row in csv.DictReader(inp):
        h0 = row["H0_status"]
        email = row["email_gate"]
        if h0.startswith("H0 PASS") and email == "PASS":
            state = "REVIEW QUEUE — H0/EMAIL HISTORY"
            note = "Historical H0 PASS and public-email PASS: v1.1.3 live evidence and persuasion-gap review required"
        elif h0.startswith("H0 PASS"):
            state = "HOLD — EMAIL RECHECK REQUIRED"
            note = "Historical H0 PASS but public-business-email gate must be freshly verified under v1.1.3"
        else:
            state = "HOLD — FRESH H0 RECHECK REQUIRED"
            note = "Historical record retained; no current v1.1.3 H0/identity/email conclusion without fresh public recheck"
        writer.writerow({
            "id": row["id"], "business": row["business"], "location": row["location"],
            "industry": row["industry"], "source_url": row["source_url"],
            "legacy_status": row["status"], "legacy_reason": row["reason"],
            "v113_h0": "RECHECK REQUIRED", "h0_evidence_refresh": "RECHECK REQUIRED",
            "track_refresh": "RECHECK REQUIRED", "email_refresh": "RECHECK REQUIRED",
            "persuasion_gap_refresh": "RECHECK REQUIRED", "h1_h6": "NOT STARTED",
            "score": "NOT SCORED", "priority": "NOT ASSIGNED", "self_qa": "NOT STARTED",
            "portable_package": "NOT REQUIRED UNTIL SELF-QA PASS",
            "final_rescreen_status": state, "rescreen_note": note,
        })
