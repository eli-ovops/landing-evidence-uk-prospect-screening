# 证据与来源

## 证据方法

每项主张区分：`观察事实`、`推断`、`未知`。A级指官网/官方社交/实际测试；B级指官方旅游/政府/客户既有交易平台；C级指公开目录或聚合线索。来源等级只说明直接性，不自动等于真实性。

所有网页与 DNS 查询的 `retrieved_at=2026-08-14`。没有把搜索摘要、版权年份、ABN 或工具失败单独当成当前经营证明。

## 关键判断卡

### J-01：Mudgee 是本轮最合适地区

- 事实：Mudgee 官方旅游站当前描述艺术、文化、食酒和本地体验；2026 creatives 内容点名当地摄影师、艺术家与工作室；婚礼目录能组成 15 家独立服务样本。
- 推断：相比以实时班次/房态为核心的 Airlie Beach/Strahan 样本，Mudgee 服务型商户更容易满足维护责任硬门槛。
- 置信度：High。
- 推翻条件：更深入抽样发现多数 Mudgee 服务仍必须实时更新价格/档期，或其他地区出现更密集且更弱站的静态服务池。

### J-02：Top 3 的静态页具有独立长期价值

- 事实：三家都可用稳定的品牌、服务边界、资质、作品/环境、评价、地域和公开联系构成完整说服；预约/档期不需要页面内完成。
- 推断：静态页不是 booking 壳，而是先完成理解、信任和自我筛选，再把最终动作交给电话/邮件/客户既有 Timely。
- 置信度：High（产品适配）；购买意愿 Unknown。
- 推翻条件：客户确认实时价格/档期是访问者做决定不可或缺的主体，或要求我方维护 booking/CMS/商品内容。

### J-03：工具问题不能替代网站问题

- 事实：Squirrel 对若干站点返回 TLS/certificate issue，而公开网页读取有时仍成功；Playwright 对 Top 3 均能真实加载。
- 推断：TLS/WAF/自动化失败只记证据缺口，不能评分为普遍宕机。
- 置信度：High。
- 推翻条件：多个独立普通浏览器/网络环境都复现同一用户故障。

## Top 3 可定位证据

| ID | 主体 | 观察事实 | 来源等级 | URL / 实测 | 反证或边界 |
|---|---|---|---|---|
| SRC-T1 | Mudgee Wedding Photography | 官网公开 25 年经验、Mudgee 基地、专业主张、电话和邮箱 | A | https://photographymudgee.com.au/ | 主张未向行业协会独立验证 |
| SRC-T2 | Mudgee Wedding Photography | 官方 IG 2026-05-15 至 2026-07-22 连续发布婚礼/奖项内容 | A | https://www.instagram.com/colboydphotography/ | OpenCLI 只读前 8 条，不代表完整经营数据 |
| SRC-T3 | Mudgee Wedding Photography | 1440×900 与 390×844 Playwright：首屏无直接询盘 CTA；邮箱 href 实测为 `maitlo:` | A/实际测试 | 官网真实浏览器，2026-08-14 | 未提交表单/邮件；只验证 DOM 和可见界面 |
| SRC-T4 | Mudgee Wedding Photography | Squirrel quick 35/F：无 H1、12 图缺 alt、无隐私链接 | A/自动审计 | Squirrelscan v0.0.85，2026-08-14 | 首页 1 页 quick audit，不是完整站审计 |
| SRC-O1 | The Oasis | 官网公开三类服务、地址、邮箱、Timely 外链和电话文本 | A | https://theoasismudgeee.squarespace.com/ | 官网电话疑似缺位，需客户最终确认 |
| SRC-O2 | The Oasis | 官方 IG 2026-08-02 至 08-13 有门店/团队/治疗内容 | A | https://www.instagram.com/theoasismudgeee/ | 只读前 8 条 |
| SRC-O3 | The Oasis | 公开目录显示完整号码 02 6372 9182 与 2026 营业信息 | C | https://www.beautynailhairsalons.com/AU/Mudgee/107837965544500/The-Oasis-Mudgee | 二级目录；只用作冲突线索，不替客户确认 |
| SRC-O4 | The Oasis | 1440×900 与 390×844：页面可用，但内容只有三类标题；电话 DOM 为不完整号码 | A/实际测试 | 官网真实浏览器，2026-08-14 | 未点击进入 Timely 完成预约 |
| SRC-A1 | Always Love | 官网明确接受 2026 及以后预订，公开 owner、服务区、电话与邮箱 | A | https://mudgeecelebrant.com.au/ | 不能证明剩余真实档期或成交 |
| SRC-A2 | Always Love | 当前公开目录显示 9 年经营、established 2017 和同一电话/网站 | C | https://www.truelocal.com.au/nsw/mudgee/always-love-celebrant-services-mudgee-1000002295610 | 目录年限不是当前经营单证，只作交叉信号 |
| SRC-A3 | Always Love | 390×844 Playwright：英雄文字/CTA 与亮背景低对比；桌面正常加载 | A/实际测试 | 官网真实浏览器，2026-08-14 | 视觉判断经过截图人工查看；没有真实用户测试 |
| SRC-A4 | Always Love | Squirrel 5 页 quick 45/F；缺 meta、约 6.2MB、孤立模板页含 Lorem ipsum | A/自动审计 | Squirrelscan v0.0.85，2026-08-14 | 快速抽样 5 页，不是 full coverage |

