# Canonical schema for UK rescreen merge

主键：`UKR ID`，标准格式 `UKR-001`–`UKR-479`。合并方式：按主键映射，不按行号。

## 字段映射

| Canonical field | Part A | Part B | 处理规则 |
|---|---|---|---|
| UKR ID | `UKR ID` | `id` | 必填、唯一、保留标准值 |
| Business / Location / Industry | 同名列 | `business` / `location` / `industry` | 原值 |
| Prospect Source URL | `Current sources attempted` | `legacy_source_url` | 保留 raw；legacy 不当作当前证据 |
| Verified / Research Date | `Research Date` | `verified_date` | 原值 |
| Current Research Status | `current_research_status` | 同名列 | 原值 |
| H0 | `H0` | `h0_status` | 原值 |
| H0 Evidence | 日期 + URL + attribution 三列 | `h0_evidence` | 保留 Part A raw 拆分，不合成人工事实 |
| Track / Website Evidence | `Track` / `Website Evidence` | `website_track` / `website_evidence` | 原值；H0 fail 的 NOT APPLICABLE 不改成 N/W |
| Public Business Email Gate | 同名列 | `public_business_email_gate` | 显式邮箱 FAIL 必须不评分 |
| Email Address / Source URL | 同名列 | `email_address` / `email_source_url` | 空值留空；不猜测、不组合 |
| Email Attribution Reason | 同名列 | 缺失 | Part B 留空/`UNKNOWN` |
| H0.5 | `H0.5` | `h0_5_status` | 原值 |
| Asset & Fact Sufficiency | 同名列 | 缺失 | Part B 留空/`UNKNOWN` |
| H1–H6 | 六个独立列 | `h1_h6` 复合值 | 不从复合文本拆造单项 |
| 四个评分分项 | 四个独立列 | 缺失；仅有 `score` raw 文本 | 不反推，留空/`UNKNOWN` |
| Prioritisation Score Raw | `Prioritisation Score` | `score` | 原值；另可设 parsed numeric，仅在格式可安全解析时使用 |
| Priority | `Priority` | `priority` | 原值，不把 SELF-QA/READY 变成授权 |
| Screening Qualification | 同名列 | 缺失 | Part B 留空/`UNKNOWN`，不从 final_status 推断 |
| Demo Readiness | 同名列 | 缺失 | Part B 留空/`UNKNOWN` |
| Final Status | `Final Status` | `final_status` | 原值，保留 Part B 的 READY 长状态与 HOLD |
| Reason / Notes | `Reason / stop point` | `research_notes` | 原值 |

## Canonical-only fields

规范化表应保留以下字段；Part B 未独立提供的值只能为 `UNKNOWN` 或空值，不能从项目默认报价、Checkpoint、legacy URL 或其他候选推断：

`Target Market`, `Current Offer Currency`, `Current Offer Price`, `Current Offer One-page Purchase Thesis`, `Target Ratio`, `Actual Qualified Ratio`, `Deviation Reason`, `Current Presentation Adequacy`, `Before/After Commercial Contrast`, `Track-appropriate One-page Reason`, `Honest Cold Demo Feasibility`, `Commercial One-page Opportunity`, `Website Relevance to Customer Acquisition`, `Growth Intent Evidence`, `Industry Economic Leverage`, `Business-specific Website Leverage`, `Evidence Confidence`, `Demo Effort`, `Actual Demo Minutes`, `Demo Created`, `Outreach Sent`, `Delivered`, `Replied`, `Positive Reply`, `Serious Discussion`, `Asked Price`, `Proposal Sent`, `Deposit Paid`, `Final Sale`, `Final Price`, `Reason Lost`。

项目级英国映射仍由 `PROJECT_CORE.md` 权威维护；本 schema 不把项目级映射静默写入候选记录，也不生成购买 thesis。

## Provenance fields

建议追加：`source_part`, `source_file`, `source_row_number`, `raw_status`, `raw_score`, `normalization_notes`。这些字段只用于审计回溯，不改变候选结论。
