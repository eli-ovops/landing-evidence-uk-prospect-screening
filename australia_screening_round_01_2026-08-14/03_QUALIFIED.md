# 03｜Qualified（2 / 上限 5）

以下仅代表下一轮人工复核/候选排序，不是联系批准，更不是最终验收。未把“分高”替代硬门槛或数据健康度。

| 商户 | 业态 | Health 25 | Website Pain 25 | Visual 20 | Purchase 20 | Contact 10 | 总分 | 关键数据健康度 | 置信度 |
|---|---|---:|---:|---:|---:|---:|---:|---|---|
| Port Douglas Tropical Trips | 小团雨林游 | 22 | 19 | 16 | 16 | 8 | **81** | Health/Website Pain 为部分，其余完整 | Medium |
| Tony's Tropical Tours | 家族雨林游 | 24 | 13 | 17 | 18 | 8 | **80** | 完整（不含未测试的订票转化） | High |

## Port Douglas Tropical Trips — 81，条件 Qualified

- **独立/本地决策**：官方页面将 Colin Johanson 标为 Owner / Operator；ABN Lookup 的结果页显示 `Port Douglas Tropical Trips` 为 Active（提取日期 2026-07-07）。[自有页](https://www.portdouglastropicaltrips.com.au/)；[ABN Lookup](https://abr.business.gov.au/Search/ResultsAll?SearchText=Something+Tropical+Port+Douglas)
- **健康经营**：Mossman Gorge 的当前公开 Rezdy 页面（抓取于本轮前三周）仍可预订该运营商的接驳/早茶服务；这支撑“仍有可公开销售的服务”，但不等同收入或交付质量。[来源](https://mossmangorge.rezdy.com/120555/port-douglas-tropical-trips-morning-tea-shuttle-bus?lang=en)
- **两项可复现网站痛点**：在 2026-08-14 的两个公开读取路径中，直接 HTTP 读取得到 `http=000`，Jina Reader 返还 DNS-resolution error，故官方域名的客户访问/联系路径无法在本轮被确认；缓存公开内容还将通用表单和重复 “Book Now” 并列呈现，而未给出在当前路径可验证的实际预订去向。首项直接影响客户决策/联系。此为观察，不把它断言为全球性宕机。
- **一页适配**：以“选哪条路线 / 为什么是小团 / 接送与时长 / 导游和车辆 / 立即预订”为单条路径，外链现存预订服务；不替换支付或预订后台。
- **购买信号**：有自有品牌与 Owner/Operator 身份、豪华 Mercedes/Audi 小团/私人服务、当前可预订第三方产品；满足至少两项。
- **联系人**：`[REDACTED_EMAIL]` 是商户自有页面公开发布的业务邮箱；`source-verified / deliverability-not-tested`。不触发、不测试、不发送。
- **限制**：Instagram 的公开读取后端返回登录要求，不能将其作活跃证明；故联系人只按公开邮箱计 8 分。

## Tony's Tropical Tours — 80，Qualified

- **独立/本地决策**：自有页明确称 `100% locally owned and family operated based in Port Douglas`；官方 2026 Destination Daintree 体验目录也列出该公司、电话和 `[REDACTED_EMAIL]`。[自有页](https://www.tropicaltours.com.au/)；[2026 目录](https://www.destinationdaintree.com/files/media/original/002/b88/cd0/3e3/PORT%20DOUGLAS%20AND%20DAINTREE%20EXPERIENCES%202026.No%20QR%20Code.pdf)
- **健康经营**：2026 目录仍列出服务；Tripadvisor 当前页面的最近可读内容包含 2025-09 的评价及商户回复，页面也显示 2026 运营信息。前者处于六个月边界外，故健康分主要依托 2026 官方目录而非评分数字。[目录](https://www.destinationdaintree.com/files/media/original/002/b88/cd0/3e3/PORT%20DOUGLAS%20AND%20DAINTREE%20EXPERIENCES%202026.No%20QR%20Code.pdf)；[公开评价页](https://www.tripadvisor.com/Attraction_Review-g255070-d587684-Reviews-Tony_s_Tropical_Tours-Port_Douglas_Queensland.html)
- **两项可复现网站痛点**：主页首屏的两条 Featured tours 仅提供类别/目的地名称，未在该决策位置显示当前价位、出发/时长选择或清晰比较；核心滚动区域重复出现近乎相同的长篇 testimonial copy。前者增加“选哪个团/是否适合我”的决策成本，后者稀释可信度与扫描效率。
- **一页适配**：一张长页可用“双主力行程比较—小团/家族/生态证明—包含项—直接 FareHarbor 链接”收口，既不复制旧网站，也不开发自定义预订。
- **购买信号**：本地家族经营、获奖/生态认证主张、小团及豪华车、稳定的正式体验目录出现，超过两项。
- **联系人**：`[REDACTED_EMAIL]` 由官方 2026 目录和自有站公开发布；`source-verified / deliverability-not-tested`。

## 未入选的高分近邻

Port Douglas Events & Hire 有强购买信号和网站机会，但没有公开业务邮箱，且其官方 Instagram 虽被自有页链接，公开读取返回 `HTTP 400 - make sure you are logged in to Instagram`。90 天活跃性无法验证，故硬门槛失败，不能因 77 分破格。
