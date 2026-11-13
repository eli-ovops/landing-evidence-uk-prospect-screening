# US + Malaysia independent remediation recheck — 2026-08-22

Scope was read-only: the current United States and Malaysia final samples, their current source records, and `audit/H0_DATE_REMEDIATION.md`. No execution-session history was read and no sample, outreach, account, or external state was changed.

## Result

**US+MALAYSIA INDEPENDENT RECHECK PASS**

| Check | United States | Malaysia |
| --- | --- | --- |
| CSV shape | PASS — 20 data rows, 20 fields | PASS — 20 data rows, 20 fields |
| Industry / city / duplicate checks | PASS — four industries x five; eight cities; no duplicate business | PASS — four industries x five; eleven cities; no duplicate business |
| H0 fields and date window | PASS — all H0 URL and identity/city fields non-empty; every date in 2026-05-24..2026-08-22 | PASS — all H0 URL and identity/city fields non-empty; every date in 2026-05-24..2026-08-22 |
| Website evidence | PASS — each owned-site row records both 1440x900 and 390x844 observations; the sole no-site row records three search surfaces | PASS — each owned-site row records both 1440x900 and 390x844 observations; all six no-site rows record three search surfaces |
| Email source consistency | PASS — verified emails have URL sources; unverified emails carry an unverified-source marker (`NOT VERIFIED` or `NONE/NOT VERIFIED`) | PASS — verified emails have URL sources; unverified emails carry an unverified-source marker (`NOT VERIFIED` or `NONE/NOT VERIFIED`) |
| `static_fit_status` / validity | PASS — only `YES`, `NO`, `UNKNOWN`; all 20 rows `VALID` | PASS — only `YES`, `NO`, `UNKNOWN`; all 20 rows `VALID` |
| Selection-bias audit | PASS — current source ledger and remediation audit record the frozen-order replacements | PASS — current remediation audit records the H0-only second-pool progression and no website/email/static-fit replacement trigger |

## Focus and remediation spot checks

- **Creative Cuts**: current row is `VALID`; H0 is 2026-08-21, Austin identity is non-empty, three no-site surfaces are recorded, email is unverified, and `static_fit_status=UNKNOWN` is supported by documented no-owned-site evidence. The public Fresha page opened and showed Creative Cuts at the Austin address with 2026-08-21 reviews.
- **Breeze at Lake Ville**: current row is `VALID`; H0 is 2026-06-13, Ipoh identity is non-empty, both viewport observations and a direct email source are present, and `static_fit_status=YES`. The public evidence page opened and showed the 13/06/2026 post and Ipoh address.
- **FARNIESHA BEAUTY SPA**: current row is `VALID`; H0 is 2026-08-15, Rawang identity is non-empty, three no-site surfaces are recorded, email is unverified, and `static_fit_status=UNKNOWN` is supported by documented no-owned-site evidence. The public Fresha profile opened and identified the business in Rawang.
- The seven entries listed in `H0_DATE_REMEDIATION.md` all have compliant current-row outcomes: US Red Ridge Receptions (2026-05-26), Stan's Heating Air & Plumbing (2026-08-12), and Creative Cuts (2026-08-21); Malaysia LYLA Beauty Lounge (2026-08-22), Skin Oria Beauty (2026-08-15), Breeze at Lake Ville (2026-06-13), and FARNIESHA BEAUTY SPA (2026-08-15). Each is `VALID` and has a non-empty H0 URL and identity/city evidence field.

`UNKNOWN` static fit was accepted only where the current row records genuine no-owned-site / access-limiting evidence; it was not treated as a failed enum or substituted with an unsupported fit claim.
