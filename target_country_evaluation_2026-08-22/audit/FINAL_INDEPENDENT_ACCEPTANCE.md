# SUPERSEDED HISTORICAL FAILURE — 六国国家评估｜最终独立验收

> 本文件是 2026-08-22 宏观/法规修复及 B 行级 actionable 修复**之前**的历史独立验收失败记录，原结论和当时数字均保留以维持审计真实性；不得当作当前结论。当前整改状态与复验范围见 `audit/FINAL_ACCEPTANCE_BLOCKER_REMEDIATION.md`、`SYNTHESIS_VALIDATION.md` 及 `TARGET_COUNTRY_SCORECARD.md`。当前状态为 `READY FOR FINAL RE-ACCEPTANCE`，不是最终独立验收 PASS。

验收日期：2026-08-22
角色：最终独立验收 Owner。仅进行公开/本地只读审计；未读取执行会话历史，未修改主文件、样本或评分文件。

## 最终结论

**FINAL INDEPENDENT ACCEPTANCE FAIL**

失败并非因为六国没有全部通过国家硬门。按本轮定义，四国硬门 `FAIL` 是合法的筛选结果，且样本审计本身已完成；主样本也能从符合硬门的国家中选出 UK 为 Winner、Singapore 为唯一合格备选。唯一阻断是宏观/法规原始分缺少可独立验收的证据—量纲—分段评分链，故不能确认 A–I 原始分、总分及最终国家选择是由当前、直接支持的事实产生。

## 已独立通过的项目

### 1. 主样本与方法

- `MERCHANT_SAMPLE.csv` 有 120 条数据行、20 字段；六国各 20 条，四行业各 5 条。全局商户名无重复；各国至少 3 个城市；120/120 为 `VALID`。
- 120/120 H0 URL 与身份/城市字段非空，全部 H0 日期在 `2026-05-24..2026-08-22`。18 条 Track N/no-owned-site 均记录三检索面；102 条 owned-site 均记录 1440×900 与 390×844 观察。
- 已验证邮箱均有直接来源 URL；`UNKNOWN` 只作为保留的访问/可判定状态，未被当作 `NO` 或按 0 分。
- `METHODOLOGY.md` 的本轮四行业、中性冻结抽样、先冻结后审计、邮箱/官网/static fit 不作替换理由、失败访问保留以及 `VALID` 非销售合格的定义，均与主样本和各国来源账本的抽查一致。
- 六国子样本与主 CSV 对应国家的 20 行逐行完全一致。

### 2. US/MY 日期整改

`H0_DATE_REMEDIATION.md` 与 `US_MY_REMEDIATION_RECHECK.md` 的七项当前行均可在主样本定位，且日期/状态一致：

- US：Red Ridge Receptions `2026-05-26`、Stan's Heating Air & Plumbing `2026-08-12`、Creative Cuts `2026-08-21`；
- Malaysia：LYLA Beauty Lounge `2026-08-22`、Skin Oria Beauty `2026-08-15`、Breeze at Lake Ville `2026-06-13`、FARNIESHA BEAUTY SPA `2026-08-15`。

上述行均为 `VALID`，H0 URL 和身份/城市证据非空。整改与独立复验结论一致。

### 3. 样本指标、算术与硬门

从主样本重新统计的邮箱数、YES/NO/UNKNOWN、Track N/W、actionable 数和可判定 static-fit 比率，与 `COUNTRY_EVIDENCE.csv` 六行全部一致：

| 国家 | 邮箱 | YES/NO/UNKNOWN | N/W | actionable | 可判定 YES 比率 |
|---|---:|---|---|---:|---:|
| United States | 12/20 | 10/9/1 | 1/19 | 0/20 | 10/19 |
| United Kingdom | 9/20 | 18/0/2 | 5/15 | 5/20 | 18/18 |
| New Zealand | 14/20 | 8/7/5 | 3/17 | 3/20 | 8/15 |
| Singapore | 15/20 | 11/1/8 | 3/17 | 0/20 | 11/12 |
| Ireland | 5/20 | 20/0/0 | 0/20 | 1/20 | 20/20 |
| Malaysia | 8/20 | 14/1/5 | 6/14 | 7/20 | 14/15 |

- B 与 D 的样本中间值及公式结果均正确：`B=.60*Bmacro+.40*(10*actionable/n)`，`D=.50*Dmacro+.50*(10*verified_email/n)`。
- `COUNTRY_EVIDENCE.csv` 的九个加权贡献逐项相加正确（以未展示的中间精度后再四舍五入）。UK 为 **70.8**；Singapore 为 **62.6**。因此，文件内部并不存在 Singapore `63.3` 的支持值。
- 门槛结论与样本相符：UK 与 Singapore 为 `ELIGIBLE`；US/NZ 因可判定 static fit 未达 60% 而失败；Ireland 因邮箱率和 E；Malaysia 因 E。四国淘汰不反向否定样本审计完成。
- `TARGET_COUNTRY_SCORECARD.md` 的 Winner 为 UK（70.8）；总分次名是 US（69.8，未合格），而 Singapore（62.6）被准确表述为唯一 **eligible** Runner-up。30 天计划亦只安排 UK 的进一步只读研究和 Singapore `UNKNOWN` 复核，未越权表述为外联就绪。

## 阻断性失败：宏观/法规评分不可验收

`SOURCES.md` 只按国家列出少量 URL 和简称，`COUNTRY_EVIDENCE.csv` 只给出 A/C/E/F/G/H/I 的原始分与 B/D 的宏观原始分。两者之间没有下列必需记录：

1. 每个国家、每个宏观/法规字段所使用的**精确事实值**、单位、抽取位置、来源发布日期/数据期和本轮 `as_of`；
2. 从该事实值映射到 A、B_macro、C、D_macro、E、F、G、H、I 原始分的评分定义、阈值和分段；
3. E 的官方监管解释如何产生 `E_raw`，以及各法律/规则的适用日期；
4. 对来源本身年份或页面发布日期早于本轮的情形，为什么仍可作为 2026-08-22 当前事实的说明；
5. `UNKNOWN` 字段在这些宏观/法规评分中的明确处理记录。

因此，虽然 B/D 的**样本部分**和九项加法可复算，不能独立确认例如 UK `B_macro=7`、`E_raw=8` 或 Singapore `D_macro=8`、`E_raw=6` 是否被当前且量纲正确的直接来源支持。也不能把来源清单或旧摘要当作这些分数已通过证据审计。

## 解除失败所需的最小修复

不改写样本的前提下，为每国补充一份可机器/人工复算的宏观评分证据表，并在 `SOURCES.md`、`COUNTRY_EVIDENCE.csv` 和评分卡中引用同一份权威记录。每一行至少包含：`country`、`score field`、`raw score`、`fact value`、`unit`、`source URL`、`source publication/data date`、`retrieved/as_of date`、`source excerpt/location`、`score threshold/rule`、`calculation`、`UNKNOWN handling`、`regulatory applicability note`。

随后由新的独立验收 Owner 重新验证来源可访问性、日期、量纲、分段规则与所有原始分；只有该链完整且与现有总分一致时，才可将本文件结论改为 `FINAL INDEPENDENT ACCEPTANCE PASS`。

## 验收边界

本结论不构成外联、账号、部署、支付或任何生产行为授权；国家评分也不代表成交率、营销同意、可投递性或发送许可。
