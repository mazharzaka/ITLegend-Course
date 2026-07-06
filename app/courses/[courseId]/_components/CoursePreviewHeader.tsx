import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import VideoPlayer from "./VideoPlayer";
import SocialShareBar from "./SocialShareBar";

export default function CoursePreviewHeader() {
  return (
    <section className="flex flex-col gap-5 sm:gap-6 w-full max-w-4xl mx-auto py-2">
      {/* Top Breadcrumb & Title Section */}

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
