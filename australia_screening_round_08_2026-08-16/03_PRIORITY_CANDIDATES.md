# Round 08 — Priority A/B ranking and deep evidence cards

All three have a total >=70 and pass the A/B/C/D floors. They remain research candidates only: purchase intent, decision authority, legal outreach basis, email deliverability, material rights, and any actual response are UNKNOWN.

## Ranking

| Rank | Merchant | Industry / city | Score | Priority | Why it survived | Strongest red team |
|---:|---|---|---:|---|---|---|
| 1 | Prestige Cleaning Wagga | commercial cleaning / Wagga Wagga NSW | 78 | B | active ABN/chamber evidence, clear email route, stable B2B story, and two visible homepage/CTA defects | commercial contracts and sales process may mean a small landing page is not a buying priority |
| 2 | Kimberley Cleaning | commercial/residential & vehicle cleaning / Broome WA | 74 | B | long-running local operation, physical address, public email, stable service story, and generic visitor journey | multi-segment service mix could require more content selection than AU$800 safely covers |
| 3 | Kerb To Gutter Property Maintenance | property maintenance / Coffs Harbour NSW | 70 | B | local phone/email, multi-service and insurance/community-care signals, plus conspicuously stale/undifferentiated presentation | actual owner/control and recent third-party activity are weaker than the other two |

## 1. Prestige Cleaning Wagga

