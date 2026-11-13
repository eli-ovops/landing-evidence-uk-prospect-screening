# 最终验收阻断修复记录｜2026-08-22

## 状态

**READY FOR FINAL RE-ACCEPTANCE — NOT FINAL ACCEPTANCE PASS。** 本记录由整改 Owner 编写，不能代替新的独立验收。

## 已修复的三个阻断

1. B 的样本输入已从国家级、不可追溯 rate 改为行级可审计映射。`ACTIONABLE_CLASSIFICATION.csv` 以 `country + discovery_order + business_name` 覆盖主样本 120/120 行。方法见 `METHODOLOGY.md`：仅 `VALID + static_fit=YES + 直接复核公开业务邮箱` 为 actionable=YES；其余（含 UNKNOWN）为 NO，理由逐行记录。没有从目标国家 rate 或结论反填。
2. 历史 `audit/FINAL_INDEPENDENT_ACCEPTANCE.md` 已在顶部标记为 `SUPERSEDED HISTORICAL FAILURE` 并指向本次复验；其旧 UK 70.8、Singapore 62.6 / eligible Runner-up 仅保留为当时失败记录，非当前结论。
3. `SOURCES.md` 已从“宏观修复进行中”更正为“宏观/法规证据修复已完成，READY FOR RE-ACCEPTANCE”。

## B 与总分复算结果

| 国家 | B 分子/分母 | actionable rate | B raw | B weighted | 总分 | 资格 |
|---|---:|---:|---:|---:|---:|---|
| United States | 6/20 | 0.300 | 7.20 | 12.96 | 86.56 | FAIL: static fit |
| United Kingdom | 8/20 | 0.400 | 6.40 | 11.52 | 75.77 | PASS / ELIGIBLE |
| Singapore | 10/20 | 0.500 | 3.20 | 5.76 | 64.11 | FAIL: E |
| Malaysia | 8/20 | 0.400 | 4.60 | 8.28 | 63.68 | FAIL: E |
| Ireland | 5/20 | 0.250 | 2.20 | 3.96 | 55.01 | FAIL: email rate, E |
| New Zealand | 3/20 | 0.150 | 1.80 | 3.24 | 53.14 | FAIL: static fit, E |

`COUNTRY_EVIDENCE.csv` 的六条 B 行记录上述 rate、公式、raw 和 weighted 值；A–I 保持 54 行。逐项加权分求和与评分卡一致。资格硬门重算不因 B 改变：Winner=United Kingdom；没有 eligible Runner-up。

## 待独立复验

独立验收 Owner 仍须在不依赖本整改自述的前提下：验证 120 条映射与主样本一对一、从映射复算六国 B 和九项总分、核对 A–I 54 行及硬门，并确认历史旧结论不会在“现行结论”语境被误读。完成前不得宣告最终验收 PASS，也不产生外联、部署、账号、付款或发送授权。
