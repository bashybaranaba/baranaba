# Baranaba Mugabane

A personal portfolio about engineering, AI research, creative collaboration, and practical education. The narrative starts with childhood hardware experiments, rockets, and games in C# and Unity at fourteen, then follows accessible games into Arttribute, provenance, autonomous agents, and workshops.

Live at [baranaba.vercel.app](https://baranaba.vercel.app).

## Develop

Node.js 24 is recommended. Install with `npm ci`, then run `npm run dev`.

`npm run build` checks TypeScript and produces a static site in `dist/`. No database, API keys, or server runtime are required.

To test the production build, serve `dist/` on port 4322 and run `npm run test:e2e`. Playwright uses the installed Google Chrome browser. `PLAYWRIGHT_BASE_URL` can point to a deployed site.

## Edit the story

- `src/data/projects.ts`: the six project stories, roles, external links, and contextual sources.
- `src/pages/index.astro`: the personal narrative, research, teaching, experience, and selected writing.
- `src/components/OriginStory.astro`: the illustrated early-building collage, personal story, and optional 2017 archive clip.
- `src/pages/work/[slug].astro`: statically generated project pages.
- `src/styles/editorial.css`: the forest-and-ivory visual language and responsive typography.
- `src/components/HeroArtwork.astro`: the opening engraving and restrained pointer interaction.
- `public/images/`: optimized project imagery, the original engraving, and workshop photographs.
- `public/documents/`: the supplied CV and master's thesis.

The project descriptions were researched against the live websites, technical documentation, original writing, the supplied CV and thesis, Tallinn University coverage, ESTDEV profiles, and ETHGlobal's Common Arcade showcase. Project pages link to that context directly. Intended outcomes are described as ambitions; prototype evaluation is not presented as proof of operational scale or legal sufficiency.

Abraham is **Gene Kogan's project**. Baranaba's role is an engineering contribution through the Eden collaboration. Its project imagery is featured with Gene's permission, as confirmed by Baranaba.

## Visual direction

The design takes cues from the Hermes Agent website's condensed typography, engraved imagery, and editorial hierarchy. It has its own deep forest green and warm ivory palette, with a plain typographic wordmark and restrained paper tones. The hero pairs “Curiosity, put to work.” with a clean crosshatched portrait of Baranaba, based on his supplied photographs. The next section composes engraved studies of his handmade rocket, a test of rocket fuel he made from scratch, captured in his 2017 footage, and his present-day tools into an overlapping collage. No Nous artwork, fonts, logos, or code are used.

The artwork was created with the built-in image-generation tool. Masters are `assets/baranaba-portrait.png`, `assets/continuity-engraving.png`, and `assets/origin-{rocket,ignition,workbench}.png`; the prompts are saved alongside them. Optimized WebP versions are in `public/images/`. The hero uses a small pointer interaction that respects reduced-motion preferences; all content and imagery remain available without JavaScript. The collage has a brief reveal and settling motion that also honors reduced-motion preferences. The “From the archive” disclosure groups the original 2016 rocket photograph, the 2017 test footage, and the 2026 workbench photograph. The two supplied JPEGs are preserved unchanged and open at full size. The footage is served as a small, silent H.264 MP4, without autoplay or eager loading. Closing the disclosure pauses playback. The story distinguishes archival experiments from photographs of current tools; the drawings are described as illustrations rather than documentary images. Original headshots and abandoned portrait experiments are not included in the site.

Fonts are served locally. Project imagery is local and contextualized with source links; the portfolio does not depend on third-party image hosts. There are no analytics trackers or contact-form services. Contact actions open the visitor's email client.

## Publish

The Vercel project belongs to the `bashybaranabas-projects` Hobby workspace. GitHub integration deploys changes pushed to `main`. The production hostname is configured in `astro.config.mjs` and `public/robots.txt`.

After changing the design, rebuild and serve `dist/` on port 4322, then run `node scripts/social-card.mjs` to refresh the social preview. Rebuild once more to include the updated card.

## PDF portfolio

`public/documents/Baranaba-Mugabane-Portfolio.pdf` is the ten-page A4 edition, with selectable text, embedded fonts, bookmarks, and clickable project and source links. The footer links to it directly.

To regenerate, build and serve `dist/` on port 4322, then run `node scripts/export-portfolio.mjs`. It writes the PDF and editable HTML/CSS source to the ignored `output/portfolio/` directory. Set `PORTFOLIO_OUTPUT_DIR` to choose another output directory, or `PORTFOLIO_BASE_URL` for another local preview URL. The print styling lives in `assets/portfolio-print.css`; the website and PDF share the project identity, roles, and source links in `src/data/projects.ts`.

Abraham’s expanded story was checked against Gene’s original 2019 essay and NeurIPS workshop proposal, his earlier work and ml4a resources, the 2025 Gene Kogan/Xander Steenbrugge interview in Right Click Save, and the First Works exhibition timeline. The writing distinguishes the long-term artistic ambition from Baranaba’s documented engineering contribution.
