# 澳大利亚海外小商户首单验证｜通用核心

本文件是本项目未来 prospecting、客户分析、Demo 准备、邮件/IG 文案、外联规划与交付前的必读口径。它不替代平台、全局规则或当前用户授权；规则仅收紧权限。

Current Authority：`Screening Core v1.1`。第 4–8 节仅为明确标记的历史/Deprecated 记录；当前首封规则以 [OUTREACH_EMAIL_SOP.md](OUTREACH_EMAIL_SOP.md) 为唯一权威。

## 1. 项目目标、产品与报价

- 市场：Australia。
- 产品：纯静态单页网站，使用静态 HTML/CSS/少量前端 JS。
- 价格：AU$800 one-time；AU$400 deposit + AU$400 before production launch。
- 我方不强制收取月度维护费（No mandatory monthly maintenance fee from us）。
- 第三方服务、域名、预约、支付或平台费用由客户承担。

## 2. Sender Profile

- Display name: Eli
- Canonical phone: `[REDACTED_PHONE]`
- Human phone: `+86 182 6851 4405`
- Email: `[REDACTED_EMAIL]`
- Business/portfolio：未提供；不得编造，邮件默认省略。

## 3. 默认发件签名

```text
Eli
[REDACTED_EMAIL]
+86 182 6851 4405
```

不得擅自声称 WhatsApp、公司名、澳洲地址或法定实体。

## 4. Cold Demo 邮件主题行（DEPRECATED — EXPERIMENT NOT ACTIVE — 历史参考）

本节及第 5–8 节仅保留历史兼容，不得用于新首封 Cold Outreach。新首封邮件的唯一权威规则与模板见 [OUTREACH_EMAIL_SOP.md](OUTREACH_EMAIL_SOP.md)。

```text
A private website concept for [Business name]
A small website idea for [Business name]
[Specific observation] — a website thought
```

## 5. 英文主模板（DEPRECATED — EXPERIMENT NOT ACTIVE — 历史参考，不得用于新首封）

```text
Hi [Owner name],

I came across [Business name] while looking at independent businesses in [Town]. [Specific observation]

I’m Eli, an independent web designer. I put together a short private website concept to show one possible way to present your business and make enquiries clearer.

It hasn’t been published, and I haven’t made any changes to your current website.

You can view it here:
[Demo URL]

If it feels useful, simply reply to this email. I’d be glad to hear what you think.

Eli
[REDACTED_EMAIL]
+86 182 6851 4405

If you’d prefer not to hear from me again, reply “unsubscribe” and I won’t contact you again.
```

## 6. 最短英文版（DEPRECATED — EXPERIMENT NOT ACTIVE — 历史参考，不得用于新首封）

```text
Hi [Owner name],

I came across [Business name] in [Town] and liked [Specific observation]. I made a short private website concept—one possible way to present your work and make enquiries clearer. It isn’t public, and I haven’t changed your current site.

[Demo URL]

If you’re interested, simply reply and let me know what you think.

Eli
[REDACTED_EMAIL]
+86 182 6851 4405

Reply “unsubscribe” if you’d prefer not to hear from me again.
```

## 7. 个性化与禁止写法（DEPRECATED — EXPERIMENT NOT ACTIVE — 历史参考）

每封邮件必须人工改写三处：

1. `[Owner name]`、`[Business name]`、`[Town]`；
2. 只有该商户才成立的一条具体观察；
3. Demo 解决的一个具体问题。

禁止写：

- `Your website is bad/outdated.`
- `I made you a free website.`
- `This will increase your bookings.`
- 虚假紧迫感、限时优惠或无法证实的结果承诺；
- “你的邮箱公开，所以我可以联系你”。

## 8. HTML 邮件版（DEPRECATED — EXPERIMENT NOT ACTIVE — 历史参考，不得用于新首封）

HTML 邮件应保持简洁：不加入复杂 CSS、脚本、表单、远程字体、追踪像素或其他追踪。`[Demo URL]` 必须替换为实际私有 Demo 的 HTTPS URL；除文字链接外，保留完整纯文本 URL 作 fallback。

```html
<p>Hi [Owner name],</p>
<p>I came across [Business name] while looking at independent businesses in [Town]. [Specific observation]</p>
<p>I’m Eli, an independent web designer. I put together a short private website concept to show one possible way to present your business and make enquiries clearer. It hasn’t been published, and I haven’t made any changes to your current website.</p>
<p><a href="[Demo URL]">View the private website concept</a></p>
<p><a href="[Demo URL]"><img src="[Demo Screenshot URL]" alt="Preview of the private website concept for [Business name]" width="600"></a></p>
<p>Plain-text link: [Demo URL]</p>
<p>If it feels useful, simply reply to this email. I’d be glad to hear what you think.</p>
<p>Eli<br>[REDACTED_EMAIL]<br>+86 182 6851 4405</p>
<p>If you’d prefer not to hear from me again, reply “unsubscribe” and I won’t contact you again.</p>
```

- 默认使用 1 张可点击的实际 Demo 截图；如发信工具支持，可把 `[Demo Screenshot URL]` 改为 CID 内嵌图片。
- 可选第 2 张移动端截图，但默认最多 2 张；不建议更多。
- 建议邮件显示宽度约 600px，压缩后单张图片尽量不超过 300KB，并使用 HTTPS。
- 图片被屏蔽时，收件人仍必须通过 alt text、可点击文字链接和完整纯文本 URL 理解邮件。
- 图片仅帮助可信度和预览；不能替代同意依据、发件信誉或逐封个性化，也不得声称“加图片就不会进垃圾箱”。

### 图片门禁

- 截图必须来自实际存在的私有 Demo；Demo 页面未公开。
- 截图不得含未经处理的秘密或个人数据，素材权利与使用边界必须已处理。
- 禁止追踪像素、隐藏图片、UTM 或识别性追踪参数；不得远程读取或分析收件人行为。

## 9. Demo 邮件前置门禁

发出任何 Demo 邮件前，独立 Owner 必须逐家证实：

1. Demo 真实存在、可访问，链接状态与邮件描述一致；只有 access-controlled 才可称 `private`，公网但不主动列出的页面必须称 `unlisted concept preview` 或 `independent concept`，不得称 `private`、`unpublished` 或 `not published`；
2. 商户身份、当前经营状态和有效联系渠道已核验；
3. 素材权利与使用边界已处理；
4. 发信法律依据已单独核验；
5. Sender 信息真实；
6. 退订方式可实际执行。

未满足任一项，只能起草，不得发送。

## 10. 澳大利亚合规提醒

模板格式不等于合法发送；本文件不是法律意见。公开邮箱并非普遍营销同意。真实外联前，应逐家核验同意或其他适用依据、身份标识和可执行退订。

