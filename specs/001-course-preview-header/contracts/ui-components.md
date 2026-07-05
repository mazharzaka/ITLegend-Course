# UI Components Interface Contracts

**Feature**: Course Preview Header
**Date**: 2026-07-05

This document defines the React component signatures, props, and child component layout hierarchy.

## 1. Parent Component: `CoursePreviewHeader`
- **Type**: Server Component (default)
- **Path**: `app/courses/[courseId]/_components/CoursePreviewHeader.tsx`
- **Imports**:
  - `Breadcrumbs` from `./Breadcrumbs`
  - `VideoPlayer` from `./VideoPlayer`
  - `SocialShareBar` from `./SocialShareBar`

### API Signature
```typescript
interface CoursePreviewHeaderProps {
  courseId: string;
  title: string;
}

export default function CoursePreviewHeader(props: CoursePreviewHeaderProps): JSX.Element;
```

---

## 2. Child Component: `Breadcrumbs`
- **Type**: Server Component
- **Path**: `app/courses/[courseId]/_components/Breadcrumbs.tsx`

### API Signature
```typescript
interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
}

export function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
```

---

## 3. Child Component: `VideoPlayer`
- **Type**: Client Component (`"use client"`)
- **Path**: `app/courses/[courseId]/_components/VideoPlayer.tsx`

### API Signature
```typescript
interface VideoPlayerProps {
  thumbnailUrl: string;
  videoUrl?: string;
}

export function VideoPlayer(props: VideoPlayerProps): JSX.Element;
```

---

## 4. Child Component: `SocialShareBar`
- **Type**: Server Component
- **Path**: `app/courses/[courseId]/_components/SocialShareBar.tsx`

### API Signature
```typescript
interface SocialShareBarProps {
  facebookUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
}

export function SocialShareBar(props: SocialShareBarProps): JSX.Element;
```
