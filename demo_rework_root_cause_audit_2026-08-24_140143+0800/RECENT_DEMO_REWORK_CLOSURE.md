# Recent Demo Rework Closure — feedback / Skill evidence only

Audit date: 2026-08-24  
Scope: five recent, feedback-rich local Demo threads only. No new web research, no browser re-scoring, no Demo change, and no SOP change. This closure supersedes no prior document; it narrows the question to **what repeatedly triggered rework, which historical Skills are actually evidenced, and where the delivery chain broke**.

## One-screen conclusion

The recurring failure was **not primarily “there was no SOP.”** The project rules already called for customer fidelity, a design direction, and independent QA. The repeat pattern is that a Cold Demo entered implementation before the brief had been converted into a testable, customer-specific visual and content plan. Owners then used self-QA and screenshots to close the loop, while the user was still finding first-order failures: missing business facts/assets, interchangeable beauty/wellness composition, awkward section/hero continuity, and insufficient differentiation from the existing site or another Demo.

Five cases contain **16 explicit dissatisfaction / rework batches**. The filesystem additionally preserves **14 labelled revision transitions** (Wild Clover 3, Tranquil Touch 8, Lavella Hair 3); the two counts are intentionally not added together because they measure different things. Pure K also has an earlier non-negotiable asset instruction, which is analysed as a first-draft control—not counted as a rework round. Karen has a rebuild instruction and many named backup snapshots, but the exact number of prior feedback rounds is not verifiable.

Most important finding: downstream documents and visual QA existed in several later versions, but the source tasks do not prove that the required design/motion/media Skills were read and converted into **pre-code decision artefacts that constrained HTML/CSS/assets**. A screenshot can prove a rendered state; it did not prove that the direction was distinct, all real customer material was covered, or a design defect was caught before review.

## Evidence method and limits

The table below quotes or closely paraphrases only the original task user messages, explicit independent-rejection messages, Owner reports (labelled as such), and preserved local version paths. Historical task evidence is stored read-only in the following session records:

| Case | Task thread | Read-only task record | Local chain root |
| --- | --- | --- | --- |
| Wild Clover | `01a02d9d-7c59-7b61-91a8-0cecc39bd0d2` | `/Users/USER/.codex/sessions/2026/08/23/rollout-2026-08-23T15-54-50-01a02d9d-7c59-7b61-91a8-0cecc39bd0d2.jsonl` | `client_uk_wild_clover_skin_care/` |
| Tranquil Touch | `01a02d9d-7a17-7861-89db-968f51ae0c36` | `/Users/USER/.codex/sessions/2026/08/23/rollout-2026-08-23T15-54-50-01a02d9d-7a17-7861-89db-968f51ae0c36.jsonl` | `client_uk_tranquil_touch_relaxation_therapy/` |
| Lavella Hair | `01a02da0-e82c-7c92-8517-abe7fd71e572` | `/Users/USER/.codex/sessions/2026/08/23/rollout-2026-08-23T15-58-35-01a02da0-e82c-7c92-8517-abe7fd71e572.jsonl` | `client_uk_lavella_hair_limited/` |
| Pure K Beauty | `01a02c2e-ea3c-7dd1-b112-b113b006370f` | `/Users/USER/.codex/sessions/2026/08/23/rollout-2026-08-23T09-14-27-01a02c2e-ea3c-7dd1-b112-b113b006370f.jsonl` | `client_pure_k_beauty/` |
| Karen Brown / A Timeless Love | `01a022b2-c6e2-7383-ad54-25610c357316` | `/Users/USER/.codex/archived_sessions/rollout-2026-08-21T13-02-16-01a022b2-c6e2-7383-ad54-25610c357316.jsonl` | `client_karen_brown_a_timeless_love/demo/` |

`NOT VERIFIED` means the record did not prove the claim. In particular, an Owner’s “PASS,” a QA checklist, a screenshot, a named Skill in a later audit, or a directory name is **not** evidence that a historical production task fully read or applied a Skill.

### Fixed defect categories

