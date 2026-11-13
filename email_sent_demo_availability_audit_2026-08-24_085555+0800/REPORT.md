# 邮件已发 Demo 全量可访问性巡检

核验时间：2026-08-24 08:53–09:22（Asia/Shanghai，UTC+08:00）；09:01 完成 Wild Clover 补核，09:22 完成用户提供 Lavella/Tranquil 精确 URL 后的第二次纠正核验。  
执行性质：只读外部浏览器核验；本报告不是发送、送达、阅读、回复、合规、素材授权或发布证明。

## 结论

- 去重后的可公开核验 Demo：**13**；全部为 **PASS — CURRENTLY OPENS**。
- 页面均在无登录、无既有会话的真实 Chromium 浏览器中完成 Desktop 打开及约 `390×844` 基础打开；页面标题和可访问树均显示对应商户/概念内容，非仅凭 HTTP 状态。
- **修复项：Wild Clover Skin Care** 的任务摘要明确给出 `wildcloverskin.netlify.app`。此前漏检已纠正：该 URL 现可在无登录真实浏览器中正常渲染，纳入 PASS。
- **第二次纠正：Lavella 与 Tranquil Touch**。前两轮 URL discovery 漏检，曾错误标为 `NOT PUBLICLY CHECKABLE`；用户当轮明确提供两条准确公网 URL 并指出其已存在于记录。两条均已独立完成 Desktop 与 `390×844` 真实浏览器打开、业务身份核对，现均为 PASS。
- Cairns Pressure Cleaning 页面在两个视口均实际渲染并匹配商户，故仍为 PASS；浏览器记录到 2 个 console errors，未单独构成打开失败，后续若重用该 Demo 应另做内容/运行质量复核。

## 发现方法与范围

1. 完整读取项目规则、`PROJECT_CORE.md`、`OUTREACH_EMAIL_SOP.md`、`website-delivery-sop` 及 DS-002B。DS-002B：mtime `2026-08-09T16:00:52+0800`，SHA-256 `5b70133e7a155a713c130d07d883afffbd1f57eaa7bfc7c2e2c3dfc9f9bb926a`。
2. 任务管理工具覆盖当前任务索引（本项目当前可见 11 条）及归档任务全量分页（821 条归档任务，其中本项目 60 条）；对标题/摘要含“邮件已发、已发送、已发、sent”等的任务读取上下文。
3. 命中定位信号任务共 8 条：当前 5 条、归档 3 条。标题/摘要仅用作定位，未直接将其升级为发送事实。
4. 纳入 URL 来源：
   - 两个当前任务有用户直接输入“邮件已发”：Pure K Beauty、Karen Brown。
   - 归档任务 `28-1 已发送8家客户｜近90天营业审计`（thread_id `01a00a5e-eb4b-7883-b0e7-9b4bb8cfb3d1`）在会话中声称已通过只读 Gmail Sent 还原 8 家及对应 Demo；这是**执行会话自述的二级证据**，不是本巡检重新登录邮箱后的发送证明。
   - Wild Clover 标题/摘要型命中提供了可追溯实际公网字符串 `wildcloverskin.netlify.app`，因此纳入 URL 当前可访问性检查；这仍不是发送或送达证明。
   - Lavella 与 Tranquil 的原始任务全文未还原出 URL；在第二次验收失败后，用户当轮明确提供 `https://fancy-pasca-384505.netlify.app/` 与 `https://tranquil-touch-relaxation-therapy.netlify.app/`，作为已发关联的准确公网 URL。因此两者纳入当前可访问性检查；用户提供 URL 不单独证明送达、阅读或合规。
5. 每个公网 URL 使用 Playwright 控制的真实 Chromium 新会话打开；先在普通 Desktop，后调整至 `390×844` 并重新打开。记录的是浏览器最终 URL、页面标题及可访问树的业务可见文字；未把 HTTP 200 当作 PASS。

## 已检查任务与发送状态证据

