# 六国综合验证｜宏观/法规重算｜2026-08-22

商户样本、H0、邮箱、static-fit 与 Track 未改写。为修复 B 的不可重算性，新增 `ACTIONABLE_CLASSIFICATION.csv`：以 `country + discovery_order + business_name` 一对一对应 120 条主样本，并为每行写明 `YES/NO` 与理由。规则是 `VALID + static_fit=YES + 直接复核的公开业务邮箱` 才为 YES；UNKNOWN/未核实邮箱为 NO。`COUNTRY_EVIDENCE.csv` 现有 54/54 行：每国 9 项，且每行记录 raw value、unit、数据期、as-of、URL、阈值、计算、raw score 和 weighted score；没有宏观 `UNKNOWN`。

复算公式：`B=.60*B_macro+.40*(10*actionable_rate)`；`D=.50*D_macro+.50*(10*verified_public_email_rate)`；总分为 nine `weighted_score` 之和。逐国 B（分子/分母、rate、raw、weighted）为：US 6/20、0.300、7.20、12.96；UK 8/20、0.400、6.40、11.52；Singapore 10/20、0.500、3.20、5.76；Malaysia 8/20、0.400、4.60、8.28；Ireland 5/20、0.250、2.20、3.96；New Zealand 3/20、0.150、1.80、3.24。重算总分：US 86.56、UK 75.77、Singapore 64.11、Malaysia 63.68、Ireland 55.01、New Zealand 53.14。

硬门复算：US 仅 static fit 失败；UK 全过；Singapore、Malaysia、New Zealand、Ireland 均因 E=2 失败（New Zealand 另有 static fit，Ireland 另有邮箱率）。因此 eligible 排名仅 UK；Winner=UK；无 eligible 备选。`READY FOR RE-ACCEPTANCE` 仅表示证据链可供独立验收，绝不授权外联。
