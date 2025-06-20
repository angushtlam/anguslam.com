# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run develop` or `npm start`
- **Build for production**: `npm run build`
- **Serve built site**: `npm run serve`
- **Clean build artifacts**: `npm run clean`
- **Lint markdown/MDX files**: `npm run lint`
- **Format code**: `npm run format`
- **Check formatting**: `npm run format:check`

## Architecture Overview

This is a Gatsby-based personal website with the following key architectural components:

### Content Management

- Blog articles are written in **MDX format** located in `src/articles/`
- Each article has frontmatter with `title`, `slug`, `published`, `created`, and `updated` fields
- Only articles with `published: true` are built into pages
- Articles support embedded images and React components

### Page Generation

- Dynamic page creation is handled in `gatsby-node.mjs`
- Blog articles are automatically converted to pages using the `ArticleLayout` component
- URL structure follows the `slug` field from article frontmatter

### Layout System

- **PageLayout**: Base layout with CRT monitor-style styling and responsive design
- **ArticleLayout**: Extends PageLayout specifically for blog posts, includes breadcrumb navigation
- Uses CSS-in-JS with Emotion for styling

### Styling Architecture

- **Global styles**: `src/styles/index.css` for base styles
- **CRT effect**: `src/styles/crt.css` for monitor aesthetic
- **Markdown content**: `src/styles/markdown.css` for article typography
- **Leaflet maps**: `src/styles/leaflet.css` for map components
- CSS-in-JS with Emotion for component-specific styles

### Special Features

- **Travel articles**: Some articles (like Miami) include interactive Leaflet maps
- **Image optimization**: Gatsby Sharp plugins handle responsive images
- **SEO**: Automated meta tags and sitemap generation
- **PWA**: Manifest file for progressive web app features

### Build Considerations

- Leaflet requires special webpack configuration for SSR (handled in `gatsby-node.mjs`)
- Netlify deployment with URL redirects configured in `netlify.toml`
- Images are processed and optimized during build

When adding new articles, ensure they include proper frontmatter and set `published: true` when ready to publish.
