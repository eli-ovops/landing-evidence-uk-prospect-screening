# Cloudflare Pages official evidence note

Checked: 2026-08-14

- Pages is available on all plans and supports Direct Upload: https://developers.cloudflare.com/pages/
- Free-plan limits relevant to this spike: 500 builds/month, 1 concurrent build, 20,000 files/site, 25 MiB/file, 100 Pages projects/account: https://developers.cloudflare.com/pages/platform/limits/
- Purely static asset requests are free and unlimited; Functions would use Workers quotas, so this spike contains no Functions: https://developers.cloudflare.com/pages/functions/routing/
- Direct Upload accepts a folder via Wrangler and serves the project at `<PROJECT_NAME>.pages.dev`: https://developers.cloudflare.com/pages/get-started/direct-upload/
- A `_headers` file can set `X-Robots-Tag: noindex`; this is indexing guidance, not access control: https://developers.cloudflare.com/pages/configuration/headers/
- Wrangler supports deleting a Pages project with `pages project delete`: https://developers.cloudflare.com/workers/wrangler/commands/pages/
- Dashboard project deletion for a project without a custom domain is documented here: https://developers.cloudflare.com/learning-paths/personal-website/pages-setup/git-manage-site/

Assessment: a tiny static, no-Functions, no-database, no-custom-domain fictional preview fits the documented Free-plan limits. No obvious documented restriction blocks this narrow unlisted concept-preview test. The `pages.dev` URL remains publicly reachable while deployed; noindex is not access control.
