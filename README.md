# mihaelsegulja.github.io

Personal website showcasing my projects, skills, and background as a software engineer.
Built with Astro, TypeScript, and plain CSS. Pages are generated as static HTML and deployed to GitHub Pages by GitHub Actions.

Live site: [mihaelsegulja.github.io](https://mihaelsegulja.github.io)

Requires Node.js 22.12.0 or newer.

```sh
npm ci
npm run dev
npm run build
npm test
npm run preview
```

`npm run build` refreshes the content cache and checks TypeScript and Astro templates before generating `dist/`.
`npm run check` checks TypeScript and Astro templates without building the site.
`npm test` verifies the generated routes, project content, assets, and crawler files after a build.

Project content lives in `src/content/projects/<slug>/index.md`, with media in `src/media/` imported as build-generated URLs.
The homepage combines the introduction, selected projects, tools, awards, and expandable certificates.
Edit the homepage text and selected project names in `src/pages/index.astro`; technologies live in `src/data/techstack.ts`, and available themes in `src/data/themes.ts`.
Main contact links sit below the introduction and in the footer; certification profiles sit beside the courses, and LeetCode is under Elsewhere.
The shared layout and terminal styling live in `src/layouts/Layout.astro` and `src/styles/globals.css`.

Contact uses a native dialog, with `/contact` as a fallback when JavaScript is disabled.
Project cards and selected projects link directly to static pages such as `/projects/macrokeeb`.
Each page uses a shared template with Markdown details and media displayed in sequence.
Images and GIFs appear inline, local videos use native playback controls, and YouTube videos are embedded.
Themes use a small script to preserve the selected palette across page navigation.
Command headings use a small typing script. Full text remains available without JavaScript and to screen readers.
Typing and cursor blinking respect reduced motion preferences.

## Adding or editing projects

Create `src/content/projects/my-project/index.md`. The folder name sets the URL: `/projects/my-project`.

```markdown
---
name: My project
description: A short summary for the cards.
order: 15
type: Personal project
tech: [C#, Astro]
links: [{label: source code, url: "https://github.com/your-name/your-project"}]
media: ["/src/media/my-project/screenshot.png", "/src/media/my-project/demo.mp4", "https://youtu.be/qQyvwB0_DuI"]
---

Write the project details here in Markdown.

## What I built

Explain the idea, what you worked on, and what you learned.
```

Lower `order` values appear first. Media entries retain their listed order; images and GIFs render as images, MP4/WebM files use native controls, and YouTube links become embeds. Use `media: []` for projects without media. Local media paths must point to existing files under `src/media/`.
Supported local media extensions are `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.mp4`, and `.webm`. The frontmatter fields other than `media` are required; use `links: []` if there are no external links. Collection schemas live in `src/content.config.ts`.
You can also place images within the Markdown body using relative paths, e.g. `![Description](../../../media/my-project/screenshot.png)`. The body appears on the project page; the summary appears in cards.
If you rename a project featured on the homepage, update its name in the homepage selection too. The static-output test currently expects 15 projects; update that count when adding or removing a project.

## Adding blog posts

The blog uses an Astro content collection. There are no published posts yet.
Create `src/content/blog/my-post/index.md`:

```markdown
---
title: My first post
description: A short summary.
pubDate: 2026-09-12
draft: true
# Optional cover image, stored alongside this file:
# cover: ./cover.jpg
# coverAlt: Description of the cover
---

Write Markdown here. Images can stay beside the post:

![Description](./example.jpg)
```

Remove `draft: true` or set it to `false` to publish on the next build.
Posts are generated at `/blog/my-post`. Drafts are excluded from the listing and generated routes.
The blog continues to display “Coming Soon” until a published post exists.

## Deployment

The existing GitHub Actions workflow installs dependencies, builds `dist/`, runs the static-output tests, and publishes it to `gh-pages` on pushes to `main`. It can also be triggered manually through `workflow_dispatch`.
The migration branch does not deploy automatically. Static pages replace the old SPA 404 redirect.
Canonical URLs, a sitemap, and `robots.txt` use `https://mihaelsegulja.github.io`.
