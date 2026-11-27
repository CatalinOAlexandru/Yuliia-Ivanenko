---
name: Yuliia Ivanenko
description: Portfolio of an aerial artist, dancer and performer; peach studio sweep, red hoop, oxblood ink.
colors:
  peach: "#f3bba3"
  peach-soft: "#f7cdb9"
  peach-light: "#fbe3d6"
  peach-dim: "#e9b9a6"
  red: "#a11f1b"
  red-deep: "#8b1714"
  oxblood: "#2e0a09"
  ink: "#3a0e0c"
  ink-soft: "#7a2a22"
typography:
  display:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(3.5rem, 9vw, 6rem)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 300
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.005em"
  lede:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Jost, Futura, Century Gothic, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.01em"
rounded:
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 4rem)"
  section: "clamp(5rem, 11vw, 9.5rem)"
  hang: "2.5rem"
  container: "1320px"
components:
  button-pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.55em 1.35em 0.6em"
    height: "2.875rem"
  button-pill-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.peach}"
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.peach-light}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.55em 1.35em 0.6em"
    height: "2.875rem"
  button-solid-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.peach-light}"
  button-light:
    backgroundColor: "transparent"
    textColor: "{colors.peach-light}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.55em 1.35em 0.6em"
  button-light-hover:
    backgroundColor: "{colors.peach-light}"
    textColor: "{colors.red-deep}"
  button-round:
    backgroundColor: "transparent"
    textColor: "{colors.peach-light}"
    rounded: "{rounded.pill}"
    size: "3rem"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "0.6rem 0.1rem"
  input-underline-focus:
    backgroundColor: "{colors.peach-soft}"
---

# Design System: Yuliia Ivanenko

## Overview

**Creative North Star: "The Lyra Line"**

The page is a studio sweep with rigging in it. A warm peach ground stands in for the paper backdrop of the owner's own photographs, and a single red hoop (the lyra), drawn as one hairline stroke, hangs from the header rule by one rope. Everything else on the page obeys the same physics: photographs hang from hairline beams, inputs sit on hairline underlines, buttons are pills (a hoop seen flat). Ornament is that line and nothing else; the photographs carry all the colour and texture.

Density is low and the rhythm is generous: wide gutters, tall section spacing, light large type for names and headings, regular type for reading. Depth comes from colour fields, not from shadow: the page drops from the peach ground into a deep red field for About and the footer, and into opaque oxblood for the lightbox. Motion is a single grammar: one exponential ease-out, opacity plus blur, played once, as if a print were developing.

The build rejects the category default of a dark full-bleed photo with a serif name centred on top, and it has no shadows, cards or boxed containers.

**Key Characteristics:**
- One hairline weight (1.5px) for every rule, beam, rope, underline, pill border and the hoop.
- One face, Jost: light (300) and large for display, regular (400) for reading, medium (500) for labels.
- Peach ground, deep red fields, oxblood ink; red reserved for the hoop, the rope and interaction.
- Pills and circles are the only rounded forms; photographs are square-cornered.
- Photographs develop into view once (opacity, blur, small rise) on one expo ease-out.

## Colors

A warm, two-temperature palette lifted from the photography: salmon studio sweeps and deep red sets, with near-black red as ink.

### Primary
- **Hoop Red** (`red`): the lyra ring, the rope, link underlines, the hover fill of the solid pill, focus outlines, selection, caret and scrollbar thumb. It is the colour of the line and of interaction, never a large fill.
- **Cabaret Red** (`red-deep`): the field colour for About and the footer, and the error text colour on peach. The only large saturated surface.

### Neutral
- **Studio Sweep Peach** (`peach`): the page ground and the hover text on an ink pill.
- **Lit Peach** (`peach-soft`): the fill of a focused input on peach.
- **Highlight Peach** (`peach-light`): all text, borders and pill strokes on red or oxblood; text on solid ink pills.
- **Dimmed Peach** (`peach-dim`): secondary text on the red field and in the lightbox (newsletter line, copyright, captions).
- **Oxblood Ink** (`ink`): body and heading text, every hairline on peach, the solid pill fill.
- **Faded Ink** (`ink-soft`): secondary text on peach: tagline, discipline captions, field labels, form status.
- **Oxblood** (`oxblood`): the opaque lightbox backdrop and the translucent fill of lightbox controls. Used nowhere else.

