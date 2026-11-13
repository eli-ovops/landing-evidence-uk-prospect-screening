# Screening Core v1.1｜Changelog

日期：2026-08-21

## 修改范围

- `AGENTS.md`：更新项目级入口、硬门槛摘要、文件职责和执行边界。
- `PROJECT_CORE.md`：维护筛选、Track、Prospect Source、Prioritisation Score、辅助标签及 Demo Scope 的权威定义。
- `OUTREACH_EMAIL_SOP.md`：维护首封、Follow-up、CTA、邮件 QA 与当前 Offer 的权威规则。

## 规则差异

- H0：从“必须找到近 90 天商户主动更新”改为只验证 `Current Trading Status`；近 90 天、身份可确认的可信公开客户评价可独立通过，不据此推断增长、网站需求或购买意愿。
- H0.5：从 `Strong Transformation Gap` 及独立 35 分模型改为 `Meaningful Demo Opportunity` 的 `PASS / FAIL` 资格门；机会强弱只在既有 `Website Opportunity — 30` 中排序。
- 联系硬门：统一为 `Public Business Email: PASS / FAIL`；电话、Contact Form、社媒和消息工具不得替代，也不给 Contact Viability 加分；新增 `Email Deliverability` 与 `Decision-maker Reach` 记录。
- 评分：100 分权重保持 A 30 / B 20 / C 20 / D 20 / E 10，改称 `Prioritisation Score`，只表达当前启发式下的测试优先级，不表达购买或成交概率。
- 辅助标签：新增 `Website Relevance to Customer Acquisition`、`Growth Intent Evidence`、`Industry Economic Leverage`、`Business-specific Website Leverage`；辅助标签不计分，缺少增长证据固定为 `UNKNOWN`。
- Track：Track N/W 的 60/40 改为 research allocation / discovery preference；必须记录目标、实际合格比例及偏差原因，不得作为结果配额。
- Prospect Source：改为行业特定来源策略；Google Maps 只是可选来源之一。
- Demo：保留 30–60 分钟目标，新增 `Actual Demo Minutes` 和连续超时触发的 `SOP Cost Review`；明确 polished Cold Demo 不等于 Finished Production Website，并强化 Bottom 40% 收尾质量门。
- 邮件：免费源码实验标记为 `DEPRECATED — EXPERIMENT NOT ACTIVE`，当前 Funnel 恢复为 `View Demo → Positive Reply → Discuss Scope → Quote AU$800 → Deposit → Production`；当前 CTA 不承诺免费源码。
- 访问状态：公网但不主动列出的页面统一称 `unlisted concept preview` 或 `independent concept`；只有 access-controlled 页面可称 `private`。

## 明确未变更

- 未修改 100 分评分权重或 Priority 等级。
- 未新增第二套评分、概率模型、CRM、scraper 或自动化筛选系统。
- 未重评任何历史候选，未重做任何历史 Demo。
- 未联系商户、未发送邮件、未部署 Demo、未购买服务。

## v1.1.1 Consistency Patch

日期：2026-08-21

- 删除 `AGENTS.md` 中 Track W“两项网站问题”、Track N“两项展示缺口”及“两项支付能力或品牌投入信号”的旧版固定数量硬门；改为路由至 `PROJECT_CORE.md` 的 Meaningful Demo Opportunity、Business Health、Single-page Fit、Purchase Signal 与 Public Business Email Gate，不改变现有分项最低线。
- H0 术语统一为 `Current Trading Status`、`Recent Trading Evidence` 与 `Current Trading Status Evidence`；失败状态统一为 `H0 FAIL — CURRENT TRADING STATUS NOT VERIFIED`，并明确证据不足不等于已证明停业。
- 修复权威路由：产品价格/范围、Screening 与 Demo 归 `PROJECT_CORE.md`；当前首封模板、CTA、邮件 QA 与 Current Offer 归 `OUTREACH_EMAIL_SOP.md`。
- 核查邮件 SOP 后确认其中没有 Follow-up 规则，因此职责收窄为首封，不新增邮件序列。
- 重新运行 Scenario A–J 与冲突词扫描；结果记录于 `SCREENING_CORE_V1_1_VALIDATION.md`。
- 未修改 100 分权重、Priority 阈值、分项最低线、H0 90 天窗口、Track 60/40、Demo 30–60 分钟、Bottom 40%、AU$800 产品或付款结构。
- 未重评历史候选，未修改历史 Demo，未发送任何邮件，未联系任何商户。
