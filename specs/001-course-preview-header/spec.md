# Feature Specification: Course Preview Header

**Feature Branch**: `001-course-preview-header`

**Created**: 2026-07-05

**Status**: Draft

**Input**: User description: "reate a premium, responsive 'Course Preview Header' component based on image_38961f.png using Next.js (App Router), React, Tailwind CSS, and Lucide React icons."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Breadcrumbs and Title (Priority: P1)

Users landing on the course details page should immediately see their navigation context (breadcrumbs) and the course title clearly structured at the top of the page.

**Why this priority**: It establishes clear page context and is the absolute core layout element that cannot be omitted.

**Independent Test**: Verify that the breadcrumbs and header text render correctly at the top of the page with appropriate margins and sizes.

**Acceptance Scenarios**:

1. **Given** a user is on the course page, **When** the page loads, **Then** they see "Home > Courses > Course Details" in a small, muted text font at the top.
2. **Given** the breadcrumbs are rendered, **When** viewing the title below them, **Then** the title "Starting SEO as your Home" is displayed in a bold, prominent, premium font.

---

### User Story 2 - Video Player Preview (Priority: P2)

Users should see a high-quality video player preview showing an instructor holding a tablet with a clear play indicator overlay.

**Why this priority**: The video is the primary visual hook on the course details page, encouraging the user to interact and preview the course.

**Independent Test**: Hovering over the play button displays a smooth scale/opacity transition. The image is rendered with a dark overlay to make the play button pop.

**Acceptance Scenarios**:

1. **Given** the video player container is rendered, **When** a user hovers over the container, **Then** the semi-transparent play button in the center scales up or shifts opacity smoothly.
2. **Given** the video thumbnail is displayed, **When** viewing on mobile devices, **Then** the video card scales down responsively while maintaining its rounded corners.

---

### User Story 3 - Social Share Bar (Priority: P3)

Users should be able to see social share options directly beneath the video player to share the course.

**Why this priority**: Promotes viral sharing and community engagement, though not blocking the core page preview functionality.

**Independent Test**: Verify that the Facebook, Twitter, LinkedIn, and YouTube outline icons are rendered inline below the left side of the video player with hover feedback.

**Acceptance Scenarios**:

1. **Given** the social share bar is rendered, **When** a user hovers over any icon, **Then** the icon background or border transitions smoothly to indicate interactive feedback.

---

## Edge Cases

- **Very Long Titles**: If the course title is excessively long, it MUST wrap beautifully onto multiple lines without breaking the layout or overlapping the breadcrumbs/video.
- **Image Load Failures**: If the Unsplash image fails to load, a fallback dark gradient background MUST be displayed behind the play button so the component remains functional and readable.
- **Extreme Screen Widths**: On extremely wide monitors, the header components MUST stay within a max-width container (e.g. `max-w-7xl`) and be centered on screen.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST render breadcrumbs: "Home > Courses > Course Details" with muted color (e.g. `text-gray-500`) and a divider character (e.g. `>`).
- **FR-002**: System MUST render the heading "Starting SEO as your Home" in bold and at least `text-2xl` or `text-3xl` size.
- **FR-003**: System MUST display a rounded video preview card (`rounded-xl` or `rounded-lg`) with an instructor image from Unsplash.
- **FR-004**: System MUST render a semi-transparent, circular play button overlay centered exactly in the video container.
- **FR-005**: System MUST render Facebook, Twitter, LinkedIn, and YouTube sharing icon buttons aligned horizontally on the bottom-left of the video player.
- **FR-006**: All interactive buttons MUST have CSS transition effects (`transition-all duration-300`) for hover states.

### Key Entities

- **Course Details**: Representing the course name ("Starting SEO as your Home"), category path, and preview video metadata.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The component MUST load and render its visual elements in less than 1.5 seconds under standard network conditions.
- **SC-002**: The layout MUST adapt perfectly across mobile (320px+), tablet (768px+), and desktop (1024px+) viewports.
- **SC-003**: Lighthouse Accessibility score for the header section MUST be at least 95 (verified by correct semantic markup and contrast ratios).

## Assumptions

- Tailwind CSS version 4 is configured and working in the workspace.
- Lucide React icons are installed or will be installed.
- The component is built as a Server Component for the shell, hosting the video container which can be a Client Component for its play hover state.
