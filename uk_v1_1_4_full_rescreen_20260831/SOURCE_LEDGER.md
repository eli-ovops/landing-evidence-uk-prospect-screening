# Source ledger

| source | rows | role |
|---|---:|---|
| `part_a/PART_A_AUDIT.csv` | 240 | UKR-001–UKR-240；宽表原始证据 |
| `part_b/PART_B_AUDIT.csv` | 239 | UKR-241–UKR-479；窄表原始证据，缺失字段不补造 |
| `INDEPENDENT_ACCEPTANCE.csv` | 3 | UKR-007/099/260 的独立验收状态 |
| `INDEPENDENT_ACCEPTANCE.md` | — | 独立验收理由与边界 |
| `MERGE_PREFLIGHT.md` | — | 全池守恒、schema 与邮箱评分预检 |
| `CANONICAL_SCHEMA.md` | — | 字段映射与 UNKNOWN 规则 |

## Provenance

最终全池 CSV 保留 `source_part`、`source_file`、`source_row_number`、raw status/score（分别映射到 canonical 字段）及 `normalization_notes`。Part B 的 `h1_h6` 与 `score` 不拆造为 Part A 的独立字段。

## State semantics

- `pool_self_qa_status`：原始分表池内状态。
- `independent_acceptance_status`：仅三家独立验收结果；其他候选为 `NOT INDEPENDENTLY REVIEWED`。
- `new_demo_candidate`：仅 UKR-007/UKR-260 为 YES；YES 仍不构成 Demo Authorization。
- UKR-099 单独进入 HOLD.csv，原因是 history/already-contacted；不得与 UKR-439/440 的证据不足 HOLD 混淆。
