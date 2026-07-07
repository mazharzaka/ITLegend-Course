import React from "react";
import CoursePageContent from "./_components/CoursePageContent";

interface PageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CoursePage({ params }: PageProps) {
  // In Next.js 16/React 19, params is treated as a Promise.
  await params;

  // In a production application, this would fetch details from a DB or API based on courseId
  const courseTitle = "Starting SEO as your Home";

  return <CoursePageContent courseTitle={courseTitle} />;
}
