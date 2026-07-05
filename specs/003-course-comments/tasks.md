# Tasks: Comments and Reviews Section

**Input**: Design documents from `/specs/003-course-comments/`

**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/ui-components.md

**Tests**: None

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Includes exact file paths in descriptions

## Path Conventions

- **Next.js App Router**: `app/` and `components/` at repository root
- **Route-specific isolation**: `app/[feature]/_components/`
- Paths shown below assume Next.js App Router structure

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Folder structure validation

- [x] T001 Verify private components directory at app/courses/[courseId]/_components/ exists

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: None (presentational and local state only)

---

## Phase 3: User Story 1 & 2 - View and Write Comments (Priority: P1 & P2) 🎯 MVP

**Goal**: Render list of comments and functional write-a-comment form with instant updates

**Independent Test**: Navigate to route page, type comment, click submit, and verify it updates list without refresh.

### Implementation for User Story 1 & 2

- [x] T002 [US2] Create the CommentForm client component in app/courses/[courseId]/_components/CommentForm.tsx
- [x] T003 [US1] Create the CommentsSection component in app/courses/[courseId]/_components/CommentsSection.tsx
- [x] T004 [US1] Update app/courses/[courseId]/page.tsx to render CommentsSection

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Linting and visual quality verification

- [x] T005 Run lint checking and resolve formatting issues
