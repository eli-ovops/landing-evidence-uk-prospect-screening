# Cold Demo返工根因独立审计

审计日期：2026-08-24（+0800）  
角色：独立质量审计 Owner（只读审计；未修改任何 Demo）  
样本：8 个商户 / 7 个行业；见 `SAMPLE_EVIDENCE_MATRIX.md`。

## 结论

这是**混合原因**，但主因不是“没有规则”。项目当前 `PROJECT_CORE.md` 已规定客户资产优先、3–5 个同行参考、Design Intent、跨 Demo 相似性检查、双视口独立验收和“低级/模板/不像客户/不到80%即方向 FAIL”。重复返工说明的是：这些后来形成的规则常在**代码或首版之后**才出现，且现有 QA 多是 Owner 自验/技术自验，未把前置工件与可见实现、独立验收建立可追溯闭环。

### Top 5 根因（频率 × 影响 × 前置可检测性）

| 排名 | 根因 | 样本频率 | 影响 | 事前可检测性 | 反事实证据 | 必须修复的门禁 |
|---|---|---:|---|---|---|---|
| 1 | 客户资产盘点不是编码前强制输入；有可识别公开资产时常直接回退到概念/AI 主图 | 7/8 有可识别 logo、场景、作品或品牌线索；其中至少 4 个首版优先用了概念图 | 极高：名称替换后仍像行业模板 | 高 | 若 Hero、logo、色彩、真实服务/地点需逐项映射，`AI hero first` 不能通过 | Customer Asset Coverage Gate（未用须写理由） |
| 2 | 统一单页骨架先于行业/客户设计决策 | 8/8 可在源码看见 hero→价值/服务卡→proof→CTA/close 的相近顺序；多处相似 small-caps、serif headline、outline/button 与 card/section token | 极高：跨行业同质化，后半页尤其明显 | 高 | 若先做 2–3 种构图并做 name-off 测试，不能靠换色/替图放行 | Pre-code composition choice + similarity red-team |
| 3 | `Design Intent`/Image Ledger/Business Map 作为补文档，缺少时间顺序和“实现映射”证据 | 旧样本 ProGuard、IT&M、Pure K 缺或仅有局部；新版 wellness/hair 有文档却出现 v2→v9 或 v2→v4 反复修订 | 高 | 高 | 若文档先于 `index.html` 且其每一项有 selector/asset/hash 对应，返工应收敛而非叠版本 | 前置工件带 mtime、selector 与截图锚点 |
| 4 | QA 把可打开、无 overflow、链接、截图和 Owner 自评误作视觉 PASS | 8/8 有 QA 或截图线索；独立量表/独立 Owner/最终双视口证据并非全部可证 | 极高：低质量 Demo 仍进入“已发/ready”叙事 | 高 | 独立 Reviewer 以八项量表审 `name-off`、资产覆盖、布局机制和 motion 后，技术 PASS 不会覆盖方向 FAIL | 生产 Owner 不能自授 PASS；missing evidence = FAIL |
| 5 | 30–60 分钟被执行为“尽快拼一页”，而不是限制范围后完成一个已选方向 | 返工链最明显：Tranquil v2–v9、Lavella v2–v4、Wild Clover v2–v4；工时记录无法单独解释方向成本 | 高 | 中高 | 在代码前完成 10–15 分钟资料/构图决策，能减少后续多版 CSS 覆盖与 P2 修补 | 时间盒分层；方向 FAIL 必须停止并重选 |

## 根因树与 Five Whys

```text
用户看到“AI 模板、非客户、低于80%”
├─ 可见层：通用 hero/三卡/CTA、概念图、轻动效或无动效
│  ├─ 资产没有成为页面输入（资产发现 ≠ 可用映射 ≠ 实际使用）
│  └─ 行业参考没有成为布局/排版/motion 决策
├─ 生产层：先写 HTML/CSS，后补 Intent/Ledger/QA
│  ├─ 30–60 分钟被误解为先做模板
│  └─ 复用脚手架缺少相似性熔断
└─ 控制层：Owner 自验与技术证据替代独立视觉验收
   ├─ 缺少前置工件时间戳和 selector 追溯
   └─ 用户的方向级否定未自动阻断 P2 修补
```

Five Whys：为什么有客户可识别资产仍显得通用？因为主视觉先被概念图/行业氛围图占位；为什么能占位？因为台账记录了来源/权利，但没有要求“发现→可用→页面版位”的缺口必须关闭；为什么未关闭仍通过？因为 QA 检查加载、链接和无溢出，却没有将资产覆盖或 name-off 辨识度作为硬判定；为什么独立验收没有拦截？因为“不同 Owner + 最终 1440/390 + 八项量表”的规则对旧样本并未形成可追溯证据，并且新规则出现时已有版本已被称作完成；为什么反复发生？因为任务单没有把它们设为编写代码前的 stopping condition。

## 严重但必须区分的事实

- **公开可见不等于可自由使用。** 本审计不把公开 logo、照片、评论或社媒图片当作客户授权；所有利用都须保留 `CUSTOMER AUTHORIZATION: NOT VERIFIED`，或换用不暗示真实项目的原创概念图。
- **没有动效不自动是缺陷。** 对 trades、transport、metal fabrication，克制的反馈与层级引导比炫技更适合；真正的缺陷是没有 Motion Personality、没有叙事/反馈目的，或把 `transition` 当成动效完成。
- **文档存在不证明其驱动实现。** 对 Wild Clover、Tranquil、Lavella 可见设计/台账文档，但多版目录本身证明它们没有充分阻止方向返工；没有保留初版的样本必须标为 `EVIDENCE UNAVAILABLE`。

## 审计边界与证据缺口

- 本地 HTTP 服务在终端可达，但当前独立浏览器环境拒绝连接 `127.0.0.1`；远端浏览器也被 URL policy 拦截。因此本轮**不能声称完成独立实时浏览器视觉 PASS**。已使用保留的最终 Desktop/Mobile 截图、源码、资产和任务记录；新 Blueprint 将实时浏览器设为下一轮不可替代 Gate。
- 20 个参考 URL 用只读 HTTP 跟随检查记录为“可访问性代理”；这不等同于真实浏览器视觉核验。HTTP 403/WAF、SSL 失败或浏览器受阻均明确标出，未计入 PASS。
- 任务标题、摘要、Owner 自评均未被当作事实；它们仅用于定位相关原始文件和用户反馈。版本缺失一律 `EVIDENCE UNAVAILABLE`。

## 建议进入下一轮治理的条款（建议稿，不修改现行规则）

1. 将 Asset Coverage、Reference Board、Design Read/three dials、2–3 方向选择写成**编码前阻断件**，并要求 mtime/commit 或生成时间先于首个 HTML/CSS。
2. 每个资产台账加 `discovered / usable / rendered / unused reason / selector or file` 字段；有可识别官方资产而被概念图取代必须由独立 Reviewer签字接受回退理由。
3. 将 `CROSS-DEMO SIMILARITY CHECK` 改为量化红队：至少比较 10 个特征，命中 6 个不得开始或必须换构图。
4. 将动效从可选装饰改为“写 Motion Personality；可证明地使用，或写 N/A 理由”；`prefers-reduced-motion` 为有动效页面的硬门。
5. 在 30 分钟前做方向停止点；不达 8/10 不允许通过 CSS P2 修补进入发送准备。
