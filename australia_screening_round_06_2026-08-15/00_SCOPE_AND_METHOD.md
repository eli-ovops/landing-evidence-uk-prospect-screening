# Round 06 — scope, gate, and method

## Status

**研究完成，待 PMO 验收。** 本轮是公开、只读研究；没有联系、发送、登录、提交表单、制作或部署 Demo、下载/复用商户素材、付款或修改既有轮次。

## Objective and non-negotiable gate

- 目标是从新城市的服务型小商户中找出可进入单客户深度研究的 AU$800 静态单页候选；本轮的 3 家为 `KEEP — PMO review candidate`，不是 Demo 或外联授权。
- 允许页面只承载稳定的定位、服务范围、精选作品/评价（须另获素材许可）、地域和 `mailto:` / `tel:` / 官方社媒或既有第三方预约外链。
- 禁止承载/维护可用日期、报价变动、支付、客户登录、文件下载、图库交付、库存、服务端表单、数据库或第三方后台。
- 公开邮箱、可解析 MX 和可见站点只能证明联系入口/域名邮件路由，不证明该邮箱可投递、同意、预算、网站控制权或购买意愿。

## Research method and provenance

Retrieved: **2026-08-15 (AEST/Asia Shanghai session date)**.

1. 对 6 个尚未重点覆盖地点作适配比较；排除 Port Douglas、Bright、Mudgee、Daylesford/Hepburn Springs、Kiama。
2. 在 3 个选定区域手工建立 60 家宽筛池。来源为各商户官网、公开旅游/行业目录；没有批量抓取 Google Maps、Instagram 或绕过 CAPTCHA。
3. 对 10 家中筛，逐项核官网公开经营/本地身份、公开商业邮箱、MX、静态边界及可复现展示问题。
4. 对最终三家读取各自公开官网关键页、核 MX，并将自述与独立目录/公开可见证据分开。Instagram OpenCLI backend 需要未安装 Chrome extension；因此不使用 IG 作为 PASS。

## Tool record and limits

- 使用 `agent-reach`：先执行 `agent-reach doctor --json`。其 doctor 显示网页/Jina 可用，Instagram backend 为 `warn`（需浏览器扩展/登录），未安装或登录。
- 按 `agent-reach` 搜索路径调用 Exa 一次；本轮原错为 **`Unknown MCP server 'exa'`**。按规则未重试同一路径，改用普通公开网页搜索/Jina reader 与商户官网逐页读取。
- 使用 `prospecting` 的 Local SMB 流程与合规要求：仅公开商业联系渠道；每个最终邮箱记录来源和日期；没有把目录或自述当作同意。
- 没有运行 `audit-website`：其 crawler 是可选工具，本轮的判定需要逐页可复现证据而非自动扫描分数；不创建 audit 配置或缓存。
- MX 是本机只读 DNS 查询；未做 SMTP/投递测试。

## First-principles and red-team test

| Question | Minimum evidence required | Abuse / failure mode | Blocking evidence | Result |
|---|---|---|---|---|
| Is AU$800 static work useful? | stable service story can help before any booking | selling a visual reskin to a modern conversion site | dynamic booking/store/content is core, or site is already clear | only P1–P3 retain a narrow page case |
| Is it a local decision target? | named individual/operator and local service evidence | treating a directory listing as ownership | chain/venue/platform control or unknown operator | P1–P3 use individual-branded sites |
| Can the public email be used? | published business-role address + source + domain MX | treating public address as consent | address guessed, personal-only, or MX absent | sources/MX pass; consent remains NOT VERIFIED |
| Do defects actually affect enquiries? | two concrete, URL-specific presentation/route defects | calling a site “old” based on taste | only aesthetic preference or reader/tool failure | P1–P3 list reproducible copy/route/information defects |
| Could a Demo be implied? | separate user authorization + rights + private link | draft email mistaken for sending or a finished demo | no authorization, no approved materials, no private Demo | all Demo fields are NOT READY |

Residual risk: all commercial signals are public proxies; none prove AU$800 acceptance, purchasing authority, asset rights, legal basis or true mobile interaction. Any later Demo/outreach needs a new, merchant-specific authorization and independent PMO acceptance.
