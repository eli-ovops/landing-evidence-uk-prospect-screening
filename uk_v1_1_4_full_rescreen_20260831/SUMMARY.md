# UK full rescreen v1.1.4 — final summary

检查日期：2026-08-31。来源为两份原始分表与 `INDEPENDENT_ACCEPTANCE.csv/.md`；未联网、未外联、未制作 Demo、未部署、未发送、未安装、未删除其他证据。

## Canonical pool

- 原池：**479 = REJECTED 474 + HOLD 2 + SELF-QA READY 3**。
- IDs：UKR-001–UKR-479，479 行，479 unique，无缺失/多余。
- Pool HOLD：`UKR-439`, `UKR-440`。
- Pool SELF-QA READY：`UKR-007`, `UKR-099`, `UKR-260`。

## Independent acceptance

- 独立验收：3 家 = **2 ACCEPT + 1 HOLD (history/already-contacted)**。
- ACCEPT：`UKR-007`, `UKR-260`。
- HOLD（历史/已触达控制，不等同证据不足）：`UKR-099`。
- 新增可做 Demo：**2**（`UKR-007`, `UKR-260`），仍需具体用户 Demo Authorization；不等于已制作或已授权外联。

## Gate integrity

- 显式邮箱 Gate FAIL：20 行；均保持未评分。
- Part B 缺失字段保持空/UNKNOWN；未从 checkpoint、legacy URL、英国项目级报价或其他候选推断。
- `pool_self_qa_status`、`independent_acceptance_status`、`new_demo_candidate` 在最终 CSV 中独立表达。

## Placeholder replacement

目标目录中已有的同名早期 placeholder 已由本次 current canonical 输出原子替换；其他证据文件未删除或覆盖。
