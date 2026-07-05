# Tasks: Course Preview Header

**Input**: Design documents from `/specs/001-course-preview-header/`

**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/ui-components.md

**Tests**: None (not requested in the specification)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Includes exact file paths in descriptions

## Path Conventions

- **Next.js App Router**: `app/` and `components/` at repository root
- **Route-specific isolation**: `app/[feature]/_components/`
- Paths shown below assume Next.js App Router structure

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Route setup and directory structure initialization

- [x] T001 Create route-specific directory at app/courses/[courseId]/_components/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core route page rendering shell

- [x] T002 Setup the page route file at app/courses/[courseId]/page.tsx to render a simple container

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Breadcrumbs and Title (Priority: P1) 🎯 MVP

**Goal**: Render breadcrumb path and primary header title on page load

**Independent Test**: Navigate to route page, verify navigation context path and title render correctly with premium typography.

### Implementation for User Story 1

- [x] T003 [P] [US1] Create the Breadcrumbs component in app/courses/[courseId]/_components/Breadcrumbs.tsx
- [x] T004 [US1] Create the CoursePreviewHeader wrapper component in app/courses/[courseId]/_components/CoursePreviewHeader.tsx and render Breadcrumbs
- [x] T005 [US1] Update app/courses/[courseId]/page.tsx to import and render CoursePreviewHeader

**Checkpoint**: Breadcrumbs and Title are fully functional and visible

---

## Phase 4: User Story 2 - Video Player Preview (Priority: P2)

**Goal**: Display video placeholder thumbnail with centered scale-up play button interaction on hover

**Independent Test**: Verify image thumbnail loads and hover interaction triggers the play button animation.

### Implementation for User Story 2

- [x] T006 [P] [US2] Create the VideoPlayer client component in app/courses/[courseId]/_components/VideoPlayer.tsx
- [x] T007 [US2] Integrate the VideoPlayer component inside CoursePreviewHeader.tsx

**Checkpoint**: Video player and hover animations are operational

---

## Phase 5: User Story 3 - Social Share Bar (Priority: P3)

**Goal**: Display inline social icons for viral sharing

**Independent Test**: Verify sharing button icons render beneath the video player and show opacity transitions.

### Implementation for User Story 3

- [x] T008 [P] [US3] Create the SocialShareBar component in app/courses/[courseId]/_components/SocialShareBar.tsx
- [x] T009 [US3] Integrate SocialShareBar inside CoursePreviewHeader.tsx

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final formatting, linting, and quality check

- [x] T010 Run lint checking and resolve code syntax formatting

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)** -> **Foundational (Phase 2)** -> **User Story 1 (Phase 3)**
- **User Story 2 & 3 (Phase 4 & 5)** depend on **User Story 1 (Phase 3)** being completed.

### Parallel Opportunities

- T003, T006, and T008 can be written in parallel as they occupy separate files with no dependencies on each other.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Setup the route and shell (T001 - T002).
2. Code and render the breadcrumbs and title (T003 - T005).
3. Validate typography and basic spacing.

### Incremental Delivery

1. Integrate the Video Player (T006 - T007) and test hover transitions.
2. Integrate the Social Share Bar (T008 - T009) and verify styling.
3. Polish and run eslint (T010).
