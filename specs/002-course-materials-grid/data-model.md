# Data Model & Props Schema: Course Materials Info Grid

**Feature**: Course Materials Info Grid
**Date**: 2026-07-05

This component renders static list items. Below is the type interface for its props:

## Entity: CourseMaterialItem

Represents a single metadata stat in the grid.

### Schema
- `icon` (React Component / LucideIcon, mandatory): The icon component to render.
- `label` (string, mandatory): The label text (e.g. "Duration:").
- `value` (string, mandatory): The value text (e.g. "3 weeks").

---

## Entity: CourseMaterialsProps

The props interface for the main container component.

### Schema
- `materials` (Array of CourseMaterialItem, optional): Custom list items. If empty, the component will fall back to rendering the default 4 rows in a two-column grid.
