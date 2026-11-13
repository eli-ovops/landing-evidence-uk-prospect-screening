# 样本与客户资产证据矩阵

`发现`表示本审计从客户公开资料/本地证据中能识别；不表示获授权。`已用`只按最终或指定 Demo 源码的本地路径判定。`未用`不等于缺陷，除非存在可辨识、适合且无记录回退理由的官方资产被通用替代。

| 样本（行业） | 返工/多轮证据 | 客户资产：发现 / 可用线索 | 已用 / 未用与原因 | 权利状态 | 前置工件与实现判定 | 核心结论 |
|---|---|---|---|---|---|---|
| ProGuard Roofworks（屋面 trades） | `client_proguard_roofworks/demo/`；相关历史任务 `01a01f3f-8376-7072-b297-db5d612b6489` | 业务名、屋面服务、现站身份线索；logo/项目照原始来源本轮未完整保留 | 源码/CSS可审；完整 Image Ledger、Design Intent、最终双视口截图：`EVIDENCE UNAVAILABLE` | 未证实 | Business Fidelity Map 存在；无法证明其先于代码或映射到 selector | 早期样本；不能假称资产已继承或独立验收已完成 |
| IT & M Services（IT/维修服务） | 同期独立核对要求“logo one-to-one、hero carousel”；任务 `01a01f3f-890a-7143-9cdf-b4a649edb2ae` | 官方 logo、服务语义、站点身份 | `demo/index.html`、`styles.css`；保留的 `v3-official-logo-desktop-1440x900.png` 说明 logo 是问题，但本轮未找到完整 ledger | 未证实 | Map 有；Design Intent/Reference Board/Motion spec：未找到 | 资产 fidelity 被作为后期检查，而非首轮构图输入 |
| Karen Brown / A Timeless Love（婚礼 celebrant） | 多个 `backups/20260821-*`、QA 与 Image Ledger；相关任务 `01a022b2-c6e2-7383-ad54-25610c357316` | 客户名、仪式服务、真实作品/场景线索、客户辨识文字 | 资产台账与网站版本存在；首版与末版可比较；详尽公开源逐项本轮未重访 | 台账必须保持 NOT VERIFIED | QA、Map、Ledger均存在，且多次 backup 证明有后补/修订链 | 相比多数样本证据较完整；仍不能由“93分”旧结论取代本轮独立验收 |
| Wild Clover Skin Care（wellness） | v2→v3→v4、`QA.md`、`DESIGN_INTENT.md`、`CROSS_DEMO_SIMILARITY_CHECK.md`、最终截图 | public logo、hero、服务/flow/bespoke图片、品牌名/治疗语义 | v3/v4 使用 `wild-clover-public-logo.png`、`wild-clover-public-hero.jpg` 和概念 material；台账记录来源 | NOT VERIFIED | 有完整 Intent/Map/Ledger；但跨版本显示意图未一次收敛成最终版 | 资产沿用相对强；问题是“文档 PASS”未阻止多轮方向返工 |
| Tranquil Touch Relaxation Therapy（wellness） | v2、v3、v4、v5、v6、v7、v8、v9；用户曾要求从 source-like booking grid 改为不同设计位置 | public logo/studio，服务/地点/预约路径，真实 studio 图片 | v9 用 `tranquil-touch-public-studio.jpg` + `ritual-concept-v6.png`；logo未必保留为最终主导元素 | NOT VERIFIED | Intent/Map/Similarity存在；v9 多份 `v8.css`、`seam-fix.css`、`no-panels.css`、`one-canvas.css` 是补丁式方向收敛证据 | 最清楚地证明“先实现后补方向”与 P2 CSS 疊加的成本 |
| Lavella Hair Limited（hair/beauty） | v2→v3→v4，保留多张 desktop/mobile、research 和 email preview | public logo、studio、colour/braids/extensions 作品、服务分类 | v4 使用官方 logo 和多张 public/派生图片；`IMAGE_LEDGER.md`列路径与来源 | NOT VERIFIED | Intent/Map/Ledger/Similarity均存在；而 v2–v4仍表明前置选择不足或未被强制执行 | 资产覆盖较高但摄影/派生素材不能被叙述成客户授权；需要“未用原因+页面映射” |
| Pure K Beauty（beauty） | `demo/`、后续用户要求修订；`ui-prototype.*` 预览失败线索；任务 `01a02c2e-ea3c-7dd1-b112-b113b006370f` | 官网品牌、服务、booking、两个公开邮箱；Hero公开素材线索 | `INTERNAL_IMAGE_LEDGER.md`、Map、HTML/CSS/JS；主图为 AI/概念的历史线索，非官方客户照片 | NOT VERIFIED | 无正式 Design Intent/Similarity/稳定最终双视口 evidence 在本轮发现 | “不是没有资料，而是资料没有转成可执行视觉 brief”的代表 |
| BVA Metal Fabrications（industrial fabrication） | 多次 output/playwright 截图、`PRODUCT.md`、`01_COMPETITOR_ANALYSIS.md`、`10_TESTING_CHECKLIST.md` | 两个 public logo/wordmark、结构/激光/现场/不锈钢服务、工坊情境 | 代码引用 `bva-logo-public-source.png`、`bva-wordmark-public-source.png`；Hero/服务为概念图 | NOT VERIFIED | 早期 P0–P3模板文件与 competitor analysis 有，但无当前 Design Intent/Similarity/Motion spec | 证明 SOP 资料可以齐，但无“客户资产在关键视觉中必须优先”的可执行选择 |

## 资产覆盖判断规则

严重度：**硬缺陷**＝可识别官方品牌/场景/项目资产在无需误导的版位可最小使用，最终却用通用 AI/图库替换，且无 Ledger 回退理由；**高**＝资产或业务语义存在但没有 `selector/file` 映射；**中**＝无法确认是否有合法/稳定可用素材，或仅有概念图才诚实。

本轮不能为各样本给单一“资产覆盖百分比”：可用资产种类、权利、画质和页面作用不等，统一百分比会伪精确。下一轮应用蓝图中的逐项 Coverage Gate。

## 证据索引

- `client_uk_wild_clover_skin_care/demo_v[2-4]_20260823/{DESIGN_INTENT,BUSINESS_FIDELITY_MAP,IMAGE_LEDGER,QA}.md` 与 `qa/final/*.png`
- `client_uk_tranquil_touch_relaxation_therapy/demo_v[2-9]_20260823/`（含 v9 的覆盖 CSS）
- `client_uk_lavella_hair_limited/demo_v[2-4]_20260823/{DESIGN_INTENT,BUSINESS_FIDELITY_MAP,IMAGE_LEDGER,QA}.md`
- `client_pure_k_beauty/demo/{INTERNAL_IMAGE_LEDGER,BUSINESS_FIDELITY_MAP}.md`
- `client_bva_metal_fabrications/demo/{index.html,styles.css,docs/01_COMPETITOR_ANALYSIS.md}`
- `client_it_and_m_services/demo/`、`client_proguard_roofworks/demo/`、`client_karen_brown_a_timeless_love/demo/`
