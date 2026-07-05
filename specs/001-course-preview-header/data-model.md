# Data Model & Props Schema: Course Preview Header

**Feature**: Course Preview Header
**Date**: 2026-07-05

This component is client-focused and receives data via props. Below are the structural data contracts for the components:

## Entity: BreadcrumbItem

Represents a single step in the navigation hierarchy.

### Schema
- `label` (string, mandatory): The text to display.
- `href` (string, mandatory): The URL path.

---

## Entity: CourseDetailsData

Represents the core dataset rendered by the Course Preview Header.

### Schema
- `title` (string, mandatory): The title of the course. Must not be empty.
- `breadcrumbs` (Array of BreadcrumbItem, mandatory): Navigation path list.
- `videoThumbnail` (string, mandatory): Image URL from Unsplash.
- `videoDuration` (string, optional): Duration format (e.g. "12:34").
- `socialLinks` (Array of SocialShareItem, mandatory): List of active social share endpoints.

---

## Entity: SocialShareItem

### Schema
- `platform` (enum: 'facebook' | 'twitter' | 'linkedin' | 'youtube', mandatory): Platform name.
- `href` (string, mandatory): Destination share URL.
