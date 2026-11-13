# UK full rescreen merge preflight

检查日期：2026-08-31  
范围：`part_a/PART_A_AUDIT.csv`、`part_b/PART_B_AUDIT.csv` 与对应 CHECKPOINT。  
规则基线：`PROJECT_CORE.md` — Screening Core v1.1.4。

## 结论

**条件通过 — 可按 UKR ID 规范化合并；不可按行号合并，也不可把 Checkpoint 当作 CSV 的替代证据。**

## 全池守恒

| 输入 | 行数 | ID 范围 | 唯一性 | Final Status |
|---|---:|---|---|---|
| Part A | 240 | UKR-001–UKR-240 | 240 unique；无重复 | REJECTED 238；READY 2 |
| Part B | 239 | UKR-241–UKR-479 | 239 unique；无重复 | REJECTED 236；HOLD 2；READY 1 |
| 合计 | **479** | **UKR-001–UKR-479** | **479 unique；无缺失/多余** | **REJECTED 474；HOLD 2；READY 3** |

Part B 原始行顺序不是 ID 升序，合并必须使用主键 `id`，完成后再按 UKR ID 排序和复核。

## Checkpoint 对照

- Part A checkpoint 与 CSV 一致：001–240、240 rows、READY `UKR-007`/`UKR-099`、HOLD 0、REJECTED 238。
- Part B checkpoint 的 Part-complete 范围与 239/239 COMPLETE 一致；其“Latest batch HOLD: none”不是全 Part B 状态计数。CSV 全 Part B 明确含 HOLD `UKR-439`、`UKR-440`。
- Part B checkpoint 所称较早 READY `UKR-260` 与 CSV 一致，且只是 `READY FOR INDEPENDENT ACCEPTANCE`，不是 Demo 授权。

## READY / HOLD 精确 ID

- READY：`UKR-007`, `UKR-099`, `UKR-260`
- HOLD：`UKR-439`, `UKR-440`
- 以上均不构成 Candidate Independent Acceptance、Demo、外联或发送授权。

## 邮箱 Gate 与评分

显式邮箱失败必须按字段值精确识别为 `FAIL — PUBLIC BUSINESS EMAIL = FAIL — DO NOT CREATE DEMO`（Part A 3 行，Part B 17 行，共 20 行）。这 20 行的评分均为 `NOT SCORED`（Part A `NOT SCORED`；Part B `NOT SCORED — EMAIL FAIL`）。未发现邮箱失败行被赋予评分或 Priority。

注意：Part B 中 `NOT APPLICABLE — H0 FAIL`、`NOT APPLICABLE — WEBSITE STATUS HOLD` 等文本虽包含 FAIL/HOLD 语义，但不是邮箱 Gate FAIL，不得混入邮箱失败计数。

## 关键异常

1. Part A 为 36 个字段的宽表；Part B 为 20 个字段的 snake_case 窄表，不能直接追加后宣称同一 schema。
2. Part A 使用 `UKR ID`、`Business`、`Final Status` 等标题；Part B 使用 `id`、`business`、`final_status`。
3. Part A 将 H1–H6 拆列并提供四个分项分数；Part B 只有复合 `h1_h6` 与原始 `score` 文本。不得反推缺失单项。
4. Part B 缺少独立 `Email Attribution Reason`、`Asset & Fact Sufficiency`、四个分项分数、`Screening Qualification`、`Demo Readiness` 等字段；canonical 输出必须留空或 `UNKNOWN`。
5. Part B 的唯一已评分行是 `UKR-260`，原始 score 为 `76/100 (Presentation 25; Purchase Value 18; Asset & Facts 17; Trading/Quality 16)`；必须保留 raw score，不擅自改写为 Part A 的分列分数。

## 合并准入与停止条件

允许：按 `UKR ID`/`id` 主键映射，保留 source part、source file、source row、raw status、raw score 和 normalization notes。  
必须：合并后再次验证 479 行、479 unique IDs、完整区间、状态守恒、READY/HOLD ID 与邮箱失败不评分。  
禁止：按行号拼接、Checkpoint 覆盖 CSV、补造 Part B 缺字段、把 READY 改为 qualified/authorized、联网、外联、Demo、部署、发送、安装、删除或 Git 外写。
