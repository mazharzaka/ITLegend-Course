# Feature Specification: Comments and Reviews Section

**Feature Branch**: `003-course-comments`

**Created**: 2026-07-05

**Status**: Draft

**Input**: User description: "Create a modern, responsive 'Comments and Reviews' section based on image_3a11a5.png using React, Tailwind CSS, and Lucide React icons."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View Comments List (Priority: P1)

As a course participant, I want to see a list of existing reviews and comments left by other students so that I can gauge feedback and discussion around the course content.

**Why this priority**: It is the core content presentation for the section.

**Independent Test**: Verify that the list of comments displays correct student avatar images, names, dates, and review text.

**Acceptance Scenarios**:

1. **Given** a user is on the course details page, **When** they scroll to the comments section, **Then** they see the title "Comments" followed by the list of student reviews.
2. **Given** the list of comments, **When** viewing each comment row, **Then** it shows the student avatar on the left, with the student name, date, and comment body stacked vertically on the right.
3. **Given** multiple comments, **When** rendered, **Then** there is a thin border divider separating each comment, except below the final comment before the input form.

---

### User Story 2 - Write and Submit Comment (Priority: P2)

As an enrolled student, I want to be able to type a review in a textarea and click a submit button so that I can share my feedback with others.

**Why this priority**: Provides interactive engagement and user-generated feedback capability.

**Independent Test**: Typing in the textarea and clicking the submit button updates the local review list (or executes the submission callback) with the new text.

**Acceptance Scenarios**:

1. **Given** the comments section is rendered, **When** a user types a review in the input field, **Then** the text appears inside the rounded textarea container.
2. **Given** a typed comment, **When** the user clicks "Submit Review", **Then** the form is submitted, the input is cleared, and the review is added to the list.

---

## Edge Cases

- **Empty Text Submission**: The system MUST prevent submitting empty comments or whitespace-only strings (disabling the submit button or showing validation).
- **Long Names and Text Wrap**: Long student names or comments containing very long words MUST wrap gracefully without breaking layout grids.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST display a section heading: "Comments".
- **FR-002**: System MUST render a list of comments using a flexbox layout, with each card displaying an avatar on the left and content on the right.
- **FR-003**: Each comment card MUST contain:
  - Avatar image (`w-12 h-12 rounded-full object-cover`).
  - Student name (`font-semibold text-slate-800`).
  - Comment date (muted text below name, e.g. "Oct 10, 2021").
  - Comment body text (`text-sm text-slate-500`).
- **FR-004**: System MUST separate comments with a thin horizontal border divider (`border-b border-slate-100` or similar), excluding the last comment item.
- **FR-005**: System MUST provide a rounded textarea input field (`rounded-lg`) with placeholder text "Write a comment" and a subtle box shadow.
- **FR-006**: System MUST render a "Submit Review" button below the textarea on the bottom-left, styled in teal (`#3ab09e` / `bg-[#3ab09e]`), containing an ArrowRight icon on the right side.

### Key Entities

- **Comment**: Representing student identity, avatar metadata, creation date, and body message.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The form submission action MUST resolve and update the UI list in less than 500 milliseconds (instant feedback).
- **SC-002**: Textarea container and layout columns MUST scale responsively across mobile (320px+), tablet, and desktop viewports.

## Assumptions

- Tailwind CSS is configured and used for styling.
- Lucide React is available for icons (ArrowRight).
- Avatars can use premium, free Unsplash placeholder URLs.
