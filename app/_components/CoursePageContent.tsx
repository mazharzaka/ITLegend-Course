"use client";

import React from "react";
import { CoursePlayerProvider, useCoursePlayer } from "./CoursePlayerContext";
import VideoPlayer from "./VideoPlayer";
import Breadcrumbs from "./Breadcrumbs";
import SocialShareBar from "./SocialShareBar";
import CourseMaterials from "./CourseMaterials";
import CourseTopics from "./CourseTopics";
import CommentsSection from "./CommentsSection";

interface CoursePageContentProps {
  courseTitle: string;
}

function CoursePageContentInner({ courseTitle }: CoursePageContentProps) {
  const { layoutMode } = useCoursePlayer();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 antialiased transition-colors duration-300 pb-20">
      
      {/* 
        Grid Container:
        - 1-column on mobile with gap-y-4 (16px) for tight mobile spacing.
        - 12-column on desktop with gap-y-8 (32px) and gap-x-10 (40px) for standard spacing.
        - Padded using the default page design padding system.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-y-8 lg:gap-x-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-4 lg:pt-6">
        
        {/* Breadcrumbs & Title:
            - Mobile: Row 1.
            - Desktop Normal: Row 1, aligned with left column (col-span-8).
            - Desktop Wide: Row 2, aligned with left column (col-span-8), sits below wide player.
        */}
        <div
          className={`flex flex-col gap-2 lg:col-span-8 lg:col-start-1 ${
            layoutMode === "wide" ? "lg:row-start-2 mt-4" : "lg:row-start-1"
          }`}
        >
          {/* We pass a custom class to override Breadcrumbs default outer page wrapper padding */}
          <Breadcrumbs className="w-full py-1" />
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans mt-1">
            {courseTitle}
          </h1>
        </div>

        {/* Video Player Wrapper:
            - Mobile: Sticky top-0, padded container background matching the page theme with py-1.5 for tight sticky spacing.
            - Desktop Normal: Sits in left column, row 2, rounded-xl.
            - Desktop Wide (Theater): Spans 12 columns, row 1, breaks out to full viewport width with a dark backdrop.
        */}
        <div
          className={
            layoutMode === "wide"
              ? "lg:col-span-12 lg:row-start-1 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-slate-950 py-3 lg:py-8 flex justify-center sticky top-0 lg:relative z-40 shadow-xl border-b border-slate-200/5 dark:border-slate-800/10"
              : "lg:col-span-8 lg:row-start-2 w-full sticky top-0 lg:relative z-40 bg-slate-50 dark:bg-slate-950 py-1.5 lg:py-0 lg:bg-transparent shadow-xs lg:shadow-none"
          }
        >
          <div className={layoutMode === "wide" ? "w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12" : "w-full"}>
            <VideoPlayer />
          </div>
        </div>

        {/* Social Share Bar:
            - Positioned below the Video Player.
            - pb-4 on mobile, pb-6 on desktop.
        */}
        <div
          className={`lg:col-span-8 lg:col-start-1 ${
            layoutMode === "wide" ? "lg:row-start-3" : "lg:row-start-3"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/60 pb-4 lg:pb-6">
            <SocialShareBar />
          </div>
        </div>

        {/* Course Materials:
            - Positioned below the Share Bar.
        */}
        <div
          className={`lg:col-span-8 lg:col-start-1 ${
            layoutMode === "wide" ? "lg:row-start-4" : "lg:row-start-4"
          }`}
        >
          <CourseMaterials />
        </div>

        {/* Course Curriculum Topics:
            - Mobile: Renders below Materials in standard flow (order determined by JSX).
            - Desktop: Sidebar spanning 4 columns on the right, sticky behavior when scrolling.
            - Desktop Wide: Pushed below the wide player, aligned in columns 9-12.
        */}
        <div
          className={`lg:col-span-4 lg:col-start-9 lg:row-span-4 lg:self-start lg:sticky lg:top-8 ${
            layoutMode === "wide" ? "lg:row-start-2" : "lg:row-start-2"
          }`}
        >
          <CourseTopics />
        </div>

        {/* Comments Section:
            - Positioned at the bottom of the left column.
        */}
        <div
          className={`lg:col-span-8 lg:col-start-1 ${
            layoutMode === "wide" ? "lg:row-start-5" : "lg:row-start-5"
          }`}
        >
          <CommentsSection />
        </div>

      </div>
    </main>
  );
}

export default function CoursePageContent({ courseTitle }: CoursePageContentProps) {
  return (
    <CoursePlayerProvider>
      <CoursePageContentInner courseTitle={courseTitle} />
    </CoursePlayerProvider>
  );
}
