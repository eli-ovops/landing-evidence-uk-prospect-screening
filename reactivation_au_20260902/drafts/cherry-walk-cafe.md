# Cherry Walk Cafe — reactivation draft

STATUS: HOLD — NOT AUTHORIZED TO SEND

Recipient email: [REDACTED_EMAIL]  
Public Business Email: PASS — 2026 Buckley’s Guide advertisement attributes it to Cherry Walk Cafe; verified 2026-09-02.  
Original Gmail context: reply in the 2026-08-15 thread, subject `A small website idea for Cherry Walk Cafe`; original price `NOT STATED`.

Subject / reply context: Re: A small website idea for Cherry Walk Cafe

Email — English plain text (121 words):

```text
Hi Cherry Walk Cafe team,

I sent the independent concept below in August and have kept it available because it still presents a welcoming first view of the cafe for Bright visitors, particularly on mobile.

https://soft-creponne-d9f2d9.netlify.app/

The existing finished static one-page site is available as shown for AU$99. It is not a personalised update and does not include hosting, a domain, a CMS, ongoing maintenance, or extra revisions.

If it is useful as it stands, or if it is not the right fit, a one-sentence reply saying whether timing, price, or something missing is the reason would be genuinely helpful.

Eli Chao
Independent Web Designer
[REDACTED_EMAIL]
+86 182 6851 4405

If you do not want further emails from me, reply unsubscribe.
```

中文对照：

```text
Cherry Walk Cafe 团队，

我在八月发过下方的独立概念页面；它仍能为 Bright 的访客呈现一个亲切的咖啡馆第一印象，尤其适合手机浏览，因此我一直保留着它。

链接如上。

现有的完整静态单页网站按当前展示状态可用 AU$99 获得。它不包含个性化更新、托管、域名、CMS、持续维护或额外修改。

如果它按现状对你有用，或并不适合，只要一句回复说明原因是时机、价格还是缺少某项内容，都会对我很有帮助。

如果不想再收到我的邮件，请回复 unsubscribe。
```

HTML body: NOT REQUESTED — PLAIN TEXT DEFAULT.

Demo screenshot / email image: NOT READY — no current rendered Desktop or ~390px evidence; HTTP 200 is recorded separately but is not visual acceptance.

QA at draft creation: recipient PASS; link one/PASS; old-thread match PASS; AU$99 mention one/PASS; single voluntary feedback CTA PASS; HUMANE FEEDBACK CTA PASS; client-visible internal-text PASS; sender identification and unsubscribe copy PASS. Revalidation result is recorded below; no send.

## Revalidation correction — 2026-09-02

The prior QA conclusion above is superseded as follows:

 - Schedule 2 clause 4 conspicuous-publication review: `PASS` — see [CONSENT_REVIEW.md](../CONSENT_REVIEW.md).
 - Desktop: `PASS` — actual Chrome capture `../evidence/browser/cherry-walk-desktop-1440x900.png`.
 - Mobile: `FAIL` — actual Chrome capture `../evidence/browser/cherry-walk-mobile-390x844.png`; notice bar and descriptive copy clip on the right.
 - `CLIENT-SHOWABLE DEMO = FAIL` because the required approximately 390px rendering fails.
 - `OFFER / TRANSFER PLAN = BLOCKED`: historical display evidence does not establish source-code ownership or the required target-specific disposition of uncertain assets. See [OFFER_TRANSFER_PLAN.md](../OFFER_TRANSFER_PLAN.md).
 - `FINAL SOURCE / ASSET TRANSFER ELIGIBILITY = NOT RUN`; it is not used as a pre-offer substitute.
- Conditional named-target authorization is recorded, but both independent blockers remain. `SENT = 0`.

## Final browser/source correction — 2026-09-02

The earlier claim of a 390px clipping failure is withdrawn. Playwright with a true `390 x 844` mobile context recorded `innerWidth=390`, `documentElement.scrollWidth=390`, and `body.scrollWidth=390`; the fresh Mobile viewport check is `PASS`.

 - `CLIENT-VISIBLE INTERNAL-TEXT GATE = FAIL`. CLIENT-VISIBLE INTERNAL-TEXT GATE = FAIL — visible owner-confirmation, placeholder, and final-claim governance text.
 - `FINAL SOURCE / ASSET TRANSFER ELIGIBILITY = NOT RUN`; this is correctly separate from the quotation-stage gate.
 - `SENT = 0`: the visible internal-text failure independently blocks sending; the offer/transfer plan is also not passed.