| Code | Defect category | Meaning in this audit |
| --- | --- | --- |
| F1 | Direction / differentiation | Looks generic, insufficiently improved, or structurally/visually too close to another Demo or the source site. |
| F2 | Customer-fidelity coverage | Real logo, images, business facts, services, location, reviews, payment/contact/booking facts were omitted or not planned into the page. |
| F3 | Composition / visual continuity | Hero, section boundaries, gradients, typography, spacing, density, card grouping, or hierarchy require user-directed correction. |
| F4 | Asset treatment / placement | Too few real images, blocked/incorrectly placed image or logo, customer work presented in the wrong grouping. |
| F5 | Motion / interaction direction | Motion is absent or not specified to support the intended reading order. |

## Per-case feedback and rework chain

| Demo | Preserved version chain / rework batches | User or independent-feedback evidence → category | First-version root cause | Patch or direction redo? | Evidence pointers |
| --- | --- | --- | --- | --- | --- |
| **Wild Clover Skin Care** | `demo/ → demo_v2_20260823/ → demo_v3_20260823/ → demo_v4_20260823/` (3 labelled transitions; 3 feedback batches) | **R1:** user called the Demo “低级” and the task mandated an overall Design Intent / visual direction / page architecture rebuild → **F1**. **R2:** independent rejection of v2: score 7.8, originality/de-template 5.5, “与 Lavella 高度同构,” `FAIL`; mandate created a wholly new `demo_v3` → **F1**. **R3:** user found too few images; missing address/rating/customer projects/hours; awkward logo/hero placement, inconsistent dimensions, and a site that “视觉上和原来的没有相差多少,” then requested redo → **F2/F3/F4/F1**. | The first direction was neither recognisably Clover-specific nor completeness-tested against real business material. It used a reusable beauty layout before proving a distinct visual thesis. | R1/R2 required true direction redo. R3 began as many surface fixes, then escalated to a redo; the “use the old one” reversal is evidence that late patching did not establish a stable direction. | Task thread user messages: “低级”; v2 rejection quote; later missing-content/hero/original-site comments. Local: `demo_v2_20260823/`, `demo_v3_20260823/DESIGN_INTENT.md`, `demo_v4_20260823/`. |
| **Tranquil Touch Relaxation Therapy** | `demo/ → demo_v2 … → demo_v9_20260823/` (8 labelled transitions; 5 feedback batches visible in task record) | **R1:** same formal “低级” / whole-direction rebuild instruction → **F1**. **R2:** “营业时间，社媒图标。客户服务内容。真正该放的东西一个都没放。” → **F2**. **R3:** fonts/borders “太僵硬,” request rounded areas and motion → **F3/F5**. **R4:** repeated feedback that gradients/joins were hard, looked like distinct panels, and must become one fluid page → **F3**. **R5:** lower button/type crowded → **F3**. | No page-level composition rule defined the continuous visual field, content inventory, and reading rhythm before component styling. The team tuned borders/gradients after the fact. | R1 was a required direction redo. R2–R5 were incremental CSS/layout patches; v9 records a gradient-continuity intent but the long patch sequence shows the decisive rule arrived late. | Task thread user messages quoted above. Local: nine `demo*` directories; `demo_v9_20260823/DESIGN_INTENT.md` explicitly says “replaces hard section boundaries.” |
| **Lavella Hair** | `demo_20260823/ → demo_v2_20260823/ → demo_v3_20260823/ → demo_v4_20260823/` (3 labelled transitions; 4 feedback batches) | **R1:** formal “低级” / rebuild instruction → **F1**. **R2:** independent rejection of v2: score 7.3, originality/de-template 5.0, “与 Wild Clover 高度同构,” `FAIL`; mandate created wholly new v3 → **F1**. **R3:** user said required cookie/booking material was missing → **F2**. **R4:** “把客户的案例放到一起展示，不要分开半块” → **F3/F4**. | The initial layout used an interchangeable beauty-site skeleton and did not decide how real studio evidence and service journeys should be grouped. | R1/R2 were direction redos. R3/R4 were local content/layout corrections; v3’s preserved Design Intent is a later pre-code artefact, not proof it existed for v1/v2. | Task thread rejection and user messages. Local: v2/v3/v4 folders; `demo_v3_20260823/DESIGN_INTENT.md` states it follows independent v2 rejection and rejects generic card-grid behaviour. |
| **Pure K Beauty** | Preserved production root: `demo/`; `outreach_preview/` exists. **No labelled v2+ folder: version chain unavailable.** (3 dissatisfaction/rework batches; version-to-batch mapping is `NOT VERIFIED`.) **Pre-code control:** retain customer content/images; scene photos, actual equipment and props may be beautified but not invented; logo identical → **F2/F4**. | **R1:** user said customer information was not clear—payment, footer, services/content → **F2**. **R2:** hero “不行太丑,” photo can be beautified and hero format changed → **F1/F3/F4**. **R3:** a later area was “这一片最丑” → **F1/F3**. | The asset and information inventory was treated as a list to add after a visual concept, rather than as non-negotiable inputs to the visual hierarchy. | The pre-code control was explicit; R1–R3 appear to be patches. Without labelled versions or an initial Design Intent, a genuine direction reset is **NOT VERIFIED**. | Task thread messages; preserved `demo/BUSINESS_FIDELITY_MAP.md` and `demo/INTERNAL_IMAGE_LEDGER.md` show later documentation exists, not its pre-code timing. |
| **Karen Brown — A Timeless Love** | `demo/backups/` has named prework/rebuild snapshots, including `20260821-pre-rebuild`, `pre-client-photo-reset`, `pre-real-gallery-close`, `pre-95-polish`, and `pre-pmo-remediation`. Exact chronological feedback-round count is **NOT VERIFIED**. One explicit user-triggered redo is counted. | User: “又是通病，你没好好读取项目核心文件吗” followed by “重新做” → **F1/F2**. The Owner later reported a full rebuild (not a patch), replacing an earlier generic direction with wedding-celebrant clarity, official client/source imagery and a wedding-specific Bottom 40%; that is Owner report, not independent proof of the earlier defect. | The page had not yet demonstrated the required business-fidelity / customer-specific core before visual polishing; the user treated it as a repeat systemic failure. | Explicitly a direction rebuild per the Owner report, with retained pre-rebuild snapshot. The independent acceptance status of that later local state is outside this narrowed audit. | Task thread user message and Owner report; local `demo/backups/20260821-pre-rebuild/`, `demo/docs/BUSINESS_FIDELITY_MAP.md`, `demo/docs/QA.md`. |

