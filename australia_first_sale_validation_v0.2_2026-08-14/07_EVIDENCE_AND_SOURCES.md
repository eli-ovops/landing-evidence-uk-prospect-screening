# Evidence and Sources

研究日期：2026-08-14。

## 1. 来源层级

1. 目的地需求：州/地方政府、官方 tourism body、destination management plan。
2. 商户存在与经营信息：商户官网、地方官方 tourism directory。
3. 评分/评论量：公开可索引的 Google 聚合页面（Wanderlog、Restaurant Guru、Birdeye、Sluurpy 等）。这些是筛选线索，不是最终实时凭证。
4. 地图入口：为每个商户生成 Google Maps search URL，留给发送前人工直接复核。

## 2. 目的地来源

| Destination | Source | 用途 |
|---|---|---|
| Blue Mountains | https://www.destinationnsw.com.au/insights/regional-statistics/Regions/blue-mountains | 最新区域 visitor / nights / spend |
| Blue Mountains | https://www.environment.nsw.gov.au/topics/parks-reserves-and-protected-areas/park-management/npws-park-management/park-visitor-survey | 国家公园访问规模交叉参考 |
| Daylesford / Hepburn | https://dmrtourism.com.au/wp-content/uploads/2024/01/DMT_Destination-Management-Plan-Summary_Final-Report_Dec-23_2212.pdf | 访客、消费、day/overnight 结构 |
| Victor Harbor | https://visitvictorharbor.com/eat-drink/ | 独立餐饮生态与商户存在性 |
| Port Douglas | https://douglas.qld.gov.au/about-the-shire/tourism/ | 旅游依赖、visitor、jobs、spend |
| Whitsundays | https://www.tourismwhitsundays.com.au/media-centre/media-releases/solid-tourism-figures-reflect-ongoing-appeal-of-the-whitsundays | 2025 visitor / spend |
| Broome | https://www.tourism.wa.gov.au/industry-support-and-events/tourism-development/Documents/Broome%20Tourist%20Accommodation%20Growth%20Outlook%202024%20-%202034.pdf | 2023 visitor 与住宿结构 |
| Margaret River | https://mrbta.com/resources/margaret-river-region-latest-visitation-2/ | YE Mar 2026 domestic/international trips 与 spend |
| Kangaroo Island | https://tourism.sa.gov.au/media/p3tl4hv0/satc_value_of_tourism_ye_2024_kangaroo_island.pdf | 2024 visitor economy、businesses、jobs |
| Bright / Alpine | https://www.alpineshire.vic.gov.au/documents/current-state-tourism-2025 | 2024 overnight visitors、nights、spend |
| Bicheno / East Coast | https://gsbc.tas.gov.au/wp-content/uploads/2016/08/Ordinary-Council-Meeting-27-August-2024-Attachments.pdf | East Coast/Bicheno visitor evidence |
| Tasmania context | https://www.tourismtasmania.com.au/research-and-insights/visitor-data/ | 州级 visitor economy context |

## 3. 商户证据索引

逐条官网、评分来源、地图复核入口、评分和证据缺口均在 `03_RAW_PROSPECTS.csv`；Top 3 的直接来源在 `06_TOP3_DEMO_CANDIDATES.md`。这里不重复 46 行 URL。

用于验证地方独立商户生态的官方目录：

- Daylesford shopping directory: https://discoverdaylesford.com/shopping/
- Visit Victor Harbor Eat & Drink: https://visitvictorharbor.com/eat-drink/
- Visit NSW Blue Mountains: https://www.visitnsw.com/destinations/blue-mountains

## 4. 工具与失败记录

- 按 agent-reach 研究规范，首次尝试 Exa MCP 搜索；3 次独立调用均返回同一错误：`Unknown MCP server 'exa'`。达到重复失败阈值后停止重试。
- 降级为公开网页搜索与页面读取；没有伪称 Exa 成功。
- 尝试使用应用内浏览器进行 Google Maps 交互复核，但当前任务工具集中没有该 Skill 所需的 `node_repl` 表面，因此没有继续或模拟浏览器访问。
- 结果：本轮 ratings/review counts 是公开索引快照，不能替代外联当天直接打开 Google Maps 的核验。

## 5. 已知证据缺口

- 第三方聚合评分可能滞后或映射错误；CSV 中明确标记 `evidence gap` / `evidence conflict`。
- 未确认任何商户的实际 owner、预算、网站控制权或采购意愿；这些只能在获授权的下一阶段通过公开复核与真实沟通验证。
- 未登录任何账户，未读取非公开数据，未访问私有接口。

## 6. 发送前最小复核门

任何候选进入 Demo/Contact 前，必须重新确认：

1. Google Maps 当前营业状态、评分、评论数、最近评论日期；
2. 官网当前版本、移动端表现、是否已宣布改版；
3. 商户独立经营，且联系人可能有网站决策权；
4. 公开 email/phone/Instagram 的准确性；
5. AU$800 单页确实能解决主要问题，而非需要 booking/ecommerce/CMS；
6. 图片、Logo、评价引用只用于获授权的私密 Demo，不能公开发布。
