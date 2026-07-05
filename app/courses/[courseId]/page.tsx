import React from "react";
import CoursePreviewHeader from "./_components/CoursePreviewHeader";
import CourseMaterials from "./_components/CourseMaterials";
import CommentsSection from "./_components/CommentsSection";

interface PageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CoursePage({ params }: PageProps) {
  const { courseId } = await params;

  // Under Next.js 16/React 19 conventions, params is a Promise.
  // We resolve the course details. In a real application, this would fetch data.
  const courseTitle = "Starting SEO as your Home";

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 antialiased transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-[60px]">
        <CoursePreviewHeader courseId={courseId} title={courseTitle} />
        <CourseMaterials />
        <CommentsSection />
      </div>
    </main>
  );
}