## High-frequency problem ranking

Counts are feedback batches, not severity scores; a batch may carry more than one defect category. This avoids turning a long chain of micro-edits into false independent failures.

| Rank | Problem | Demos / feedback batches | Evidence |
| --- | --- | --- | --- |
| 1 | **F1 — Direction and differentiation were not resolved before coding** | **5 / 9** | Wild low-level + v2 same-as-Lavella + too-close-to-source; Tranquil low-level; Lavella low-level + v2 same-as-Wild; Pure hero/ugly-area rejection; Karen “通病…重新做.” |
| 2 | **F3 — Composition, continuity, hierarchy, typography or grouping needed user-directed repair** | **4 / 7** | Tranquil hard gradients/panel effect, type/border rigidity, crowded CTA; Wild hero/logo/dimensions; Lavella grouped cases request; Pure hero/ugly area. |
| 3 | **F2 — Customer business/asset facts were missing from the first visible draft** | **4 / 4** | Wild missing address/rating/projects/hours; Tranquil missing hours/social/services; Lavella missing required booking/cookie material; Pure missing services/payment/footer/customer information. |
| 4 | **F4 — Real asset coverage and placement lacked a locked mapping** | **3 / 3** | Wild too few images/hero blocking face; Lavella customer cases split apart; Pure hero treatment. Pure’s separate pre-code asset constraint makes the control gap still more material, but is not double-counted as rework. |
| 5 | **No traceable independent F1–F4 acceptance gate** | **5 / 5 case chains** | Each chain advanced through some combination of later QA/prework/screenshot/Owner completion material, yet the record contains no independently signed F1–F4 gate before the next feedback. This does not call every QA file false; it identifies the missing decision-level acceptance trace. |

