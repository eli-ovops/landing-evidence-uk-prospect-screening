# 01 — destination comparison and 60-business wide screen

## Stage A — six-location comparison

| Location | Why sampled | Static-fit risk | Decision |
|---|---|---|---|
| Bendigo, VIC | Dense independent celebrant/photographer cluster and public local vendor directories | florists/venues and hire firms require stock/date updates | **SELECT** |
| Orange, NSW | Active regional wedding ecosystem and public Orange Wedding Directory | beauty, venues, hire and retail frequently depend on changing availability | **SELECT** |
| Bowral / Southern Highlands, NSW | Strong independent wedding-service ecosystem and public destination directory | many polished destination vendors; venues/events are dynamic | **SELECT** |
| Castlemaine, VIC | Independent creative economy | public pool is small; floristry/gallery/event offers are update-heavy | HOLD, do not add to deep funnel |
| Albury–Wodonga, NSW/VIC | Regional professional-service density | weaker tourism-led local-vendor cross-source in this pass | HOLD |
| Hobart, TAS | Boutique creative providers | high proportion of established agencies/modern sites and event/retail complexity | HOLD |

`SELECT` does not mean every business is suitable. The later 60 rows are deliberately strict; website/link problems, multi-service e-commerce and unavailable-date work were removed rather than labelled KEEP.

## Stage A — full wide pool (60, no Maps/IG bulk extraction)

Legend: **KEEP** = passed forward; **HOLD** = one or more unknown/contradictory gates; **DROP** = hard mismatch found in public material. `Dir` is a human-readable public directory/source, not an ownership proof.