- [ACMA: Avoid sending spam](https://www.acma.gov.au/avoid-sending-spam)
- [Spam Act 2003 — current versions](https://www.legislation.gov.au/C2004A01214/latest/versions)

## 11. 授权状态

- 默认允许：读取本文件、研究公开资料、起草文案。
- 默认禁止：发送邮件或私信、登录邮箱、提交表单、安装追踪像素、群发、自动化、公开部署或付费。
- 邮件模板不是外联授权；任何真实发送都需要当前用户针对具体商户明确授权。

## 12. 客户筛选硬门槛与 Prioritisation Score（Screening Core v1.1；权重沿用 v1.0）

### 目标与原则

目标是筛出最值得投入 30–60 分钟制作定制 Cold Demo、并进入 AU$800 真实市场验证的澳大利亚商户。寻找的是：`Good Business + Missing or Weak Owned Digital Presentation + Strong Single-page Fit + Evidence-backed Commercial Signals + Viable Decision-maker Contact`，不是网站最差的商户。候选同时覆盖“没有独立网站”和“已有网站但展示明显落后”两类；没有独立网站不得再因缺少现站问题而自动排除。

`Hard Gate` 判断是否有资格进入优先候选；`Score` 只排序已经核验的机会。评分不得掩盖近期经营证据缺口、停业风险、无预算、动态系统依赖、无本地决策联系或合规缺口。

### H0 / Gate 0 — Current Trading Status

`H0 = Current Trading Status only`。H0 只用于验证商户目前是否仍在真实经营；不判断 Growth Intent、Purchase Intent、Website Need、Digital Sophistication 或 AU$800 支付意愿。H0 PASS 不得表述成 actively seeking growth、likely to buy 或 strong purchase signal。

H0 是所有新筛选与新增候选推进的第一硬门禁，发生在 H0.5、H1–H6 与评分之前，不计分，也不可被网站质量、总分或人工偏好覆盖。研究顺序固定为：

`H0 Current Trading Status → Website Status / Track Classification → H0.5 Meaningful Demo Opportunity → Public Business Email Gate → H1–H6 → 适用视口复核 → Prioritisation Score → 候选与 Demo 适配判断`

从核验日向前滚动 90 天内，至少有一条日期明确、可直接复核、可归属该商户的主动经营信号，H0 才可标记 `PASS`。每条证据必须记录：`Evidence date`、`Direct URL`、`Signal type`、`Attribution reason`、`Evidence Confidence`。最好以第二个当前来源交叉验证，但第二来源是置信度增强项，不是绝对双证据门槛。

可接受的强信号：

- 官方官网或官方社媒在窗口内主动发布项目、产品、新闻、活动或营业更新；
- 任一可信、公开可访问平台中，窗口内可明确归属该商户的真实客户评价，包括但不限于 Google Business Profile / Google Maps、Facebook、TripAdvisor、Booking / tourism platforms、行业评价平台、公开商业目录或其他可信公开平台；
- 商户在窗口内公开回复客户；
- 窗口内招聘、活动、展会、项目交付或其他日期明确的经营动作。

近 90 天客户评价可以独立通过 H0，但必须记录评价日期、Evidence URL、核验日期和身份交叉确认依据；商户名称、地点、官网、电话、地址或其他身份信息必须足以合理对应目标商户。H0 不要求老板本人近 90 天发布社媒、官网近 90 天更新或商户主动发布内容。

以下信息不可单独通过 H0：

- `ABN/GST active`、官网能够打开、Google `Open now` 或静态营业时间；
- 无日期目录、只有账号存在但没有可核日期的社媒；
- 搜索摘要或抓取日期、版权年份、图片文件名、EXIF、上传路径；
- 第三方页面自身更新时间，或登录后才可能看见但当前无法直接复核的内容。

H0 结果只有以下三种：

- 有合格信号：`H0 PASS — CURRENT TRADING STATUS VERIFIED`，才允许进入 Track Classification；不直接证明增长、网站需求、购买意愿，也不授权 Demo 或外联。
- 未找到合格信号：固定 `DROP — NO RECENT ACTIVE TRADING EVIDENCE`。不得进入 H1–H6、评分、候选、深度研究、Demo 或外联准备；这只表示证据门槛未通过，不得写成“商户已停业”。
- 因登录墙、验证码、429、WAF 或其他访问阻断无法核验：固定 `VERIFICATION BLOCKED — RECENT ACTIVITY NOT VERIFIED`。不得进入候选，不得误报为无营业或 `PASS`。

既有已发送 8 家不因本规则追溯删除，其历史事实保持不变。本规则适用于今后的新筛选和新增候选推进；任何既有候选如要重新推进，也必须按当次核验日重新通过滚动 90 天 H0。

#### 第一性原则与红队结论

- 前提：投入邮箱核验、浏览器审查、评分和 Demo 前，先证明商户近期存在可归属的主动经营活动，才能把研究成本集中到仍值得接触的对象。
- 攻击/误用：用 ABN active、活域名、`Open now`、抓取时间或旧内容伪装近期经营；以高分或差网站救回 H0 失败；把访问阻断误写成停业或通过。
- 阻断证据：没有窗口内明确日期、直达 URL、信号类型与归属理由，或证据无法直接复核时，不得标记 H0 PASS。
- 残余风险：一条真实近期信号只能证明 Current Trading Status 门禁已满足，不能单独证明增长意图、网站相关性、支付能力、营销同意或会购买。
- 闭环：先做 H0；PASS 后只进入 Website Status / Track Classification，再进入对应 H0.5；DROP 或 VERIFICATION BLOCKED 立即停止，并保留证据状态供以后按新滚动窗口复核。

### Website Status / Track Classification

H0 PASS 后、H0.5 前必须先判定并记录一个互斥通道；不得因为容易评分而只搜索已有网站商户：

- `TRACK N — NO OWNED WEBSITE`：商户当前没有可确认的独立官网，但可有 Google Business Profile、Instagram、Facebook、可信目录或第三方平台页面。
- `TRACK W — WEAK EXISTING WEBSITE`：存在由商户拥有或明确代表商户的独立官网，继续按现站视觉和访客问题核验。
- `WEBSITE STATUS UNKNOWN — HOLD`：仅“搜索不到”、访问阻断、同名混淆、旧域名状态不明或无法确认页面归属时使用；不得推断为 Track N 或推进 H0.5。

`TRACK N` 必须完成“无独立网站核验”，记录核验日期、查询词、直达 URL 和结果，至少覆盖以下三个检索面：商户控制的官方社媒资料/简介、Google Business Profile 或可信本地商业资料、精确商户名加所在地的公开网页搜索。第三方平台店铺、目录页、Facebook/Instagram 页面、Google Business Profile、Linktree 或聚合链接页均不算独立官网。任一检索面发现可能属于该商户的独立域名时，必须先核归属和当前状态；未核清前固定 `WEBSITE STATUS UNKNOWN — HOLD`。

发现池的阶段性研究投入目标为 `Track N — 60% / Track W — 40%`。它是 `Research allocation target / discovery preference`，不是强制结果配额。每轮必须记录：

```text
Target Ratio:
Actual Qualified Ratio:
Deviation Reason:
```

不得为凑比例降低 Hard Gates、抬高低质量候选分数、保留 Evidence Confidence 不足的候选或用数量替代质量。真实合格比例偏离目标时如实报告；积累真实回复、价格询问、定金和成交数据后，才可另行校准。

### Prospect Source Strategy

Prospect Source 必须按行业选择；Google Maps 可以是来源之一，但不得作为所有行业的统一主来源。每个候选必须记录：

```text
Prospect Source Type:
Prospect Source URL:
```

- Local Consumer / Local Service / Trades：优先 Google Maps、Google Search、local business directories。
- Tourism / Hospitality / Experience：优先 Google Maps、Google Search、official destination websites、tourism/activity directories、regional visitor economy sources。
- Industrial / Manufacturing / B2B：优先 Google Search、industry/supplier directories、trade associations、industrial estate directories、local chamber/business directories。
- Professional Services：优先 Google Search、professional/association directories、local business directories。

来源选择必须能覆盖该行业真实商户分布；若错误来源可能系统性遗漏合格候选，固定记录 `SOURCE BIAS RISK` 并切换或补充来源。来源策略不改变 H0、邮箱、Evidence Confidence 或其他硬门槛。

### H0.5 / Gate 1 — Meaningful Demo Opportunity

H0.5 只做 `PASS / FAIL` 资格判断，不维护独立精细评分，也不重复计算 Website Pain。唯一核心问题是：

> 能否在约 30–60 分钟内，通过一个静态单页 Cold Demo，产生目标老板能够明显感知的视觉、信息、信任或转化路径升级？

#### PASS 条件

- Track W 已在真实浏览器检查现站 Desktop 1440×900 与约 390×844 Mobile；Track N 已完成 `NO OWNED WEBSITE VERIFIED` 并检查当前官方数字触点。
- 有至少一项具体、可复现、能映射到静态单页的当前展示机会，且升级不只是改 footer、修拼写或做一个更漂亮的社媒封面。
- 30–60 分钟内可以诚实完成足以表达方向的精修核心切片，不依赖虚构评价、项目、认证、价格、员工、场所或结果。
- 主要价值来自视觉、信息、信任整合或联系/询价路径；不依赖后台、CMS、电商、支付、实时库存、复杂预约、客户门户或持续内容运营。
- 当前网站不必极其难看，也不必是行业最差；普通偏旧的网站只要能在目标时间内产生明显且可信的升级即可 PASS。

#### FAIL 条件

- 当前网站已经足够现代、清晰、可信且转化路径明确；
- 静态单页无法展示有意义的升级，或网站对该商户获客与信任几乎无关；
- 真正需求是复杂软件、电商、后台、系统开发或持续运营；
- 30–60 分钟无法形成可信改进；
- 只有虚构内容才能制造差异。

固定状态：

- `H0.5 PASS — MEANINGFUL DEMO OPPORTUNITY VERIFIED`
- `H0.5 FAIL — NO MEANINGFUL DEMO OPPORTUNITY`
- Track W 因访问阻断无法核验时：`VISUAL REVIEW BLOCKED — DEMO OPPORTUNITY NOT VERIFIED`
- Track N 无法完成网站状态或官方数字触点核验时：`WEBSITE STATUS UNKNOWN — HOLD`

H0.5 的证据只需记录 `Track`、`Current presentation observation`、`Proposed static upgrade`、`30–60 minute feasibility` 与 `PASS/FAIL reason`。升级机会强弱继续只由 `Website Opportunity — 30` 评分；不得在 H0.5、H5 与 Website Opportunity 三处重复给同一问题加权。

H0 只证明 Current Trading Status；H0.5 只证明 Demo 资格。两者都不证明 Growth Intent、购买概率、支付意愿、营销同意或发送许可。Track N 的“无独立网站”也不自动等于 Website Need。把搜索不到写成无网站、忽略旧/跳转域名、把平台页算独立官网或为凑 60/40 放宽门槛时，必须 HOLD/FAIL 并补证。

### H1–H6 Hard Gates

只有 H0、Track Classification、对应 H0.5 与 `Public Business Email` PASS 后，才可核 H1–H6。H1–H6 必须逐项以证据标记 `PASS / FAIL / UNPROVEN`；进入 `Priority A` 或 `Priority B` 必须 H0、对应 H0.5、Public Business Email 与 H1–H6 全部 `PASS`。

- `H1 Current Operation`：当前真实经营；不得只凭活域名、DNS、旧目录或历史缓存通过。
- `H2 Independent / Local Decision`：独立商户或存在可信的本地决策信号；大型连锁、总部统一控制或仅第三方平台身份不得通过。
- `H3 Public Business Email`：固定 `PASS / FAIL`。候选必须有来源可复核、明确属于该商户并用于业务联系的公开邮箱；允许企业域名邮箱以及官网或官方商业页面公开的 Gmail / Outlook 等业务邮箱。必须记录 `Email address`、`Public source URL`、`Retrieved date`、`Source type`。私人挖掘、泄露名单、私人数据库、来源不明、归属不明、猜测或自动生成邮箱固定 FAIL。电话、Contact Form、Instagram、Facebook、Messenger、WhatsApp 均不得替代。
- `H4 Static Single-page Fit`：静态 HTML/CSS/少量前端 JS 能长期解决主要展示问题；仅可外链既有第三方预约，不登录或维护。无 CMS、后台、数据库、登录、自建预约、电商、支付、库存、服务端表单或我方持续内容责任。
- `H5 Evidence-backed Demo Basis`：至少一项 H0.5 已记录的当前展示观察能够以直接 URL/页面位置/视口复核，并明确映射到静态 Demo 改进。H5 只检查证据可复核性，不再次要求问题数量、不再次判断机会强弱，也不重复计分。
- `H6 Exclusion Check`：没有需要动态系统/重内容运营的核心需求，也不是已具备专业现代、移动端完善且转化路径清楚的网站；单页必须能独立提供长期价值。

直接排除：疑似停业；无本地决策可能；核心依赖实时库存、复杂预约、会员/认证、客户门户、自定义数据库、大型目录、多地点复杂管理、重 CMS、复杂支付或持续更新房态、菜单、价格、课程、活动、商品、档期、团队资料；需要我方运营内容或维护第三方系统。

### 100 分 Prioritisation Score

固定权重保持不变：`Website Opportunity 30 + Business Health 20 + Single-page Fit 20 + Purchase Signal 20 + Contact Viability 10 = 100`。该分数只表示该商户在当前启发式规则下更值得优先投入时间验证；不表示购买概率、回复概率、成交概率或已验证的购买意愿。85 分只能表述为 `Higher priority for testing under the current heuristic` 或同义表述。

#### A. Website / Owned Digital Presence Opportunity — 30

- `Visual / Brand Gap` — 8：真实业务、品牌、实体环境或服务质量与现站或当前官方数字触点呈现的落差。
- `Mobile Experience / Continuity` — 7：Track W 核约 390px 下的排版、导航、CTA、图片、可读性与信息获取；Track N 核访客能否从当前移动端数字触点连续理解服务、区域、信任并完成联系，不得因“无网站”自动给满分。
- `Information Hierarchy` — 5：访客能否快速理解 What、Why、Where、主要服务与联系/预约方式。
- `Conversion Path` — 5：Call、Enquire、Book、Visit、Quote 等主要路径是否清楚。
- `Demo Transformation Potential` — 5：能否在 30–60 分钟内做出明显、诚实的 Before → After；需要复杂系统才能体现价值时不得高分。

#### B. Business Health — 20

- `Review Quality & Recency` — 6：评分、评论量、最近评论与持续经营信号；评论量不等于经营健康。
- `Operating Activity` — 5：当前营业、官网/社媒活动、服务可用性与状态一致性。
- `Business Quality` — 5：产品或服务是否呈现真实市场竞争力。
- `Brand Investment` — 4：店面、品牌、Logo、摄影、社媒、展示或营销投入。

#### C. Single-page Fit — 20

判断 AU$800 静态单页能否解决约 70–80% 的主要网站或独立数字展示问题。展示需求、可归纳服务、单一明确 CTA、电话/邮箱/询价/外部预约、内容稳定且无后台责任时高分；软件系统才是核心需求时不得进入 `Priority A`。

#### D. Purchase Signal / AU$800 Fit — 20

- `Ability to Pay` — 5：AU$800 与业务规模、服务价值和公开客单信号是否合理；不得编造收入。
- `Willingness to Invest in Presentation` — 5：专业摄影、店面、品牌、活跃社媒、付费预约工具、营销、招牌或一致视觉等投入迹象。
- `Website Commercial Importance` — 5：网站是否影响游客决策、询价、预约、报价、到店、信任或服务比较；第三方平台完全覆盖需求时降分。
- `Why Now / Trigger` — 5：只接受有来源的当前触发因素。没有可靠证据时固定写 `NO CLEAR TRIGGER FOUND`，该项为 0/5。

#### E. Contact Viability — 10

只围绕公开业务邮箱真实性、可用性与可能到达决策者的程度评分。电话、Contact Form、Instagram、Facebook、Messenger、WhatsApp 不得给本项加分。

- `Email Deliverability`：只允许 `VALID / INVALID / UNKNOWN`；保留现有 MX/域名验证，但 MX 不能证明具体收件人存在。
- `Decision-maker Reach`：只允许 `DIRECT / LIKELY / GENERIC / UNKNOWN`。
  - `DIRECT`：明确 Owner / Founder / Director 的公开业务邮箱；
  - `LIKELY`：明确角色或负责人邮箱；
  - `GENERIC`：info@、admin@、contact@ 等公共业务邮箱；
  - `UNKNOWN`：无法判断邮箱由谁管理。
- 9–10：公开邮箱证据强、Deliverability VALID，且 Decision-maker Reach 为 DIRECT/LIKELY。
- 7–8：公开邮箱证据强、Deliverability VALID，但主要为 GENERIC。
- 5–6：公开邮箱属实但 Deliverability 或 Decision-maker Reach 仍有有限缺口。
- 低于 5：邮箱无效、来源/归属不清或明显难以到达业务决策者；Public Business Email FAIL 的候选不得进入 Priority A/B。

`Decision-maker Contact Viability` 不等于澳大利亚外联合规许可；合规始终是独立 Gate。

### 非评分辅助标签

以下字段不得转成隐藏分数，也不改变现有100分权重。

#### Website Relevance to Customer Acquisition

只允许 `HIGH / MEDIUM / LOW / UNKNOWN`，判断网站对获客、建立信任、询价、预约或购买决策的重要程度。

- `HIGH`：客户明显依赖 Search、Maps、旅游搜索或网站比较，Website → Call / Quote / Booking / Enquiry 直接影响业务，或客户必须通过网站理解服务、案例、区域与可信度。
- `MEDIUM`：网站能支持获客或信任，但商户同时明显依赖 Referral、平台、社媒或线下关系。
- `LOW`：有明确证据表明业务主要依赖长期合同、固定客户、Builder Network、Tender 或 Referral，网站对新增客户决策作用较弱。
- `UNKNOWN`：公开资料无法可靠判断客户获取方式。

`Good Business + Bad Website` 不自动等于 Website Need；网站差既可能是 Opportunity，也可能是 Website Irrelevance。

#### Growth Intent Evidence

只允许 `HIGH / MEDIUM / LOW / UNKNOWN`。

- `HIGH`：有新门店、新服务、扩大区域、招聘、Rebrand、新设备、新项目类型、广告投放或明确希望获得更多客户等公开证据。
- `MEDIUM`：有持续营销、服务持续增加、近期经营活动明显或持续发布新项目/案例等较弱但合理信号。
- `LOW`：必须有明确反向证据。
- `UNKNOWN`：无法从公开资料可靠判断；`No public evidence = UNKNOWN`。

不得因缺少公开信息写 No growth intent、Low motivation、Not worth contacting 或 DROP；UNKNOWN 不得单独导致淘汰或隐性扣分。

#### Website Economic Leverage

- `Industry Economic Leverage`：`HIGH / MEDIUM / LOW`，只表示行业一般情况下新增合格询盘或客户的潜在经济价值，是行业先验而非最终结论。
- `Business-specific Website Leverage`：`HIGH / MEDIUM / LOW / UNKNOWN`，结合该商户的获客方式、网站作用与新增询盘潜在价值判断 AU$800 是否容易解释。

Concreting、Landscaping、Fencing、Renovation、Fabrication、Premium professional services 一般可能较高；Café、Small retail、Gift shop 一般可能较低或中等，但不得机械套用。高杠杆行业若主要依赖长期 Builder 合同，具体杠杆可以较低；旅游地点且依赖搜索的 Café 可以较高。不得编造商户收入、客单价、利润或项目价值；资料不足写 `UNKNOWN`。

### Priority、最低线与流程

- 80–100：`Priority A`
- 70–79：`Priority B`
- 60–69：`HOLD`
- 低于 60：`DROP`

`Priority A` 还必须同时满足：A ≥18/30、B ≥12/20、C ≥15/20、D ≥12/20、E ≥6/10；H0、Track Classification、对应 H0.5、Public Business Email 与 H1–H6 全部 `PASS`；`Evidence Confidence` 至少 `MEDIUM`。Track W 完成现站普通 Desktop 与约 390px 的真实浏览器复核；Track N 完成网站状态核验、当前官方数字触点的适用桌面/移动端复核及拟议 Demo 双视口方向复核。任何最低线未达到，即使总分 ≥80 也不得进入 `Priority A`，必须说明降级原因。`Priority B` 同样要求 H0、Track Classification、对应 H0.5、Public Business Email 与 H1–H6 全部 `PASS`。

流程固定为：`Priority A → Evidence Review → Human Review → Demo Authorization`。`Priority A` 不等于自动制作 Demo，更不等于外联授权。

### Evidence Confidence 与访问失败

`Evidence Confidence` 只允许：`HIGH / MEDIUM / LOW`。多个当前公开来源印证为 HIGH；核心事实基本确认但有少量缺口为 MEDIUM；主要依赖搜索摘要、旧缓存、第三方聚合页、不可访问网站、冲突或推断为 LOW。推断不得写成事实；`Priority A` 不得为 LOW。

- 403、WAF、verification page、timeout 或 access denied 固定记录 `ACCESS_BLOCKED_FROM_CURRENT_ENVIRONMENT`，不得写成网站故障或据此计分。
- 没有实际视觉复核固定记录 `VISUAL_REVIEW_BLOCKED`；不得虚构移动端、视觉问题或 Browser PASS。
- Priority A 必须真实检查 Desktop 与约 390px 下的 Hero、Navigation、Typography、Images、CTA、Services、Contact path、Mobile layout、Broken elements 和明显运行问题；HTML 抓取或搜索摘要不能替代。

### Priority A / B 强制五问

1. `Why this business?`：为什么这是健康且值得研究的商户？
2. `What is wrong with the current digital presentation?`：Track W 列出现站具体访客问题；Track N 列出当前官方数字触点的具体展示缺口，不能只写 “no website” 或 “website outdated”。
3. `Why can AU$800 one-page solve it?`：为什么固定产品适配？
4. `Why is this worth manual commercial validation?`：哪些公开 Purchase Signal 支持优先验证？不得写成购买概率。
5. `Why now?`：必须有证据；没有则原样写 `NO CLEAR TRIGGER FOUND`。

### Demo Effort

只允许 `LOW / MEDIUM / HIGH`。`Target Demo Production Time = 30–60 minutes`，每个 Demo 必须另记真实人工/Agent 执行时间 `Actual Demo Minutes`，不得只记估算。优先 stronger candidate under the current heuristic + meaningful visual improvement + LOW/MEDIUM Demo Effort。若需要 3–5 小时或 `HIGH`，即使分数较高也应降低实际 Demo 优先级。连续多个 Demo 明显超过60分钟时触发 `SOP Cost Review`，不得通过降低质量、跳过移动端/CTA/Bottom 40% 或扩大自动化来掩盖超时。

### 结果闭环字段

每个进入中筛的商户保留：`Prospect Source Type`、`Prospect Source URL`、`Track`、`Website Status`、`Website Status Evidence`、`Target Ratio`、`Actual Qualified Ratio`、`Deviation Reason`、`Website Relevance to Customer Acquisition`、`Growth Intent Evidence`、`Industry Economic Leverage`、`Business-specific Website Leverage`、`Public Business Email`、`Email address`、`Public source URL`、`Retrieved date`、`Source type`、`Email Deliverability`、`Decision-maker Reach`、`Prioritisation Score`、`Priority`、`Evidence Confidence`、`Demo Effort`、`Actual Demo Minutes`、`Demo Created`、`Outreach Sent`、`Delivered`、`Replied`、`Positive Reply`、`Serious Discussion`、`Asked Price`、`Proposal Sent`、`Deposit Paid`、`Final Sale`、`Final Price`、`Reason Lost`。Track N 的 `Website Status Evidence` 必须包含三个检索面的核验日期、查询词、直达 URL 与结果；Track W 必须记录归属明确的官网 URL。尚未发生的真实结果保持空值，不得模拟、预测或把“无证据”写成否定事实。

Prioritisation Score 只用于排序后续人工验证投入；不预测回复、价格询问、定金或成交概率。第一单前不因少量样本随意调整权重；只有积累真实结果后，才可另行授权校准。

### 合规独立 Gate

公开邮箱、有效 MX、决策者身份或 E 高分都不构成营销同意、送达证明或发送许可。进入 Demo、起草、发送、登录邮箱、提交表单和自动化仍分别服从本文件第 9–11、13 节及当前用户的具体授权。

## 13. 客户会话最终回报：OUTREACH DRAFT PACKAGE

客户研究、Demo 准备或外联准备会话在最终回 PMO 时，必须直接提交以下完整邮件包。正文统一使用本文件中的 Sender：Eli、`[REDACTED_EMAIL]`、`+86 182 6851 4405`，无需再次询问。

本节是内部证据包契约，字段继续完整保留；其中 `Recommended subject`、`Plain-text body` 与 `HTML body` 必须按 [OUTREACH_EMAIL_SOP.md](OUTREACH_EMAIL_SOP.md) 生成。首封对用户的最终展示仍遵守 SOP 的“只返回 Subject + Email body”，不得把内部证据包误当成对外邮件正文。

```text
## OUTREACH DRAFT PACKAGE

Recipient email:
Public Business Email: PASS/FAIL
Email address:
Public source URL:
Retrieved date:
Source type:
Email Deliverability: VALID/INVALID/UNKNOWN
Decision-maker Reach: DIRECT/LIKELY/GENERIC/UNKNOWN
Consent/lawful-basis:
CLIENT-VISIBLE INTERNAL-TEXT GATE: PASS/FAIL
OUTREACH PRE-SEND INTERNAL-TEXT GATE: PASS/FAIL/NOT RUN
FINAL LINK / RECIPIENT PATH CHECK: PASS/FAIL/NOT RUN
Internal-text scan scope/hits:
Recommended subject:
Demo URL:
Demo screenshot:
Plain-text body:
HTML body:
Authorization: DRAFT ONLY — NOT AUTHORIZED TO SEND
Blocking issues:
```

### 字段要求

- `Recipient email`：只允许填写当前已核验的公开商业邮箱。必须同时列出 Email address、Public source URL、Retrieved date、Source type、Email Deliverability 与 Decision-maker Reach；无可靠邮箱写 `NOT VERIFIED`，Public Business Email 固定 FAIL，不得推测、组合或猜测地址。电话、Contact Form 或社交媒体不得替代。
- `Recommended subject`：必须基于该商户的一条具体观察，不得完全通用、贬低现站或作无法证实的承诺。
- `Plain-text body`：按 Outreach Email SOP 的固定首封结构完成 Owner、business、town、specific observation、business outcome 个性化。Owner 未知时使用 `Hi [Business name] team,`，不得猜姓名；保留完整裸 Demo URL fallback。
- `HTML body`：在与 SOP 相同的正文结构下，必须包含可点击文字 Demo 链接、默认 1 张包裹在 Demo `<a>` 中的可点击截图、含业务名的 alt text，以及完整裸 URL fallback。使用 UTF-8；默认最多 2 张图、单张尽量不超过 300KB、显示宽度约 600px；禁止脚本、复杂 CSS、远程字体、追踪像素、隐藏图片、UTM、识别性参数或收件人行为追踪。
- `Demo URL`、`Demo screenshot`：只有实际存在时才填写。否则写 `NOT READY`，正文保留 `[Demo URL]` / `[Demo Screenshot URL]` 占位，整个邮件包保持不可发送。
- `Consent/lawful-basis`：仅可写 `VERIFIED` 或 `NOT VERIFIED`，并列出邮箱公开来源、是否存在拒绝营销声明及服务与该邮箱业务职能的相关性。邮件模板不能替代法律依据。
- `CLIENT-VISIBLE INTERNAL-TEXT GATE`：按本文件 14.4A 记录 `PASS/FAIL`；同时记录扫描范围与命中项，不得粘贴秘密。
- `OUTREACH PRE-SEND INTERNAL-TEXT GATE`：按 [OUTREACH_EMAIL_SOP.md](OUTREACH_EMAIL_SOP.md) 的发送前权威 Gate 记录 `PASS/FAIL/NOT RUN`。内部包中的 Authorization、Rights status、Consent/lawful-basis 等治理字段必须保留，但不得复制进客户邮件正文或截图。
- `FINAL LINK / RECIPIENT PATH CHECK`：按 Outreach Email SOP 4A 记录 `PASS/FAIL/NOT RUN`，并保留最终 URL/截图/收件地址的核验结论；任何 `FAIL/NOT RUN` 均使邮件包不可发送。
- `Authorization`：默认固定为 `DRAFT ONLY — NOT AUTHORIZED TO SEND`。只有当前用户对该具体商户明确批准发送后才可变化；研究、Demo 完成或 PMO 验收本身均不构成发送授权。
- `Blocking issues`：邮箱、当前经营、Demo 访问/描述状态、素材权利、合规依据或退订机制任一未通过，都必须逐项列出；无阻断也要写明依据，不得留空。

### 阶段规则

- 仅研究阶段也必须交邮件草稿；`Demo URL` 与 `Demo screenshot` 写 `NOT READY`，正文保留占位，禁止假称已有 Demo。
- 只有 Demo 已实际完成并经 PMO 验收，才可填写真实可访问链接与实际截图 URL/CID；必须按真实状态称 access-controlled private 或 public/unlisted，不得把公网链接称 private。
- 没有有效公开商业邮箱时，`Recipient email: NOT VERIFIED`；不得输出猜测地址，状态不可发送。
- 邮件包整理完成只代表可供 PMO 审阅，不代表可以登录邮箱、提交表单、发送、群发或自动化。

## 14. Demo Production v1.0

本节是 Unlisted / Independent Concept Demo 制作的权威规则。Demo 是一个“精美的核心业务切片”：目标用 30–60 分钟做出客户定制、纯静态的单页概念，证明信息结构与呈现机会。它既不是粗糙半成品，也不是完成 90% 的正式网站，更不是替客户建立未经授权的正式资产、后台或业务系统。`Polished Cold Demo ≠ Finished Production Website`。

### 14.1 制作授权 Gate

- 只有当前用户针对具体商户明确授权制作 Demo 后，执行 Owner 才能开始。`Priority A / Priority B`、研究完成、评分、PMO 验收或存在公开素材均不自动授权制作。
- “用户授权制作概念 Demo”不等于“客户授权使用 Logo、摄影、评价、商标、员工形象或其他资产”。不得把用户授权写成客户授权。
- 没有可定位的直接客户授权证据时，素材权利状态固定写：`CUSTOMER AUTHORIZATION: NOT VERIFIED`。

### 14.2 澳洲同行参考

- 每个 Demo 必须先研究 3–5 个当前澳大利亚优秀同行网站，并逐个记录 `URL`、核验日期和具体借鉴点。
- 只可借鉴本土化的信息结构、视觉规律、CTA 方式与信任表达原则。
- 禁止复制同行的布局、文案、代码、图片、Logo、评价、商标或数据；参考研究不能成为克隆、仿冒或素材授权依据。

### 14.3 产品与时间边界

- 交付形态仅为精美、客户定制的静态 HTML/CSS/少量前端 JS 单页；无后台、数据库、登录、自建预约、电商、支付、库存、服务端表单或数据采集。
- `Target Demo Production Time = 30–60 minutes`，并必须记录真实 `Actual Demo Minutes`。若诚实完成需要 3–5 小时、持续内容维护、后台或动态系统，立即停止并回报 `HIGH Demo Effort`，由 PMO 降级、换候选或重新授权范围。连续多个 Demo 明显超时触发 `SOP Cost Review`。
- 第三方预约、点餐或付款只能保留为客户已有系统的外链；Demo Owner 不登录、不重建、不维护。
- 设计目标为：视觉完成度约 85–90%，内容覆盖约 35–50%，功能只完成一个核心 CTA / 主客户路径。这些百分比是范围设计目标，不是虚假精确的验收指标；Owner 必须说明本 Demo 实际展示与保留的范围。

默认核心结构：

1. `Hero`：商户名、地域、核心服务、单一 CTA、一张专用主图；
2. 3 个简短核心价值点；
3. 2–3 项最重要服务；
4. 1 组已核验信任信号；
5. 最终 CTA：电话、`mailto:` 或客户已有外链，并与 Hero 的同一核心客户路径一致。

可按行业做最小必要调整，但不得扩成完整站。Demo 必须在 5 秒内让老板感知：这是我的业务；你理解核心服务；呈现比原站更清晰、体面；同时它仍明确是 `Concept Preview`。

- Demo 页面和 Owner 最终回报都必须列出 `Shown in Demo` 与 `Reserved for Final Delivery`，使内容边界和客户预期可解释。
- 禁止为了给正式版“留空间”而故意粗糙、留 Bug、降低图片质量、制作半成品模板、隐藏移动端问题，或空口承诺“正式版会更好看”。
- 同样禁止 Demo 覆盖全部业务、全量服务、完整 FAQ、法律流程或完整内容，导致正式交付只剩微小增量。
- 精修最低线包括：Business Fidelity；完整 Hero；中段清晰节奏；后约35–40%不塌陷；Closing/Footer 有真实设计；Desktop 与约390px 无横向溢出、CTA可见、字体可读、图片与链接正常。禁止 `Big Typography CTA Syndrome`、用空白和超大字体假装高级感、或让不同行业共享完全相同的 Closing Architecture。

### 14.3A Bottom 40% Commercial Architecture

页面后约 40% 仍是 Cold Demo 的商业说服区，不能退化为信息/联系方式重复 → generic oversized CTA → minimal footer。按 Desktop 实际滚动高度理解“后约 40%”，不是按 section 数量机械切割。该区域必须：

- 继续承担 `Proof / Reassurance / Specificity / Conversion / Brand Close` 中最小充分的若干真实任务；不要求全部包含；
- 至少提供一项此前未出现的新商业信息，以及至少一次有业务意义的新视觉回报；只有事实可证、素材权利允许时才使用，不得以无关图库或虚构评价、项目、奖项、数字、团队、保证填充；
- 让叙事从“这是什么”推进到“为什么可信/适合我/下一步是什么”，不能只重复服务、电话、邮箱或首屏承诺。

#### Closing Strategy Library（选择策略，不是模板）

Owner 必须根据行业、已核验业务事实、可用合法素材与核心转化路径，选择并简述为何采用最小充分组合：

- `Proof`：已核验评价、项目证据、资质或真实经营信号；
- `Reassurance`：服务流程、适用对象、边界、地点或常见顾虑；
- `Specificity`：服务范围、菜单/体验摘要、交付内容或差异点；
- `Conversion`：与主路径一致、信息充分且可执行的下一步；
- `Brand Close`：与商户地域、氛围或价值主张一致的最后印象。

Cleaning、Landscaping/Trades、Restaurant/Cafe、Tour/Experience、Beauty/Wellness、Professional Service 只是不具约束力的行业示例；不得据此固化版式或强制模块。禁止把所有后半页统一改成 `Gallery + Process + Reviews`。

#### Visual Rhythm 与 Bottom Visual Payoff

- 用 `image-led / text-led / proof-led / data-led / gallery-led / CTA-led` 描述实际节奏，避免后半页连续多个纯文字区或跨行业同构收尾。
- 不强制每段加图、动画或 Gallery。没有合法视觉素材时，可用有信息价值的流程、地点、服务范围、菜单摘要或事实型构图形成视觉回报；不得用装饰假装商业信息。
- 每张图片仍服从图片唯一性、Hero/Banner 一图、真实性与权利台账；本节不授权额外素材或放宽事实门槛。

#### Closing Pattern 判定

- `BAN`：没有新商业信息的超大 `Ready to / Let's / Start your / Transform your / Get started` 类标题 + 大纯色块 + 单按钮 + 联系方式 + 极简 footer；以重复联系方式或同一事实冒充新收尾；跨行业复制同构收尾。
- `WARN`：footer 紧跟信息表、后半页连续两个 text-only 区块、CTA 只是重复首屏且没有新 reassurance/specificity。必须说明保留理由或调整节奏。
- `ALLOW WITH JUSTIFICATION`：大型 CTA 确有业务特异性、新信息、清楚转化理由与节奏作用；Owner 必须记录为何它比其他收尾更适合该商户。

#### 成本与适用范围

- 不得因修复后 40% 把单个 Cold Demo 从 30–60 分钟扩大为 3–5 小时；需要高成本素材、额外深研或复杂制作时标记 `COSTLY` 并停止扩范围，交 PMO 决定降级、换策略或换候选。
- 新 Demo 与尚未发送的 Demo 适用本 Gate；未发送 Demo 失败不得进入外联准备。已发送 Demo 默认不追溯；只有准备再次外联或重用时才重新验收。
- 本 Gate 不暂停客户研究，也不改变静态边界、`Shown in Demo / Reserved for Final Delivery`、客户素材、制作、部署或发送授权。

### 14.3B Business-Fidelity QA（severity override）

触发条件：新建 Demo，或在客户指出“没有说明真实服务/业务”后重做 Hero、服务卡、CTA 或配图。此 Gate 防止把真实多业务商户收窄成可替换的泛化品牌页；它是客户可见业务失真的高严重度单例预防规则，不是按单一行业固定版式。

- **必须动作**：在写页面前建立内部 `Business-fidelity map`。逐项把 Hero 的核心服务、每张服务卡的标题/描述、CTA 路径和每张关键图的 `Placement/Purpose` 对应到已核验的公开业务证据；不得用未在证据中出现的泛化类别替代已展示的核心服务，也不得凭空扩展能力。
- **可复核证据**：内部 map 至少记录每项页面承诺的证据 URL/位置、核验日期与页面版位；最终在 Desktop 和约 390px 真实打开页面，复核 Hero、2–3 项服务和 CTA 均能与 map 一一对应。它可与图片权利台账共存，但不得成为客户可见内容。
- **FAIL 状态**：任一核心服务被遗漏、错误归类、泛化到无法识别，或关键图暗示不存在的服务事实，固定 `BUSINESS-FIDELITY QA = FAIL` 与 `CLIENT-SHOWABLE DEMO = FAIL`；必须先重选最小核心业务切片并重做受影响的文案/视觉，不能只改标题或加内部免责声明。

### 14.4 Image2 与图片权利

- 可使用 Image2 生成原创概念图，或优化已取得合法使用权/客户明确授权的图片；客户图片无法合理修复时，可生成原创概念替代图。
- 每张图片必须在内部台账保留原图或生成图的来源、处理方式与权利状态，并明确标记 AI/概念素材；不得把生成图伪装为客户真实项目、门店、员工、设备、服务结果或已授权正式资产。
- 同一图片不得跨 Hero、Banner、卡片、服务区或其他模块重复复用；每张图只服务一个明确的 `Placement` 和 `Purpose`。不得用裁切、调色、镜像或其他同图变体冒充不同素材。
- 每个 Hero 或 Banner 只允许一张专用主图；禁止拼贴、多图叠加、轮播，或在同一区域复用多张主视觉。
- 设计需要图像的 Hero 或 Banner 不得以纯色、渐变、抽象色块或空白替代主视觉；必须使用 Image2 生成一张具体、可描述且与内容相关的专用图。为文字可读性添加的背景遮罩或对比层可以保留，但不得冒充主视觉。
- 生成前必须先从商户现站和已核验资料提取行业、品牌主题、服务内容、地域/环境、色彩气质与目标受众约束，再为每个版位分别写逐图生成 brief。每张生成图必须同时符合这些约束和该版位内容。
- 公开商户素材默认只作只读研究参考。若在已授权的 Unlisted / Independent Concept Demo 中临时使用，必须登记明确来源、采用最小必要范围、显示 `Concept Preview` 标识，并保持 `CUSTOMER AUTHORIZATION: NOT VERIFIED`；不得对外声称客户授权。
- 平台条款、许可、摄影权、商标权或其他权利不明时，不使用该素材，改用可诚实使用的原创概念图或不用图片；客户可见 Demo 禁止占位图。
- 生成图不得凭空改变业务事实。禁止假门店、假员工、假设备、假项目、假客户、假认证、误导性 before/after、虚假评价或不可证实服务效果；人物或场景只能明确作为概念性氛围图，不得暗示为真实客户资产或经营事实。
- 图片台账至少包含：`Placement`、`Purpose`、`Prompt or brief`、`Source`、`AI status`、`Rights status`。每个文件记录 hash；重复 hash 或同图变体不得计作不同素材。

### 14.4A CLIENT-VISIBLE INTERNAL-TEXT GATE｜Demo 权威细则

Cold Demo 的客户可见页面只承担业务展示与 Concept 身份识别。制作过程、AI 工具、素材台账、权利状态、授权缺口与 PMO 风险属于内部治理证据；真实性必须通过不虚构事实、诚实选择概念素材和完整内部台账实现，不得靠页面堆免责声明“洗白”。

#### Client-visible 默认 BAN

页面可见内容默认禁止出现以下文字及同义表达：

- `AI-generated`、`generated with AI`、`AI image`、`stock image`、`placeholder`、`mock content`；
- `CUSTOMER AUTHORIZATION: NOT VERIFIED`、`rights status`、`source URL`、`prompt`、`hash`；
- `internal review`、`PMO`、`draft only`、`not authorized to send`、`legal-risk note`；
- 素材授权说明、内部制作说明，或其他制作流程/治理免责声明。

上述信息必须保留在内部 `Image Ledger`、研究报告、验收回报或独立 README/metadata 中；内部文件不得被页面导航、CTA、footer 或提供给客户的链接暴露。`CUSTOMER AUTHORIZATION: NOT VERIFIED`、`AI status`、`Rights status` 仍为内部必填，绝不能因移除页面文字而省略。

客户可见页面只允许最小、自然且不破坏体验的身份标识，例如 `Independent concept preview` 或 `Unlisted concept preview`；页面身份标识不得使用 `private`。不得写成长段免责声明，不得强调 AI、授权缺口或法律状态；邮件中的访问状态仍须准确描述。

#### 图片、语义与源码边界

- 移除可见 AI/权利说明不放宽真实性：禁止把概念图片冒充客户真实员工、门店、项目、设备、客户或 before/after。无法诚实使用的图片必须重生成、换成不陈述业务事实的氛围/服务概念图或不用；不得靠免责声明保留误导素材。
- 图片 `alt` 必须是业务相关的自然描述，不得写 `AI generated image` 等技术说明；同时扫描导航、正文、CTA、footer、modal、tooltip、图片 `figcaption/alt/title/aria-label`、meta description、structured data，以及错误/加载状态，避免泄露内部制作或治理信息。
- HTML comments 可保留最小且非秘密的内部说明，但公开包或截图包最好不含秘密、个人数据或冗余治理信息；注释不得成为绕过内部台账或把治理信息暴露给客户链接的方式。

本节适用于新 Demo 与所有尚未发送的 Demo。已发送 Demo 默认不追溯；再次使用或再次外联前必须重新通过本节 Gate。本节不删除最小 Concept Preview 身份标识，也不改变外联、部署、素材授权或客户授权边界。

### 14.5 发布、发送与正式交付前复核

- 用户可以授权制作 Unlisted / Independent Concept Demo，但不能替客户授予其 Logo、摄影、评价、商标、个人肖像或业务数据的权利。
- 正式交付、公开发布、生产上线或对外发送前，必须重新核验客户授权、每项素材权利、Demo access state（access-controlled / unlisted public / other）及外联合规；任何一项未通过即停止。`Unlisted ≠ Access-controlled`，`Noindex ≠ Private`。
- Demo 制作授权不包含部署、公开发布、生产上线、邮件/IG 发送、登录账户或付款权限；这些动作仍需当前用户针对具体目标分别明确授权。
- 正式交付的增量来自“完整与真实”：全部客户确认的服务、正式文案、客户批准的最终图片、完整评价/资质/地图/联系/外部预约、完整 Desktop/Mobile 浏览器 QA、正式域名与交接。不得依靠修复 Demo 中故意留下的 Bug、补回被刻意隐藏的适配问题或只增加装饰来制造价值差异。

### 14.6 Demo 验收

Demo 必须同时取得 `Hook PASS` 与 `Product PASS`；任一未通过，不得进入外联准备。

#### Hook PASS

- 首屏强而克制，并符合该商户品牌，不靠夸张或虚假事实吸引注意；
- 商户、地域、核心服务和单一 CTA 明显定制，不能替换名称后套给其他客户；
- 与当前数字展示存在清晰、诚实且有意义的升级；Track N 不得虚构原站；
- 核心服务准确，信任信号均已核验；
- 没有模板感、廉价 AI 感、拼贴感或与行业不符的视觉；
- 整体达到老板愿意展示给员工、家人或客户的体面感，同时清楚标记 `Concept Preview`。

#### Product PASS

以下全部必须有实际证据：

1. 普通 Desktop 与约 390px Mobile 均经真实浏览器复核；
2. 完成全页图片唯一性检查：同一图片、重复 hash 或同图变体没有跨版位复用，每张图均对应唯一 Placement/Purpose；
3. 每个 Hero/Banner 恰有一张专用主图，无拼贴、多图叠加、轮播或同一区域多主视觉，也没有用纯色、渐变、抽象色块或空白替代所需图像；
4. 每张图与行业、品牌主题、服务内容、地域/环境、色彩气质、目标受众及所在模块内容一致，且没有制造虚假业务事实；
5. 关键图片在 Desktop 与约 390px 下均加载正确，裁切合理、主体可辨、文字可读，AI/概念/来源状态与图片权利台账一致；
6. CTA、电话、邮箱、地图、Instagram 和第三方外链按既定范围正确；
7. 无后台、数据库、登录、服务端表单、支付或数据收集；
8. 页面显著显示 `Concept Preview`，不得暗示客户已委托、认可或上线；
9. 截图及后续邮件继续遵守 [OUTREACH_EMAIL_SOP.md](OUTREACH_EMAIL_SOP.md) 与本文件第 9、13 节的尺寸、链接、隐私、无追踪、合规和授权规则；正式发送或公开前仍须重新核验客户授权与素材权利，未核验时保持 `CUSTOMER AUTHORIZATION: NOT VERIFIED`。
10. 内容覆盖没有越界为完整站，也没有以粗糙、Bug、低图质或移动端缺陷制造“未完成”；页面和回报中的 `Shown in Demo / Reserved for Final Delivery` 与实际范围一致。
11. 完成 `CLIENT-VISIBLE INTERNAL-TEXT GATE`：按 14.4A 扫描全部客户可见页面状态与客户可访问链接，不含 AI/素材权利/授权缺口/内部治理免责声明；内部台账仍完整且未由页面暴露。
12. 若触发 14.3B，`BUSINESS-FIDELITY QA = PASS`：内部 map、Desktop 与约 390px 的最终页面均已核对，且没有用泛化服务名或概念图掩盖真实业务范围。

任一命中固定 `CLIENT-VISIBLE INTERNAL-TEXT GATE = FAIL` 与 `CLIENT-SHOWABLE DEMO = FAIL`，不得进入截图、邮件或外联准备。应移除可见治理文字并修正其背后的误导素材或事实问题，不能只隐藏文字后保留不真实内容。QA 回报固定记录 Gate 状态、扫描范围与命中项，不得粘贴秘密。

#### Bottom 40% QA Gate

除 `Hook PASS` 与 `Product PASS` 外，Owner 必须在 Desktop 实际滚动高度约 60–100% 的区域独立审查，并在约 390px 复核同一叙事与交互；“约”用于定位后段，不是虚假精确评分。逐项回答：

1. 是否出现至少一项此前未出现、可核验且与购买判断有关的新商业信息？
2. 是否有至少一次有业务意义的新视觉回报，或在无合法素材时使用了信息型构图，而非无关图库/虚构证据？
3. 是否避免重复信息、重复联系方式、generic oversized CTA 与连续 text-only 导致的质量塌陷？
4. 收尾是否具有该行业与该商户的特异性，而非可跨 Demo 替换名称复用？
5. 叙事是否从服务理解推进到 Proof、Reassurance、Specificity、Conversion 或 Brand Close 的最小充分组合，并记录选择理由？

任一根本项失败，固定 `BOTTOM 40% COMMERCIAL QA = FAIL`；未发送 Demo 不得进入截图、邮件或外联准备。不得以增加 section 数、Gallery、动画或零散视觉补丁掩盖商业架构失败；应在 30–60 分钟边界内重选最小策略，超出则标记 `COSTLY` 并停止扩范围。

浏览器截图、HTTP 200、构建成功或 Owner 自述均不能单独替代 `Hook PASS`、`Product PASS`、`Bottom 40% QA Gate` 或上述验收证据。
