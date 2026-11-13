# Demo Production Blueprint v2（拟修订建议稿）

本蓝图不修改现有授权：仍只允许已针对具体商户授权的静态概念 Demo；不授权客户资产、外联、部署、登录、生成媒体或发布。任何 `UNKNOWN` 不是 PASS。

## 0–10 闭环

| 阶段 | 编码前/后 | 必交工件与硬判定 |
|---:|---|---|
| 0. 权威与资产盘点 | 前 | 读取当前 AGENTS/PROJECT_CORE；建立资产表：`asset / official source / discovered / rights / usable / visual role / rendered selector / unused reason`。客户授权未证实即保留 NOT VERIFIED。 |
| 1. Customer Asset Coverage Gate | 前 | 所有 logo、色彩、字体、真实服务/项目照、业务文案、地点/身份、社媒/原站素材都标发现状态。若可安全最小使用的官方识别资产被 AI/图库替代，必须写回退理由并经独立 Reviewer接受；否则 FAIL。 |
| 2. Reference Board | 前 | 5个该商户最相关且**真实浏览器当前打开**的站点：成熟品牌、本地强竞品、设计/转化标杆。每个写相关性、可借原则、不可复制边界、检查日期、截图。 |
| 3. Design Read + 三 dials | 前 | 一行：`Reading this as: …`；`DESIGN_VARIANCE / MOTION_INTENSITY / VISUAL_DENSITY`（1–10）；`preserve / overhaul / hybrid`决定及理由。 |
| 4. 三个构图方向 | 前 | 2–3个差异真实的 wire-outline（不是三种配色）：Hero grid、image role、section rhythm、bottom strategy、motion personality。选择一项，并写为什么另外两项不选。 |
| 5. Business Fidelity + IA | 前 | Fidelity Map：每个 hero/service/CTA/关键图都对应公开事实 URL/位置；IA 和 Bottom 40%策略（Proof/Reassurance/Specificity/Conversion/Brand Close）。 |
| 6. UI 编排与唯一签名 | 前 | Token sheet：type scale、spacing rhythm、grid、CTA hierarchy、image crops、一个商户专属 signature（不得是通用渐变/玻璃卡）。每项映射到 CSS selector。 |
| 7. Motion specification | 前 | 选择一个 Motion Personality；目标情绪、setup→action→resolution、quick/standard/slow、signature easing、进入/hover/CTA三层；`prefers-reduced-motion`替代方案。动效不适合则 `N/A + 行业理由`，不是空白。 |
| 8. 实现与双视口 QA | 后 | 仅静态范围。真实浏览器 1440×900 和390×844，检查 Hero、关键资产、字体、CTA、Bottom 40%、overflow、可点击路径、motion/reduced motion。 |
| 9. Similarity red-team | 前 + 后 | 与最近5个 Demo 做10特征矩阵；任一6/10命中或 name-off 不可识别即 FAIL，回到阶段4。 |
| 10. 独立验收 | 后 | 不同于制作 Owner。检查全部前置工件、最终源码、两视口证据、资产覆盖和八项量表；任何材料缺失 = AWAITING/FAIL。 |

## 30–60 分钟的最小可行流程

这不是“60分钟内先产出一个模板”。在没有合格资产、Reference Board 或构图决定前，**不启动编码计时**；若无法在研究时间内获得可信方向，应停止、换候选或请求范围决定。

| 时间盒 | 动作 | Stop / escalation |
|---:|---|---|
| 0–8 min | 资产发现、权利/可用初判、业务事实切片 | 关键事实/可辨识资产不足：只允许概念回退且须记理由；若仍会误导则 STOP |
| 8–15 min | 5个参考，Design Read/三 dials，2–3方向和选择 | 方向得分低于8/10或选不出差异：STOP，不能编码 |
| 15–22 min | Fidelity Map、IA、Bottom 40%、UI/Motion spec | 映射不成立或需虚构：STOP/换候选 |
| 22–48 min | 写一个方向的 Hero、核心服务、商用收尾；每个关键决定回写 selector | 发现变成最近模板：回到阶段4 |
| 48–60 min | Desktop/Mobile真实浏览器、similarity red-team、独立 reviewer包 | 总体方向 FAIL：停止并重做方向，禁止P2堆补丁 |

触发 `SOP COST REVIEW`：连续两个 Demo 超60分钟；`TIME ANOMALY REVIEW`：小于20分钟却声称 client-showable；任一方向级用户反馈“低级/模板/不像客户/不到80%”=立即失效，重做 2–4 而非仅改颜色/字距/卡片。

## 可直接复制的制作任务单

