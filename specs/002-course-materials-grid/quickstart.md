# Quickstart & Validation Guide: Course Materials Info Grid

**Feature**: Course Materials Info Grid
**Date**: 2026-07-05

This guide describes how to verify the Course Materials component.

## Verification Scenarios

### Scenario 1: Verify Visual Layout and Columns
1. Open the page `http://localhost:3000/courses/starting-seo-as-your-home`.
2. Verify:
   - Heading "Course Materials" is present and styled with dark bold font.
   - On desktop viewport, the component renders in two identical columns with a wide horizontal gap.
   - On mobile viewport, columns stack vertically into a single list layout.

### Scenario 2: Verify Dividers and Rows Alignment
1. Verify each of the 4 rows (Duration, Lessons, Enrolled, Language) in both columns contains:
   - Muted gray icon and label on the left.
   - Bold dark value on the right.
   - Thin bottom border divider separating the rows.
   - The last row (Language) has no bottom border.

## Test Command
Run TypeScript lint checking:
```bash
npm run lint
```
