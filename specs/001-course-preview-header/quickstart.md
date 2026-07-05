# Quickstart & Validation Guide: Course Preview Header

**Feature**: Course Preview Header
**Date**: 2026-07-05

This guide describes how to verify and run the completed Course Preview Header component.

## Prerequisites
- Node.js (v18+)
- Next.js development server running (`npm run dev`)

## Verification Scenarios

### Scenario 1: Verify Visual Layout and Responsiveness
1. Open the course preview page at `http://localhost:3000/courses/starting-seo-as-your-home` (or local development URL).
2. Check the top of the page for:
   - Breadcrumb navigation: "Home > Courses > Course Details".
   - Main course title: "Starting SEO as your Home" in bold and premium font.
3. Resize the browser window to mobile viewports (e.g. 375px wide) and verify:
   - Elements stack vertically.
   - Video container and play button resize correctly without overflow.

### Scenario 2: Play Button Interaction
1. Hover the cursor over the centered circular play button in the video preview container.
2. Verify that:
   - The play button responds with a scale-up transition effect.
   - The cursor changes to `pointer`.

### Scenario 3: Social Media Share Hover States
1. Hover over the outline icons in the social share bar.
2. Verify that they transition smoothly (opacity/color change).

## Test Command
To verify that all TypeScript types and ESLint configuration remain green:
```bash
npm run lint
```
