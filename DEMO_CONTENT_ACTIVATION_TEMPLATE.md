> 当前按 PROJECT_CORE.md §0A Full Replacement v1.0：US$99 / US$199完整替代，必须附替代SOP §7全量功能矩阵，禁止仅核心切片。

# Demo Content Activation Template

> 用途：作为 `PRE_CODE_DECISION.md` 内的 `Research-to-Demo Activation Matrix` 与编码后覆盖表的最小字段模板。它是内部证据，不得被复制到客户可见页面、邮件、截图或公开包。只填与该 Demo 有关的研究项；不得用“素材不足”或笼统风险留空。

## 1. 使用边界

日常以 Core 14.3F 的 `tools/demo-workflow/cli.mjs init` 从具体 active 页面与既有 ASSET/Activation/情报初始化唯一 `contract.json`。本文表格是字段语义，不要求重复手填；Matrix、baseline、资产/事实覆盖从 contract 生成摘要。独立来源 baseline/UNMAPPED 必须保留，不能仅由当前 DOM 生成天然全绿覆盖。Owner 负责补源、适用性与具体处置，用户无需写 JSON。

JSON 对应：`client/owner/activeVersion/currentEvidence/siteRoot/entry` 定位唯一版本；`sourceFiles` 保存原始资料路径/hash，`sources` 保存 A/B/C/UNKNOWN、URL/平台/日期/归属；`assets` 保存 ID、原图/派生图路径与 hash、role/focus、REAL/CONCEPT/UNKNOWN、rights；`items` 保存 Item/Baseline ID、factState、sourceId/assetId、`mappingStatus`（`UNCONFIRMED` 或 Owner 复核后的 `OWNER_CONFIRMED`）、applicability YES/NO/UNKNOWN、既有六种 disposition、section/selector（可双视口 selector）、关键 text/href/promise、具体 reason；`baseline` 保存来源位置/原文、唯一处置、itemIds 与 sourceIds。多对一 consolidate 允许，但须有具体理由；未映射固定 UNMAPPED。不可通过重复 ID、空理由或全排除伪造 100% coverage。

`run/resume` 生成机械结果、短摘要与双视口证据；局部 implementation/content 缺失原版本修+重验，真实 brand/IA/storyboard 失败才重选方向。独立 review 引用同一 contract/页面代码/图片及证据 hash，工具不自授 Client-showable。`resume` 不代表 scheduler；真实性、A/B/C 权利、商业量表、角色独立和外部授权保持原有边界。

- 适用：所有新 Demo，以及当前未发送/进行中的 Demo；历史已发送内容仅在重用、重截图或再次外联时重验。
- 目标：把研究项转成页面的真实内容、Proof/location/visit 输入或合格概念视觉；先解决内容激活，再调整 CSS/动效。
- 不构成：客户素材授权、部署、公开发布、发送、登录、上传、采购或正式交付授权。
- 客户可见边界：不得显示本 Matrix、来源 URL、研究日期、权利/授权状态、内部风险、hash、prompt、AI/概念治理标签或 H0 状态。

## 2. Source-grade receipt

| Asset / item ID | Grade | Hosting platform | Business-attribution evidence | Source URL | Retrieved date | Original file / hash | Internal rights note | Eligible current use | Recheck before deploy / transfer |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A-01 | `A — OFFICIAL CUSTOMER-PUBLISHED` / `B — BUSINESS-ATTRIBUTABLE THIRD-PARTY HOSTED` / `C — UNATTRIBUTED / THIRD-PARTY / REVIEWER CONTENT` |  |  |  |  |  |  | DIRECT / REFERENCE / CONCEPT REPLACEMENT | yes / no |

- A：官网或官方社媒公开发布；登记来源、日期、原文件/hash、版位。
- B：可明确识别为商户、Owner 或 management 上传/管理页面提供；必须记录归属依据，内部标记 `BUSINESS-ATTRIBUTABLE THIRD-PARTY HOSTED`。不等于客户授权、客户自有版权或最终可转让。
- C：顾客上传、摄影师/水印、转载、上传者或权利不明内容；除非另有可定位许可/授权，不得直接使用，只能作设计参考或概念替代。

## 3. Research-to-Demo Activation Matrix（编码前）

每个发现项占一行；同一项只能选择一个 `Activation Disposition`。

| Item ID | Research category | Observed fact / source claim / inference / UNKNOWN | Source-grade / URL + retrieval date | Value to owner or visitor | Activation Disposition | Planned section + content role | Planned copy / visual treatment | Time-sensitivity check | Image Ledger / Asset ID | Specific exclusion reason |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R-01 | Logo / image / review-feedback / tip / location-visit / hours / menu-service-scene / team-story / award-credential / CTA / other |  |  |  | `DIRECT USE` / `FACT/PARAPHRASE USE` / `LOCATION/VISIT USE` / `CONCEPT VISUAL REPLACEMENT` / `TIME-SENSITIVE VERIFY/REPHRASE` / `EXCLUDE` | Hero / services / process / Proof / location-visit / FAQ / CTA / Closing |  | Verified current / stable rephrase / not applicable |  | Required only for `EXCLUDE` |

### 3.1 Disposition checks

