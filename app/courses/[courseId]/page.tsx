import React from "react";
import CoursePreviewHeader from "./_components/CoursePreviewHeader";
import CourseMaterials from "./_components/CourseMaterials";
import CourseTopics from "./_components/CourseTopics";
import CommentsSection from "./_components/CommentsSection";
import Breadcrumbs from "./_components/Breadcrumbs";

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
    <main className="min-h-screen bg-slate-50 py-10 dark:bg-slate-950 text-slate-900 dark:text-slate-50 antialiased transition-colors duration-300">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col gap-2 mb-8">
        <h1 className="text-4xl leading-tight sm:text-3.5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
          {courseTitle}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-10 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto w-full">
        <div className="w-full lg:max-w-4xl flex flex-col gap-[60px]">
          <CoursePreviewHeader />
          <CourseMaterials />
          <div className="block lg:hidden">
            <CourseTopics />
          </div>
          <CommentsSection />
        </div>
        <div className="hidden lg:block">
          <CourseTopics />
        </div>
      </div>
    </main>
  );
}
