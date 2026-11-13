# Screening Core v1.1｜Validation

日期：2026-08-21

## Scenario A–I

| Scenario | 规则一致性 | 预期结果 |
|---|---|---|
| A | PASS | 近 30 天、身份可确认的可信 Google Review 可独立支持 `H0 = PASS`；半年未发 Instagram 不导致失败。 |
| B | PASS | 生意健康、网站普通偏旧，但 45 分钟 Demo 可形成有意义升级，`H0.5 = PASS`；不要求现站极差。 |
| C | PASS | 无公开业务邮箱时 `Public Business Email Gate = FAIL`；电话、Contact Form、Instagram 不得替代。 |
| D | PASS | 找不到增长证据时 `Growth Intent Evidence = UNKNOWN`；不自动判 LOW 或 DROP。 |
| E | PASS | 得分 85 只表述为 “Higher priority for testing under the current heuristic.”；禁止表述为 85% purchase probability。 |
| F | PASS | Track N 实际合格候选为 40% 时记录实际比例与偏差原因；不得降门槛补到 60%。 |
| G | PASS | 工业制造商可把 Supplier Directory 作为主要 Prospect Source；Google Maps 不是统一主来源。 |
| H | PASS | 首封主动赠送源码固定 `FAIL`；Free Source Experiment 当前未启用。 |
| I | PASS | Hero 良好但 Bottom 40% 仅为纯色大字 CTA、电话和极简 Footer，`Demo Quality = FAIL`；须修复视觉节奏与商业收尾，不得编造内容。 |

结论：Scenario A–I 全部通过规则一致性验证。

## 冲突扫描与处理

- `Strong Transformation Gap` 和独立 35 分 H0.5 模型已从 Current Authority 移除，改为 `Meaningful Demo Opportunity: PASS / FAIL`。
- `private website/demo`、`unpublished` 只允许存在于明确标记的历史/Deprecated 内容、冲突说明或禁止项；Current Authority 只允许 access-controlled 页面称 `private`。
- `free source`、`source files`、`HTML/CSS/JS for free`、`no need to hire me` 只允许存在于 Deprecated 历史说明或当前禁止项，不能进入生效邮件。
- 电话、Contact Form、Instagram 等替代邮箱的规则已移除；当前联系硬门仅为 Public Business Email。
- 评分已去除购买/成交概率含义；Google Maps 已去除统一来源地位；Demo 目标统一为 30–60 分钟。
- `Growth Intent Evidence` 无证据时固定为 `UNKNOWN`；Track 60/40 固定为研究分配偏好而非强制结果配额。

Current Authority 未发现与 Screening Core v1.1 并列生效的旧规则。

## 本次范围外的开放项

- 历史候选、历史 Round 与已发送邮件不追溯重评；未来重用时按 v1.1 重新验收。
- 澳大利亚外联合规依据、真实邮箱可投递性和真实账户发送状态仍需逐家、逐次另行核验；本次规则修改不构成发送授权。
- Demo 的素材许可、真实浏览器双视口表现和公网部署状态仍由具体 Demo 任务独立验收；本次未制作或部署 Demo。

## 最终权威关系

1. 平台、全局治理与用户当前明确授权优先。
2. `AGENTS.md` 是项目入口、摘要与边界。
3. `PROJECT_CORE.md` 是筛选、Track、Prospect Source、Prioritisation Score、辅助标签与 Demo Scope 的详细权威。
4. `OUTREACH_EMAIL_SOP.md` 是首封、Follow-up、CTA、邮件 QA 与当前 Offer 的唯一权威。
5. 明确标记为 `DEPRECATED — EXPERIMENT NOT ACTIVE` 的内容只作审计历史，不得覆盖 Current Authority。
