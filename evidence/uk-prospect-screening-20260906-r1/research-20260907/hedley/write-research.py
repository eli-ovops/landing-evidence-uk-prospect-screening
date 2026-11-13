from pathlib import Path
from datetime import date,timedelta
import json,csv,hashlib
r=Path(__file__).resolve().parent
assert r==Path('/Volumes/EXTERNAL/海外落地页/evidence/uk-prospect-screening-20260906-r1/research-20260907/hedley').resolve()
u='https://apps.derbyshire.gov.uk/applications/trusted-trader/profile.asp?tid=35659'
l='https://www.chesterfieldlocal.com/local-business'
d=json.loads((r/'council-desktop.json').read_text())
window=date(2026,9,7)-timedelta(days=90)
(r/'CUSTOMER_RESEARCH.md').write_text(f'''# G Hedley Landscape Gardener and Builder｜公开客户研究

核验日：2026-09-07（Asia/Shanghai）；Owner：01a0793a-35b0-74a3-8fc3-38cb7f837ac3。UK / GBP / £99 AS-SHOWN HANDOVER / £199 ONE PERSONALISED UPDATE。

## 结论与当前 Gate

**研究交付完成，候选仍为 HOLD，待原独立 Reviewer 对补充证据复核。** 原独立结论不是合格：唯一明确阻断为旧桌面截图的 Cookie 遮挡。此次已补同 URL 的 1440×900 无遮挡截图及 browser JSON，并由本研究 Owner 实际查看；不能代替独立验收。原分数 75/100、Priority B 仅为原 Owner SELF-QA，本轮不重评、不升分。

|项|2026-09-07 Owner 核验|证据/限制|
|---|---|---|
|身份|已核|Council 名称、Boythorpe 地址、电话、邮箱同页；Chesterfield Local 的 Hedleys Landscapes 直链同一 tid=35659。|
|H0|H0 PASS — CURRENT TRADING STATUS VERIFIED|滚动窗口 {window.isoformat()} 至 2026-09-07；2026-08-13 patio replacement 评价直接可读，距今日25天。2026-07-06、2026-06-17 为补强；2026-06-03 已在窗口外，不拿来通过本次 H0。|
|Track|TRACK N — NO OWNED WEBSITE（有边界的 Owner 复核）|见三检索面；未发现可归属官网。不是证明全网不存在。原独立 Reviewer 已接受此有边界分类。|
|邮箱|PUBLIC BUSINESS EMAIL = PASS|[REDACTED_EMAIL]，Council 明文及 mailto，商户名/地址/电话一致。|
|H0.5 / H5|补证已就绪，独立 HOLD 未关闭|council-desktop.png / .json 是替代输入；双视口由 Owner 查看。|
|Screening Qualification|HOLD|不自行填写 CURRENT QUALIFIED。|
|Demo Readiness|NOT AUTHORIZED|本轮没有制作 Demo。|

## 来源、事实与主张

S1 [Derbyshire County Council Trusted Trader 商户页]({u})：{d['retrieved']}，隔离 headless Chrome，HTTP 200；原始观察见 council-desktop.json、council-mobile.json、council-h0-review.png/.json。
S2 [Chesterfield Local 商户目录]({l})：2026-09-07，隔离浏览器 HTTP 200；local-directory.json 及 local-directory-hedley.png/.json。

**Observed Fact（页面实际显示，不等于现场审计）**：S1 列有 11 Branton Close, Boythorpe, S40 2NL；01246 230493、07891 873820、上述邮箱；78 条评价、加入日期 2015-12-23。这里的加入日期只指目录加入，不能写成创立年份。S2 名称变体链接同一 S1，支持身份交叉确认。S1 的五勾评级是该目录自己的体系，不称 Google 5-star，也不复制 Council Logo 当客户品牌。

**Source Claim（商户介绍）**：园林与建筑相关工作，包括 patios、drives/resin driveways/resin paths、dry stone walls、fencing、trees、hedges/lawns cutting；目录另列 block paving 和 tree surgeons。可组织这些服务事实，不推导结构建筑资质、受保额度、树木作业证照或承诺所有地区可服务。

**Source Claim（客户评价）**：2026-08-13 描述更换 patio；2026-07-06 描述 driveway 工作；2026-06-17 描述庭院改造。评价中有沟通、整洁和施工细节的正面反馈，是可带来源释义的第三方体验，不是商户服务保证。姓名/家庭团队表述不用于确认现任 Owner、完整团队、雇佣或亲属关系。

**UNKNOWN**：完整营业时间、上门接待/门店性质、具体服务半径、当前档期、报价金额、免费报价、保证/保险/专业认证、法定经营主体、准确 Owner 身份、实际收入/利润、网站购买意愿、增长意图、广告投入、网站预算、收件人实际存在与投递性、营销同意。不把目录地址变成 walk-in 门店或承诺到访。

## Track N 三检索面与合理停止

所有查询日期 2026-09-07，搜索用公开 web search；原候选包的2026-09-06记录只作输入。本轮不打开个人查人目录或无关同名结果。

|面|查询/直接来源|结果|
|---|---|---|
|商户控制社媒简介发现|`site:facebook.com "Hedley" "Chesterfield" landscapes`；`site:instagram.com "Hedleys" landscapes`；`"Hedleys Landscapes" website facebook instagram`|未返回可归属官方账号；未声称已访问未知账号简介，OFFICIAL ACCOUNT NOT FOUND IN BOUNDED SEARCH。|
|可信本地商业资料|S1、S2 实际打开并提取外链|S1 未列自有网站；页尾社媒是 Council 的账号，不是 Hedley；S2 指回 S1。|
|精确名称+地点及身份变体|`"G Hedley" "Chesterfield"`；`"07891873820" website`；`"[REDACTED_EMAIL]"`|可归属结果仍为 S1/S2；未见待核归属的独立域名。|

Search access record 见 SEARCH_LOG.md。agent-reach doctor 宣称 Exa 可用，但实际 mcporter 报 Unknown MCP server 'exa'；因此按任务已授权范围降级到公开 web search + 现成隔离 Playwright，未安装、改配置或使用共享 Chrome。Facebook/Instagram OpenCLI 缺扩展，不使用登录态。这里的社媒结果只限公开索引，平台内部账号存在性仍 UNKNOWN。

复核一轮未产生新官方入口/事实类别后停止。没有无目的继续搜索；没有把未发现官方素材等同于没有真实素材。

## 视觉、品牌与 CTA

当前可见视觉只有 Council 商户页的一张庭院图（源 URL 见 CSV，浏览器报告 {next((str(i['width'])+'×'+str(i['height']) for i in d['images'] if '35659.jpg' in i['url']), 'UNKNOWN')}）。它位于该商户资料，但没有足够证据证明上传者、版权方或工程归属；保持 C / UNATTRIBUTED，研究参考，不能作为真实客户案例。原独立 Reviewer 已指出同样限制，本轮没有新证据推翻。

客户正式 Logo、品牌色、品牌字体、官方视频、真实员工/车辆/设备图：未找到可核入口。紫色与五勾标识属于目录系统，不能据此决定商户品牌。没有下载原图片、没有派生素材；截图只是内部研究证据，其 hash 不等于原图 hash。

可用动作是直接电话/邮箱及外链信誉核验。地址只支持本地身份/地区表达；地图可后续采取适当静态外链，不能称可到店。未发现商户专属预约系统或可引用业务表单；Council 的 Rate this Trader 是评价提交，不是业务询盘，不可冒充。所有 CTA 仅检查可见号码和 href，没有拨号、发邮件或提交。

## 研究完整性与下一验收

事实、主张、推理与缺口逐项登记 FACT_ASSET_SOURCE_REGISTER.csv。商业判断与反证见 OPPORTUNITY_AND_GAPS.md。原候选六项 manifest 全匹配，INPUT_INTEGRITY.json 可复核。请原独立 Reviewer 只复核新的无遮挡桌面输入及原 H0.5/H5 理由，不重启无必要全量筛选。其批准仍不构成 Demo Authorization。

本轮明确不起草邮件。Core §13 仅保留状态字段：Recipient=email above；Consent/lawful-basis=NOT VERIFIED；Email Deliverability/Decision-maker Reach/Bounce=UNKNOWN；Recommended subject/Plain-text/Chinese translation/HTML=NOT PRODUCED — EXPLICIT RESEARCH-ONLY SCOPE；Demo URL/screenshot/desktop/mobile Demo images=NOT READY；CLIENT-VISIBLE INTERNAL-TEXT GATE=N/A (no Demo)；OUTREACH PRE-SEND/FINAL LINK/RECIPIENT PATH/OFFER TRANSFER/FINAL SOURCE TRANSFER=NOT RUN；Authorization=DRAFT ONLY — NOT AUTHORIZED TO SEND（本轮实际也无草稿）。
''')
(r/'OPPORTUNITY_AND_GAPS.md').write_text('''# 商业机会、反证和缺口

**Owner 判断：适合保留为待独立复核的 Priority B 研究对象；不支持升 A，也没有已证实的购买意愿。**

Current Offer Purchase Thesis（UK / GBP）：£99 AS-SHOWN HANDOVER 可让准备做 patio、driveway 或边界工程的本地业主，在一张可转发的独立成品页里理解服务选择、查看对应的来源明确的工作反馈，再直接询盘。£199 ONE PERSONALISED UPDATE 只增加客户一次集中提供文字/图片后的合并更新与 QA。两档均不含托管、域名、部署、后台、预约、维护或持续更新；不能承诺搜索流量或新增订单。

|H0.5 判断|可复核理由|
|---|---|
|Current Presentation / Persuasion Gap|Council 页是联系信息、分类标签、小图、服务短述与长评价列表；Chesterfield Local 又指向同页。真实能力存在，但要靠读者自行把项目类型与评价关联。见 council-desktop.png 与 JSON。|
|Five-second Before/After|目录标签与分散反馈 → 清楚的 patio / drive / boundary 三种项目入口、每类对应事实与信誉来源、直接联系。目标是服务理解和判断效率，不是只换颜色。|
|Track-appropriate One-page Reason|第一个独立页面能作为业主转介绍/比较时的稳定单一入口；目录信誉继续保留外链。无需虚构待替换官网；改 Council 样式也不能提供自有可交付页面。|
|Honest Feasibility|静态服务说明、来源释义、电话/mailto 即可；可用原创概念视觉表现材质或项目类型，不使用假案例、假 before/after、假团队。仅可行性判断，未制作。|
|Status|OWNER RESEARCH SUPPORTS THESIS；H0.5/H5 independent HOLD still pending.|

**反证与投入限制**：现有目录已经能查联系方式、服务与大量评价，不能贬为不可用；未发现当前换站/扩张/招聘/营销触发，NO CLEAR TRIGGER FOUND。独立页是否胜过现有目录对老板的实际价值须市场验证。真实项目图权利链薄弱，会增加未来视觉成本；不宜承诺大量 portfolio 或三代团队品牌故事。实际获客占比、忙闲、预算与支付意愿均 UNKNOWN。

**可诚实的未来内容激活建议（不是设计或制作授权）**：
- Patio/path、driveway、wall/fencing 为核心稳定切片；树木/维护保留适量事实说明，避免把业务整体误写成仅高端设计。
- 对应评价只作来源明确的短释义与原目录链接；不得把评价中的流程体验升为固定的业务保证。
- 以独立的材质/布局概念视觉承载各服务的理解任务。不能用目录那一张图裁切多次凑作品，也不能把新生成庭院称真实完成项目。
- 地区与直接联系用于 closing；确切服务半径、营业时段、到访和免费报价都不作承诺。Council 标志不能当客户 Logo。

**未解项与最短下一步**：
1. 原独立 Reviewer 检查 council-desktop.png / .json（1440×900，无 Cookie 遮挡；Owner 已目视确认），并绑定当前文件 hash；原 HOLD 只能由其关闭。原 mobile 可保留，新 mobile 同时提供。
2. 若独立验收通过，再由用户对 Hedley 明确授权 Demo；此研究任务无此权限。
3. 未来 Demo 资产不足可用符合事实的原创概念视觉。原始庭院图只有出现上传归属/许可新证据后才重判，不能为了赶进度将 C 改 B。
4. 首封前须 Demo 独立验收、Offer/Transfer Plan 和合规检查；实际交付前另跑 Final Source/Asset Transfer。当前均 NOT RUN，不起草或发送邮件。

SELF-QA：研究范围交付完成、事实引用与证据绑定已检查、原包未改；INDEPENDENT ACCEPTANCE：沿用原 HOLD，仅提交补证，没有冒充最终 PASS。
''')
queries=['"G Hedley" "Chesterfield"','"Hedleys Landscapes" website facebook instagram','"07891873820" website','site:facebook.com "Hedley" "Chesterfield" landscapes','site:instagram.com "Hedleys" landscapes','"[REDACTED_EMAIL]"']
(r/'SEARCH_LOG.md').write_text('# 公开检索回执\n\n2026-09-07。Engine: web search fallback。全部查询已执行：\n'+''.join('- `'+q+'`\n' for q in queries)+f'\n可归属结果：{u}（引擎也返回带 Letter=T 等目录参数变体）；{l}。未发现可归属独立域名或官方社媒。其他同名/历史/私人查人结果均不采用、未深挖。否定结论仅覆盖本轮公开索引，不证明全网不存在。\n\n工具实际错误：mcporter / Exa — Unknown MCP server exa；doctor 自述可用不覆盖执行失败。Facebook/Instagram OpenCLI 缺 Chrome 扩展；未安装、未登录。隔离 Playwright 直接读取上述两个公开站点成功，未动共享 Chrome。\n')
rows=[]
def add(id,typ,claim,source,layer,decision,placement,restriction,confidence='HIGH',original='NOT DOWNLOADED',h='NOT ACQUIRED'):
 rows.append(dict(Item_ID=id,Type=typ,Business_identity='G Hedley Landscape Gardener and Builder',Fact_or_claim=claim,Source_URL=source,Platform='Derbyshire County Council' if source.startswith('https://apps.derbyshire') else 'Chesterfield Local / public search',Retrieved_date='2026-09-07',Evidence_layer=layer,Identity_confidence=confidence,Original_file_path=original,Original_hash=h,Rights_status=restriction,Privacy_likeness_risk='No likeness use; directory address not a walk-in invitation',Treatment_eligibility='Research only; no asset treatment this round',Activation_disposition=decision,Potential_placement=placement,Exclusion_or_constraint=restriction,Derived_file_hash='NONE'))
