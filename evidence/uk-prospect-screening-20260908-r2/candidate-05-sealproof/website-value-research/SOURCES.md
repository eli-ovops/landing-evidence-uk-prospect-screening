# 来源与证据索引

核验日2026-09-08。所有截图仅研究，不是Demo；未赋予媒体转让许可。

| ID | URL / local evidence | 用途与限制 |
| --- | --- | --- |
| S1 | https://www.yell.com/biz/sealproof-property-maintenance-london-8878727/ | 当前服务/邮箱/地区、09-04/05及08-25/24客户评价；公开阅读刷新，评价为作者经历，不独立保证结果 |
| S1H | https://www.yell.com/biz/sealproof-property-maintenance-london-8878727// | 搜索索引旧页面的01-30、2025-06-12转介证据；open回较新页面，历史渠道线索，不能称当前WC ONE合作 |
| S2 | https://infosealproof.wixsite.com/sealproof | 商户现站品牌、服务文字、Yell无文本链接；stable双视口 |
| S2S | https://infosealproof.wixsite.com/sealproof/services | 实际导航与DOM；旧同日稳定证据可复用，首次SPA切换截图不认定永久叠层 |
| S2T | https://infosealproof.wixsite.com/sealproof/testimonials | 稳定截图与DOM确认默认评价段落 |
| S2C | https://infosealproof.wixsite.com/sealproof/contact | mailto、短电话错误、完整电话、地址、Facebook文本与href差异；未提交表单 |
| S3 | https://firmania.co.uk/london/sealproof-property-maintenance-2301241 | 同电话、明确Wix网址、217地址主张，页面更新时间2025-11-21不冒充近期经营 |
| S4 | https://nextdoor.co.uk/pages/sealproof-property-maintenance/ | 27地址及同电话，仅公开资料，不推断动态内容 |
| S5 | https://www.facebook.com/sealproof | 官网图标实际目标；web读取Online fetch throttled；未登录，不推断无社媒 |

本地sources/public-open-tool.json保存S1/S3/S4工具结果；public-search-tool.json保存三条精确查询（商户+WC ONE、Facebook拼写、company）及结果。Servbetter出现混杂服务/评级条目，本研究不据此推定客户信誉或法律身份；未发现的身份保持UNKNOWN。

浏览器使用已有Playwright runtime（未安装CLI）：`observe.mjs`做真实导航尝试；`stable.mjs`用直接URL、等待load+字体及短渲染稳定时间取得最终证据。每份JSON记录URL、时间、视口、Chrome版本、正文/链接。stable-mobile PNG实际390×844；初次fullPage截图可宽980，不代表手机可视区域980，不能把完整页面截图错当可见全页。

旧证据入口：../CANDIDATE.md、../INDEPENDENT_REVIEW.md、../MANIFEST.json，以及../../browser-evidence/sealproof-*.json/png。43项原manifest核验零差异。本研究不重新核验无关门禁或改共享状态。

规则：已完整读取PROJECT_CORE.md（986行），适用AGENTS.details §1–4，website-delivery-sop及DS-002B V2.5（SHA256 5b70133e7a155a713c130d07d883afffbd1f57eaa7bfc7c2e2c3dfc9f9bb926a；mtime 2026-08-09 16:00:52），agent-reach网页/搜索路由，Playwright方法。仅P0/P1研究；项目静态范围与当前不制Demo/不写邮件指令优先，不运行通用SOP开发/发布模板。

工具异常：Exa Unknown MCP server 'exa'；Jina curl(28)35秒超时，无成功内容；Wix web Internal Error但实际浏览器成功；Facebook fetch throttled。详见报告限制。截图路径失误详见STATUS，不清理或隐瞒。
