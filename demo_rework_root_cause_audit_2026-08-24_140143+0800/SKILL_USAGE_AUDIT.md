# Skills 与工作流落实审计

| Skill / 应触发形状 | 被点名/要求 | 读取证据 | 是否产生明确工件 | 工件是否驱动实现 | 本审计判定 |
|---|---|---|---|---|---|
| website-delivery-sop | 网站 Demo、审计、验收 | 当前审计完整读取 `SKILL.md` 与 DS-002B；本轮记录 DS-002B SHA/mtime | P0–P3模板、一些 docs/竞争分析在 BVA/Karen等出现 | 不稳定；文档存在但不保证客户资产/构图选择入代码 | **规则有，执行转换失效** |
| design-taste-frontend | landing/redesign、反模板 | 当前审计完整读取 | 多个新版有 `DESIGN_INTENT.md` | 无 Design Read/three dials/多构图选择的稳定证据；多版返工是反证 | **只到“文档/自评”级或缺证** |
| motion-design | 动效、过渡、品牌 motion | 当前审计完整读取 quality checklist | `script.js`、CSS transition、Tranquil reduced-motion见于局部 | 未发现逐样本 Motion Personality、时长/easing palette、narrative、performance/reduced-motion证据 | **未落地为 motion spec** |
| media-use | logo/image/brand/media治理 | 当前审计完整读取；未安装/登录/调用供应商（禁止） | Image Ledger 在 Wild/Tranquil/Lavella/Pure K等存在 | 常有 source/rights，但缺 discovered→rendered selector→unused reason闭环 | **台账不等于资产编排** |
| layout | 重构图、grid、响应式 | 应触发 | 无统一读取/工件证据 | CSS grid/flex存在不等于布局决策可追溯 | **建议按需引入** |
| ui-styling | 视觉层级/品牌 token | 应触发 | CSS variables在多个样本存在 | tokens多为实现后样式，不是唯一视觉签名 | **建议按需引入** |
| animations | 当需要 CSS/JS animation | 应触发仅在真的选择动效时 | 多个 `script.js`/`transition` | 可见动效、目的、reduced-motion未能普遍证明 | **不能拿声明充数** |
| brand | 客户现有身份/voice | 应触发 | logo/颜色/文案证据局部存在 | 缺 brand inheritance decision | **建议与 Asset Coverage 并用** |
| accessibility | 交互、motion、移动端 | 应触发 | skip links/个别 reduced-motion | 无系统 keyboard/contrast/motion审计证据 | **应成为独立 QA，不借 visual PASS 代替** |
| playwright / screenshots | 最终双视口 QA | 多目录有 `qa/final`或 `output/playwright` | Desktop/Mobile PNG 有 | 截图证明一个渲染时刻，不证明独立 reviewer或方向质量 | **证据层不能越级** |

## 四级落地模型

`提及 Skill` → `完整读取` → `产生可审计工件` → `工件对 index/CSS/assets/QA 有一对一影响`。只有第4级才是有效使用。本项目的主要断点是第2/3级：文件名和 QA check 存在，但没有生成时间、selector、决策记录和独立验收把它们扣在一起。

## 指定 SOP 指纹

- `DS-002B_website_delivery_sop_v2.md`：SHA-256 `5b70133e7a155a713c130d07d883afffbd1f57eaa7bfc7c2e2c3dfc9f9bb926a`；mtime `2026-08-09T16:00:52+0800`（读取时记录）。
- website-delivery SOP 的 P0–P3 要求 visual reference→goal mapping、asset register、人类确认、page mapping、desktop/mobile acceptance；它支持本 Blueprint，但不授权客户资产、生成或发布。

## 具体失效机制

1. 把“已读取/已写 QA”当作 Skill 已用，跳过前置产物和实现映射。
2. 在写完模板后才补 Design Intent、Ledger、相似性 check，形成合理化而非决策。
3. 把 `transition`、scroll-smooth 或脚本存在当成 motion design；没有情绪目标/主次环境层/无障碍方案。
4. 将 Playwright 截图、HTTP、无溢出提升为 client-showable；它们只能证明相应技术层。