## 目的地与样本来源

| ID | 用途 | URL |
|---|---|---|
| SRC-D1 | Mudgee 官方目的地定位 | https://www.visitmudgeeregion.com.au/the-region/mudgee |
| SRC-D2 | 2026 Mudgee creatives / 艺术摄影生态 | https://www.visitmudgeeregion.com.au/blog/mudgee-region-creatives |
| SRC-D3 | Mudgee weddings/functions 本地供应商发现 | https://mudgee.travel/functions-weddings/ |
| SRC-D4 | Margaret River 2026 galleries | https://www.margaretriver.com/things-to-do/arts-culture/guide-to-galleries-of-the-margaret-river-region/ |
| SRC-D5 | Margaret River 2026 main street | https://www.margaretriver.com/towns/margaret-river/margaret-rivers-main-street/ |
| SRC-D6 | Hahndorf 南澳官方目的地页 | https://southaustralia.com/destinations/adelaide-hills/places/hahndorf |
| SRC-D7 | Airlie Beach / Whitsundays 官方页 | https://www.tourismwhitsundays.com.au/mainland/airlie-beach |
| SRC-D8 | Airlie attractions/retail | https://www.tourismwhitsundays.com.au/experiences/see-and-do/attractions-retail |
| SRC-D9 | Strahan Tourism Tasmania | https://www.discovertasmania.com.au/regions/west-coast/strahan/ |
| SRC-D10 | West Coast Tasmania | https://westcoasttas.com.au/ |
| SRC-D11 | 澳大利亚旅游商户结构基线 | https://www.tra.gov.au/en/tourism-industry-analysis/tourism-businesses-in-australia |

## 其余样本主要来源

- The Pampered Lady：https://www.thepamperedlady.com.au/ 、https://www.thepamperedlady.com.au/appointments
- Art & Crafts Mudgee：https://artandcraftsmudgee.com.au/ 、https://www.visitmudgeeregion.com.au/products/art-and-crafts-railway-gallery-mudgee
- Darling Days：https://www.darlingdays.com.au/ 、https://www.instagram.com/darling_days_/
- Bubble Gum：https://www.bubblegumhub.au/ 、https://www.instagram.com/bubblegum.photography.au/
- Mudgee Monkey：https://www.mudgeemonkey.com.au/
- Soulsmithery：https://www.soulsmithery.com/
- Spa Sanctuary：https://www.spasanctuarymudgee.com.au/ 、https://www.fresha.com/a/spa-sanctuary-mudgee-mudgee-14-perry-street-6l6fkk8w
- Airtime Moments：https://www.airtimemoments.com/
- Erive Films、Marry Me Mudgee、Mudgee Wedding Photography、Always Love 发现/交叉目录：https://mudgee.travel/functions-weddings/
- Naomi Louise Hair：https://naomilouisehair.com.au/
- Nikki Baxter Makeup：https://www.nikkibaxtermakeup.com.au/ 、https://riverlearetreatmudgee.com.au/mudgee-wedding-servi/nikki-baxter-makeup/

## DNS/MX 观察

2026-08-14 使用只读 DNS 查询：

- `bigpond.com`：MX present。
- `yahoo.com`：MX present。
- `gmail.com`：MX present。
- `photographymudgee.com.au`：MX present (`mail.photographymudgee.com.au`)。
- `nikkibaxtermakeup.com.au`：MX present（Microsoft 保护域）。
- `soulsmithery.com`：no MX returned。
- `airtimemoments.com`：no MX returned。
- `mmmudgee.com.au`：no MX returned。

MX 仅证明域名存在收信路由，不证明具体邮箱可投递、有人读取或适合联系。本轮没有发送验证邮件，也未调用付费联系人服务。

## 平台与工具证据缺口

- agent-reach doctor 称 Exa 可用，实际 `mcporter call exa...` 返回 `Unknown MCP server 'exa'`；未重试安装，公开搜索作为降级。
- Instagram OpenCLI 对部分账号成功，对部分账号返回 login-required/404；失败不等于账号停用。
- Squirrel TLS/certificate failure 与普通公开读取冲突时，统一标工具路径不确定，不计网站故障。
- 没有进行 Lighthouse 全量性能测试、邮箱投递验证、法律实体核验、后台分析、转化率检查或真实用户访谈。
