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

## House copy rules (owner + philosophy)

- Headlines lead positive: say what arrives, not what we aren't. Negation is allowed inside
  body text as support, never as the first thing scanned. (Follows from rule 1: scanners see
  only the headline.)
- Pricing never leads: no pricing language in heroes, chips, section leads, or card headers
  outside `/pricing/`. The pricing page stays one click away (nav, after FAQ; footer) because
  hiding pricing entirely damages credibility (rule 6).
- No em-dashes in body copy (owner preference). Page `<title>` separators are exempt.
- Buyer-safety filter: see README.