```text
任务：为 [商户] 制作一页静态 Independent Concept Demo。
边界：仅 HTML/CSS/少量前端JS；禁止登录、表单、支付、CMS、部署、外联、生成/下载媒体；公开资产不等于授权。
权威：先读 AGENTS.md、PROJECT_CORE.md 的 Demo Production；记录版本/mtime。

编码前必交（全部 PASS 才开始）：
1. Customer Asset Coverage Table（发现、权利、可用、版位、selector、未用原因）；
2. 5项实时浏览器 Reference Board（原则和不可复制边界）；
3. 一行 Design Read + dials [V/M/D] + preserve/overhaul；
4. 2–3个不同构图方向，含最终选择；
5. Business Fidelity Map、IA、Bottom40策略；
6. UI signature与Motion Personality spec（或N/A理由）；
7. 最近5个Demo的10项similarity check。

实现后必交：最终源码、最终 asset ledger、1440×900/390×844真实浏览器证据、reduced-motion 检查、独立Reviewer评分。缺任一项：CLIENT-SHOWABLE DEMO=FAIL。
报告：完成/未完成、文件、资产未用理由、两视口、风险、无需暗示授权或发送。
```

## 前置工件清单与可追溯性

| 工件 | 最少字段 | 驱动实现的证据 |
|---|---|---|
| Asset Coverage | source、rights、usable、role、selector、unused reason | `index.html`/CSS selector、local path、hash/mtime |
| Reference Board | URL、date、why、one principle、do-not-copy | 在 composition/UI spec 中的决定编号 |
| Design Read | audience、vibe、system/aesthetic | dials与视觉 token相符 |
| Direction alternatives | 2–3不同 IA/hero/motion/bottom options | 选择理由，未选方向不可只改色 |
| Fidelity Map | visible claim→URL/position→page slot | final screenshot里可定位 |
| Motion Spec | intent、personality、timing/easing、layers、reduce | CSS/JS keyframes/event + reduced-motion proof |
| QA | browser/date/viewport, findings, reviewer | 双视口最终截图和量表 |

## 独立验收评分表

每项0–10；平均≥8.0且单项≥7.0才 PASS。Reviewer 还必须看到每项证据，而不是照抄 Owner 分数。

| 项目 | 低分的可执行定义 |
|---|---|
| 品牌辨识度 | 去掉名字后仍像最近模板；logo/色彩/地点/语义没有形成可识别组合 |
| 素材真实性 | 公开素材/概念图关系不清，或关键官方资产无回退理由 |
| 首屏张力 | Hero无清晰 image role、层级或业务路径 |
| 排版层级 | display/body/label/CTA无秩序；卡片替代编辑判断 |
| 节奏/留白 | 全页均匀 section、同一密度/同一构图；底部塌陷 |
| 商业说服 | 服务、proof、reassurance或转化未推进，CTA仅重复 |
| 移动端 | 390px的阅读顺序、裁切、CTA、触达、overflow不成立 |
| 原创/去模板感 | 10项相似性≥6；换名称后仍能复用 |

### Final gate 状态

- `PASS`：全部前置工件、资产覆盖、reference、方向、实现映射、两视口、similarity、独立量表都具备。
- `AWAITING`：不足以评审（例如本轮浏览器环境故障、截图/Reviewer缺失）；不得称 ready。
- `FAIL — REDESIGN DIRECTION`：用户/Reviewer认为低级、模板、不像客户或<80%；回到阶段2–4。
- `FAIL — ASSET`：有可安全使用的识别资产被无理由替代，或资产真实性不成立；回到0–1。
- `FAIL — MOTION/A11Y`：选用了动效但无目的、性能/减少动效替代；回到7。

## 行业 motion personality 最小架构

| 行业 | Personality | 最小动效（不是炫技） |
|---|---|---|
| roofing/IT&M/BVA | Corporate / grounded | 150ms CTA press；200–300ms capability reveal（transform+opacity）；无强 parallax；reduce=即时状态 |
| transport/industrial | Corporate / energetic restrained | route/progress或work detail的单向进入；不使用漂浮卡/弹跳 |
| beauty/hair | Premium | 350–500ms image/text stagger、剪裁/遮罩揭示、hover只作作品选择反馈；reduce=无位移 |
| wellness | Calm / premium | 500–700ms低振幅淡入+位置；环境层只一项且可暂停/减少；不把预约CTA做戏剧化 |
| wedding celebrant | Premium / human | 350–600ms ceremony/story sequence；不伪造人物或仪式影像；reduce=顺序静态 |

所有动效优先 `transform` 和 `opacity`；不线性空间移动；重要状态非 opacity-only；不超过1/3屏幕移动；三层是上限需求而非强制乱动。少于20个同时动画元素，stagger<500ms。
