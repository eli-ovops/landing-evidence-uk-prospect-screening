# United Kingdom formal sample — remediation status

**Status: READY FOR COUNTRY MERGE.**

This owner has frozen the four required discovery frames and completed all twenty auditable records. `UNITED_KINGDOM_SAMPLE.csv` intentionally contains only records whose H0, identity, website status, required viewport audit (or no-site audit), email evidence status and static-fit conclusion are complete. It must not be padded with leads or provisional records.

| Requirement | Result at this handoff |
|---|---:|
| Total VALID records | 20 / 20 |
| local trades/home services | 5 / 5 |
| wedding/creative | 5 / 5 |
| beauty/wellness | 5 / 5 |
| local professional services | 5 / 5 |
| Cities represented | 5 (Manchester, Salford, Stockport, Liverpool, Huyton) / at least 2 |
| H0 within 90 days | 20 / 20 |
| Owned-site 1440x900 + 390x844 audit | 15 / 15 owned sites in this batch |
| `audit_status=VALID` | 20 / 20 |

## Classification correction

Manchester Compliance is a compliance/advisory professional service, not a hands-on home-service trade. Its existing record has been reclassified to `local professional services` and its static-fit text corrected accordingly. It is excluded from the trades denominator; the completed trades set is the five directory-led plumbing/heating businesses below.

## Selection-bias audit

`local trades/home services = PASS`, `wedding/creative = PASS`, `beauty/wellness = PASS`, and `local professional services = PASS`: each retained record follows its frozen public-directory display sequence, with every intervening candidate reason-coded in `UNITED_KINGDOM_SOURCES.md`. The only redraw conditions used were H0 failure, city/identity mismatch, or audit incompleteness. `Photography By Michelle Jane` and `Aequitas Legal` are control cases for the access rule: Cloudflare and a 403 response respectively blocked both owned-site viewports, yet the H0- and identity-qualified businesses were retained with `OWNED_SITE_ACCESS_BLOCKED` and `static_fit_status=UNKNOWN`.

## Frozen neutral discovery frames

The following source pages/queries and their visible order are frozen before official-site, email, static-fit or viewport assessment. The current source ledger records candidates and reason-coded skips. No candidate may be replaced for a missing public email, website quality, static fit, Cloudflare, a verification page, or desktop/mobile load failure.

1. `local trades/home services`: Checkatrade’s public `Plumber in Manchester` directory, displayed `Most relevant` sequence. Order 1 (Emergency Plumber London) was passed over only for city/identity mismatch; retained orders are TAT (2), Nelson (3), JB7 (4), JD Property Services (5), then ABS (7) after Falcon Plumbing & Heating (6) could not be audited. The screenshots, owned sites, emails and fit conclusions did not affect that progression.
2. `wedding/creative`: Hitched `Wedding Awards 2026 — Greater Manchester / Wedding Photographers`, displayed order. Amelia Ogden (1), ARHphotography (2) and Cherished Images (3) lacked a qualifying 90-day direct H0 date; DTEE STUDIOS (5), KB Photography (8), Kiss The Bride Photography (9), N A Jackson Photography (10), Photo by Liamjamesmoore (11) and Rebecca Conway Photography (13) likewise lacked qualifying current-trading H0 evidence in this audit. Retained orders are Christy (4), Emma (6), Joe (7), Photography By Michelle Jane (12), and Rick Dell (14). Email, website quality, static fit and the Cloudflare result did not change the progression.
3. `beauty/wellness`: Fresha’s public Liverpool salon directory. The first five displayed businesses were frozen in order: Nails by Paulette, M.Art Beauty Studio, The Corner Clinic and Co, Graceful Aura and The Secret Collective. Each has direct recent customer-review H0 evidence in the ledger; no redraw was needed. Website, email and static-fit results did not influence selection.
4. `local professional services`: Manchester Law Society’s Corporate Members directory, frozen in its displayed sequence. Manchester Compliance remains record 1 under the earlier classification correction. In the directory-led continuation, 18 St John Street Chambers (1) and 23 Essex Street Chambers (2) failed H0; retained businesses are 3PB (3), Aequitas Legal (4), Alderstone Solicitors (6), and Anthony Collins Solicitors (7), with AGI Criminal Solicitors (5) H0-failing. Website, email, static fit and access outcomes did not influence progression.

## Anti-bias and access-failure rule

Discovery order is frozen before owned-site, email and static-fit assessment. A public email absent from a directly inspectable source remains `NOT VERIFIED`; it is never a redraw reason. Once H0, identity/city and official-site attribution are confirmed, an owned site that shows Cloudflare, an interstitial/verification page, or fails at either requested viewport remains in the sample. The audit records the actual screenshot/observation, uses `OWNED_SITE_ACCESS_BLOCKED` (or another stable access-failure enum), and sets static fit to `UNKNOWN` or `NO` as evidence supports. `audit_status=VALID` means that the audit is complete, not that the site rendered successfully, email is verified, static fit is positive, or outreach is permitted.

Permitted redraw reasons are only H0 failure, identity/city mismatch, duplication, or an audit that cannot be completed. This prevents the formal sample from silently preferring sites that are easy to load, have email addresses, or look favourable.

No outreach, account access, contact-form submission, Demo, deployment, payment, purchase, or other external write occurred.
