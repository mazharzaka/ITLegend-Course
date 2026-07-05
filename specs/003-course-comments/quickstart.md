# Quickstart & Validation Guide: Comments and Reviews Section

**Feature**: Comments and Reviews Section
**Date**: 2026-07-05

This guide describes how to verify the Comments and Reviews component.

## Verification Scenarios

### Scenario 1: Verify Visual Layout and List Items
1. Open the page `http://localhost:3000/courses/starting-seo-as-your-home`.
2. Scroll to the bottom of the page and verify:
   - Heading "Comments" is present.
   - List of student reviews renders correctly with avatar on left, details on right.
   - Thin bottom border divider separating the items, excluding the last one.

### Scenario 2: Form Submission
1. Type a review inside the "Write a comment" textarea.
2. Verify that:
   - The focus ring is styled clearly.
   - Clicking "Submit Review" adds the comment locally to the list, clears the textarea, and does not reload the page.
   - The button contains an ArrowRight icon.

## Test Command
Run TypeScript lint checking:
```bash
npm run lint
```