### Named Rules
**The Two Fields Rule.** Surfaces are either peach (ground) or Cabaret Red (About, footer); oxblood appears only behind the lightbox. No third surface colour, no tinted cards.

**The Red Belongs to the Hoop Rule.** On peach, Hoop Red is reserved for the hoop, its rope and interaction (link underlines, hover, focus, caret, selection). Structural hairlines (beams, hang lines, pill borders, underlines) and all text stay Oxblood Ink or Faded Ink. The tagline separators are the one place red sits inside a line of text.

## Typography

**Display Font:** Jost (self-hosted variable woff2, weights 100-900, with Futura, Century Gothic)
**Body Font:** Jost
**Label Font:** Jost, weight 500

**Character:** A geometric sans whose O is a true circle, so the type repeats the hoop. Light weight at large sizes reads as elegant and airy; regular weight keeps body copy calm.

### Hierarchy
- **Display** (300, clamp(3.5rem, 9vw, 6rem), 0.98, -0.025em): the name in the hero only, set on two lines.
- **Headline** (300, clamp(2.5rem, 5vw, 4rem), 0.98, -0.025em): section headings. The newsletter heading steps down to clamp(2rem, 3.6vw, 2.75rem).
- **Title** (400, 1.375rem, 1.2): discipline names under each plate.
- **Lede** (400, clamp(1.25rem, 2vw, 1.5rem), 1.45): the first paragraph of About. The hero tagline sits between lede and body (clamp(1.125rem, 1.7vw, 1.375rem)) in Faded Ink.
- **Body** (400, 1.0625rem, 1.6): reading text, capped near 36rem in About and 26rem in contact intro.
- **Caption** (400, 0.95rem): sub-captions, field labels, errors, lightbox captions, in the secondary colour of its field.
- **Label** (500, 1rem, line-height 1, 0.01em): pills and the wordmark (wordmark at 1.0625rem).

### Named Rules
**The One Face Rule.** Jost is the only family. Hierarchy comes from size and weight (300 / 400 / 500), never from a second face, italics or uppercase tracking.

**The Light Display Rule.** Headings are weight 300 with tight negative tracking and balanced wrapping; never bold.

## Layout

Single centred container (1320px plus gutters), gutters clamp(1.25rem, 5vw, 4rem), section padding clamp(5rem, 11vw, 9.5rem). The header is a 5.5rem bar whose bottom hairline (inset to the gutters) is the rigging beam. Red fields (About, footer) run full-bleed while their content stays inside the container.

Breakpoints: 600px (disciplines go to two columns, plate gap widens), 760px (secondary nav links hide, leaving the wordmark and the Contact pill), 960px (hero, About, contact and footer split into two columns; disciplines and plates go to three).

The hero is a two-column grid on desktop with the name left and the hung portrait right; below 960px the portrait comes first so the rope never crosses the name. About and contact use a 5fr / 6fr split. Disciplines are an even grid of 4:5 plates. The portfolio is a staggered grid: each column drops its plates by a fixed offset (0 / 7rem / 2.5rem at three columns; 0 / 5rem at two, 0 / 3rem on phones), and the plates keep their natural aspect ratios.

### Named Rules
**The Hang Rule.** Every photograph grid starts at a hairline beam (a 1.5px top rule) and each plate hangs from it on a 1.5px vertical line centred on the plate, 2.5rem long in the disciplines and running the full column height in the portfolio, so a column reads as one line.

## Elevation & Depth

Flat. There are no box shadows for elevation anywhere. Depth is expressed by colour fields (peach ground, red field, opaque oxblood lightbox) and by the hoop sitting behind the hero portrait. The only `box-shadow` in the build is a 1.5px under-stroke that doubles an input's underline on focus; it is a line, not a lift.

### Named Rules
**The No-Lift Rule.** Nothing floats. Hover changes fill, colour, underline offset or a 1.025 image scale inside a clipped frame; it never adds shadow or vertical lift.

## Shapes

