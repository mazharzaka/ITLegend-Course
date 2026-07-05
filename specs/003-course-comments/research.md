# Research: Comments and Reviews Section

**Feature**: Comments and Reviews Section
**Date**: 2026-07-05

## Technical Decisions

### React Server Component (RSC) vs Client Component Split
- **Decision**: Split the comments section into:
  - `CommentsSection.tsx` (RSC): Serves as the container, fetches or receives existing comments list, and handles server-side layout.
  - `CommentForm.tsx` (Client Component): Textarea form input managing dynamic client state, text validation, submit action handlers, and local updates.
- **Rationale**: The existing comments list is static read-only data (fits RSC, satisfying Core Principle II). The feedback form has dynamic user input state, button states, and triggers local callbacks upon submission, which strictly requires a Client Component (`"use client"`).
- **Alternatives considered**: Entire comments container as Client Component (rejected because existing list requires SEO and server rendering efficiency).

### Layout and Avatar Sourcing
- **Decision**: Use flexbox layouts (`flex gap-4 items-start`) for review cards, styling with Tailwind CSS. Avatars will source placeholder student faces using Unsplash URLs.
- **Rationale**: Flexbox handles side-by-side avatar and content columns beautifully. Unsplash URLs render instantly out-of-the-box.
