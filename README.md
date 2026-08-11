# Freehold — site

Public site for Freehold (managed private AI), a product of Freehold Technologies, Inc.,
served at [freeholdtech.ai](https://freeholdtech.ai).

`ajgventures.co` is the previous domain and 301-redirects here.

## Structure

Multi-page static site — no build step, no framework, no external requests (fonts, scripts,
and styles are local or system). Visual language follows the Bastion console design system
(light canvas, white surfaces, `#2e6be6` accent).

```
index.html            Home
platform/             The configured deployment
applications/         The app catalog
governance/           Governance & console
deployment/           Deployment postures
security/             Security & sovereignty
solutions/            Buyer profiles & industries
economics/            Where should each workload run
pricing/              Pricing structure (no numbers — structure + CTA)
faq/                  FAQ
company/              About, design partners, app-founder & channel partners
assets/site.css       Shared stylesheet (single source of visual truth)
assets/site.js        Shared behavior (reveal animation + footer year; fail-open)
404.html              Not-found page (Cloudflare Pages serves it automatically)
robots.txt, sitemap.xml
```

Header/footer are duplicated per page by design (no build step). When editing nav or footer,
apply the same change to every `index.html`.

## Content rules

Copy is buyer-facing and drawn from two sources in `gpu_msp_product`: commercial facts
from the business case (`docs/strategy/business-case-v6.md`) and the console's conceptual
model from `docs/strategy/user-experience/CONSOLE-REDESIGN-PRINCIPLES.md` (people → groups
→ applications → models; entitlement/capacity split; measured/derived/declared provenance;
Hot/Available latency tiers; Air-gapped/Controlled/Connected isolation postures; true
names). The design/mockups HTML is a styling reference only, never a content source.
Filtered throughout: no margins, no internal pricing strategy, no team/funding details,
no competitive analysis, no unearned claims (certification is "built on certified
stacks", never "certified" until it is).

## Deploy

Static hosting of this directory as-is (Cloudflare Pages: no build command, output
directory `/`). Clean URLs come from the directory-per-page layout.
