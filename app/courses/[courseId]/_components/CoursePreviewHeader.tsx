import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import VideoPlayer from "./VideoPlayer";
import SocialShareBar from "./SocialShareBar";

interface CoursePreviewHeaderProps {
  courseId: string;
  title: string;
}

export default function CoursePreviewHeader({
  title,
}: CoursePreviewHeaderProps) {
  return (
    <section className="flex flex-col gap-5 sm:gap-6 w-full max-w-4xl mx-auto py-2">
      {/* Top Breadcrumb & Title Section */}
      <div className="flex flex-col ">
        <Breadcrumbs />
        <h1 className="text-4xl leading-16 sm:text-3.5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans">
          {title}
        </h1>
      </div>

      {/* Video & Social Share Section */}
      <div className="flex flex-col gap-10">
        <VideoPlayer />
        <div className="flex items-center justify-between pt-1">
          <SocialShareBar />
        </div>
      </div>
    </section>
  );
}
