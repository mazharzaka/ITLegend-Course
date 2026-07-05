# Research: Course Preview Header

**Feature**: Course Preview Header
**Date**: 2026-07-05

## Technical Decisions

### Next.js App Router & Component Architecture
- **Decision**: Render the page and main container as React Server Components (RSC) by default. Keep the interactive parts (video play/hover hover states, social share buttons) as focused client components or style interactions.
- **Rationale**: Reduces client-side bundle size, improves SEO indexing, and provides faster Initial Page Load (FCP) matching Next.js best practices and our core principles.
- **Alternatives considered**: Entirely Client Component page (rejected due to poor SEO and performance impact).

### Styling with Tailwind CSS v4
- **Decision**: Use Tailwind CSS v4 utility classes for all layout, spacing, colors, and responsive stacking behavior.
- **Rationale**: Guaranteed consistency, speed of styling, and mobile-first responsive layout transitions using standard Tailwind breakpoints.
- **Alternatives considered**: Custom CSS/SCSS (rejected as it violates Core Principle IV).

### Icon Set
- **Decision**: Use `lucide-react` for the social icons (Facebook, Twitter, Linkedin, Youtube) and breadcrumbs markers.
- **Rationale**: Lightweight, tree-shakable SVG icons natively compatible with React.
- **Alternatives considered**: Raw SVG markup or FontAwesome (rejected for complexity and bundle size).