Motion is a **separate, low-frequency but clear** issue: only Tranquil has direct user evidence requesting motion (1 Demo / 1 feedback batch). The record does not support claiming that all five had “no motion.”

## Historical Skill-use matrix

This is deliberately narrower than a “recommended Skills” list. `Read` means a historical production-task record proves a complete read; `Use` means a tool call or a pre-code artefact can be tied to that Skill. A skill named by a user link is not automatically read or applied.

| Skill / capability | Historical evidence | Named | Complete read | Used / affected implementation | Breakpoint | Finding |
| --- | --- | --- | --- | --- | --- | --- |
| `website-delivery-sop` | The task environment/AGENTS made it mandatory, but these five production records contain no individually verifiable complete-read receipt or pre-code checklist linked to first implementation. | Mandatory context | **NOT VERIFIED** | Later QA/fidelity documents exist in several cases; causation to first code is **NOT VERIFIED**. | **B / NOT VERIFIED** | Rules were available, but historical loading and conversion to pre-code controls are not evidenced. Do not call it “used.” |
| `design-taste-frontend` | No original production task message or tool record names it in the five case records. | No | NOT VERIFIED | NOT VERIFIED | **A** | The historical evidence does not show this anti-template design Skill was called. |
| `motion-design` | No original production task message/tool record names it. Tranquil has a user request for motion, but that is not evidence of this Skill being read. | No | NOT VERIFIED | NOT VERIFIED | **A** | Motion was requested after visual rejection, not specified as a pre-code narrative. |
| `media-use` | No original production task message/tool record names it. Image ledgers exist later for multiple cases. | No | NOT VERIFIED | Image ledgers are evidence of documentation, not of this Skill’s historical use. | **A** | The asset problem was not solved by merely having a ledger afterwards. |
| `ui-ux-pro-max` | User explicitly linked/named it in Wild and Pure task messages after dissatisfaction; transcript contains its injected text/path. No customer-specific search result, complete-read receipt, or input-to-implementation mapping was found. | Yes (Wild, Pure) | **NOT VERIFIED** | NOT VERIFIED | **B** | Named under pressure, but not proven to have produced a pre-code alternative or changed a first draft. |
| `ask-matt` | User linked/named it in Wild and Tranquil task messages; transcript shows path/instruction text. | Yes (Wild, Tranquil) | **NOT VERIFIED** | NOT VERIFIED | **B** | Naming a critique Skill did not create a recorded design decision or an independent gate. |
| HyperFrames / GSAP / `imagegen` | User named these in the Wild/Pure “make it 9.5” requests. This audit found no task evidence of a completed historical read or a mapped motion/asset result. | Yes (selected later turns) | **NOT VERIFIED** | NOT VERIFIED | **B** | These were escalation labels, not evidenced production controls. This audit makes no claim that generated assets were used. |
| Playwright screenshot capability | Actual task tool logs show Playwright CLI opening the published Wild and Lavella pages at 1440×900 and saving screenshots; local `.playwright-cli` folders also exist for several versions. A `playwright` Skill complete-read is not proven. | Tool used (Wild, Lavella) | **NOT VERIFIED** | Yes: screenshots / viewport capture | **E** | Render capture occurred, but it did not block later direction/fidelity feedback. It was a technical/render check, not independent visual acceptance. |

### Breakpoint distribution

| Breakpoint | Count | Basis |
| --- | ---: | --- |
| A — not called | 3 core Skill families | `design-taste-frontend`, `motion-design`, `media-use`: no historical call/read record in any of the five production threads. |
| B — named/mandatory but no verifiable complete read or pre-code effect | 4 named/mandatory capability entries | `website-delivery-sop`, `ui-ux-pro-max`, `ask-matt`, HyperFrames/GSAP/`imagegen` group. |
| C — read but no pre-code artefact | 0 proven | No complete historical read evidence means this category cannot be asserted. |
| D — artefact exists but not mapped to code/assets | 0 proven as a Skill claim | Several late Design Intent / Ledger files exist, but task evidence cannot prove their relation to the first code. Marked `NOT VERIFIED`, not inflated into D. |
| E — implementation/render check completed but did not stop failure | 1 capability family | Playwright screenshot capture for Wild/Lavella; subsequent user/independent rejections establish the non-blocking result. |
| NOT VERIFIED | All other Skill × case combinations | Absence of a task receipt is not proof of absence; this audit retains the uncertainty. |