add('F01','Identity','Directory identity and linked Hedleys Landscapes name variant',l,'OBSERVED FACT','DIRECT USE','Identity / Hero','Factual identity only')
add('F02','Location','Boythorpe / Chesterfield identity; full directory address retained in S1 browser evidence',u,'OBSERVED FACT','LOCATION/VISIT USE','Location / closing','Use town; service radius and public visit status UNKNOWN')
add('F03','Email','[REDACTED_EMAIL]',u,'OBSERVED FACT','DIRECT USE','Contact','Public business email; no consent or deliverability inferred')
add('F04','Phone','01246230493 / 07891873820',u,'OBSERVED FACT','DIRECT USE','Contact','No call placed; no WhatsApp claim')
add('F05','Services','Patios; drives/resin drives/paths; walls/fences; trees; hedge/lawn cutting',u,'SOURCE CLAIM','FACT/PARAPHRASE USE','Services','Do not expand into unverified building qualifications')
add('F06','H0 review','2026-08-13 patio replacement; window 2026-06-09 to 2026-09-07',u,'OBSERVED DATE + CUSTOMER CLAIM','FACT/PARAPHRASE USE','Proof','H0 only; not proof of growth or purchase intent')
add('F07','Review','2026-07-06 driveway feedback and 2026-06-17 garden transformation',u,'CUSTOMER CLAIM','FACT/PARAPHRASE USE','Proof','Attributed feedback; not service guarantees')
add('F08','Membership','Directory join date 2015-12-23; 78 reviews displayed',u,'OBSERVED FACT','TIME-SENSITIVE VERIFY/REPHRASE','Proof','Not founded date or universal certification; future count recheck')
add('A01','Photo','Small patio/garden profile image; project and uploader attribution unknown',u.replace('profile.asp?tid=35659','images/profilepics/35659.jpg'),'OBSERVED IMAGE; PROJECT UNKNOWN','CONCEPT VISUAL REPLACEMENT','Future service visuals','C — UNATTRIBUTED / RIGHTS UNKNOWN; research reference only',confidence='MEDIUM')
add('A02','Host branding','Council logo/purple theme/rating ticks',u,'OBSERVED FACT','EXCLUDE','None','Host assets are not customer Logo or customer brand')
add('A03','Official assets','Logo / customer fonts / official photos / videos / vehicles / equipment not verified',u,'UNKNOWN','CONCEPT VISUAL REPLACEMENT','Future Hero / services','No attributable official account found; no generation performed',confidence='LOW')
add('F09','People','Reviews name a team; current legal owner and staffing not verified',u,'CUSTOMER CLAIM / UNKNOWN','EXCLUDE','No team section','No invented biography; no personal investigation',confidence='MEDIUM')
add('F10','Hours / scope','Hours; service radius; visit status; pricing; certifications; availability UNKNOWN',u,'UNKNOWN','EXCLUDE','No unsupported promises','Use known local identity and direct enquiry only',confidence='LOW')
add('F11','Website / social','Bounded searches and directories found no attributable owned site/account',l,'BOUNDED OBSERVATION','EXCLUDE','Internal research','Track N is not a universal absence claim',confidence='MEDIUM')
add('F12','CTA boundary','Council review submission and Council social links are not merchant enquiry channels',u,'OBSERVED FACT','EXCLUDE','No copied form','Use confirmed business contact only')
with (r/'FACT_ASSET_SOURCE_REGISTER.csv').open('w',newline='') as f:
 w=csv.DictWriter(f,fieldnames=rows[0].keys());w.writeheader();w.writerows(rows)
print('Wrote research, opportunity, register, search log; items',len(rows))