- `DIRECT USE`：只用于 A 级、已具备归属依据的 B 级，或稳定且准确的业务事实。
- `FACT/PARAPHRASE USE`：评价、反馈、tips 或 C 级内容仅作准确短引/释义或设计洞察；保留归属与语义核对，不复制 C 级图片或把来源主张升级为事实。
- `LOCATION/VISIT USE`：地点、区域、到店、停车、路线、预约和现有 CTA 转为 location、visit、map、FAQ、Proof 或 CTA 的实际行动信息。
- `CONCEPT VISUAL REPLACEMENT`：没有 A/B 级可用图时，以已核验行业、服务、地域和气质为约束生成原创概念视觉；不得暗示真实门店、员工、项目、评价或结果。
- `TIME-SENSITIVE VERIFY/REPHRASE`：菜单、价格、库存、daily/weekly specials、营业时间和活动先复核当前状态；不能复核时改为稳定表达或概念视觉，不写具体时效断言。
- `EXCLUDE`：必须具体说明不可归属、权利/隐私风险、时效失真或经证实已过时、重复或错误；不得写“未核验”“担心风险”作为唯一理由。

## 4. Coverage summary（PRE-CODE GATE 必填）

| Metric | Count |
| --- | ---: |
| Total researched items |  |
| DIRECT USE |  |
| FACT/PARAPHRASE USE |  |
| LOCATION/VISIT USE |  |
| CONCEPT VISUAL REPLACEMENT |  |
| TIME-SENSITIVE VERIFY/REPHRASE |  |
| EXCLUDE |  |
| Disposition total |  |

`Disposition total` 必须等于 `Total researched items`。列出每个高价值可用项的计划 section；未落位时写 Item ID 与具体排除理由。

## 4A. Replacement-ready baseline and action-path coverage（必填）

适用 [Replacement-ready Demo Gate SOP](REPLACEMENT_READY_DEMO_GATE_SOP.md)。先从客户当前官网、官方社媒、主要目录或地图页抽取高价值展示项与动作路径；每项必须关联本 Matrix 的 `Item ID`，使「现有页面 → 研究项 → 最终 DOM/链接 → 双视口」可一一追溯。

| Baseline ID | Current source / URL | Existing content or action | Visitor value | Linked Item ID | Disposition | Planned section + selector | Final selector / href | Desktop | Mobile | Specific exclusion / consolidation reason |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| B-01 |  | Logo / real image / services / review / map / contact / social / form / booking / ordering / other | High / Medium / Low | R-01 | `CARRY` / `CONSOLIDATE` / `EXTERNAL-LINK` / `EXCLUDE` |  |  | PASS / FAIL | PASS / FAIL | Required for `EXCLUDE` / `CONSOLIDATE` |

```text
High-value baseline disposition: 100% / FAIL
Unexplained missing logo, image, map, social, contact or CTA: 0 / FAIL
Primary existing action path retained or explicitly replaced: PASS / FAIL
REPLACEMENT-READY PRE-CODE: PASS / FAIL / BLOCKED
REPLACEMENT-READY FINAL: PASS / FAIL / BLOCKED
```

静态 Demo 不得复制或假造服务端表单、库存、支付或预约。现有真实第三方表单/预约/点餐路径应保留真实外链；不得用电话/email降级替代表单/预约/交易；必须按替代SOP §7验证等价结果，未核验为BLOCKED。

## 5. Post-code actual-use coverage and bidirectional check

| Item ID | Planned section | Actual section / file / selector | Final content or asset | Forward check: research item → DOM / visual / exclusion | Reverse check: page assertion or asset → source / concept status | Desktop 1440×900 visible | Mobile 390×844 visible | Difference / corrective action | Reviewer |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R-01 |  |  |  | PASS / EXCLUDE | PASS / REWORK | PASS / N/A | PASS / N/A |  |  |

## 6. Independent visual review prompt

在最终两个视口分别确认：

1. A/B 级客户真实图片，或符合业务约束的原创概念替代，是否真实可见并形成全页视觉叙事？
2. 评价/反馈/Proof、tips、地址/location/visit 与核心服务事实是否在适用时可见、准确并推动购买？
3. 是否存在研究项只留在台账、而页面仍空、泛化或模板化的情况？
4. 若页面“太简单/不像客户”，是否先修复内容激活与实际落位，再评估布局、CSS 或动效？

```text
Activation coverage: PASS / FAIL
Matrix total equals disposition total: PASS / FAIL
All high-value usable items mapped or specifically excluded: PASS / FAIL
Forward check complete: PASS / FAIL
Reverse check complete: PASS / FAIL
Desktop 1440×900 activation review: PASS / FAIL
Mobile 390×844 activation review: PASS / FAIL
Reviewer / date:
Remaining content-activation defects:
```

## 完整替代验收汇总

RULESET: Full Replacement v1.0
完整功能矩阵路径（替代SOP §7）：
原站有效内容总数/承接数：
原站功能总数/等价通过数：
必要功能UNKNOWN/FAIL数量：
五项前后改进证据：
关闭旧站后的依赖验证：
部署、第三方费用、账户及转让前提：
独立Reviewer及同版本证据：
FULL REPLACEMENT FIT / REPLACEMENT-READY FINAL：
