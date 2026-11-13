# 方法与可复算规则（六国宏观/法规证据修复版）

研究与审计日：2026-08-22。范围：公开、只读；无账号、外联、Demo、部署、付款或其他外写。本文件取代旧版未定义 A–I 原始分的口径；不修改冻结商户样本。

## 正式样本框与行级规则

唯一正式框是 local trades/home services、wedding/creative、beauty/wellness、local professional services；每国每行业 5 行，六国共 120 行。发现顺序须在官网、邮箱、static fit 和价格检查前冻结。`VALID` 仅表示审计字段、H0 和必要观察完整；不表示销售合格、H1–H6、外联许可或 static fit=YES。

- H0 日期须在 2026-05-24..2026-08-22；owned site 须有 1440x900 与 390x844 观察；无 owned site 须有三检索面。
- 访问失败、WAF、TLS/加载或移动失败是完成观察；static fit `UNKNOWN` 合法，不能当作 0、`NO` 或 `YES`。
- 公开业务邮箱只统计可从直接来源复核的邮箱；`NOT VERIFIED` 仅表示本轮未找到。

### B 项 actionable 的行级判定（新增，可独立复算）

`ACTIONABLE_CLASSIFICATION.csv` 是与 `MERCHANT_SAMPLE.csv` 以 `country + discovery_order + business_name` 对应的逐行判定表；其 `actionable_status` 只回答“该冻结样本行是否同时具备本轮静态单页机会的最小可行动条件”，不表示成交、合规、发送许可或 H1–H6 通过。对每一行按下列非循环规则判定，且仅使用该行已存事实：

1. `YES`：`audit_status=VALID`、`static_fit_status=YES`，且 `public_business_email` 不是 `NOT VERIFIED`/空值并且 `email_direct_source_url` 不是 `NOT VERIFIED`、`NONE/NOT VERIFIED`/空值。
2. `NO`：上述任一条件不满足。`static_fit_status=UNKNOWN` 不可推断为 `YES`；无可直接复核邮箱亦不得当作可行动。
3. `actionable_reason` 必须逐行列出满足条件的事实，或列出导致 `NO` 的具体缺口；不得从国家级 rate、B 分数、国家排名或目标结论反填。

逐国 `actionable_rate = actionable_status=YES 的行数 / 20`；分母固定为该国全部 20 条冻结 `VALID` 样本行（本轮均为 20），不剔除 `UNKNOWN`。B 的样本输入为 `B_sample = 10 * actionable_rate`，再按表中的 B 公式合成。该规则独立于 D 的公开邮箱率：D 只计算邮箱，B 则要求邮箱与 static fit 同时成立。

## A–I 统一定义、口径和原始分

所有 GDP PPP 和人口使用 World Bank WDI 的最近共同完整期 2024；每个国家/字段的事实、单位、日期、URL、阈值和计算在 `COUNTRY_EVIDENCE.csv` 单独成行。旧分数不被保留为依据。

| 项 | 权重 | 定义/事实 | 原始分规则 |
|---|---:|---|---|
| A | 18 | GDP PPP（current international $, 2024，万亿美元） | <.25=2；.25–<.5=4；.5–<1=6；1–<3=8；≥3=10 |
| B | 18 | 可行动机会。`B_macro` 是人口（百万，2024），并与样本 `actionable_rate` 合成 | 人口：<10=2；10–<30=4；30–<60=5；60–<100=8；≥100=10；`B=.60*B_macro+.40*(10*actionable_rate)` |
| C | 15 | Stripe 官方可用性页列为可开通业务所在地 | 列出=10；明确不可用=0；其余=`UNKNOWN` |
| D | 10 | 公开邮箱的宏观代理：GDP PPP per capita（current international $, 2024），并与样本邮箱率合成 | <20k=2；20–<40k=4；40–<60k=8；≥60k=10；`D=.50*D_macro+.50*(10*verified_public_email_rate)` |
| E | 15 | 冷 B2B 电子邮件的官方监管入口；不等于发送许可 | 明确企业可无同意且须身份/退出=10；有企业路径但个人/企业类型限制=6；同意为默认或无法验证=2；无官方材料=`UNKNOWN` |
| F | 8 | 隐私合规层数：官方材料是否显示综合私营数据保护法和监管机关 | 综合法+监管机关=6；部门性联邦框架=8；无法确认=`UNKNOWN` |
| G | 6 | 英文制作/沟通：政府法定或工作语言的官方证据 | 英语官方/政府工作语言=10；官方商务资料仅英语版本=5；无法确认=`UNKNOWN` |
| H | 6 | 2026-08-22 相对 Asia/Shanghai 的绝对时差（IANA tzdb） | 0=10；1–2=8；3–4=4；≥5=2；多时区取最小值并披露范围 |
| I | 4 | AU$800 / GDP PPP per capita；固定换算 0.67 USD/AUD | ≤1%=10；>1–≤1.5%=8；>1.5–≤3%=6；>3%=2 |

### UNKNOWN 与硬门

`UNKNOWN` 不得按 0 代替：字段贡献、总分和可比排名均为 `UNKNOWN`，国家不能通过硬门。仅九项全有事实和数值分才显示排名。页面日期早于研究日时，必须列数据期/发布日期并说明为 2026-08-22 可访问的现行监管页或最近共同统计期。

冠军比较要求：20 VALID、四行业各5、所有 H0 合法、公开邮箱率≥40%、可判定 static fit YES/(YES+NO)≥60%、E≥6 且有官方监管解释、且没有宏观 `UNKNOWN`。总分为 `sum(weight*raw/10)`；只对已知总分降序。国家分数不代表成交、合规、可投递或发送许可。
