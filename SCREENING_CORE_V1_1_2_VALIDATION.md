# Screening Core v1.1.2｜Validation

日期：2026-08-29  
Validation Version: `v1.1.2`

## Scope and method

仅检查 `AGENTS.md`、`PROJECT_CORE.md`、`SCREENING_CORE_V1_1_CHANGELOG.md` 与本文件。未联网、未安装、未构建、未修改客户或筛选历史目录，未执行外联或其他业务动作。

## Current-authority checks

| Check | Result | Evidence |
|---|---|---|
| Three current-authority files state v1.1.2 | PASS | `AGENTS.md`、`PROJECT_CORE.md` 与 changelog 新增的 v1.1.2 section 都指向 `Screening Core v1.1.2`。 |
| Active discovery preference is 75/25 | PASS | `AGENTS.md` 与 `PROJECT_CORE.md` 明确 `Track N — 75% / Track W — 25%`，并明确不是结果配额。 |
| 60/40 only remains as history | PASS | `PROJECT_CORE.md` 与 `AGENTS.md` 无活跃 60/40；changelog 的 60/40 仅在标记为历史的 v1.1/v1.1.1 条目中。 |
| H0.5 contains all five commercial-replacement evidence elements | PASS | `PROJECT_CORE.md` H0.5 同时要求 Current Presentation Adequacy、Current Offer Replacement Thesis、Before/After Commercial Contrast、Replace-vs-Patch Reason、Honest Cold Demo Feasibility。 |
| Track W adequate presentation fails; patch-only issues cannot pass alone | PASS | H0.5 固定 Track W “基本完成”即 FAIL，并列明一般 SEO/性能、Cookie、字体/颜色/间距、导航、CTA、轻微链接与局部移动 Bug 不能单独 PASS。 |
| Track N no website is not automatic PASS | PASS | H0.5 要求说明从平台/目录/社媒升级为独立单页的具体理解、信任或询盘价值。 |
| H0.5 FAIL prohibits scoring | PASS | `Website Opportunity / Commercial Replacement Increment — 30` 明定 H0.5 FAIL 不得由评分覆盖；H1–H6 与 Priority A/B 仍要求 H0.5 PASS。 |
| Priority A and independent acceptance require replacement reasoning | PASS | Priority A 要求 Current Offer Replacement Thesis、HIGH 对比和非 patch-only 理由；独立验收须复核五项证据并拒绝“现站已经够用”或美观/技术修补候选。 |
| Old candidates without specific Demo authorization must be rechecked | PASS | `PROJECT_CORE.md` 与 `AGENTS.md` 要求进入 Demo Authorization 前按 v1.1.2 重验，历史 Priority A/B 分数不得直接续用。 |
| No problem-count or rework-count gate introduced | PASS | H0.5 明定不用问题数量、返工次数或一般 Website Pain 替代商业判断。 |
| Product, email, outreach and Demo-authorization boundaries unchanged | PASS | 未修改 AU$800 静态单页范围、Public Business Email 硬门、Demo 授权或外联授权；H0.5 只收紧资格判断。 |
| Cross-country screening fields use no mixed fixed currency | PASS | 通用字段统一为 Target Market、Current Offer Currency、Current Offer Price、Current Offer Replacement Thesis；H0.5、评分、Priority 与独立验收不再以 AU$800 或 £600 作为通用 Thesis 字段。 |
| Confirmed market mapping is explicit | PASS | Australia = AU$800；United Kingdom = £600。 |
| Unconfirmed market offer remains UNKNOWN | PASS | 其他国家的 Current Offer Currency 与 Current Offer Price 必须写 UNKNOWN，不得猜测、换算或自行定价。 |
| Priority title matches question count | PASS | 标题为 `Priority A / B 强制七问`，并列出 1–7 七项判断。 |

## Mechanical checks to run

```zsh
rg -n 'Screening Core v1\.1\.1|60/40|60% / Track W — 40%|Meaningful Demo Opportunity' AGENTS.md PROJECT_CORE.md
rg -n 'Screening Core v1\.1\.2|Track N — 75% / Track W — 25%|Meaningful Commercial Replacement Opportunity|Current Offer Replacement Thesis|Current Offer Currency|Current Offer Price|Before/After Commercial Contrast|Replace-vs-Patch Reason' AGENTS.md PROJECT_CORE.md SCREENING_CORE_V1_1_CHANGELOG.md
sed -n '/### H0\.5 \/ Gate 1/,/### H1–H6/p; /### 100 分 Prioritisation Score/,/### Demo Effort/p' PROJECT_CORE.md | rg -n 'AU\$800|£600 Replacement Thesis' && exit 1 || print 'PASS: active H0.5 and scoring fields contain no mixed fixed-currency thesis'
rg -n '^### Priority A / B 强制七问$|^[1-7]\. `' PROJECT_CORE.md
rg -n '^#{1,6} |^[-*] |^\|.*\|$' AGENTS.md PROJECT_CORE.md SCREENING_CORE_V1_1_CHANGELOG.md SCREENING_CORE_V1_1_2_VALIDATION.md
find . -maxdepth 1 -type f \( -name 'AGENTS.md' -o -name 'PROJECT_CORE.md' -o -name 'SCREENING_CORE_V1_1_CHANGELOG.md' -o -name 'SCREENING_CORE_V1_1_2_VALIDATION.md' \) -print
```

## Result

`SCREENING CORE v1.1.2 CONSISTENCY = PASS`

Boundary note: actual runtime model/effort is `UNKNOWN`; it was not inferable from the available task context. This does not alter the document-only validation result.