| 任务标题 | thread_id | 处理 | 发送状态依据 |
| --- | --- | --- | --- |
| （邮件已发）英国£600客户研究｜Lavella Hair Limited | `01a02da0-e82c-7c92-8517-abe7fd71e572` | 纳入 `https://fancy-pasca-384505.netlify.app/` | 用户当轮明确提供并指出为已发 Demo 公网地址；标题仍是已发关联定位信号 |
| （邮件已发）英国£600客户研究｜Wild Clover Skin Care | `01a02d9d-7c59-7b61-91a8-0cecc39bd0d2` | 纳入 `https://wildcloverskin.netlify.app/` | 任务摘要中的实际域名字符串；标题/摘要仍只是已发关联定位信号，不是送达证明 |
| （邮件已发）英国£600客户研究｜Tranquil Touch Relaxation Therapy | `01a02d9d-7a17-7861-89db-968f51ae0c36` | 纳入 `https://tranquil-touch-relaxation-therapy.netlify.app/` | 用户当轮明确提供并指出为已发 Demo 公网地址；标题仍是已发关联定位信号 |
| （邮件已发）英国客户研究｜Pure K Beauty | `01a02c2e-ea3c-7dd1-b112-b113b006370f` | 纳入 | 用户直接输入“邮件已发”；会话随后确认“已发送” |
| （邮件已发）2｜Demo整体重做｜Karen Brown — A Timeless Love | `01a022fb-30bd-7a71-9dd4-d3886238598b` | 纳入 | 用户直接输入“邮件已发” |
| 28-1 已发送8家客户｜近90天营业审计 | `01a00a5e-eb4b-7883-b0e7-9b4bb8cfb3d1` | 纳入 8 个 URL | 执行会话自述：只读 Gmail Sent 还原 8 家；本报告不把它升级为送达或用户直报 |
| 38-1 已发邮件客户｜90天经营证据复核 | `01a01d5f-2ce0-7a93-b6a4-7728ab68b453` | 交叉定位，不新增 URL | 聚合审计定位信号；不作为单独发送证明 |
| 44-0 已发送会话复盘｜Demo SOP系统加固 | `01a01f5a-3d52-77e2-9ff5-43db6cd14b01` | 交叉定位，不新增 URL | 复盘定位信号；不作为单独发送证明 |

## 公网 Demo 当前检查证据

状态判定：`PASS — CURRENTLY OPENS` = 无登录 Desktop 真实渲染、约390px基础打开均完成，且可访问树/标题与关联商户基本匹配。所有最终解析 URL 与原始 URL 相同，未见密码门、DNS/TLS、404、5xx、平台错误、异常重定向或空白页。

