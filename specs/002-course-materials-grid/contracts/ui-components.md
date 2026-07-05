# UI Components Interface Contracts: Course Materials Grid

**Feature**: Course Materials Info Grid
**Date**: 2026-07-05

This document defines the React component signatures for the grid.

## 1. Parent Component: `CourseMaterials`
- **Type**: Server Component
- **Path**: `app/courses/[courseId]/_components/CourseMaterials.tsx`

### API Signature
```typescript
interface MaterialItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

interface CourseMaterialsProps {
  items?: MaterialItem[];
}

export default function CourseMaterials(props: CourseMaterialsProps): JSX.Element;
```