Two shapes only. Photographs are square-cornered rectangles (4:5 crops for disciplines and About, natural ratio for plates). Interactive controls are fully round: pills at 999px radius, and 3rem circles for social and lightbox buttons. Borders and rules are always the 1.5px hairline (pill borders, beams, input underlines, the ring stroke via non-scaling stroke). Inline icons are stroked line drawings (stroke about 1.5-1.6, round caps and joins), never filled glyphs. The favicon repeats the motif: a peach tile, a red rope and a red ring.

### Named Rules
**The One Hairline Rule.** Every rule, frame, underline, rope and ring is 1.5px. The single exception is the 2px focus outline, kept heavier for accessibility.

## Components

### Buttons
Pills, a hoop seen flat: quiet at rest, filling on hover.
- **Shape:** fully round (999px), 1.5px border, minimum height 2.875rem.
- **Outline (default):** transparent with Oxblood Ink border and text; hover fills ink with peach text. Used for Contact me and Download CV.
- **Solid:** ink fill, Highlight Peach text; hover turns Hoop Red. The primary action per section (Get in touch, Send message).
- **Light:** for the red field; Highlight Peach border and text, hover fills Highlight Peach with Cabaret Red text.
- **Transitions:** background, colour and border at 0.35s on the shared expo ease-out.
- **Disabled:** 0.55 opacity, no pointer events.
- **Round buttons:** 3rem circles with a translucent peach hairline; social links on the footer and the lightbox prev, next and close controls (translucent oxblood fill), filling with Highlight Peach on hover.

### Links
- **Style:** underline in Hoop Red at 1.5px with 0.3em offset; on hover the offset opens to 0.45em and the text turns red. Header nav links instead draw a red 1.5px underline from left to right on hover. A disabled link drops to 0.6 opacity with a dotted underline.

### Inputs / Fields
- **Style:** no box; a 1.5px ink underline on a transparent ground, square corners, Jost 1.125rem, red caret. Labels sit above in caption size, Faded Ink.
- **Focus:** underline turns Hoop Red and doubles to 3px with a 1.5px under-stroke, and the field fills Lit Peach. On the red field the underline and stroke are Highlight Peach and the fill is an 8% peach wash.
- **Error:** on peach the underline turns Cabaret Red with a caption-size message beneath; on the red field only the message (in a light coral) signals the error.

### Navigation
- **Style:** a 5.5rem bar over the hero, wordmark left (Jost 500), section links and the outlined Contact pill right, a 1.5px ink rule beneath (85% opacity) that the hero rope drops from. Below 760px only the wordmark and the pill remain.

### Hoop and Rope (signature)
A single SVG ring (Hoop Red, 1.5px non-scaling stroke) at 140% of the portrait width sits behind the hero portrait with its apex showing above it, hung by a 1.5px red rope from the header beam. On load the rope drops (scaleY, 0.9s) and the ring draws closed once (stroke-dashoffset, 2s), both on the shared ease. The rope is clipped at the beam so it never crosses the nav.

### Plates and Lightbox (signature)
Portfolio plates hang from column lines and open in a full-viewport lightbox on an opaque oxblood backdrop with peach controls. The image develops in (opacity plus 10px blur, 0.8s). The caption leads with a zero-padded counter in tabular figures ("02 / 18").

## Do's and Don'ts

### Do:
- **Do** draw every line at the 1.5px hairline (`--line`), in ink on peach and in Highlight Peach on red.
- **Do** hang new photograph groups from a hairline beam, each image on its own centred line.
- **Do** use the pill (999px, 1.5px border) for every button and a 3rem circle for icon-only controls.
- **Do** bring photographs in once with the develop entrance: opacity 0, 14px blur and a 1.5rem rise, resolving over 1.2-1.4s on cubic-bezier(0.16, 1, 0.3, 1), and skip it under reduced motion.
- **Do** keep text in Oxblood Ink or Faded Ink on peach, and Highlight Peach or Dimmed Peach on red.
- **Do** set headings in Jost 300 with -0.025em tracking.

### Don't:
- **Don't** add box shadows, cards, boxed panels or rounded photo corners.
- **Don't** introduce a second typeface, a serif display name, or a dark full-bleed photo with the name centred on top.
- **Don't** use oxblood as a section surface; it belongs behind the lightbox only.
- **Don't** add a second ornament beside the hoop; the photographs carry colour and texture.
- **Don't** use more than one easing curve or loop an entrance; motion plays once.
