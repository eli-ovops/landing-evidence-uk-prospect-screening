# Baseline and action-path coverage

One-item decisions from existing JR site and source inventory. Planned selectors are verified after implementation. No live migration.

| Item | Existing source / feature | Action | Target selector | Exact href or asset | Reason / replacement |
|---|---|---|---|---|---|
| Logo | Official JR logo | CARRY | #brand-logo | index.html | Unchanged original75x69 |
| Homepage | Identity and navigation | CONSOLIDATE | #hero | index.html | Preserve name and business recognition in one-page route |
| Official website | Current multipage website | CARRY | #original-site | index.html | Retain access to source site without replacing URLs |
| Service kitchen | Kitchen fitting | CARRY | #services | #services | Primary project fit |
| Service bath | Bathroom fitting | CARRY | #services | #services | Primary project fit |
| Refurbishment | Internal/external refurbishment | CONSOLIDATE | #services | #services | Grouped full project and additional services |
| Plumbing | Service | CONSOLIDATE | #services | #services | Included in room renovation capabilities |
| Carpentry | Service | CONSOLIDATE | #services | #services | Included in room renovation capabilities |
| Plastering | Service | CONSOLIDATE | #project-fit | #project-fit | May not be taken standalone; ask Roman |
| Tiling | Service | CARRY | #project-fit | #project-fit | Distinct real tile visual plus source service |
| Decorating | Service | CONSOLIDATE | #project-fit | #project-fit | Preserve whole-project caveat |
| Fencing/decking | Service | CONSOLIDATE | #additional-services | #services | Native disclosure, no standalone guarantee |
| Gallery navigation | 12 clickable images | CARRY | #gallery-link | gallery.html | Retains complete historic gallery and lightbox |
| Before/after | Official bathroom composite | CARRY | #before-after | assets/asset-15.jpg | Preserve both halves, no linked recent-review attribution |
| Which badge/link | Independent business profile | CARRY | #review-link | https://trustedtraders.which.co.uk/businesses/jr-renovations/ | Link text preserves proof without new endorsement-logo use |
| Reviews | Current independent review | CONSOLIDATE | #reviews | #reviews | Explicit dated paraphrase plus full source link, not invented quote |
| Old testimonials | Official testimonial page | CARRY | #testimonial-link | testimonial.html | Keep existing undated testimonials reachable |
| Roman identity | Named proprietor | CARRY | #about | #about | Name and since2001 business claim; no invented staff |
| Portrait/signature | Official business image | CARRY | #roman-portrait and #roman-signature | contact.html | Current full-replacement user scope; public official originals, local Concept only |
| Locality | London/South East | CARRY | #hero | #contact | Service area plus Charlton base; not walk-in showroom |
| Address | 29A Delafield Road, Charlton SE7 7NN | CARRY | #business-address | contact.html | Full business address rendered locally |
| Map | No verified map among reviewed site routes | EXCLUDE | none | none | Area and original full address remain; do not invent walk-in destination |
| Mobile | 07704 668583 | CARRY | #phone | tel:+447704668583 | Native telephone action |
| Landline | 0208 3052969 | CARRY | #landline | tel:+442083052969 | Native telephone action |
| Email | [REDACTED_EMAIL] | CARRY | #email | mailto:[REDACTED_EMAIL] | Native email action; no user data submitted by demo |
| Complaints | Existing written procedure | CARRY | #original-contact | contact.html | Do not alter legal process |
| Social | No attributable official account verified | EXCLUDE | none | none | UNKNOWN; no fake social icon |
| Form/booking | No applicable self-built form in current baseline | EXCLUDE | none | none | Native contact retained; no fake server submission |
| New page navigation | Services/work/reviews/contact | CONSOLIDATE | header nav | #services;#work;#reviews;#contact | Every anchor has actual section; no dead menu |
| A01 | Real image assets/asset-01.jpg | EXCLUDE | none | none | Retired low-impact or redundant visual; service facts and full source gallery remain |
| A02 | Real image assets/asset-02.jpg | CONSOLIDATE | #bath-work | assets/room-A02.jpg | Same real work retained using its verified high-resolution original |
| A03 | Real image assets/asset-03.jpg | CONSOLIDATE | #kitchen-work | assets/room-A03.jpg | Same real work retained using its verified high-resolution original |
| A04 | Real image assets/asset-04.jpg | EXCLUDE | none | none | Retired low-impact or redundant visual; service facts and full source gallery remain |
| A05 | Real image assets/asset-05.jpg | EXCLUDE | none | none | Retired low-impact or redundant visual; service facts and full source gallery remain |
| A06 | Real image assets/asset-06.jpg | EXCLUDE | none | none | Retired low-impact or redundant visual; service facts and full source gallery remain |
| A07 | Real image assets/asset-07.jpg | EXCLUDE | none | none | Retired low-impact or redundant visual; service facts and full source gallery remain |
| A08 | Real image assets/asset-08.jpg | EXCLUDE | none | none | Retired low-impact or redundant visual; service facts and full source gallery remain |
| A09 | Real image assets/asset-09.jpg | CONSOLIDATE | #interior-work | assets/room-A09.jpg | Same real work retained using its verified high-resolution original |
| A10 | Real image assets/asset-10.jpg | CONSOLIDATE | #hero-room | assets/room-A10.jpg | Same real work retained using its verified high-resolution original |
| A11 | Real image assets/asset-11.jpg | EXCLUDE | none | none | Retired low-impact or redundant visual; service facts and full source gallery remain |
| A12 | Real image assets/asset-12.jpg | CONSOLIDATE | #closing-work | assets/room-A12.jpg | Same real work retained using its verified high-resolution original |
| A13 | Real image assets/asset-13.png | EXCLUDE | none | none | Retired low-impact or redundant visual; service facts and full source gallery remain |
| A14 | Real image assets/asset-14.jpg | CARRY | #brand-logo | assets/asset-14.jpg | Unmodified official logo at natural size |
| A15 | Real image assets/asset-15.jpg | CARRY | #before-after | assets/asset-15.jpg | Intact official before/after composite; never imply current review project |

New high-resolution original mapping and retired visual decisions are authoritative in redesign/ASSET_INVENTORY.csv. Replaced derivative copies remain archived; oldA01 andA06 cease rendering, their service facts remain. New A02O/A03O/A09O/A10O/A12O retain original scene provenance.

All CARRY routes above are now implemented locally. Which independent business profile remains an external third-party link. Original full testimonial and complaint wording must be preserved, not replaced by a summary. Source full-address text must occur locally oncontact.html. Full12-gallery links plus original no-JS fallback required. FULL_GALLERY.json andADDITIONAL_OFFICIAL_ASSETS.json supplement original inventory, all originals preserved. Current FULL replacement scope supersedes prior limited-slice reasons.
