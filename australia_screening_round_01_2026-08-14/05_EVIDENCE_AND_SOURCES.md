# 05｜证据、来源与错误台账

## 证据规则

- `retrieved_at`：除特别注明外均为 2026-08-14。
- High：商户自有页面或两个独立公开来源；Medium：一个可信来源加一致线索；Low：不完整、来源旧或主体不明。
- 此文件将观察事实与研究推断分开。网页搜索摘要只用于发现；关键判断尽量回到已列的直接 URL。

## 目的地证据

| ID | 类型 | 事实（非推断） | 来源 | 置信度 / 数据健康度 |
|---|---|---|---|---|
| SRC-D01 | 地方政府 | Douglas Shire Council 列出约 443k 过夜访客、264k 日访客、AU$611m、2,500+ 岗位及约 80% 旅游依赖。 | [Council tourism](https://douglas.qld.gov.au/about-the-shire/tourism/) | High / 完整（数值期别见原页） |
| SRC-D02 | 地方政府 | Council 概览称 Port Douglas 是旅游门户，旅游相关零售、住宿和服务从业占比较全州高。 | [Shire profile](https://douglas.qld.gov.au/welcome/shire-profile/) | High / 完整 |
| SRC-M01 | 官方地区旅游机构 | MRBTA 公开资料称其站点约 988k users/year、newsletter 约 40k、社媒总受众 100k+。 | [Media Kit](https://www.margaretriver.com/wp-content/uploads/2023/12/TT_MediaKit_2024.pdf) | High / 部分（非同期全行业经济数据） |
| SRC-Y01 | 州旅游机构 | Visit Victoria 将 Daylesford 定位为矿泉、健康和餐饮目的地。 | [Visit Victoria](https://www.visitvictoria.com/daylesford) | High / 部分 |
| SRC-Y02 | 州策略 | Victorian Visitor Economy Strategy 将 Daylesford & Macedon Ranges 列入高度依赖旅游的地区。 | [Strategy PDF](https://assets-corporate.visitvictoria.com/documents/Visitor_Economy_Strategy.pdf) | Medium / 过期 |
| SRC-B01 | Destination NSW | 2025 Bluesfest 为 Byron Bay 带来约 AU$65m 间接旅游消费；同一页称 2026 节事不再举行。 | [Statement](https://media.destinationnsw.com.au/media-releases/statement-byron-bay-bluesfest) | High / 部分 |
| SRC-V01 | 地方政府 | Victor Harbor Council 称约 1.2m 年访客和 AU$163m 消费。 | [City profile](https://www.victor.sa.gov.au/your-council/about/profile) | High / 部分（未见本轮统一期别） |

## Top 候选证据

| ID | 主体 | 事实（非推断） | 来源 | 置信度 / 数据健康度 |
|---|---|---|---|---|
| SRC-P01 | Port Douglas Tropical Trips | 自有页公开 Colin Johanson 为 Owner / Operator 及业务邮箱。 | [Own site](https://www.portdouglastropicaltrips.com.au/) | Medium / 部分（页面为搜索缓存读取） |
| SRC-P02 | Port Douglas Tropical Trips | ABN Lookup 搜索结果页把该名称列为 Active，记录提取 2026-07-07。 | [ABN Lookup](https://abr.business.gov.au/Search/ResultsAll?SearchText=Something+Tropical+Port+Douglas) | Medium / 部分（名字状态不等于经营表现） |
| SRC-P03 | Port Douglas Tropical Trips | Mossman Gorge 的公开 Rezdy 页面仍列有该运营商的订购服务。 | [Rezdy page](https://mossmangorge.rezdy.com/120555/port-douglas-tropical-trips-morning-tea-shuttle-bus?lang=en) | Medium / 部分（不代表自有站可用） |
| SRC-T01 | Tony's Tropical Tours | 自有站称其 100% locally owned and family operated in Port Douglas，并链接外部 FareHarbor。 | [Own site](https://www.tropicaltours.com.au/) | High / 完整（只能证明公开主张） |
| SRC-T02 | Tony's Tropical Tours | 官方 2026 体验目录列出该公司、电话、邮箱和服务。 | [Destination Daintree guide](https://www.destinationdaintree.com/files/media/original/002/b88/cd0/3e3/PORT%20DOUGLAS%20AND%20DAINTREE%20EXPERIENCES%202026.No%20QR%20Code.pdf) | High / 完整 |
| SRC-T03 | Tony's Tropical Tours | Tripadvisor 当前页含 2025-09 评价与商户回复；其日期不作为“近 6 月”证据。 | [Tripadvisor](https://www.tripadvisor.com/Attraction_Review-g255070-d587684-Reviews-Tony_s_Tropical_Tours-Port_Douglas_Queensland.html) | Medium / 过期（相对本轮 11 个月） |
| SRC-E01 | Port Douglas Events & Hire | 官方 Business Events Port Douglas 目录称其有 30+ 年、本地活动服务范围为 3–3000 人。 | [Directory](https://businesseventsportdouglas.com.au/businesses/port-douglas-events-and-hire) | High / 完整 |
| SRC-E02 | Port Douglas Events & Hire | 自有页包含其 Instagram 链接，但未公开业务邮箱。 | [Own contact page](https://www.portdouglaseventsandhire.com/contact-us) | High / 完整 |

## 关键观察与推断

| ID | 分类 | 陈述 | 支持 | 置信度 | 可推翻条件 |
|---|---|---|---|---|---|
| J-01 | 观察 | Tropical Trips 域名在本轮直接 HTTP 检查返回 `http=000`，Jina Reader 返回域名无法解析。 | OBS-01 | Medium | 一个独立、正常的无登录浏览器成功访问并能完成明确的首页/预订跳转；则本观察应归因到研究路径而非商户站。 |
| J-02 | 推断 | Tropical Trips 可能从“路线选择—小团证明—可用联系/预订”单页获益。 | SRC-P01–P03, J-01 | Medium | 证明自有站稳定且现有预订转化已充分，或经营者无域名/网页决策权。 |
| J-03 | 观察 | Tony 首页在主要 featured-tour 区域没有呈现当前价格或出发选择，且出现重复 testimonial 文本。 | SRC-T01 | High | 若其实际首屏/移动版呈现不同，或价格/选择在微交互内清晰可见。 |
| J-04 | 推断 | Tony 可用不替换 FareHarbor 的长页改善“选哪条团”的信息结构。 | SRC-T01–T02, J-03 | Medium | 移动用户测试显示现有站已低摩擦，或商户认为预订页不需改变。 |
| J-05 | 观察 | PD Events 的 Instagram 链接归属已确认，但活动读取后端登录失败，无法证明 90 日活动。 | SRC-E02, ERR-IG-02 | High | 在无登录的公开页面或由商户公开的近期更新中验证活动。 |

## agent-reach / 网页工具错误与降级记录

| ID | 时间 | 渠道 | 原始错误摘要 | 按规则处理 | 影响 |
|---|---|---|---|---|---|
| ERR-SEARCH-01 | 2026-08-14 | agent-reach Exa | `Unknown MCP server 'exa'`（5 个目的地查询均同样失败） | 未安装、未配置、未重复尝试；改用公开网页/Jina Reader 和精确搜索。 | 仅少了 Exa 结果，不把失败当成无数据。 |
| ERR-IG-01 | 2026-08-14 | OpenCLI Instagram | `HTTP 400 - make sure you are logged in to Instagram`，目标 `portdouglastropicaltrips` 和 `hookabarra`。 | 不登录、不读取 cookie、不重试；写为 activity evidence gap。 | 两个账号不能记为活跃。 |
| ERR-IG-02 | 2026-08-14 | OpenCLI Instagram | 相同 `HTTP 400 - make sure you are logged in to Instagram`，目标 `pd_eventsandhire`。 | 不登录、不重试。 | PD Events 不能通过仅活跃 IG 的联系人硬门槛。 |
| ERR-UPDATE-01 | 2026-08-14 | agent-reach check-update | `无法检查更新（GitHub API 速率限制，已重试 3 次）`。 | 不进行安装/升级。 | 无研究结论影响；版本保持 v1.5.0。 |

## 未获取或刻意未做的证据

- 没有把 Google rating/review count 作为评分输入；若公开页面不能可靠确认则不猜测。
- 没有验证邮箱可投递性、发测试邮件、使用 Hunter/Apollo、访问私人/员工邮箱或收集任何 token/cookie/secret。
- 没有测试下单/付款/预约提交，因此任何“可用”只指公开页面可见，不是 E2E 成功。
- 没有使用 Google Maps 批量提取或保留 Place ID；没有复制图片、Logo、评价或完整商户文案。
