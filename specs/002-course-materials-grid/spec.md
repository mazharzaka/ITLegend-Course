# Feature Specification: Course Materials Info Grid

**Feature Branch**: `002-course-materials-grid`

**Created**: 2026-07-05

**Status**: Draft

**Input**: User description: "Create a clean, responsive 'Course Materials Info Grid' component based on image_3995a5.png using React, Tailwind CSS, and Lucide React icons."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Course Materials List (Priority: P1)

As a student browsing the course page, I want to see a clear list of key course details (duration, number of lessons, enrolled students, language) so that I can quickly assess the structure and metadata of the course.

**Why this priority**: It is the core information layout that users need to see.

**Independent Test**: Verify that all 4 metadata fields (Duration, Lessons, Enrolled, Language) are rendered with corresponding icons, labels, and values.

**Acceptance Scenarios**:

1. **Given** a user is on the course page, **When** the page loads, **Then** they see the title "Course Materials" followed by two columns containing the course stats.
2. **Given** the list rows are rendered, **When** viewing each row, **Then** the icon and label are aligned on the left, and the value is aligned on the right.
3. **Given** the list rows are rendered, **When** looking at the dividers, **Then** there is a thin border divider between each row except the last one.

---

### User Story 2 - Responsive Grid Layout (Priority: P2)

As a user on a mobile device or a desktop screen, I want the materials grid to adapt its columns dynamically so that the information remains readable and fits the viewport.

**Why this priority**: Ensures optimal layout and readability across varying device sizes.

**Independent Test**: Verify that the columns display side-by-side on desktop viewports (1024px+) and stack vertically on mobile screens (<768px).

**Acceptance Scenarios**:

1. **Given** a desktop viewport, **When** the component is rendered, **Then** it shows a two-column grid with a large horizontal gap (`gap-x-12` or `gap-x-16`).
2. **Given** a mobile viewport, **When** the component is rendered, **Then** the columns stack vertically into a single list layout.

---

## Edge Cases

- **Long Value Strings**: If a value (e.g., "65 students") is exceptionally long, it MUST wrap cleanly or shrink without pushing the label/icon out of bounds or overlapping it.
- **Dark Mode Support**: Component styles MUST adjust background and text colors to maintain contrast ratios in dark environments.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST render a section heading: "Course Materials".
- **FR-002**: System MUST render a two-column layout on desktop viewports (`grid grid-cols-1 md:grid-cols-2`) with horizontal spacing (`gap-x-12` to `gap-x-16`).
- **FR-003**: System MUST display 4 rows in each column:
  - **Row 1**: Duration -> Clock icon, Label: "Duration:", Value: "3 weeks"
  - **Row 4**: Lessons -> BookOpen/Layers icon, Label: "Lessons:", Value: "8"
  - **Row 3**: Enrolled -> Users/GraduationCap icon, Label: "Enrolled:", Value: "65 students"
  - **Row 4**: Language -> Globe icon, Label: "Language:", Value: "English"
- **FR-004**: Each row MUST align its icon and label on the left, and the value on the right (`flex items-center justify-between`).
- **FR-005**: System MUST render thin horizontal dividers (`border-b border-gray-100` or similar) between rows, excluding the final row of each column.
- **FR-006**: All icons MUST use a stroke-width of `1.5` and be rendered in a muted gray color.

### Key Entities

- **Course Materials Info**: A structured set of key-value pairs outlining course properties.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The component layout MUST adapt to viewport width changes in real time without horizontal scrollbars.
- **SC-002**: Text contrast ratios for labels and values MUST satisfy Web Content Accessibility Guidelines (WCAG 2.1) level AA.

## Assumptions

- Tailwind CSS is configured and used for styling.
- Lucide React is available for icons (Clock, BookOpen, Users, Globe).
