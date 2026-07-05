# Data Model & Props Schema: Comments and Reviews

**Feature**: Comments and Reviews Section
**Date**: 2026-07-05

This section renders comments list and accepts user feedback. Below are the data contracts:

## Entity: CommentItem

Represents a single student review/comment.

### Schema
- `id` (string, mandatory): Unique identifier.
- `author` (string, mandatory): Name of the student.
- `avatarUrl` (string, mandatory): Link to the student's avatar image.
- `date` (string, mandatory): Muted display date string (e.g. "Oct 10, 2021").
- `content` (string, mandatory): Review body text.

---

## Entity: CommentsProps

The props interface for the main container component.

### Schema
- `comments` (Array of CommentItem, optional): List of comments to display.
