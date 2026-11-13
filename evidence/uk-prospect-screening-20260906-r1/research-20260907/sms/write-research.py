from pathlib import Path
import json,csv,hashlib,os,datetime
root=Path('/Volumes/EXTERNAL/海外落地页/evidence/uk-prospect-screening-20260906-r1/research-20260907/sms').resolve()
assert root==Path.cwd().resolve()/'evidence/uk-prospect-screening-20260906-r1/research-20260907/sms'
def write(name,text):
 p=root/name
 assert p.resolve().parent==root
 with p.open('x') as f:f.write(text)
council='https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=71418'
yell='https://www.yell.com/biz/sms-handyman-services-chesterfield-chesterfield-9162929/'
tu='https://www.pitchero.com/clubs/tupton/d/sponsors.html'
contact='https://www.pitchero.com/clubs/tupton/contact'
write('AUTHORITY.md',f'''# S M S Handyman Services｜研究权限与证据入口

Owner: {os.environ.get('CODEX_THREAD_ID','UNKNOWN')}；PMO: 01a07433-2cdb-7131-be97-e0d626c14758。
日期：2026-09-07（Asia/Shanghai）。实际 runtime model / effort: UNKNOWN；未改模型或提高成本。
新目录首次检查不存在；本 Owner 创建。唯一写入根：{root}。其他候选包保持冻结。

已完整读取 /Users/USER/.codex/AGENTS.md、适用 details §2/3/4，以及 /Volumes/EXTERNAL/海外落地页/PROJECT_CORE.md（986行，分段读取）。当前 Screening Core v1.1.4；UK / GBP；£99 AS-SHOWN HANDOVER / £199 ONE PERSONALISED UPDATE。
公开研究使用 agent-reach：已读取 SKILL.md 和 search/web references。Exa 返回 Unknown MCP server 'exa'，降级到现有 web search + 用户指定既有隔离 headless Playwright，不安装、不登录、不操作共享 Chrome。customers skill 已读取，但访谈/ventures 流程与本次公开单客户研究不符，未运行也不称 USED。

当前任务仅允许公开只读研究、必要本地证据与四份研究文档；禁止 Demo、HTML、图像生成、批量资产下载、邮件草稿/发送、部署、账户、外部提交、付费、删除或再派任务。当前明确“不起草邮件”覆盖 Core §13 研究阶段草稿默认；本包仅保留 NOT REQUESTED 状态。

## 冻结输入与验收身份
../../supplement-01/candidate-sms/CANDIDATE.md、MANIFEST.sha256、INDEPENDENT_REVIEW.md 以及 manifest 引用六项均读取；2026-09-07 shasum -a 256 -c 六项全部 OK。
独立原件结论：Screening Qualification QUALIFIED / Priority B / 73 (22/15/19/17) / MEDIUM；Demo NOT AUTHORIZED。该结论由既有独立 Reviewer 作出，不是本 Owner 自授；本补充研究 SELF-QA 完成，新增结论尚待 PMO/独立验收。
限制：缺真实工程图、可转让品牌资产；保险/DBS/机构合同仅来源主张。

## 本轮必需验证
Owner 读取原 manifest、实时 Council 身份/ISO日期/邮箱、三面搜索和新增来源；用既有 Chromium headless 保存 URL/UTC timestamp/正文/图像链接与两视口。PMO 只读原始证据验收，本 Owner 不代替最终 Reviewer。
原始资料：council.json、tupton.json、tupton-identity.json、yell.json；截图为研究取证，不是客户 Demo 截图。
SOURCE / ASSET TRANSFER ELIGIBILITY = NOT RUN。CUSTOMER AUTHORIZATION = NOT VERIFIED。
''')
write('SEARCH_LOG.md',f'''# 2026-09-07 公开检索日志

agent-reach Exa 不可用（Unknown MCP server 'exa'）；以下现有 web search 已执行。无账户登录；社媒面仅搜索索引，不声称已打开未找到的账号。

|查询|结果与用途|
|---|---|
|"S M S Handyman Services" Grassmoor website|Council、Yell 同地区资料；无可归属独立域名|
|"SMS" "Grassmoor" handyman facebook instagram|大量无关同词结果；不计客户事实|
|"07725999370"|Council/Yell 为核心身份链，宽泛结果不计|
|site:facebook.com "SMS Handyman" "Chesterfield"|未发现可归属官方账号或独立域名|
|site:instagram.com "S M S Handyman"|未发现可归属官方账号或独立域名|
|"S M S Handyman" Tupton|赞助页与 Contact 页，深入核商户赞助线索|
|"[REDACTED_EMAIL]" website|Council 和旧 rugby 目录线索；旧PDF不作当前营业证据、不扩挖个人信息|

可信商业资料面实时打开 {council}：商户联系方式及所有链接已保存于 council.json，无商户官网/社媒链接；页尾社媒属于 Council。
精确名+地区、官方社媒搜索、可信资料三个面均已执行。TRACK N — NO OWNED WEBSITE VERIFIED 仅限这些检索面，不声明全网不存在。

新增 Yell 搜索索引显示地址、电话与服务清单，URL {yell}；本地 headless 返回403，ACCESS_BLOCKED_FROM_CURRENT_ENVIRONMENT。身份交叉仅为索引支持，新增 Yell-only 服务不升为当前确认事实。
Tupton sponsors {tu} 与 contact {contact} 实际返回200；赞助页有同名品牌，contact 相同电话关联 Steve Shipp。第三方俱乐部公开资料，非商户自有官网；赞助费用、合作日期与目前支付状态 UNKNOWN。
停止理由：已发现入口、三面检索、一个新增身份交叉来源及一次品牌/联系复核完成；未发现新的官方资产类别或疑似独立域名，不无限搜索。
''')
write('CUSTOMER_RESEARCH.md',f'''# S M S Handyman Services｜公开客户研究

2026-09-07；Owner 补充研究，待验收。原独立筛选 QUALIFIED / Priority B 保留；本轮未重评分、未自授最终合格。

## 早期门禁当前复核
- H0 PASS — CURRENT TRADING STATUS VERIFIED：实时 Council 页 {council} 的客户评价日期 **2026-07-16**，描述室内外扶手安装；截至2026-09-07为53天，窗口起点2026-06-09。名称、Grassmoor、同页电话/邮箱建立归属；不是抓取日期或无年份推断。原始正文 council.json、画面 council-review-window.png。
- Track N：见 SEARCH_LOG.md。三个检索面已执行，未见可确认自有域名；Council 的页尾社媒为 Council 账号，不属于商户。
- PUBLIC BUSINESS EMAIL = PASS：**[REDACTED_EMAIL]** 今日仍以完整明文和 mailto 出现在 Council 商户联系方式，同页 **07725999370**、**2 Birch Close, Grassmoor, S42 5YD**。来源为可信商业目录。Deliverability、Decision-maker Reach、Bounce/Delivery Observation 均 UNKNOWN；未联系。
- 原 Reviewer 无待补早期阻断，仍限制真实工程图片与资产转让；本轮未发现推翻 H0/邮箱/静态适配的新事实。

## 已观察事实与来源主张
|类别|结论|证据与边界|
|---|---|---|
|身份与地点|Council 显示本商户、Grassmoor 地址；Yell 索引名称/地址/电话一致|council.json 实时；Yell 实际浏览器403。地址是公开业务登记点，不证明可到访店面或展示厅|
|负责人称呼|评价多次称 Steve；Tupton 联系页同一电话对应 Steve Shipp|tupton-identity.json 实时。是强身份关联，非公司法定所有人证明；不使用其俱乐部角色或肖像做营销|
|核心业务|目录列 decking、handyman、plumber、property maintenance/repairs、sheds、summerhouses；商户自述室内 DIY 到户外 garden structures|council.json；能作为其公开服务陈述，不证明执照、专项认证或所有任务都接|
|具体工作证明|2026-07-16扶手；2026-04-28 summerhouse；2025-12-14厨房龙头；2025-07-24橱柜/搁板/壁挂电视|客户评价语义，可带来源简述；不是独立验收过的工程、也无相应工程照片|
|更多历史工作|2023-04-11 pergola repair；2024-03-06抽屉/腐坏门框；2025-05-02 gutters|历史能力线索，不能作为新服务发布、当前时效或今年项目|
|信任入口|Council 页面当前可见20条评价及Joined 30/08/2019，图像alt为Rated 5 out of 5|这是目录显示，不等同2019年成立、七年连续经营或官方给所有工程担保|
|品牌|小型红/黑/灰工具字标 S.M.S. HANDYMAN SERVICES，原资源350×118|council-desktop.png及council.json；紫色/橙色属于Council界面，不能当客户品牌|
|社区线索|Tupton赞助页列 S M S Handyman / Club–Player Sponsor，联系页同电话对应Steve Shipp|tupton.json、tupton-identity.json；可说明俱乐部列示及身份关联，日期/金额未知，不等于主动扩张或品牌预算已证实|
|保险、DBS、机构合同|商户自述存在|未外部核资格、有效期或合同，不做徽章、机构Logo或官方背书|

## 反向证据必须保留
2025-04-14评价包含未收到回复的投诉；商户回复称多渠道消息量大、难查垃圾箱且当时工作排至June。2025-06-06评价也称曾排满。本轮只把它们作为**历史容量与联系摩擦**，不推测2026年仍排满、不判定无增长意愿。现有目录已经能找到电话和可信评价，新增单页应帮助预筛选和转介绍，不能只“把电话做大”或宣称更多询盘一定有利。

## 尚未知
营业时间、当前可接单日期、服务半径/邻近城市覆盖、到店接待、报价/收费、保证/保修、团队人数、法人身份、现行保险/DBS证明、所有权明确的项目照片、现有官方社媒、客户获客渠道占比和实际付费意愿均 UNKNOWN。不承诺24/7、急修/当日服务、免费报价、固定价格、Gas Safe或电工资质；Yell-only car servicing/basic electrics 不进入建议核心切片。

## 授权与草稿包状态
Recipient email / Public Business Email：上述已核验；Consent/lawful-basis NOT VERIFIED；拒收声明未见于已读业务正文，未完成独立合规核验。Recommended subject / Plain-text body / Chinese translation：NOT REQUESTED — 本轮明确禁止起草。HTML body：NOT REQUESTED。Demo URL、Demo screenshot及桌面/移动客户截图：NOT READY。所有发送前/链接/内部文字 Gate：NOT RUN；OFFER / TRANSFER PLAN、FINAL SOURCE / ASSET TRANSFER ELIGIBILITY：NOT RUN。Authorization：DRAFT ONLY — NOT AUTHORIZED TO SEND；本轮实际无邮件草稿。Demo NOT AUTHORIZED。
''')
write('OPPORTUNITY_AND_GAPS.md',f'''# 商业机会、素材处置与下一步

UK / GBP：£99 AS-SHOWN HANDOVER / £199 ONE PERSONALISED UPDATE。研究 Owner 判断仍存在值得测试的静态单页增量；独立筛选原件为Priority B，不提升为A、不把73分当购买概率。

**Purchase thesis（推理，非已验证需求）**：为Grassmoor居民及替家人寻找帮助的人提供一张可转发的页面，让他们先区分室内小修/安装和户外木结构，看到与具体任务对应的公开评价，再通过一个明确联系路径确认是否承接；这比阅读通用目录分类和按时间排列的评价更容易判断“我的这类小活能否找Steve”。

现状已能建立基本信任和联系；真正增量是任务选择、工作证据配对与独立转发载体，不是抹去或取代Council验证入口。五秒反差可为“混合分类+泛介绍”到“室内实用维修 / 户外结构，两类需求一眼分清”；询盘以公开电话为主、邮箱备选，先说明工作与所在地区再确认可用时间，不自建表单、不承诺响应速度。这是待客户验证的页面策略，未制作设计。

£99对应已完成可交付的静态成品；£199只加客户一次集中提交文字/图片后的单轮更新及QA。域名/托管/部署/维护不含。无收入、客单价或付费行为数据，不能声称“一单回本”。NO CLEAR TRIGGER FOUND；Growth Intent UNKNOWN。旧忙碌/漏讯回复降低“更多leads”论证，不能抹去，也不是当前拒绝网站证据。

## 可用信息与视觉边界
- 稳定的名称、地区、电话、邮箱、服务类别可支持内容；评价仅短摘要并保留归属，选择扶手/室内安装与summerhouse两条，不能制作虚构before/after。
- Council Logo是明确指向该商户的视觉线索，但上传主体与权利链未证明，当前标C/归属待核，不能自动写A/B或最终可转让。350×118仅适合小字标，未下载、未增强。
- Tupton存在第二Logo资源链接，但浏览器naturalWidth=0，未证明成功渲染/源图质量；第三方俱乐部上传不等于商户上传。俱乐部人物和其他赞助商图全部排除。
- 无已核实真实项目/工作过程/设备/团队图。若后续获得本商户Demo授权，可用原创的室内安装细节、户外木结构细节承担各自商业节拍；必须是服务概念图，不能称Steve真实项目或用假人像/假施工结果。不能只放一张Hero然后全文字。本轮未生成任何图片。
- 若要保留Logo，后续Owner先补可定位的A/B归属依据或使用权确认；无需把Logo缺口扩大成必须向用户索取素材的全任务阻断。最终转让仍单独审。

## 下一建议
PMO只读验收本研究包，保留Priority B的有限投入价值。如果用户随后明确授权本商户Demo，执行Owner用本台账进入Pre-code，选择最小室内/户外切片、核事实与素材处置、取得独立Pre-code审查后制作并做两视口QA。当前无Demo授权，不进入制作、邮件或部署。

SELF-QA：身份/日期/邮箱来源明确；三个检索面记录；新事实与历史主张、推理、UNKNOWN分开；反向证据保留；所有资产为URL登记；原候选文件未修改。新增研究 INDEPENDENT ACCEPTANCE：PENDING（本Owner不填写最终PASS）。
''')
rows=[
('F01','identity','商户名称与Grassmoor地址',council,'Council','OBSERVED FACT','HIGH','LOCATION/VISIT USE','Hero/location','只展示地区；街道登记点不等于到访门店'),
('F02','contact','07725999370；[REDACTED_EMAIL]',council,'Council','OBSERVED FACT','HIGH','DIRECT USE','CTA','未拨打/发送；送达及决策人UNKNOWN'),
('F03','service','decking、handyman、property repairs、sheds、summerhouses、plumber',council,'Council','SOURCE CLAIM','HIGH','FACT/PARAPHRASE USE','services','目录服务分类不等于专业资格'),
('F04','review','2026-07-16室内外handrails',council,'Council reviews','SOURCE CLAIM','HIGH','FACT/PARAPHRASE USE','proof','H0近期证据；不保证响应速度'),
('F05','review','2026-04-28 summerhouse',council,'Council reviews','SOURCE CLAIM','HIGH','FACT/PARAPHRASE USE','outdoor proof','非90天H0；不称新近项目'),
('F06','review','2025-12-14厨房龙头；2025-07-24搁板橱柜电视',council,'Council reviews','SOURCE CLAIM','HIGH','FACT/PARAPHRASE USE','indoor proof','历史工作语义；无实拍图'),
('F07','review','2023-04-11 pergola；2024-03-06抽屉/门框；2025-05-02gutters',council,'Council reviews','SOURCE CLAIM','HIGH','EXCLUDE','none','核心切片仅选代表工作；保留扩展线索不堆全量服务'),
('F08','trust','20 reviews；Joined 30/08/2019；rating alt 5/5',council,'Council','OBSERVED FACT','HIGH','TIME-SENSITIVE VERIFY/REPHRASE','trust','展示前再核；不得推导成立年份'),
('F09','qualification','保险、DBS、机构合同',council,'Council profile','SOURCE CLAIM','MEDIUM','EXCLUDE','none','资格/合同有效期未核；不做背书'),
('F10','negative','2025-04-14漏讯/排满回复；2025-06-06曾排满',council,'Council reviews','SOURCE CLAIM','HIGH','EXCLUDE','internal strategy','历史容量反向证据，影响商业论证；不用于客户展示'),
('F11','identity','Yell同地址电话；basic plumbing/flat pack等清单',yell,'Yell search index','INDEX ONLY','MEDIUM','EXCLUDE','none','浏览器403；Yell-only服务不当前确认'),
('F12','community','俱乐部列S M S Handyman sponsor',tu,'Tupton RUFC','OBSERVED FACT','MEDIUM','EXCLUDE','none','非核心服务证明，赞助时间和金额UNKNOWN'),
('F13','identity','相同电话关联Steve Shipp',contact,'Tupton RUFC','OBSERVED FACT / IDENTITY INFERENCE','HIGH','EXCLUDE','internal identity','只做身份交叉；不挪用俱乐部角色/个人肖像'),
('A01','logo','S.M.S.红黑灰工具字标',council,'Council image','OBSERVED VISUAL','HIGH','EXCLUDE','pending brand','上传主体未证；当前C，不直接用；后续核A/B或使用权'),
('A02','logo','Tupton sponsor image URL',tu,'Pitchero image','URL OBSERVED / IMAGE NOT LOADED','MEDIUM','EXCLUDE','none','第三方俱乐部图；naturalWidth0、归属/版权不明'),
('U01','hours/area','营业时间、服务半径、到店、接单日期',council,'bounded public research','UNKNOWN','LOW','EXCLUDE','none','不添加虚构覆盖区或24/7承诺'),
('U02','visual','真实项目、团队、车辆、工具过程照片',council,'bounded public research','NOT VERIFIED','LOW','CONCEPT VISUAL REPLACEMENT','future indoor/outdoor visual','仅未来获授权后可考虑概念替代；本轮未制作'),
('U03','intent','购买意愿、增长、当前触发、预算',council,'bounded public research','UNKNOWN','LOW','EXCLUDE','internal strategy','NO CLEAR TRIGGER FOUND；不编造收入或成交概率')]
fields=['Item ID','Type','Fact or asset','Source URL','Platform','Retrieved date','Evidence class','Identity confidence','Activation Disposition','Target placement','Restriction / exclusion reason','Original file/path','Original hash','Dimensions/quality','Rights status','Derived file/hash']
with (root/'FACT_ASSET_SOURCE_REGISTER.csv').open('x',newline='') as f:
 w=csv.writer(f);w.writerow(fields)
 for id,typ,fact,url,platform,cl,confidence,disp,place,note in rows:
  original='NOT DOWNLOADED';dim='N/A';rights='Facts only; no asset transfer permission'
  if id=='A01':original='https://apps.derbyshire.gov.uk/applications/trusted-trader/images/profilepics/71418.jpg';dim='350x118';rights='C — upload provenance UNKNOWN; CUSTOMER AUTHORIZATION NOT VERIFIED'
  if id=='A02':original='https://img-res.pitchero.com/?url=images.pitchero.com%2Fclub_sponsors%2F2081%2F1710504422_large.jpg&h=138&w=320&t=frame&bg=ffffff';dim='Not loaded, naturalWidth 0';rights='C — third-party club image, no licence verified'
  w.writerow([id,typ,fact,url,platform,'2026-09-07',cl,confidence,disp,place,note,original,'NOT DOWNLOADED / NOT HASHED',dim,rights,'NONE'])
# Narrow identity excerpt, no unrelated club personnel retained in this evidence fragment.
p=root/'tupton-identity.json';d=json.loads(p.read_text());d['excerpt']='Steve Shipp\nSafeguarding Officer\n07725999370';p.write_text(json.dumps(d,ensure_ascii=False,indent=2))
write('VALIDATION.md','''# SELF-QA validation

原候选 MANIFEST 六项实际全部 OK；未重评分或改写原件。新增 CSV 18项，每项有唯一处置与限制。Council headless200、日期/邮箱直接可见；Yell403保留阻断；Tupton200。两视口为来源研究证据而非Demo验收。
本轮产物限定本目录；无资产下载、客户HTML、图像生成、邮件草稿、外部写入。新增研究待独立验收。
磁盘：开始df外盘1.7Ti可用/8%；本目录小于100MB，不触发扩扫；未删除任何文件。最终df及目录大小见工具验证回报。
''')
print('Created four required reports + source register + search/validation records')
