# Contact delivery integration

Run `python3 app.py` for loopback preview port 8769. Default mail delivery is OFF. No database, account registration or external mail request is made by starting this app.

The HTML form sends JSON to `/api/enquiry`. `/api/form-status` exposes a boolean only. Required name/email and optional phone/subject/message mirror the original site. Server performs bounded validation, same-origin checks, honeypot, rate limiting and in-process idempotency. An uncertain SMTP error is not automatically retried. Fields remain on failure. The application never logs form bodies or credentials.

Approved deployment needs an HTTPS host capable of Python and a configured delivery service. This loopback WSGI development server is not a production deployment. Set only through a protected server environment: SEALPROOF_ORIGIN, SEALPROOF_SMTP_HOST, SEALPROOF_SMTP_PORT, SEALPROOF_SMTP_USER, SEALPROOF_SMTP_PASSWORD, SEALPROOF_MAIL_FROM, SEALPROOF_MAIL_TO. SEALPROOF_SEND_AUTHORIZED=YES is necessary as an explicit switch; do not activate until the user authorizes the actual destination. SMTP uses verified TLS. Do not put credentials in site files, reports or chat.

SMTP acceptance is not proof of inbox delivery. Formal acceptance requires an authorized synthetic submission and evidence at the actual receiving channel. That test has NOT occurred. Default 503 truthfully says not sent. Local tests inject a recording transport and use example.invalid identities; no real email is sent.

Deployment limits: rate limits and receipt keys are per process and expire; process restarts clear them. Scaling or durable delivery requires adapting storage and anti-abuse at the chosen host. Do not deploy unchanged and call this production ready.

Test: `python3 -m unittest discover -s . -p test_app.py`. Covers validation/header injection, local message construction/receipt, same-origin rejection, default unconfigured state, duplicate and changed payloads, uncertain send retry prevention, rate limiting.
