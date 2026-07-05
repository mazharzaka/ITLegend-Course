# UI Components Interface Contracts: Comments and Reviews

**Feature**: Comments and Reviews Section
**Date**: 2026-07-05

This document defines the React component signatures for the Comments section.

## 1. Parent Component: `CommentsSection`
- **Type**: Server Component
- **Path**: `app/courses/[courseId]/_components/CommentsSection.tsx`

### API Signature
```typescript
interface CommentItem {
  id: string;
  author: string;
  avatarUrl: string;
  date: string;
  content: string;
}

interface CommentsSectionProps {
  initialComments?: CommentItem[];
}

export default function CommentsSection(props: CommentsSectionProps): JSX.Element;
```

---

## 2. Child Component: `CommentForm`
- **Type**: Client Component (`"use client"`)
- **Path**: `app/courses/[courseId]/_components/CommentForm.tsx`

### API Signature
```typescript
interface CommentFormProps {
  onSubmit: (content: string) => void;
}

export function CommentForm(props: CommentFormProps): JSX.Element;
```