## Root-cause funnel

```text
Task card
  ├─ customer facts and “9.5” aspiration are named
  └─ no compact, reviewable decision package required before code
          ↓
Skill invocation
  ├─ core anti-template / motion / media Skills not evidenced as called
  └─ later named Skills lack a read-to-output trace
          ↓
Pre-code artefacts
  ├─ later Design Intent, Fidelity Map, Image Ledger, QA files exist
  └─ first-draft timing and approved alternative selection often NOT VERIFIED
          ↓
HTML/CSS/assets mapping
  ├─ real facts/images appear late or are misplaced/missing
  └─ shared beauty-layout instincts remain: equal sections, generic hierarchy,
     hard joins, source-like or cross-Demo similarity
          ↓
Acceptance
  ├─ screenshots/Owner PASS prove render state only
  └─ user or independent reviewer still finds F1–F4 → rework loop
```

### Contribution-ranked diagnosis

1. **派单不清 / pre-code decision package absent — highest contribution.** “Make it 9.5” and a general asset instruction did not compel a chosen direction, asset coverage map, content hierarchy, or rejection test before code.
2. **Skill 没用或无法证明已用 — high contribution.** The required design/motion/media Skills are not evidenced in the original production records; late generic Skill naming is not a design workflow.
3. **验收失效 — high contribution.** Render screenshots and Owner claims passed while direction, fidelity and composition faults remained visible to the next reviewer.
4. **Skill 用了没落地 — medium contribution, but only partly provable.** Later Design Intent/Ledger/QA artefacts show the intended controls eventually existed; their first-draft influence is not established.
5. **制作能力 / composition execution — medium contribution.** Repeated hard joins, card-like grouping, hero handling and hierarchy corrections demonstrate an execution gap, but it is amplified by the missing direction gate.
6. **SOP 缺失 — low contribution.** Existing project rules already instruct direction-level redo, fidelity and independent QA. The evidence supports execution/traceability failure, not a conclusion that no rule existed.

## Minimum six gates for the next Cold Demo

These are proposed controls only; they do not modify `PROJECT_CORE.md`, `AGENTS.md`, or any SOP.

1. **Asset-and-fact coverage card before HTML:** logo, every available real scene/equipment/work image, services, location, trust/contact/booking facts each marked `use`, `do not use`, or `unavailable`; an unapproved AI/stock replacement for an available official asset is a stop.
2. **One-line Design Read + three dials + one recognition test:** write the intended customer decision, variance/motion/density choices, and what would make the page unmistakably this business. A reviewer must approve it before coding.
3. **Two materially different composition directions:** show section order/hero/asset placement in text or low-fi blocks; select one and record why the other was rejected. “Change colour/spacing” is not a second direction.
4. **Map the chosen direction to implementation:** for each hero, service/trust section and Bottom 40, record exact source asset/fact, CSS/layout role, and one thing forbidden from becoming a generic template.
5. **Direction red-team before polish:** compare the draft against the most recent two same-industry Demos using the recognition test, asset card, and page order. If it can be renamed or is source-like, stop and restart the direction—no P2 patch queue.
6. **Independent two-minute acceptance—not Owner self-QA:** a different reviewer checks F1–F4 against the five cards above. Screenshot/console/overflow checks remain necessary evidence, but cannot alone PASS a Demo.

## Closure

The reason these Demos repeatedly returned is straightforward: **the team was attempting to polish an unproven direction.** The next cycle must spend its first minutes deciding and proving customer-specific direction and asset coverage, then let implementation and technical QA verify that decision—not invent it after the user objects.