| 商户 | 原始 URL / 最终 URL | 来源任务（thread_id） | 页面标题 / 业务匹配 | 状态 |
| --- | --- | --- | --- | --- |
| Curtis Tree Lopping Specialists | `https://curtistreess.netlify.app/` | 28-1（`01a00a5e-eb4b-7883-b0e7-9b4bb8cfb3d1`） | `Concept Preview | Curtis Tree Lopping Specialists`；可访问树含商户名、Wodonga/Albury、树木服务 | PASS — CURRENTLY OPENS |
| Prestige Cleaning Wagga | `https://isprestigecleaningwagga.netlify.app/` | 28-1（同上） | `Commercial Cleaning Wagga Wagga | Prestige Cleaning` | PASS — CURRENTLY OPENS |
| Kimberley Cleaning | `https://kimberleycleaning.netlify.app/` | 28-1（同上） | `Kimberley Cleaning | Residential, Commercial & Vehicle Cleaning in Broome` | PASS — CURRENTLY OPENS |
| Cairns Pressure Cleaning | `https://pressurecleancairns.netlify.app/` | 28-1（同上） | `Cairns Pressure Cleaning — Private Website Concept`；可访问树含 Cairns、服务、电话与既有 quote 链接。2 个 console errors，未阻断渲染。 | PASS — CURRENTLY OPENS |
| Always Love Celebrant Services | `https://mudgeecelebrant.netlify.app/` | 28-1（同上） | `Always Love Celebrant Services · Mudgee` | PASS — CURRENTLY OPENS |
| Cherry Walk Cafe | `https://soft-creponne-d9f2d9.netlify.app/` | 28-1（同上） | `Cherry Walk Café — Local concept` | PASS — CURRENTLY OPENS |
| Bright & District Leisure Tours | `https://magnificent-quokka-00f319.netlify.app/` | 28-1（同上） | `Bright Bus Tours | Local Static Demo` | PASS — CURRENTLY OPENS |
| The Oasis Mudgee | `https://cheery-kleicha-1b6c73.netlify.app/` | 28-1（同上） | `The Oasis Mudgee | Beauty & Wellness` | PASS — CURRENTLY OPENS |
| Lavella Hair Limited | `https://fancy-pasca-384505.netlify.app/` | （邮件已发）英国£600客户研究｜Lavella Hair Limited（`01a02da0-e82c-7c92-8517-abe7fd71e572`） | `Lavella Hair | Weston`；可访问树含 Lavella Hair、Weston、Fairclough Hall Farm、Colour/Extensions/Hair replacement 与既有预约链接 | PASS — CURRENTLY OPENS |
| Wild Clover Skin Care | `https://wildcloverskin.netlify.app/` | （邮件已发）英国£600客户研究｜Wild Clover Skin Care（`01a02d9d-7c59-7b61-91a8-0cecc39bd0d2`） | `Wild Clover Skin Care | Facial therapy in Shawlands`；可访问树含 Wild Clover、Clover、Shawlands、预约入口及 Netlify 标识 | PASS — CURRENTLY OPENS |
| Tranquil Touch Relaxation Therapy | `https://tranquil-touch-relaxation-therapy.netlify.app/` | （邮件已发）英国£600客户研究｜Tranquil Touch Relaxation Therapy（`01a02d9d-7a17-7861-89db-968f51ae0c36`） | `Tranquil Touch | Plean`；可访问树含 Tranquil Touch、Plean、ASMR Massage、Head Spa、Independent concept preview 与既有预约链接 | PASS — CURRENTLY OPENS |
| Pure K Beauty | `https://purekbeauty.netlify.app/` | （邮件已发）英国客户研究｜Pure K Beauty（`01a02c2e-ea3c-7dd1-b112-b113b006370f`） | `Pure K Beauty | Skin & Laser Clinic` | PASS — CURRENTLY OPENS |
| Karen Brown — A Timeless Love | `https://atimelesslove.netlify.app/` | （邮件已发）2｜Demo整体重做｜Karen Brown — A Timeless Love（`01a022fb-30bd-7a71-9dd4-d3886238598b`） | `Karen Brown | Marriage Celebrant` | PASS — CURRENTLY OPENS |

## URL discovery 更正记录

前两轮对 Lavella 与 Tranquil 的完整任务消息、工具输出、客户目录和限域 `netlify.app` 文本检索均未恢复实际 URL，因此曾写为 `NOT PUBLICLY CHECKABLE`。该结论现被用户当轮提供的两条精确公网地址推翻；已删除两项不可公开检查结论，改为本报告上表中的浏览器实测 PASS。此更正不回溯把原检索不到的任务文本改写为已含 URL，只记录本轮新增的用户提供证据。

## 失败/阻断清单

- `PASS — CURRENTLY OPENS`：13
- `FAIL — NOT OPENING`：0
- `MISMATCH — OPENS WRONG/UNEXPECTED CONTENT`：0
- `BLOCKED — ACCESS CHECK INCONCLUSIVE`：0
- `NOT PUBLICLY CHECKABLE`：0

## 检查边界

- 本次未登录邮箱、Netlify 或任何平台；未发送、回复、联系、部署、上传、修改 Demo/客户站点或既有项目文件。
- 当前打开只证明检查时无登录浏览器可渲染并呈现基本匹配的页面；不证明邮件已送达、被阅读、收件人可访问、商户授权、营销合规、素材权利、视觉质量、链接内所有 CTA、长期可用性或生产发布状态。
- 旧任务、旧文件和会话自述仅用于定位 URL/历史关联；当前在线状态仅来自本次真实浏览器核验。
- 验收失败修复中，Lavella、Wild Clover、Tranquil Touch 三任务均读取了全部 5 个消息页（各 41 个相关 turn）及允许的工具输出；实际检索词包括精确商户目录名与 `netlify.app`。Wild Clover 的摘要域名被确认为新增 URL；Lavella 与 Tranquil 的 URL 由用户在第二次验收失败后明确提供，并已做独立浏览器实测。
- 本输出目录仅包含本 `REPORT.md`。浏览器工具自身在项目既有隐藏 `.playwright-cli/` 工作区写入了运行快照/控制台日志；本审计未将其作为交付物，且遵守不删除既有/用途不明文件的规则，未做清理。
