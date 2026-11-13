# Local QA — The Village Bakery and Cafe

Date: 2026-09-02. Browser: local Google Chrome headless, `http://127.0.0.1:4173/`.

| Check | Result | Evidence |
| --- | --- | --- |
| Desktop 1440×900 first viewport | PASS | `qa-desktop-1440x900.png`: business, bakery craft, locality and phone CTA are visible. |
| Mobile 390×844 first viewport | PASS after navigation repair | Header no longer clips a CTA; headline, content and tappable phone CTA fit. |
| Responsive layout / horizontal overflow | PASS | CSS changes grids to one column below 700px; Chrome screen capture shows no visible crop after repair. |
| CTA integrity | PASS | All page CTAs use verified `tel:+441633439500`; no form, booking or order action. |
| Image uniqueness / storyboard | PASS | Three distinct local original concept images; hero, craft and local close have different roles. |
| Closing image placement | PASS | The village-lane visual appears once only, as the user-approved closing image. |
| User-directed visual revision | PASS | Village lane restored as the user-approved closing visual; Visit is now a short, image-free horizontal information band. Verified in `qa-revised-flow-1440.png`. |
| Compact Visit revision | PASS | Desktop Visit height reduced to a 270px information band; hierarchy was retuned into a compact title, facts, caveat and CTA rail. Verified in `qa-compact-visit-1440.png`. |
| Reduced motion | PASS | No auto-animation; motion preference disables button transition. |
| Business Fidelity | PASS (owner self-QA) | Hero, offer cues, visit details and phone correspond to PRE_CODE_DECISION.md map. |
| Client-visible internal-text scan | PASS | `index.html` scanned for TODO, authorization, ledger/status, price, reserved-scope, placeholders and false booking/order language. No governance text is displayed. “Independent concept preview” honestly identifies the artifact. |
| 8.5 refinement — desktop 1440×900 | PASS (owner QA) | `qa-refined-desktop-1440x900.png`: real garden hero, one clear call action, cooler substrate and improved title-to-body hierarchy render without console errors. |
| 8.5 refinement — mobile 390×844 | PASS (owner QA) | `qa-refined-mobile-390x844.png`: wordmark, hero, CTA and visible concept label fit at 390px without horizontal overflow. |
| Refinement interaction | PASS (owner QA) | Scroll reveals use only opacity/transform and are removed by `prefers-reduced-motion`; current Chrome console has 0 errors and 0 warnings after reload. |
| Expanded real-photo story — desktop | PASS (owner QA) | `village-9-desktop-craft.png`: the page now moves through five distinct customer-attributable public photographs: garden, pastry case, counter, official coffee-making frame and bread shelves. |
| Expanded real-photo story — mobile 390×844 | PASS (owner QA) | `village-9-mobile-craft-detail.png`: the supporting real photos retain a readable two-up/one-wide rhythm at 390px, with no gallery controls, clipping or console errors. |
| Source treatment boundary | PASS with recorded limitation | B-08 uses a controlled product-only CSS crop so the directory overlay outside the visible crop is not shown. Its third-party public-hosted status and source URL remain recorded in `IMAGE_LEDGER.md`; it is not a transfer-ready customer original. |
| Current visual ceiling | OPEN | The page now has one verified official customer-published image in its craft story. A later official original could replace B-08, but this is not a visible completeness blocker for the local Concept Demo. |
| 8.5 refinement — proof rhythm / desktop 1440×900 | PASS (owner QA) | `village-85-desktop-proof.png`: the proof section now uses a warm paper register, clearly separated from the cool photo field and forest visit band. The 4.8 / 61-review evidence has a single editorial hierarchy rather than a rating-card treatment. |
| 8.5 refinement — proof rhythm / mobile 390×844 | PASS (owner QA) | `village-85-mobile-proof.png`: title, rating and service proof remain legible in one vertical reading sequence; no horizontal clipping observed. |
| Official-photo source upgrade | PASS (owner QA) | The lower-resolution directory tart crop has been replaced by B-09, a face-free, untouched coffee still extracted from the bakery's official Facebook Reel. The original MP4, derived hash and source permalink are retained in `IMAGE_LEDGER.md`. |
| User-directed Hero comparison — desktop 1440×900 | PASS (owner QA) | `village-hero-lane-desktop.png`: the user-approved lane concept reads clearly as one Hero image with visible bakery cue, location, CTA and no console errors. |
| User-directed Hero comparison — mobile 390×844 | PASS (owner QA) | `village-hero-lane-mobile.png`: bicycle, bread, headline and CTA remain visible without horizontal clipping. The factual garden image remains unique and is now used at Closing. |
| User-directed current Hero — desktop/mobile | PASS (owner QA) | `village-hero-garden-desktop.png` and `village-hero-garden-mobile.png`: the brighter actual garden/exterior image is restored as Hero; business sign, seating, headline and CTA remain readable with 0 console errors. |

Actual Demo Minutes: 72. Direction-level rebuild count: 0. Remaining P0/P1 defects: 0.

`CLIENT-SHOWABLE DEMO = READY FOR INDEPENDENT VISUAL ACCEPTANCE`.

Not independently accepted. No public URL, upload, deployment, email, outreach, login, payment or source transfer was performed.