- **Official / authority / social:** [official site](https://www.prestigecleaningwagga.com.au/) · [Wagga Chamber listing](https://members.waggachamber.com.au/directory/Details/prestige-cleaning-wagga-3988682) · [ABN Lookup active record](https://abr.business.gov.au/ABN/View?id=11670052454) · official Instagram is linked on the site, but its 90-day recency is **NOT VERIFIED** because the permitted connector was unavailable.
- **Maps lookup:** https://www.google.com/maps/search/?api=1&query=Prestige+Cleaning+Wagga+Wagga+NSW
- **H1 current operation — PASS:** ABN Lookup shows OFG Prestige Pty Ltd active from 2023 in NSW 2650, while the Wagga Chamber retains the company’s local address/phone and named it in its 2025 finalists page.
- **H2 independent/local decision — PASS (not legal-owner proof):** active local private-company registration, local chamber membership and a Wagga-specific commercial site support a local merchant, but no individual approver was published.
- **H3 contact — PASS:** `[REDACTED_EMAIL]` is published on the official site; `dig MX prestigecleaningwagga.com.au` returned Google Workspace MX; no deliverability probe was sent.
- **H4 static fit — PASS with boundary:** a new page can present stable sectors, cleaning capability, assurance and direct email/phone; it must omit the server-side form and any current sanitisation offer, schedules, quotations or client portal/data.
- **H5 two reproduced visitor-visible problems — PASS:** (1) at desktop and 390px, opening `/` leads with “Fogging & Sanitisation Cleans Now Available” and “email through a fact sheet,” an undated legacy-sounding message before the commercial-cleaning proposition; (2) the homepage gives generic “Attention to Detail / Satisfaction Guaranteed / Quality Assurance” blocks and then splits contact between a mailto CTA and `/contact#dm` form, without a sector-specific next path. These are visible hierarchy/contact defects, not tool findings.
- **H6 exclusion check — PASS:** no chain/head-office evidence was found; the page is functional but not a modern, complete conversion page due to the two reproduced faults.
- **Score:** A 26 (visible old/ambiguous lead, generic claims and split route); B 18 (ABN + chamber + 2025 recognition); C 18 (stable commercial story); D 8 (public custom email/MX plus chamber route); E 8 (commercial facilities proposition plus chamber recognition). **Total 78.**
- **Brand/payment-capability signals:** active private company/GST registration; chamber 2025 finalist; commercial-client/facility claims and equipment/training claims. These signal capacity, not revenue or buying intent.
- **AU$800 case / against:** a fixed overview page could make facilities, proof, sectors and direct contact understandable before a quote; against it, contract procurement and existing sales flow may make the site low priority. **Go only if a later authorized discovery confirms a locally controlled sales page can be separate from operational quoting; no-go if they require a replacement form/CRM or current campaign maintenance.**
- **Demo direction (description only):** one long “commercial cleaning for Wagga facilities” page: sectors, assurance proof, 3 service groups, local service area, email/phone CTA. Exclude fogging promotion, pricing, client login, forms and scheduling.
- **Evidence gaps:** named owner/approver; recent review/Instagram evidence; email deliverability; consent/lawful basis; material rights; actual site analytics and purchase intent.

## 2. Kimberley Cleaning

- **Official / authority / social:** [official site](https://www.kimberleycleaning.com.au/) · [services](https://www.kimberleycleaning.com.au/services) · [LocalSearch profile](https://www.localsearch.com.au/profile/kimberley-cleaning/clp0qaybi002408l58wxsbjmw) · [Cylex listing](https://www.cylex-australia.com/broome/cleaning-services/) · no official Instagram was relied upon.
- **Maps lookup:** https://www.google.com/maps/search/?api=1&query=Kimberley+Cleaning+Broome+WA
- **H1 current operation — PASS:** the official page states seven-day operating hours at 2 Ord Way, and current directory pages independently retain the same name, address and phone.
- **H2 independent/local decision — PASS (not legal-owner proof):** the official page calls the business locally owned/operated, gives a single Broome base and describes a nine-cleaner team; no individual decision maker is named.
- **H3 contact — PASS:** official footer publishes `[REDACTED_EMAIL]`; `dig MX bigpond.com` returned `extmail.bigpond.com`; no delivery test or email was sent.
- **H4 static fit — PASS with boundary:** stable cleaning categories, remote-area capability, vehicle/building proof and contact can be statically described; retain telephone and mailto only, and exclude the present inquiry form, changing hours, current job quotes and service scheduling.
- **H5 two reproduced visitor-visible problems — PASS:** (1) desktop and 390px show one broad “Residential and Commercial Cleaning in Broome” page mixing houses, schools, hospitals, cars, buses, carpets and remote work before a visitor can identify a relevant service; (2) the only in-flow CTA is a telephone-labelled “Contact Us” and later mandatory enquiry form, while the public business email is only in the footer, so a visitor seeking an asynchronous commercial contact path has to traverse the page. These are visible information/CTA issues.
- **H6 exclusion check — PASS:** no chain/head-office signal or polished, audience-specific landing journey was found; the site is live, so it was not scored as broken.
- **Score:** A 26 (generic information flow and footer-only email); B 17 (15+ years, location, team and directory corroboration); C 17 (stable service buckets); D 7 (public email/MX/phone); E 7 (team, fleet/vehicle work and specialist cleaning services). **Total 74.**
- **Brand/payment-capability signals:** fixed premises; team of nine; vehicle/bus and commercial/remote work; pressure/acid/steam cleaning capability. These are two or more operational capacity proxies, not revenue.
- **AU$800 case / against:** a one-page segmentation of commercial/remote, residential and vehicle work could reduce visitor ambiguity without replacing operations; against it, the breadth could force more copy, proof and content selection than a fixed scope permits. **Go only if the client selects a narrow commercial/remote or vehicle landing audience and supplies approved content; no-go if the page must quote, schedule, or maintain many categories.**
- **Demo direction (description only):** narrow audience page, e.g. “Broome commercial & remote-area cleaning,” with three proof-backed service groups, capabilities and mailto/telephone CTA. No quote form, job calendar, price list or client data.
- **Evidence gaps:** owner name/authority; company registration; fresh reviews; confirmed service-area boundary; deliverability; consent/lawful basis; approved imagery and intent.

## 3. Kerb To Gutter Property Maintenance

- **Official / authority / social:** [official site](https://kerbtogutter.com.au/) · [True Local listing](https://www.truelocal.com.au/nsw/coffs-harbour/kerb-to-gutter-property-maintenance-1000001954311) · [Yellow Pages category listing](https://www.yellowpages.com.au/coffs-harbour-region-nsw/lawn-cutting-maintenance) · official Facebook is linked from the site but recency is **NOT VERIFIED**.
- **Maps lookup:** https://www.google.com/maps/search/?api=1&query=Kerb+To+Gutter+Property+Maintenance+Coffs+Harbour+NSW
- **H1 current operation — PASS (medium):** the official live site carries 2026 copyright and a current service/contact presentation; independent local directories still list the exact business, Coffs Harbour and `0434 881 152`. This is weaker evidence than an active ABN or dated recent review.
- **H2 independent/local decision — PASS (medium, not ownership proof):** the single branded local service page, personal mobile number, no chain signal and Coffs directories support a locally decidable small merchant; no owner name was found.
- **H3 contact — PASS:** `[REDACTED_EMAIL]` and mobile are published on the official site; `dig MX bigpond.com` returned `extmail.bigpond.com`; no message was sent.
- **H4 static fit — PASS with boundary:** core lawn/garden/property-maintenance overview, service area, selected before/after proof and email/phone can remain stable; do not reproduce the form, `$30` rate, quoted job detail, month/year contract terms, or any booking/client data.
- **H5 two reproduced visitor-visible problems — PASS:** (1) desktop and 390px present five large undifferentiated service groups plus “+ More,” so a homeowner cannot quickly tell a main offer or relevant proof; (2) all gallery image URLs were in `/wp-content/uploads/2020/11/`, the before/after panels have no project/caption context, and the public email appears only in the footer after an in-page form. This is a visible trust/contact-path problem, not an inference that the work is old.
- **H6 exclusion check — PASS:** no chain or head-office control was found; the page is functional but not already complete/modern under H5.
- **Score:** A 29 (service overload, stale-asset presentation and email/form friction); B 13 (local directory, insurance/community-care and local service statements); C 16 (stable overview after exclusions); D 6 (public email/MX/phone); E 6 (insurance/community-care and commercial maintenance scope). **Total 70.**
- **Brand/payment-capability signals:** stated insurance; community-care approval; commercial maintenance and broad equipment-requiring services. These are only proxies, not an assertion of budget.
- **AU$800 case / against:** a clear “property maintenance in the Coffs region” page with a chosen service priority and current proof can explain the business better than the existing all-services list; against it, the merchant may require prices, contracts and live enquiry data. **Go only if scope is an evergreen overview with client-supplied selected proof; no-go if form migration, price upkeep or dynamic contracts are required.**
- **Demo direction (description only):** one visual property-maintenance overview with 3 priority service groups, area, selected labelled before/after work, insurance/community-care statements where approved, and phone/mailto. No rates, forms, booking, quote calculation or contract content.
- **Evidence gaps:** owner/authority, robust contemporary operation source, current review/social activity, email deliverability, consent/lawful basis, photo rights and actual buyer interest.

