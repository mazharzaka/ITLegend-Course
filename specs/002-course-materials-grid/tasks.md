# Tasks: Course Materials Info Grid

**Input**: Design documents from `/specs/002-course-materials-grid/`

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

**Purpose**: None (purely static presentational component)

---

## Phase 3: User Story 1 - View Course Materials List & Responsive Grid (Priority: P1 & P2) 🎯 MVP

**Goal**: Render responsive two-column grid list of course metadata details with icons

**Independent Test**: Navigate to route page, verify the grid layout, icons, and labels render correctly. Verify responsive folding.

### Implementation for User Story 1

- [x] T002 [US1] Create the CourseMaterials component in app/courses/[courseId]/_components/CourseMaterials.tsx
- [x] T003 [US1] Update app/courses/[courseId]/page.tsx to render CourseMaterials

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Linting and visual quality verification

- [x] T004 Run lint checking and resolve formatting issues
