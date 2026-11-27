# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no framework, hosted on GitHub Pages. A local Node script (sharp) converts original photos in `data/` into responsive AVIF/WebP/JPEG derivatives. Only the optimized derivatives are committed; the originals stay local.

## Users

- **Bookers and casting**: event producers, agencies, circus and cabaret companies, and venues looking for an aerial hoop, double hoop, dance or stilts performer. They want to see the work, judge the quality quickly, download a CV and get in touch.
- **Students**: people looking for an aerial or flexibility instructor.

## Product Purpose

A personal portfolio for Yuliia Ivanenko, an aerial artist, dancer and performer. It presents her disciplines and photography, gives a short biography and a downloadable CV, and makes contact easy. Success means a visitor understands what she does within a viewport and gets in touch.

## Positioning

Yuliia combines solo and double aerial hoop, contemporary dance, circus arts, stilt walking and teaching (aerial and flexibility). She trained at Performing Arts Studio Scotland and is training at the National Centre for Circus Arts in London. The portfolio is built from her own performance and studio photography.

## Capabilities and Constraints

- Sections (from the owner's sketch, `Untitled_Artwork.pdf`, which is gitignored): hero with name, tagline "Aerial Artist · Dancer · Performer" and a contact link. Six disciplines: Solo Aerial Hoop, Double Aerial Hoop, Dance, Aerial Instructor, Flexibility Instructor, Stilt Walking. Then About me, Photo portfolio with a Download CV button, Get in touch (form + email), newsletter signup, and a footer with TikTok, Instagram and YouTube.
- Forms: no backend. The contact form and newsletter signup open the visitor's email app with a pre-filled message (`mailto:`).
- The CV PDF will be added later. The button must exist and point to a stable path.
- Photos: 28 owner-supplied photos in `data/` (local only), mapped to slots following the sketch.
- Must load fast while showing high-quality photos.
- Open: contact email address, social profile URLs, CV file.

## Brand Commitments

- The owner asked for a site that is modern, elegant and professional, with a minimalist layout.
- Colours: red and peach, taken from her photography (salmon/peach studio backdrops, deep red sets).
- The layout follows the owner's sketch. Its hand-drawn styling is not to be reproduced literally.

## Evidence on Hand

- About text (owner-written, in the sketch): aerial artist, dancer and performer specialising in aerial hoop and double hoop, with a background in contemporary dance and circus arts. HND in Dance Artist from Performing Arts Studio Scotland. Currently training at the National Centre for Circus Arts in London. Teaches aerial arts. Photography is part of her creative practice.
- Photos: 28 owner photos in `data/`, covering studio aerial hoop on peach, coral, green and red sweeps, a double-hoop duo, cabaret and stage performance, contemporary dance, stilt walking and editorial portraits.
- No testimonials, client list, press or performance credits have been supplied. Do not invent any.

## Product Principles

1. The photographs are the work. The interface stays quiet and lets them lead.
2. Every section moves a booker towards contact or the CV.
3. Fast first: high-quality images, never heavy pages.
4. Easy for the owner to extend: drop a photo in, run one command.
