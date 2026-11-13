# 第三轮范围与判定标准

## 本轮身份与状态

- 角色：第三轮筛选长期独立执行 Owner，向项目 PMO 回报。
- 决策目标：在 5 个新的澳大利亚区域型旅游目的地中选择 1 个地区，人工核验 12–15 家真实独立商户，寻找适合 AU$800 级纯静态单页的首单候选。
- 截止时间：`retrieved_at=2026-08-14`。
- 当前阶段：P0/P1 公开研究与机会筛选；未立项、未联系、未构建、未制作 Demo、未部署。
- 排除地域与去重：排除 Port Douglas / Douglas Shire、Bright，并排除第一、二轮 CSV 中共 30 家商户。
- 唯一输出目录在开始前已确认不存在，未覆盖旧文件。

## 产品硬门槛

候选产品必须可由静态 HTML/CSS/少量前端 JS 完成，且单页本身长期提供完整价值：清楚说明是谁、提供什么、为什么可信、适合谁、作品/环境、服务边界以及如何联系。允许 `tel:`、`mailto:`、Google Maps、Instagram，以及客户已经拥有的第三方预约/支付系统外链。

以下任一情况直接排除：需要我方建设或维护 booking、availability、payment、ecommerce、账号、数据库、CMS、后台；需要我方持续更新价格、库存、菜单、营业时间、课程、行程、活动、商品目录或新闻；购买决策以实时价格/库存/档期/班次为核心；静态单页离开动态系统便没有独立价值。

Top 必须同时为绿色：

- `Static HTML/CSS/JS only = YES`
- `Backend dependency = NONE`
- `Ongoing content responsibility = CLIENT / NONE FOR US`
- `Content stability` 有长期稳定理由
- `External-system boundary` 只列客户已有系统，并明确我方不登录、不配置、不维护

## 商户门槛与评分

1. 近 6 个月有当前正常经营证据；历史目录或 ABN 不单独成立。
2. 独立经营或本地控制网站；连锁/总部控制排除。
3. 至少两个可复现数字展示问题，其中至少一个影响决策或联系。
4. 至少两个品牌投入/支付能力信号。
5. 有来源明确的当前公开商业邮箱且其域名存在 MX，或有近 90 天活跃官方 Instagram。
6. 联系分：邮箱+活跃 IG=10；邮箱=8；活跃 IG=6；两者都无=0 并淘汰。
7. 总分：Business Health 25 + Website Pain 25 + Visual Upgrade 20 + Purchase Signal 20 + Contactability 10。
8. `70–79 = Qualified`，`80+ = Top`；Top 另要求 Purchase≥12、Pain≥12、Contact≥6 且无硬冲突。

本轮最终口径：`Qualified` 专指 70–79 且全部硬门槛通过的候选；`Top` 专指 80+ 且全部硬门槛通过的候选，不重复计数。

## 研究与合规边界

- Google Maps 仅作人工发现辅助；未批量抓取、未保存 Place ID、未绕反爬。
- 来源优先级：商户官网/官方社交、官方旅游或政府页面、已存在的客户第三方平台，再到公开目录线索。
- 事实、推断、置信度、反证和证据缺口分开记录；工具分数不代替人工判断。
- 未登录任何平台；未读取 secret/token/cookie/`.env`；未付费、未联系、未发送邮件/DM/电话。
- 未开发 scraper、CRM、scheduler 或 automation；未复制商户素材。

## 方法与工具边界

- `prospecting`：Local SMB 发现、去重、联系来源与合规门禁。
- `agent-reach`：doctor 体检；Instagram 通过 OpenCLI 只读少量官方账号。Exa doctor 显示可用，但实际调用返回 `Unknown MCP server 'exa'`，停止重试并改用公开网页搜索/Jina 阅读；未安装或改配置。
- `audit-website`：Squirrelscan v0.0.85，只读 quick audit；审计缓存放在 `/tmp`，不进入交付目录。TLS/WAF/自动化失败不算网站故障。
- `cro`：价值主张、CTA、信任、异议处理、移动摩擦。
- `playwright`：Top 官网真实 Chromium，无登录，桌面 1440×900 与移动 390×844；未提交表单。
- `evidence-gated-project-workflow`：事实/推断/反证、置信度、未验证状态。
- `website-delivery-sop`：执行线程、P0/P1 研究边界。已完整读取 DS-002B V2.5，SHA-256 `5b70133e7a155a713c130d07d883afffbd1f57eaa7bfc7c2e2c3dfc9f9bb926a`，mtime `2026-08-09T16:00:52+0800`；本轮不创建 `site.yaml`，因为没有进入站点立项/构建/部署。

## 第一性原理与红队结论

- 前提：卖点不是“能做网页”，而是静态单页在没有我方持续维护和后端责任时仍能改善游客/婚礼客户的理解、信任与联系。
- 误用方式：把 booking/商店外链后，把动态业务伪装成静态适配；用站点审计分数代替购买痛点；用旧目录或版权年份冒充当前经营。
- 阻断证据：逐家记录动态依赖、内容责任、当前经营、联系 MX/IG、两个具体问题；Top 再做双视口浏览器复核。
- 残余风险：公开证据不能证明真实预算、决策权、当前转化率、邮件可投递性或购买意愿。
- 闭环：本轮只提交 `待验收` 名单；联系、需求访谈、报价、Demo、建站与部署需后续单独授权和真实客户验证。
