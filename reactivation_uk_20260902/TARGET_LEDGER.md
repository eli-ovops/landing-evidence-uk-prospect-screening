# UK historical-£600 reactivation ledger

Verification date: `2026-09-02` (Asia/Shanghai). One authorized Gmail reply was sent to Lavella Hair Limited; no customer Demo was changed and no deployment was performed.

## Decision rule

“Historical £600 cohort” means the previous UK £600 initiative and a genuinely sent Demo email; the original customer-visible email need not itself contain `£600`. Inclusion still requires the actual Sent evidence, a currently opening matching Demo, current business identity/email evidence, and a current `OFFER / TRANSFER PLAN = PASS`. A thread title containing `£600` is only a locator, never sufficient proof by itself.

## Result

**SENT named targets: 1 — Lavella Hair Limited.** Gmail confirms the original Sent email and the authorized 2026-09-02 threaded £99 follow-up. Wild Clover and Tranquil have no matching Gmail Sent record. Flowers by Kodie and Lizzieland have actual Sent records but their subscriber legal form is not confirmed corporate; under the ICO rule they must be treated as individual subscribers unless valid consent or soft opt-in is proven.

| Candidate | Historical sent evidence | Original £600 fact | Current Demo / business email | Disposition |
| --- | --- | --- | --- | --- |
| Lavella Hair Limited | Gmail Sent original: 2026-08-23 22:10, `A website concept for Lavella Hair`, to `[REDACTED_EMAIL]`; follow-up Gmail Sent: 2026-09-02 20:41:48 Asia/Shanghai, `RE: A website concept for Lavella Hair`. | PASS — historical UK £600 initiative cohort, based on verified Sent plus historical project context. | Playwright desktop 1440×900 and true mobile 390×844: HTTP 200, title and business identity match, no horizontal overflow, three booking links each. | SENT — one authorized plain-text thread reply; one Demo link and one £99 mention. |
| Wild Clover Skin Care | User entered `邮件已发` in `01a02d9d-7c59-7b61-91a8-0cecc39bd0d2`; no matching record found in current Gmail Sent folder. | HOLD — no message-level Gmail proof. | Both Demo and official Ovatu profile returned HTTP 200; `[REDACTED_EMAIL]` remains a `mailto:` contact. | HOLD. |
| Tranquil Touch Relaxation Therapy | User entered `已发送` in `01a02d9d-7a17-7861-89db-968f51ae0c36`; no matching record found in current Gmail Sent folder. | HOLD — no message-level Gmail proof. | Both Demo and official Ovatu profile returned HTTP 200; `[REDACTED_EMAIL]` remains a `mailto:` contact. | HOLD. |
| Flowers by Kodie | Gmail Sent list: `[REDACTED_EMAIL]`, 2026-08-31, `Kodie’s 2025 opening story — a website concept`. | PASS — historical campaign sent evidence. | Current Demo/link and reply state not reverified in this task. | HOLD — legal form/corporate subscriber status unknown; no consent or soft opt-in record. |
| Lizzieland Face Painting | Gmail Sent list: `[REDACTED_EMAIL]`, 2026-08-31, `A Sheffield event-colour website concept for Lizzieland Face Painting`. | PASS — historical campaign sent evidence. | Previous Outlook visual evidence confirms a current-offer email; current Demo/reply state not reverified in this task. | HOLD — legal form/corporate subscriber status unknown; no consent or soft opt-in record. |

## Not eligible to send in this run

| Candidate | Reason |
| --- | --- |
| Flowers by Kodie | Individual-subscriber precaution: legal form is not confirmed corporate and no valid consent/soft opt-in is recorded. |
| Lizzieland Face Painting | Individual-subscriber precaution: legal form is not confirmed corporate and no valid consent/soft opt-in is recorded. |

## Current read-only checks

- **Current trading:** official booking pages exposed recent 2026 dates: Lavella 24/26/28 August; Wild Clover 15/21 August; Tranquil Touch 20/22/26 August. These are within the 90-day window on the verification date.
- **Lavella Demo identity/opening:** Playwright Chrome 1440×900 and true mobile 390×844 returned HTTP 200, correct title `Lavella Hair | Weston`, no horizontal overflow, and three `book.app` links. Evidence: `evidence/lavella-playwright-desktop-20260902.png` SHA-256 `3697ecf554a4edb084ee1ac0ae4c26c371e11f3805abbb624ac545ab94e72672`; `evidence/lavella-playwright-mobile-20260902.png` SHA-256 `eaef8f48bb9ed1181c6477b112be008fa15fb266aba556f5d9fafa9478d53d52`.
- **Reply, opt-out, refusal, bounce, purchase:** for Lavella, `UNKNOWN`; no such incoming message was observed in the verified thread before send. The other customers remain HOLD before send.
- **PECR / UK GDPR:** Lavella Hair Limited is a Companies House limited company, therefore a corporate subscriber for the current named-business contact; electronic-mail consent is not required under PECR, provided identity and a valid unsubscribe address are included and no objection exists. Its `hotmail.com` mailbox nevertheless means no named individual is used in the draft. Legitimate-interest purpose/necessity/balancing is low-impact and proportionate only for a one-off follow-up, but transparency and the final suppression check remain incomplete. Flowers and Lizzieland are treated as individual subscribers because their legal form is unconfirmed; consent/soft opt-in is absent, so they are HOLD.

## Required release evidence before named-target send authorization

1. Read-only Sent/received-thread check proving original recipient, sent date, subject and **£600** quoted price; record any reply, opt-out/refusal, bounce or purchase.
2. Fresh real-browser Desktop and 390px verification of each public Demo, matching the current destination and business identity.
3. Per-Demo `OFFER / TRANSFER PLAN = PASS`: code ownership and a disposition for every non-final asset (`CUSTOMER RECONFIRMATION REQUIRED`, `REPLACE BEFORE HANDOVER`, or `EXCLUDE BY AGREEMENT`).
4. UK subscriber classification, business relevance, suppression check and lawful basis recorded as `VERIFIED`.
5. Current user authorization naming the specific recipient(s) and approving the exact reply-thread draft.
