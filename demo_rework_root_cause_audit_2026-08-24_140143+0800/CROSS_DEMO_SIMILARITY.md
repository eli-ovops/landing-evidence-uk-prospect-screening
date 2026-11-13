# 跨 Demo 相似性红队

## 方法与局限

比较最终可定位 `index.html`/CSS 的结构与 tokens；不是视觉像素相似度，也不以 Owner 的 `CROSS_DEMO_SIMILARITY_CHECK=PASS` 取代本审计。`Y`表示观察到同类机制，`?`表示版本/证据不足。

| 特征 | ProGuard | IT&M | Karen | Wild | Tranquil | Lavella | Pure K | BVA | 风险 |
|---|---|---|---|---|---|---|---|---|---|
| 大 Hero + 商户名/大字 + 单 CTA | Y | Y | Y | Y | Y | Y | Y | Y | 8/8：不能作为唯一首屏方案 |
| serif display + 小写/uppercase eyebrow | ? | ? | Y | Y | Y | Y | Y | Y | 视觉气质跨行业趋同 |
| 2–3 服务/价值卡或等宽条目 | Y | Y | Y | Y | Y | Y | Y | Y | 8/8：业务语义不同但信息构件同构 |
| hero → services → proof/reassurance → closing CTA | Y | Y | Y | Y | Y | Y | Y | Y | 8/8：需要允许按行业改成工作流、案例、地点、报价逻辑等 |
| full-bleed image + dark/light overlay | ? | Y | Y | Y | Y | Y | Y | Y | 可能造成“AI landing page”观感 |
| outline/filled rectangle CTA + arrow/符号 | ? | Y | Y | Y | Y | Y | Y | Y | 通用 button language 未经品牌校准 |
| cards/面板/分隔线作为节奏主力 | Y | Y | Y | Y | Y | Y | Y | Y | 底部商业叙事容易退化为卡片堆叠 |
| 强制性、可见的 motion narrative | ? | ? | ? | ? | `script.js`存在，但 spec/可见效果未独立核验 | ? | `script.js`存在 | ? | 存在 JS/transition 不等于动效 |
| reduced-motion 媒体查询 | ? | ? | ? | ? | Y（v7 CSS可见） | ? | ? | ? | 只有可证样本不足以说明全体合规 |

### 源码锚点例子

- Tranquil v7：`.hero` 双栏、`.ritual-list article` 三列服务、`.quotes` 三格、`.visit-grid`，以及 `@media(prefers-reduced-motion:reduce)`；[`styles.css`](/Volumes/EXTERNAL/海外落地页/client_uk_tranquil_touch_relaxation_therapy/demo_v7_20260823/styles.css)。
- Anthony Lewis（不计入返工样本、仅做现行对照）同样有 `.hero/.closing`、`.service-grid` 和 small-caps `.eyebrow`，表明这种语法可跨目录复制；[`styles.css`](/Volumes/EXTERNAL/海外落地页/client_uk_anthony_lewis/demo_2026-08-24/styles.css)。
- Wild Clover v2 明确把应避免的通用结构写为 “single generic/AI hero → huge serif title → three cards → huge review number → CTA → minimal footer”，但自声明不能证明后续所有版本脱离该机制；[`CROSS_DEMO_SIMILARITY_CHECK.md`](/Volumes/EXTERNAL/海外落地页/client_uk_wild_clover_skin_care/demo_v2_20260823/CROSS_DEMO_SIMILARITY_CHECK.md)。

## 相似性矩阵（风险，不是抄袭指控）

| 组别 | 高度相似机制 | 判定 |
|---|---|---|
| Wild Clover / Tranquil / Lavella / Pure K | premium-beauty serif、image hero、sectioned treatments、proof、booking close | **高**：同业不等于应同构；必须通过不同构图、摄影叙事、预约前决策点区分 |
| ProGuard / IT&M / BVA | 工业/服务 Hero、能力卡、信任/CTA close | **高**：应改为项目/工序/地域/报价与联系路径差异，而非同卡片换色 |
| Karen / wellness group | 情绪化Hero、编排式服务、quote/proof、contact close | **中高**：需要以仪式流程、真实场景、受众 decision journey 取代 generic premium grammar |

## 拟定熔断规则

每次制作前对最近 5 个 Demo 检查以下十项：Hero 构图、字体、首屏信息密度、图片区角色、section sequence、服务呈现、proof mechanism、CTA shape/copy、Bottom 40%、motion entry。若和任一既有 Demo 命中 **6/10**，或 `name-off` 后无法说明客户识别线索，固定 `SIMILARITY RED-TEAM = FAIL`；重选构图，不得先写 CSS。
