# Design notes — evidence base for the site's layout and copy rules

The site's spacing, line lengths, copy order, and information architecture follow published
research rather than taste. When editing pages, hold these rules; each cites its source.

## 1. Users scan; they don't read (front-load everything)

Nielsen Norman Group eyetracking (232 users, 2006; replicated 2017) found F-shaped scanning
and that users read roughly 20–28% of the words on a page.

**Rules applied:** the first two words of every heading carry the meaning; one idea per
section; card grids and checklists instead of paragraphs wherever content allows; the answer
sentence comes first in every FAQ entry.

- https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content-discovered/

## 2. Visual appeal is judged in ~50 ms (the hero must stand alone)

Lindgaard et al. 2006 (*Behaviour & Information Technology* 25:2): visual-appeal judgments
formed in 50 ms match judgments formed with unlimited time.

**Rules applied:** heroes are sparse (eyebrow, headline, one paragraph, two buttons); no
dense content above the fold; restrained palette taken from the Bastion console system.

- https://www.tandfonline.com/doi/abs/10.1080/01449290500330448

## 3. Whitespace improves comprehension (generous margins are functional)

Chaparro, Baker, Shaikh, Hull & Brady 2004 (Usability News, Wichita State SURL): text with
margins produced higher comprehension and satisfaction than full-width text.

**Rules applied:** section padding 112px (72px mobile); split-row gap 72px with 104px between
rows; card padding 30/28px; content never spans the full 1120px container.

- https://portfolio.erau.edu/en/publications/reading-online-text-a-comparison-of-four-white-space-layouts/

## 4. Line length: 50–75 characters (enforced in CSS, not by discipline)

Dyson & Haselgrove 2001 and the surrounding literature: moderate line lengths (~55–75 CPL)
read best on screen; very long lines hurt comprehension.

**Rules applied:** `max-width` in `ch` units on lead paragraphs (64ch), callouts (66ch),
checklists (68ch), FAQ answers (72ch); hero subtitle capped at 620px.

- https://www.researchgate.net/publication/220106760_The_Influence_of_Reading_Speed_and_Line_Length_on_the_Effectiveness_of_Reading_from_Screen

## 5. B2B buyers research alone (depth is the sales call)

Gartner's B2B buying-journey research: buyers spend ~17% of the journey meeting suppliers
(~5–6% per vendor) and more time researching independently; a 2025 Gartner survey found 61%
prefer a rep-free experience.

**Rules applied:** the site answers diligence-depth questions on-page (postures, isolation
ladder, audit contents, model tiers, exit story, FAQ) instead of gating them behind contact;
every page ends with a low-pressure next step.

- https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience

## 6. Credibility is earned by verifiability and restraint

Stanford Web Credibility Project (Fogg et al., 4,500+ participants): credibility comes from
professional design matched to purpose, verifiable claims, evidence of a real organization,
easy contact, and the absence of hype.

**Rules applied:** claims tied to checkable product properties ("proven by automated tests",
"validated by injected-fault tests"); a real entity and a monitored inbox in the footer of
every page; honest early-stage answer in the FAQ; no invented numbers anywhere (mirrors the
product's own provenance-labelling principle).

- https://credibility.stanford.edu/guidelines/

## 7. AI-writing tells (banned constructions)

Per Wikipedia's "Signs of AI writing" catalog and the surrounding analysis of contrastive
negation as an LLM signature, the following are removed on sight from site copy:

- **Contrastive negation**: "it's not X, it's Y", "not X but Y", and trailing "X, not Y"
  appositions. State the positive claim directly; if the contrast matters, give each side
  its own full sentence.
- **Negative parallelism**: defining the product by what it isn't ("No locked features. No
  per-token margin.") as a rhetorical device, especially in headings and lists.
- **Punchy fragment pairs**: "Five questions. Five surfaces." / "Three sources. Three cost
  shapes." Join into one sentence or write two real sentences.
- **Rhetorical-question headings** ("Not sure which posture fits?") and colon-plus-triad
  headlines ("The model menu: curated, tiered, and honest").
- **Bold lead-ins on every bullet** ("**Term.** Explanation" repeated down a list) and
  gratuitous rule-of-three flourishes.
- Marketing-puffery vocabulary (seamless, robust, leverage, unlock, elevate, transform,
  supercharge, effortless, reimagined) stays out entirely.

Exceptions: FAQ questions are questions by nature; concrete factual negations inside body
text ("message content is never recorded") are statements of system behavior, allowed.

- https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
- https://olereissmann.com/contrastive-negation-used-to-be-a-rhetorical-device-now-it-screams-i-used-chatgpt/

## 8. AI-design tells (unslop-ui audit)

Audited against the vibecoded-design-tells catalog (3.2M-post Reddit analysis) and its
`devibe_scan.py` scanner; current score: 0 findings. Decisions of record:

- **Scroll-reveal animations removed sitewide** (the fade-up-on-every-section pattern is a
  flagged tell). `site.js` sets the footer year and nothing else. Smooth anchor scrolling
  honors `prefers-reduced-motion`.
- **Layout skeleton broken up**: the home page leads with the real console shot, sections
  vary between splits, card grids, a diagram, and steps, and closing CTA bands are
  left-aligned rather than the template's centered band.
- **Palette and type are declared choices, not defaults**: both mirror the Bastion product
  console (`design/mockups` in gpu_msp_product), marked `unslop-ignore` in `site.css` with
  the rationale (product parity + the no-external-request deploy contract).
- **Chips and tags are lightly rounded (6px), not pills**; status pills remain because they
  reproduce the console's own status language.
- No gradient text, no glow, no emoji-as-icons, no stock illustration.

- https://github.com/JCarterJohnson/vibecoded-design-tells

## House copy rules (owner + philosophy)

- Headlines lead positive: say what arrives. Negation may support inside body text; it may
  never be the first thing scanned. (Follows from rule 1: scanners see only the headline.)
- Pricing never leads: no pricing language in heroes, chips, section leads, or card headers
  outside `/pricing/`. The pricing page stays one click away (nav, after FAQ; footer) because
  hiding pricing entirely damages credibility (rule 6).
- No em-dashes in body copy (owner preference). Page `<title>` separators are exempt.
- Buyer-safety filter: see README.
