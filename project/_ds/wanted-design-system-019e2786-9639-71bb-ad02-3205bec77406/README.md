# Wanted Design System

A faithful recreation of the public **Wanted Design System** (Community Figma file, distributed under CC BY 4.0) — packaged so a design agent can produce well-branded interfaces, slides, and prototypes for the Wanted family of products.

## What is Wanted?

[Wanted](https://www.wanted.co.kr) is a major Korean recruitment / careers platform run by **Wanted Lab, Inc.** The Wanted family includes several adjacent products, each with its own logotype but a shared visual language:

| Product | Korean name | What it is |
| --- | --- | --- |
| **Wanted** | 원티드 | Flagship: jobs, company profiles, AI-matched recommendations. |
| **Wanted Gigs** | 원티드 긱스 | Freelance / contract project marketplace. |
| **Wanted Space** | 원티드 스페이스 | Co-working / shared office bookings. |
| **Wanted Agent** | 원티드 에이전트 | Career-coach + agent service (Agent symbol is a distinctive geometric "cross" mark). |
| **Wanted LaaS** | 원티드 채용 솔루션 (Lab-as-a-Service) | Recruiting-platform-as-a-service for enterprises. |
| **Wanted OneID** | 원티드 통합 로그인 | Single sign-on across the Wanted family. |

The design system is bilingual — every page in the source Figma carries Korean + English headings, and bodies are written in Korean. The work-product is built primarily for Korean audiences using the **Pretendard JP** typeface (a CJK-friendly superfamily), with **Wanted Sans** (Wanted's own open-source variable font) reserved for the wordmarks and the largest display moments.

## Sources

- **Figma file:** "Wanted Design System (Community)" — distributed by Wanted under CC BY 4.0. Mounted as a virtual filesystem during construction; key node IDs noted in comments throughout.
- **Wanted Sans (font, open source):** https://wanted.github.io/wanted-sans
- **Pretendard (font, open source):** https://github.com/orioncactus/pretendard
- **Wanted Brand Center** (linked from the Figma but not crawled): wanted.co.kr/brand
- **Live products to compare against:**
  - Marketing / jobs: https://www.wanted.co.kr
  - Wanted Space: https://www.wantedspace.ai
  - Wanted Gigs: https://www.wanted.co.kr/gigs

Everything in this skill comes from the Figma file — no live screenshots were captured. Where the Figma pseudocode was ambiguous (gradients, masked PNGs, raster-only assets) I've flagged it in **CAVEATS** below.

---

## Index

```
README.md                    ← you are here
SKILL.md                     ← agent-skill manifest
colors_and_type.css          ← all design tokens (CSS vars + utility classes)
fonts/                       ← (empty — fonts loaded via CDN; see CAVEATS)
assets/
  logos/                     ← Wanted, Agent, Gigs, Space wordmarks + symbols as SVG
preview/                     ← cards rendered in the Design System tab
ui_kits/
  wanted-jobs/               ← UI kit for the main jobs product
    index.html               ← interactive demo
    *.jsx                    ← components (Header, JobCard, etc.)
```

---

## CONTENT FUNDAMENTALS

The Wanted system is **bilingual by default** (Korean primary, English secondary) and the voice is what I'd call **"engineer-warm Korean"** — declarative, concrete, gently encouraging.

### Voice & tone

- **Declarative present, plain endings.** Korean copy uses the polite formal `-습니다 / -합니다` ending throughout — never the breezy `-요` or the brand-y `-해요!`. Example from the source: *"일관된 브랜드 아이덴티티와 시각적 스타일을 유지하기 위해 정의된 색상 모음입니다."* (*"A defined collection of colors that maintains a consistent brand identity and visual style."*).
- **Quietly warm, never bro-y.** From the file's closing note: *"오픈 소스는 우리가 일하는 환경을 더욱 풍요롭고 생산적으로 만들어주는 핵심이라고 믿습니다."* (*"We believe open source is what makes our working environment richer and more productive."*) The system speaks like a colleague writing thoughtful documentation, not like marketing.
- **Concrete over abstract.** Update messages prefer specifics: "this fixes alignment in the modal dismiss button" beats "various improvements." The Makers Principle page literally has a *before/after* section showing how to rewrite a vague release note as a specific one.
- **No exclamation marks, no emoji, no playful greetings.** The source contains zero of any of these — including in the encouraging closing notes. The energy comes from clarity, not punctuation.
- **English & Korean side by side, never mixed mid-sentence.** Pattern: a Korean sentence followed by its English equivalent on the next line, or English headings ("Color - Palette") over Korean body. Never the Konglish hybrid of "디자인을 시작해보세요!".

### Casing

- **English: sentence case** for headings, **Title Case** only for proper nouns and product names ("Wanted Space", "Color - Palette").
- Code-like tokens use kebab-case: `color-semantic-primary-normal`, `color-atomic-blue-50`.
- Korean has no casing — but it tracks consistently: never SHOUT, never `이렇게`-bold-for-emphasis.

### Voice — "I vs you"

The source rarely uses pronouns. When it does, it's **"우리"** (we, inclusive), addressing the reader as a peer-maker, never a customer. English copy in product pages would use "you" — but only when literally talking about the user's tasks, never as a stand-in for the user's identity.

### Vibe

Clean, optimistic, technical-craft-respecting. Think Stripe's design dictionary read in Korean. Long-form prose is welcome; the closing note in the file is two paragraphs that read like a personal essay.

---

## VISUAL FOUNDATIONS

### Type
- **Pretendard JP** is the workhorse: **Regular 400**, **Medium 500**, **SemiBold 600** (most common), **Bold 700**, **ExtraBold 800**. Body sits at 16 / 500, headings at 24–36 / 700.
- **Wanted Sans Variable** carries product wordmarks, hero displays, and the occasional 72px showcase moment. Don't use it for body — it's a display face.
- **SF Mono Medium** for any code or token strings (e.g. `color-atomic-blue-600`).
- 19-step type scale from `caption-2` (11px) → `display-1` (56px), with **letter-spacing baked into every step** (tighter at the top, looser at the bottom — a Korean-typography convention because Hangul gets visually crowded at small sizes).
- Headings carry **negative letter-spacing** (-0.027em → -0.012em). Body and below carry **positive letter-spacing** (+0.006em → +0.031em).
- Line-heights are tight up top (~1.3 for displays) and roomy at the bottom (~1.5 for body).

### Color
- The **brand blue is `#0066FF`** (atomic `blue-600`), used as the primary CTA color and almost nothing else. It does not appear as a gradient, as a fill on hero illustrations, or as a tint on imagery. It's reserved.
- The **default neutral ramp is "Cool Neutral"** — slightly cool grays anchored on `#70737C` (used 3,614× in the source). True black/white ("Common") exists but is used sparingly for max-contrast situations.
- 14 atomic ramps: Common, Cool Neutral, Blue, Red, Green, Yellow, Orange, Lime, Cyan, Sky, Purple, Magenta, Pink. Each ramp has 14–22 stops on a non-linear scale.
- A separate **opacity scale** (5%, 8%, 12%, 16%, 22%, 28%, 35%, 43%, 52%, 61%, 74%, 88%, 97%) drives all dividers, overlays, and shadow alphas — so a divider is `rgba(112,115,124,0.22)`, not a custom gray.
- Semantic tokens layer on top: `color-primary`, `color-fg-neutral`, `color-bg-base`, `color-line-neutral`, `color-state-hover`, etc. **Always reach for semantic before atomic.**

### Backgrounds
- **White is the default canvas** (`#FFFFFF`). The signature design-system page background is pure white, with sections grouped on slightly tinted neutral pads (`rgba(112,115,124,0.05)` — barely visible, just enough to define a region).
- No full-bleed photography in the system itself. No textures, no patterns, no gradients.
- The **Wanted Symbol roundel** uses `rgb(20, 25, 30)` (near-black with a cool tilt) as its circle background — that's the one place the system gets dramatic.

### Animation
- The source doesn't define motion tokens (Figma can't capture motion well), but inferred behavior from button "Animate=False" component variants and the overall feel:
  - **Easing:** standard cubic-bezier (0.4, 0, 0.2, 1) for everything; nothing bouncy.
  - **Duration:** ~150ms for hover/press, ~250ms for layout shifts, ~400ms for page transitions.
  - **No bouncy springs, no playful overshoots.** Wanted is a careers product — credibility > delight.
  - Loading uses a simple animated ring (the `AnimateFalse` button slot).

### Hover & press
- **Hover:** an 8%-tint overlay (`color-state-hover` = `rgba(112,115,124,0.08)`) is laid over the current background. Buttons don't shift color outright — they just get a wash.
- **Press:** the same overlay deepens to 16% (`color-state-pressed`). No shrink, no rotate.
- **Disabled:** opacity 0.43 on text/icon, the fill drops to `bg-muted`. Cursor `not-allowed`.
- **Focus:** a 4px outer ring at 35% primary (`rgba(0,102,255,0.35)`), 2px offset.

### Borders
- Default 1px border at `rgba(112,115,124,0.22)`. That single token is used hundreds of times throughout the file.
- Strong borders use `#989BA2` (cool-neutral 500) — only for the active state of segmented controls and similar.
- **No colored borders.** Even a "selected" card uses a 2px primary border, not a colored one.

### Shadows
- Shadows are **always neutral, never colored**. Four levels in the system:
  - `emphasize`  — `0 1px 4px rgba(0,0,0,0.08)` (resting cards)
  - `strong`     — `0 4px 16px rgba(0,0,0,0.12)` (hover, dropdowns)
  - `heavy`      — `0 8px 32px rgba(23,23,23,0.1)` (popovers)
  - `modal`      — `0 24px 56px rgba(23,23,23,0.1)` (sheet, dialog)
- Cards usually have **a 1px border AND no shadow at rest** — shadow appears on hover, not on resting state. This is unusual and worth preserving.

### Transparency & blur
- Modal scrims use `rgba(23,23,25,0.52)` solid alpha (no blur). The product is built for older browsers; backdrop-filter is avoided.
- Dropdowns and toasts use **opaque white with a shadow**, not glassmorphism.

### Imagery
- The system itself doesn't ship stock imagery. In product, expect cool/neutral photography — a hint of teal/blue in the white balance. No warm filter, no heavy grain. Office and team photos shot in natural light.

### Corner radii — "soft but architectural"
- **4 / 6 / 8 / 10 / 12 / 16 / 24 / 32px** are the standard stops.
- Pills are 9999px and reserved for filter chips, tags, and avatars.
- Heroes and "spec card" containers use **`32px`** — this huge radius on big cards is one of Wanted's signatures.
- Buttons use **`10px`** (medium) — not pillowy, not sharp.
- Form inputs use **`10–12px`**.

### Cards
- **1px border (default: `rgba(112,115,124,0.22)`) + 32px radius + no resting shadow.**
- Internal padding scales with card size: small cards 16px, medium 24–32px, hero cards 64px.
- Card titles use Title-3 (24/700), body uses Body-1 (16/500).
- Hover lifts via `shadow-emphasize` and a 1px-darker border, not a transform.

### Layout
- The Figma's nominal frame width is **1536 / 1280**. The component library declares both **Desktop** (1024+) and **Mobile** (≤414) variants for every interactive widget.
- An 8-point spacing grid: 4, 8, 16, 24, 32, 48, 64, 96, 128. Anything off-grid is rare and intentional.
- Components reserve big breathing room: 64px between major sections, 32px between subsections, 16px between items in a list.

---

## ICONOGRAPHY

The Wanted icon set lives in the Figma under `/Icon` and `/1-Theme/1-Icon`. It contains hundreds of glyphs across categories: circle / square containers (filled & outlined), navigation (Recruit, Career, Social, MyPage, Menu), brand logos (Apple, Google, Facebook), and utility (Check, Close, Plus, Pin, Location, etc.).

### Approach (observed)

- **Custom outline set, 24px grid.** Each icon ships in two weights: **Normal** (~1.5px stroke) and **Thick** (~2px stroke).
- **Filled + outlined pairs.** Most concept icons come as a pair — e.g. `name=circleCheck, fill=false` and `fill=true`. The filled is used for selected/active states.
- **Geometric, not pictographic.** Icons are built out of rectangles, circles, and minimal curves — no detailed illustration. Counters are round, terminals are squared.
- **Single-color, `currentColor` fill.** No two-tone icons, no brand-blue icons. Color is set by the surrounding component via `color:`.
- The icon font itself is not extractable from the .fig — every icon is constructed from primitive Vector + BooleanOperation nodes. **We have not copied the set; substituting Lucide for now** (see below).

### What's in `assets/`

- **Brand logos and wordmarks**, copied directly from the Figma source:
  - `assets/logos/wanted-symbol.svg` — the "W" mark (with the descending tail), filled with `currentColor`.
  - `assets/logos/wanted-logotype.svg` — the "wanted" wordmark.
  - `assets/logos/wanted-agent-symbol.svg` — the geometric cross-plus mark used by Wanted Agent.
  - `assets/logos/wanted-agent-logotype.svg` / `wanted-gigs-logotype.svg` / `wanted-space-logotype.svg` — sub-product wordmarks.
- All logos are vector and inherit color via `fill="currentColor"` — drop them in an element and set `color: black | white | #0066ff` as needed.

### Iconography in product

- **No emoji** anywhere in the source. None in copy, none as decorative bullets.
- **No unicode glyphs as icons** (no ✓ for check, no × for close — both are real SVGs).
- **Lucide as substitution (FLAGGED):** Until we lift Wanted's own icons, I'm pulling utility icons from **Lucide** (matched 1.5px stroke weight). Lucide is loaded from CDN; production work should swap for the real Wanted set. The brand logos above are real.

---

## CAVEATS — read before iterating

1. **Fonts load from CDN, not bundled.** Both Pretendard JP and Wanted Sans Variable are pulled from jsDelivr in `colors_and_type.css`. If the user works offline or wants files in `fonts/`, ask them to drop the `.woff2` files into `fonts/` and I'll rewrite the `@font-face` rules. Substitution targets if both fail: Inter / system-ui.
2. **Icons are substituted with Lucide.** The Wanted icon set is hundreds of compound vector components — not feasible to lift mechanically. Lucide matches the stroke weight visually. Ask the user to share the SVG export of the Wanted icon set if pixel fidelity matters.
3. **Dark theme tokens are inferred.** The Figma has a `/Color---Semantic/Dark` panel but I parsed only the Light section in full; dark values were derived by swapping the ramp (`fg-neutral: white-with-alpha` etc). Verify against the source if dark is critical.
4. **No motion tokens in the source.** Easing / duration values in this README are inferred from the static component library and Wanted's product behavior — not directly from Figma.
5. **No product UI was screenshotted.** The UI kit recreates patterns based on the Figma component library (Buttons, Cards, Lists, Navigation), not from live www.wanted.co.kr. If a screen looks off vs. the real product, that's why — please share screenshots and I'll re-align.
6. **Only one UI kit is built (wanted-jobs).** The system covers 6 products; I picked the flagship as the most representative. Ask for any of: `wanted-space`, `wanted-gigs`, `wanted-agent`, `wanted-laas`, or any specific screen.

---

## How to use (humans)

Most files are loadable in a browser as-is. Start with `preview/colors-semantic.html` (or the Design System tab — every card in `preview/` is registered) for foundations, then `ui_kits/wanted-jobs/index.html` for the interactive demo.

## How to use (agents)

See `SKILL.md`. The short version: read this README, then `colors_and_type.css`. Drop the CSS file into any HTML output, use the semantic tokens, and copy logos/components from `assets/` and `ui_kits/wanted-jobs/` as needed.
