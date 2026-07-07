"use client";

import React, { useState } from "react";
import { FileText, Lock, Plus, Minus } from "lucide-react";
import { useCoursePlayer } from "./CoursePlayerContext";

const topicVideos: Record<string, { url: string; title: string }> = {
  "3": {
    url: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    title: "Course Overview",
  },
  "9": {
    url: "https://www.youtube.com/embed/l7WA75aR63E",
    title: "Return Values From Functions",
  },
};

interface TopicItem {
  id: string;
  title: string;
  isLocked: boolean;
  duration?: string; // e.g. "10 MINUTES"
  questionsCount?: number; // e.g. 0
  badgeLayout?: "inline" | "right-stacked";
}

interface CourseSection {
  id: string;
  mobileTitle: string;
  title: string; // e.g. "Week 1-4"
  description: string;
  items: TopicItem[];
}

export default function CourseTopics() {
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>(
    "sec-1",
  );
  const { setCurrentVideoUrl, setCurrentVideoTitle, setIsPlaying } = useCoursePlayer();

  const handleTopicClick = (topic: TopicItem) => {
    if (topic.isLocked) return;

    const videoData = topicVideos[topic.id] || {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: topic.title,
    };

    setCurrentVideoUrl(videoData.url);
    setCurrentVideoTitle(videoData.title);
    setIsPlaying(true);

    // Smoothly scroll to the player on mobile devices so they see it play immediately
    const playerEl = document.getElementById("course-player-container");
    if (playerEl && window.innerWidth < 1024) {
      playerEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections: CourseSection[] = [
    {
      id: "sec-1",
      mobileTitle: "Course Introduction",
      title: "Week 1-4",
      description:
        "Advanced story telling techniques for writers: Personas, Characters & Plots",
      items: [
        { id: "1", title: "Introduction", isLocked: true },
        { id: "2", title: "Course Overview", isLocked: true },
        {
          id: "3",
          title: "Course Overview",
          isLocked: false,
          duration: "10 MINUTES",
          questionsCount: 0,
          badgeLayout: "inline",
        },
        { id: "4", title: "Course Exercise / Reference Files", isLocked: true },
        {
          id: "5",
          title: "Code Editor Installation (Optional if you have one)",
          isLocked: true,
        },
        { id: "6", title: "Embedding PHP in HTML", isLocked: true },
      ],
    },
    {
      id: "sec-2",
      mobileTitle: "JavaScript Language Basics",
      title: "Week 5-8",
      description:
        "Advanced story telling techniques for writers: Personas, Characters & Plots",
      items: [
        { id: "7", title: "Defining Functions", isLocked: true },
        { id: "8", title: "Function Parameters", isLocked: true },
        {
          id: "9",
          title: "Return Values From Functions",
          isLocked: false,
          duration: "15 MINUTES",
          questionsCount: 2,
          badgeLayout: "right-stacked",
        },
        { id: "10", title: "Global Variable and Scope", isLocked: true },
        { id: "11", title: "Newer Way of creating a Constant", isLocked: true },
        { id: "12", title: "Constants", isLocked: true },
      ],
    },
    {
      id: "sec-3",
      mobileTitle: "Components & Databinding",
      title: "Week 9-12",
      description:
        "Advanced story telling techniques for writers: Personas, Characters & Plots",
      items: [
        { id: "13", title: "Component Decoration", isLocked: true },
        { id: "14", title: "Component Lifecycle Hooks", isLocked: true },
        { id: "15", title: "Input and Output Properties", isLocked: true },
        { id: "16", title: "View Encapsulation", isLocked: true },
      ],
    },
  ];

  const toggleSection = (id: string) => {
    setExpandedSectionId(expandedSectionId === id ? null : id);
  };

  return (
    <section className="w-full max-w-4xl  mx-auto lg:mx-0 flex flex-col gap-8">
      {/* Topics Course Header */}
      <div className="flex flex-col gap-2 w-full">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight font-sans">
          Topics for This Course
        </h2>
        {/* Desktop Progress Tracker (visible on lg and up) */}
        <div className=" relative pt-12 pb-8 px-6 border-b border-[#f1f5f9] w-full bg-slate-50/20 rounded-lg">
          {/* "You" Marker Pin at 63% */}
          <div className="absolute top-2.5 left-[63%] -translate-x-1/2 z-10 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full border border-slate-350 bg-white flex items-center justify-center shadow-sm">
              <span className="text-[10px] font-bold text-slate-500 tracking-wider">
                You
              </span>
            </div>
            {/* Downward Pointer */}
            <div className="w-0 h-0 border-l-[4.5px] border-l-transparent border-r-[4.5px] border-r-transparent border-t-[5.5px] border-t-slate-400 mt-[1px]"></div>
            {/* Percentage text */}
            <span className="text-[11px] font-bold text-indigo-650 mt-1.5">
              63%
            </span>
          </div>

          {/* Progress Bar Track */}
          <div className="relative w-full h-[6px] bg-slate-200 rounded-full overflow-visible">
            {/* Filled Progress (63%) */}
            <div
              className="absolute top-0 left-0 h-full bg-[#45bf7a] rounded-full transition-all duration-500 ease-out"
              style={{ width: "63%" }}
            />
          </div>
        </div>
      </div>

      {/* Accordion/Cards list */}
      <div className="flex flex-col gap-8 w-full">
        {sections.map((section) => {
          const isExpanded = expandedSectionId === section.id;

          return (
            <div
              key={section.id}
              className="w-full bg-white rounded-lg border border-[#e2e8f0] shadow-sm overflow-hidden"
            >
              {/* Card Header on Mobile (Accordion Toggle, hidden on desktop) */}
              <div
                onClick={() => toggleSection(section.id)}
                className="flex lg:hidden justify-between items-center p-6 cursor-pointer select-none bg-white hover:bg-slate-50/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-slate-800 tracking-tight">
                  {section.mobileTitle}
                </h3>
                <div>
                  {isExpanded ? (
                    <Minus className="h-5 w-5 text-slate-650 stroke-[2.25]" />
                  ) : (
                    <Plus className="h-5 w-5 text-slate-650 stroke-[2.25]" />
                  )}
                </div>
              </div>

              {/* Card Header on Desktop (Static, visible on lg and up) */}
              <div className="hidden lg:block p-8 border-b border-[#f1f5f9]">
                <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                  {section.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-400 font-normal leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* Collapsible Content Wrapper (always visible on desktop, toggleable on mobile) */}
              <div
                className={`lg:block ${
                  isExpanded ? "block" : "hidden"
                } border-t border-[#f1f5f9] lg:border-t-0`}
              >
                {/* Mobile Progress Tracker (hidden on desktop) */}

                {/* Course Curriculum List */}
                <div className="divide-y divide-[#f1f5f9] px-6 lg:px-8">
                  {section.items.map((topic) => {
                    const isUnlocked = !topic.isLocked;
                    const hasBadges =
                      topic.duration || topic.questionsCount !== undefined;

                    return (
                      <div
                        key={topic.id}
                        onClick={() => handleTopicClick(topic)}
                        className={`flex items-center justify-between py-4 group transition-all duration-150 ${
                          isUnlocked 
                            ? "cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/50 px-3 -mx-3 rounded-lg" 
                            : "opacity-90"
                        }`}
                      >
                        {/* Left side: Icon & Title */}
                        <div className="flex items-start gap-3 min-w-0 pr-4">
                          {/* File Icon */}
                          <FileText className="h-4.5 w-4.5 text-slate-400 shrink-0 stroke-[1.5] mt-0.5" />

                          {/* Title & optional Inline Badges */}
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 min-w-0">
                            <span className="text-sm sm:text-base font-normal text-slate-600 leading-normal break-words">
                              {topic.title}
                            </span>

                            {/* Inline Badges on Desktop (if badgeLayout === "inline") */}
                            {hasBadges && topic.badgeLayout === "inline" && (
                              <div className="hidden lg:flex items-center gap-2 select-none ml-2">
                                {topic.questionsCount !== undefined && (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[10px] font-bold bg-[#eefcf7] text-[#1aa073] border border-[#e2f9ee]">
                                    {topic.questionsCount} QUESTION
                                  </span>
                                )}
                                {topic.duration && (
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[10px] font-bold bg-[#fff0f2] text-[#f25f77] border border-[#ffe4e8]">
                                    {topic.duration}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Right side: Lock Icon OR Badges (Mobile/Desktop stacked) */}
                        <div className="shrink-0 pl-2">
                          {topic.isLocked ? (
                            <Lock className="h-4 w-4 text-slate-400 stroke-[1.5]" />
                          ) : (
                            hasBadges && (
                              <div className="flex items-center gap-2 select-none relative">
                                {/* Stacked Badges (on mobile, OR on desktop if layout is right-stacked) */}
                                <div
                                  className={`flex flex-col items-end gap-1 shrink-0 ${
                                    topic.badgeLayout === "inline"
                                      ? "lg:hidden"
                                      : ""
                                  }`}
                                >
                                  {topic.questionsCount !== undefined && (
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[10px] font-bold bg-[#eefcf7] text-[#1aa073] border border-[#e2f9ee]">
                                      {topic.questionsCount} QUESTION
                                    </span>
                                  )}
                                  {topic.duration && (
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-[2px] text-[10px] font-bold bg-[#fff0f2] text-[#f25f77] border border-[#ffe4e8] whitespace-nowrap">
                                      {topic.duration}
                                    </span>
                                  )}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
