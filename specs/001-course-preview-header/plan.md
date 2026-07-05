# Implementation Plan: Course Preview Header

**Branch**: `001-course-preview-header` | **Date**: 2026-07-05 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-course-preview-header/spec.md`

## Summary

This feature implements a premium, responsive Course Preview Header component on the course details page. It consists of a breadcrumb navigation path, the primary course title, a custom responsive video thumbnail player with hover interaction, and a social sharing bar.

## Technical Context

**Language/Version**: Next.js 16.2.10, React 19.2.4, TypeScript 5.x

**Primary Dependencies**: `lucide-react`, Tailwind CSS v4

**Storage**: N/A (Client-side components and server-rendered view)

**Testing**: N/A (Manual visual verification of responsiveness and UI interaction)

**Target Platform**: Modern Web Browsers (Chrome, Safari, Firefox, Edge)

**Project Type**: Next.js Web Application Component

**Performance Goals**: Component rendering in under 1.5s, layout shift (CLS) close to 0

**Constraints**: Strict separation between Server Components and Client Components

**Scale/Scope**: 1 route-level feature page with 4 sub-components

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] **I. Folder Isolation Check**: Are route-specific components isolated in a local `_components` directory? Are general UI components in the root `components/ui/`?
- [x] **II. Server/Client Split Check**: Is the split between Server Components (for data fetching and SEO) and Client Components (for interactivity) correctly planned?
- [x] **III. TypeScript Check**: Are proper interfaces and types defined for all props and state variables? No `any` types used?
- [x] **IV. Styling Check**: Are visual styles strictly using Tailwind CSS classes?
- [x] **V. Component Cohesion Check**: Does each component have a single responsibility? Are complex components broken down into sub-components?

## Project Structure

### Documentation (this feature)

```text
specs/001-course-preview-header/
├── plan.md              # This file
├── research.md          # Technical choices and research
├── data-model.md        # Prop schema and types
├── quickstart.md        # Validation scenarios
├── contracts/
│   └── ui-components.md # Component signature contracts
└── tasks.md             # Implementation tasks
```

### Source Code (repository root)

```text
app/
└── courses/
    └── [courseId]/
        ├── page.tsx          # Page route (Server Component)
        └── _components/      # Private components for this route
            ├── CoursePreviewHeader.tsx  # Wrapper (Server Component)
            ├── Breadcrumbs.tsx          # Navigation (Server Component)
            ├── VideoPlayer.tsx          # Thumbnail & Hover (Client Component)
            └── SocialShareBar.tsx        # Share links (Server Component)
```

**Structure Decision**: Place all sub-components in the route-level private directory `app/courses/[courseId]/_components/` to preserve folder isolation rules (Core Principle I).

## Complexity Tracking

*No violations tracked. The design strictly follows the constitution.*
