# Research: Course Materials Info Grid

**Feature**: Course Materials Info Grid
**Date**: 2026-07-05

## Technical Decisions

### React Server Component (RSC) vs Client Component
- **Decision**: Render the entire materials grid as a Server Component.
- **Rationale**: The data being displayed (duration, lessons, students count, language) is read-only, static data that does not require client-side state, events, or hooks. Rendering it as a Server Component ensures it loads fast and renders directly on the server, aligning with Next.js best practices and Core Principle II (Server/Client Separation).
- **Alternatives considered**: Client Component wrapper (rejected as there is zero client-side interactivity).

### Styling with Tailwind CSS Grid
- **Decision**: Use Tailwind CSS grid layout (`grid grid-cols-1 md:grid-cols-2`) with responsive padding and spacing variables (`gap-x-12` to `gap-x-16` on medium viewports and larger, `gap-y-4` on stack).
- **Rationale**: Provides pixel-perfect alignment matching the visual mockup (image_3995a5.png) with minimal style overhead.
- **Alternatives considered**: Flexbox wrap layout (rejected as it is harder to align columns exactly).
