# Screening Core v1.1.1｜Validation

日期：2026-08-21
Validation Version: `v1.1.1`

## Scenario A–J

| Scenario | Result | Evidence |
|---|---|---|
| A | PASS | `PROJECT_CORE.md` §12 H0：近 90 天、身份可确认的可信公开客户评价可独立通过 H0；不要求 Instagram 更新。 |
| B | PASS | `PROJECT_CORE.md` §12 H0.5：一项具体、可复现且能在 30–60 分钟形成明显升级的机会即可 PASS；无“两问题”门。 |
| C | PASS | `PROJECT_CORE.md` §12 H3 / Contact Viability：无公开业务邮箱即 Gate FAIL，电话、Contact Form、Instagram 不得替代或加分。 |
| D | PASS | `PROJECT_CORE.md` §12 Growth Intent Evidence：`No public evidence = UNKNOWN`，不得自动 LOW、DROP 或隐性扣分。 |
| E | PASS | `PROJECT_CORE.md` §12 Prioritisation Score：85 分只可称 `Higher priority for testing under the current heuristic`，不得称购买/成交概率。 |
| F | PASS | `PROJECT_CORE.md` §12 Track Classification：60/40 是 research allocation target；必须记录实际合格比例与偏差原因，不得降门槛。 |
| G | PASS | `PROJECT_CORE.md` §12 Prospect Source Strategy：Industrial / Manufacturing / B2B 可优先 Supplier Directory，不要求 Google Maps。 |
| H | PASS | `OUTREACH_EMAIL_SOP.md` §2A、§3、§8：Free Source Experiment 未启用，首封赠送 HTML/CSS/JS 固定 FAIL。 |
| I | PASS | `PROJECT_CORE.md` §14.3A：纯色大字 CTA、电话与极简 Footer 构成 Bottom 40% BAN / Demo Quality FAIL，须修复且不得编造内容。 |
| J | PASS | `AGENTS.md` Prospect 硬门槛 + `PROJECT_CORE.md` §12 H0.5：不再按“两问题/两商业信号”自动失败；满足各 Gate 后进入完整评分与人工优先级判断，但不自动成为 Priority A。 |

Scenario A–J = PASS

## 冲突词扫描分类

| 命中类别 | Classification | 处理结论 |
|---|---|---|
| 固定“两问题/两展示缺口/两支付或品牌信号”门 | CURRENT AUTHORITY（修补前） | 已从 `AGENTS.md` 删除；当前只保留“无固定数量门”的路由说明。 |
| `主动经营信号 / 主动经营活动 / no recent active trading evidence` | CURRENT AUTHORITY（修补前） | 已改为 `Recent Trading Evidence / Current Trading Status Evidence` 与 H0 FAIL 状态。 |
| `private website`、`It hasn’t been published` | DEPRECATED | 仅在 `PROJECT_CORE.md` 第 4–8 节历史模板中；文件顶部明确 `NOT CURRENT AUTHORITY`。 |
| `private / unpublished` | FALSE POSITIVE | Current Authority 中仅用于禁止误称或说明只有 access-controlled 可称 private。 |
| `free source / no need to hire me` | DEPRECATED / FALSE POSITIVE | 只存在于停用实验说明或当前禁止项，不属于 Current Offer。 |
| `Follow-up` | FALSE POSITIVE | 邮件 SOP 明确不声明 Follow-up 权威；AGENTS 不再路由 Follow-up。 |
| `邮件模板见 PROJECT_CORE` | CURRENT AUTHORITY（修补前） | 已修复；AGENTS 当前只把邮件模板、CTA、邮件 QA 与 Offer 路由到 `OUTREACH_EMAIL_SOP.md`。 |

Current Authority Conflict = NONE

## 文件完整性与权威关系

1. 平台、全局治理与用户当前明确授权优先。
2. `AGENTS.md` 只负责项目入口、文件路由、高级执行/Hard Gate 摘要及权限安全边界。
3. `PROJECT_CORE.md` 负责产品范围与价格、Screening、H0/H0.5、Prioritisation Score、Track、辅助标签、Public Business Email Gate、Prospect Source、Demo Scope/Quality/时间与实验数据字段。
4. `OUTREACH_EMAIL_SOP.md` 负责当前首封模板、CTA、个性化、Unsubscribe、Current Offer 与邮件 QA；当前不包含或负责 Follow-up 规则。
5. `PROJECT_CORE.md` 第 4–8 节的历史邮件内容均为 `DEPRECATED / HISTORICAL / EXPERIMENT NOT ACTIVE / NOT CURRENT AUTHORITY`。

内部链接、Markdown 标题层级、术语、文件尾部、授权文件 Diff 与未冻结规则保留情况均须通过最终机械检查；本文件的 READY 结论以该检查实际通过为前提。

Screening Core v1.1.1 = READY FOR EXECUTION