| # | Business | Category / city | Official site or public source | Public contact observed | Quick disposition and reason |
|---:|---|---|---|---|---|
| 1 | Sue Begg Marriage Celebrant | celebrant, Bendigo | [site](https://www.suebegg.com/) | [REDACTED_EMAIL] | **KEEP P3** — personal local service; price/contact and presentation gaps merit deep check. |
| 2 | Thomas Stewart Photography | wedding photographer, Bowral | [site](https://www.thomasstewart.com.au/) | [REDACTED_EMAIL] | **KEEP P1** — individual local photographer; public price/CTA clarity defects. |
| 3 | Tanya Strauss Photography | wedding photographer, Bendigo | [wedding page](https://www.tanyastrauss.com/bendigo-wedding-photography) | [REDACTED_EMAIL] | **KEEP P2** — current individual practice; broken/ambiguous public paths and copy defects. |
| 4 | Michael Anderson Marriage Celebrant | celebrant, Bendigo | [site](http://www.bendigocelebrant.com/) | [REDACTED_EMAIL] | HOLD — public reader received CAPTCHA warning; no substitute claim about page quality. |
| 5 | Robyn Gordes | celebrant, Bendigo | [site](https://www.bendigomarriagecelebrant.com.au/) | Gmail | DROP — personal mailbox/no matching business-domain email gate. |
| 6 | Complete Circle Celebrancy | celebrant, Bendigo | [venue directory](https://chateaudore.com.au/our-favourite-suppliers/) | [REDACTED_EMAIL] | HOLD — public contact but weak site/problem evidence in this pass. |
| 7 | Married by Georgia | celebrant, Bendigo | [directory](https://chateaudore.com.au/our-favourite-suppliers/) | [REDACTED_EMAIL] | HOLD — needs direct-page issue evidence. |
| 8 | Susie the Celebrant | celebrant, Bendigo | [directory](https://threebestrated.com.au/marriage-celebrants-in-bendigo-vic) | [REDACTED_EMAIL] | HOLD — direct quality/problem evidence not obtained. |
| 9 | AJTaylor Images | photography, Bendigo | [site](https://ajtaylorweddings.com.au/) | [REDACTED_EMAIL] | DROP — current, broad multi-product/photo-booth/download estate; static-only replacement unsafe. |
| 10 | Twenty-four18 | photography, Bendigo | [site](https://www.twentyfour18.com/contact) | [REDACTED_EMAIL] | DROP — polished current conversion site. |
| 11 | Vogue Nature | florist, Bendigo | [site](https://voguenature.com.au/) | [REDACTED_EMAIL] | DROP — shop/order operations and stock make static value weak. |
| 12 | Mitchell Street Florist | florist, Bendigo | [Dir](https://www.bendigoweddings.com.au/) | phone only in source | DROP — delivery/product catalogue changes are core. |
| 13 | Bendigo Party Hire | hire, Bendigo | [Dir](https://www.bendigoweddings.com.au/) | phone only in source | DROP — hire stock and date availability are core. |
| 14 | Reservoir Hotel | hospitality/functions, Bendigo | [Dir](https://www.bendigoweddings.com.au/) | phone only in source | DROP — food, events and opening hours are update-heavy. |
| 15 | Gold Mines Hotel | venue, Bendigo | [wedding page](https://goldmineshotel.com.au/weddings/) | site contact | DROP — wedding dates/packages and venue operations are dynamic. |
| 16 | BPCD | trade services, Bendigo | [site](https://www.bpcd.com.au/) | [REDACTED_EMAIL] | DROP — site already clear/current; no two material display faults. |
| 17 | Bendimail | design/mail services, Bendigo | [site](https://www.bendimail.com/) | site email link | DROP — adjacent supplier, not eligible target. |
| 18 | Sunflower Imaging | photography, Bendigo | [site](https://sunflowerimaging.com/) | contact form | HOLD — public email/independence gate incomplete. |
| 19 | Married by Amanda | celebrant, Echuca/Bendigo service area | [site](https://www.marriedbyamanda.com/) | Outlook | DROP — not Bendigo-local and personal mailbox only. |
| 20 | Leah Ladson | photography, Bendigo | [site](https://leahladson.com/weddings) | [REDACTED_EMAIL] | DROP — wedding page says operator left wedding circuit. |
| 21 | Shillobrations | celebrant, Orange | [site](https://www.shillobrations.com.au/) | [REDACTED_EMAIL] (directory) | DROP — polished Webflow site and on-site enquiry flow; no two faults. |
| 22 | Edwina Peach | celebrant, Orange | [site](https://www.edwinapeach.com.au/) | [REDACTED_EMAIL] (directory) | HOLD — basic page and typo/contact friction, but ability-to-pay evidence thin. |
| 23 | Say Yes With Tess | celebrant/coordinator, Orange | [site](http://www.sayyeswithtess.com/) | Gmail | DROP — personal mailbox and coordinator scope. |
| 24 | Haley Jean Makeup Artist | beauty, Orange | [site](http://haleyjeanmakeupartist.com/) | [REDACTED_EMAIL] | DROP — product shop/workshops and travel dates are dynamic. |
| 25 | Dress Code Photography | photography, Orange | [site](https://www.dresscode.photography/) | [REDACTED_EMAIL] | HOLD — active duo but direct price/contact and issue evidence incomplete. |
| 26 | The Little Image Co / SKMedia | media production, Orange | [site](https://www.littleimageco.com.au/) | [REDACTED_EMAIL] (Dir) | DROP — mixed video/podcast/commercial deliverables; not a narrow stable offer. |
| 27 | Renaissance Photobooths | equipment/entertainment, Orange | [Dir](https://orangeweddingdirectory.com.au/business-directory-2/) | [REDACTED_EMAIL] | DROP — date availability/hire operation core. |
| 28 | Jenisa Florist & Gifts | florist/retail, Orange | [Dir](https://orangeweddingdirectory.com.au/business-directory-2/) | not observed | DROP — product/delivery catalogue. |
| 29 | The Greenhouse of Orange | venue/events, Orange | [Dir](https://orangeweddingdirectory.com.au/business-directory-2/) | [REDACTED_EMAIL] | DROP — event programme/availability core. |
| 30 | Duntryleague | venue, Orange | [Dir](https://orangeweddingdirectory.com.au/business-directory-2/) | [REDACTED_EMAIL] | DROP — venue package/booking operations. |
| 31 | The Hayshed Wedding & Events | venue, Orange | [Dir](https://orangeweddingdirectory.com.au/business-directory-2/) | [REDACTED_EMAIL] | DROP — dates/capacity/venue management. |
| 32 | Orange City Bowling Club | venue, Orange | [Dir](https://orangeweddingdirectory.com.au/business-directory-2/) | [REDACTED_EMAIL] | DROP — club functions/hours. |
| 33 | The Studio Door | audiovisual/photography, Orange | [Dir](https://orangeweddingdirectory.com.au/business-directory-2/) | [REDACTED_EMAIL] | HOLD — public contact but scope/problem evidence insufficient. |
| 34 | Philip Shaw Wines | winery/venue, Orange | [Dir](https://orangeweddingdirectory.com.au/business-directory-2/) | [REDACTED_EMAIL] | DROP — venue, cellar-door and product/content updates. |
| 35 | Country Celebrants | celebrant, Orange/Molong | [Dir](https://orangeweddingdirectory.com.au/business-directory-2/) | Gmail | DROP — personal mailbox and directory/Yellow Pages route. |
| 36 | Orange PA Hire | equipment hire, Orange | [Dir](https://orangeweddingdirectory.com.au/business-directory-2/) | [REDACTED_EMAIL] | DROP — hire stock and event availability. |
| 37 | Scarr Entertainment | entertainment, Orange | [Dir](https://orangeweddingdirectory.com.au/business-directory-2/) | Hotmail | DROP — social-only/personal mailbox. |
| 38 | Donna Susan Sharp Celebrant & Cakes | celebrant/cakes, Orange | [Dir](https://orangeweddingdirectory.com.au/business-directory-2/) | Gmail | DROP — mixed cake supply and personal mailbox. |
| 39 | Tracey Harvey Photography | photography, Molong/Orange region | [Dir](https://orangeweddingdirectory.com.au/business-directory-2/) | Live email | DROP — personal mailbox/no site evidence. |
| 40 | Katherine Christian | celebrant, Orange region | [site](https://katherinechristian.com.au/) | BigPond | DROP — personal mailbox and multi-region base. |
| 41 | Dan Cartwright | wedding photographer, Bowral | [site](https://www.dancartwright.com.au/) | Gmail | DROP — polished current site and personal mailbox. |
| 42 | McKay Photography | wedding photographer, Bowral | [site](https://mckayphotography.com.au/) | [REDACTED_EMAIL] | DROP — current content, clear portfolio and social embed; no two material faults. |
| 43 | Johan the Celebrant | celebrant/MC, Bowral service page | [site](https://www.johanthecelebrant.com.au/bowral-marriage-celebrant) | [REDACTED_EMAIL] | DROP — established modern multi-region service. |
| 44 | Zinette Hopper | photographer/video, Bowral service page | [site](https://zinettehopper.com/southern-highlands) | [REDACTED_EMAIL] | DROP — polished package/booking site and multi-operator delivery. |
| 45 | Southern Highlands Wedding Planner | planning, Bowral | [legacy site](https://astann10.tripod.com/index.htm) | [REDACTED_EMAIL] | HOLD — very weak site but current-operation evidence is not enough. |
| 46 | Nica Photography | photography, Bowral | [Dir](https://highlandsnsw.com.au/business/weddings/index.html) | directory contact | HOLD — not enough direct site/email/MX evidence. |
| 47 | Fusion Photography | photography, Bowral directory | [Dir](https://highlandsnsw.com.au/business/weddings/index.html) | [REDACTED_EMAIL] | DROP — Canberra-based premium studio, not local small target. |
| 48 | June-Rose Bridal Makeup & Hair | beauty, Southern Highlands | [Dir](https://highlandsnsw.com.au/business/weddings/index.html) | [REDACTED_EMAIL] | DROP — dynamic appointment/service scope. |
| 49 | Merci Bouquet | florist, Bowral | [Dir](https://highlandsnsw.com.au/business/weddings/index.html) | [REDACTED_EMAIL] | DROP — product/delivery/event floristry. |
| 50 | Yes Bowral | venue, Bowral | [Dir](https://highlandsnsw.com.au/business/weddings/index.html) | [REDACTED_EMAIL] | DROP — venue/event scheduling. |
| 51 | Marry Us Gary | celebrant/MC, Bowral service page | [site](https://marryusgary.com.au/bowral-centennial-vineyards-wedding/) | site contact | DROP — external city/local decision and full site defect evidence unproven. |
| 52 | Melissa Sheehy | celebrant, Southern Highlands | [association directory](https://www.celebrants.org.au/find/celebrant-directory/126-bowral-and-southern-highlands-1) | Gmail | DROP — personal mailbox/no direct site. |
| 53 | Magnolia Moments / Christine Staunton | celebrant, Southern Highlands | [association directory](https://www.celebrants.org.au/find/celebrant-directory/126-bowral-and-southern-highlands-1) | not observed | DROP — public email/site gate incomplete. |
| 54 | Judith O'Brien OAM | celebrant, Bowral | [association directory](https://www.celebrants.org.au/find/celebrant-directory/126-bowral-and-southern-highlands-1) | Gmail | DROP — personal mailbox/no direct site. |
| 55 | Callum Walker Weddings | celebrant, Southern Highlands | [association directory](https://www.celebrants.org.au/find/celebrant-directory/126-bowral-and-southern-highlands-1) | not observed | DROP — public business-email evidence incomplete. |
| 56 | Mali Brae Farm | wedding venue, Bowral | [regional guide](https://www.wsc.nsw.gov.au/files/assets/public/v/1/residents/new-residents/southern-highlands-escape-2024-magazine.pdf) | [REDACTED_EMAIL] | DROP — venue capacity/pricing/scheduling. |
| 57 | Centennial Vineyards | wedding venue, Bowral | [regional guide](https://www.wsc.nsw.gov.au/files/assets/public/v/1/residents/new-residents/southern-highlands-escape-2024-magazine.pdf) | [REDACTED_EMAIL] | DROP — venue dining/availability operations. |
| 58 | Bendooley Estate | wedding venue, Bowral | [McKay venue page](https://mckayphotography.com.au/wedding-venues/bendooley-estate-bowral-wedding/) | site contact | DROP — venue/event operations. |
| 59 | Katie Rivers Photography | photography, Southern Highlands service area | [site](https://katieriversphotography.com.au/) | [REDACTED_EMAIL] | DROP — Berry-based, not a selected-town local operator. |
| 60 | Flowers on the Mill / Thomas Stewart listing | florist/vendor directory, Bowral | [listing](https://www.flowersonthemill.com.au/thomasstewart/) | Thomas business email shown | DROP as florist/Dir; retained only as independent corroboration for #2. |

**Funnel accounting:** total pool **60**; Stage B **10**; final **KEEP 3 / HOLD 9 / DROP 48**. The 9 HOLD are #4, #6–#8, #22, #25, #33, #45 and #46.
