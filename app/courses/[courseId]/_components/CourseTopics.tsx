"use client";

import React from "react";
import { FileText, Lock } from "lucide-react";

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
  title: string; // e.g. "Week 1-4"
  description: string;
  items: TopicItem[];
}

export default function CourseTopics() {
  const sections: CourseSection[] = [
    {
      id: "sec-1",
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
  ];

  return (
    <section className="w-full max-w-md flex flex-col gap-8">
      {/* Topics Course Header & Progress */}
      <div className="flex flex-col gap-6 w-full">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight font-sans">
          Topics for This Course
        </h2>

        {/* Progress Tracker Section */}
        <div className="relative pt-12 pb-6 px-1 w-full">
          {/* "You" Marker Pin at 63% */}
          <div className="absolute top-2 left-[63%] -translate-x-1/2 z-10 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full border border-slate-300 bg-white flex items-center justify-center shadow-sm">
              <span className="text-[10px] font-bold text-slate-500 tracking-wider">
                You
              </span>
            </div>
            {/* Subtle Downward Pointer */}
            <div className="w-0 h-0 border-l-[4.5px] border-l-transparent border-r-[4.5px] border-r-transparent border-t-[5.5px] border-t-slate-400 mt-[1px]"></div>
          </div>

          {/* Progress Bar Track */}
          <div className="relative w-full h-[6px] bg-slate-200 rounded-full overflow-visible">
            {/* Filled Progress (63%) */}
            <div
              className="absolute top-0 left-0 h-full bg-[#45bf7a] rounded-full transition-all duration-500 ease-out"
              style={{ width: "63%" }}
            />
          </div>

          {/* Percentage text below progress bar */}
          <div className="absolute left-[63%] -translate-x-1/2 mt-2">
            <span className="text-[11px] font-bold text-slate-500">63%</span>
          </div>
        </div>
      </div>

      {/* Sections Cards list */}
      <div className="flex flex-col gap-8 w-full">
        {sections.map((section) => (
          <div
            key={section.id}
            className="w-full bg-white border border-[#e2e8f0] overflow-hidden p-6 sm:p-8"
          >
            {/* Card Header */}
            <div className="border-b border-[#f1f5f9] pb-4 mb-4">
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                {section.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-400 font-normal leading-relaxed">
                {section.description}
              </p>
            </div>

            {/* Course Curriculum List */}
            <div className="divide-y divide-[#f1f5f9]">
              {section.items.map((topic) => {
                const isUnlocked = !topic.isLocked;
                const hasBadges =
                  topic.duration || topic.questionsCount !== undefined;

                return (
                  <div
                    key={topic.id}
                    className={`flex items-center justify-between py-4 group ${
                      isUnlocked ? "cursor-pointer" : "opacity-90"
                    }`}
                  >
                    {/* Left side: Icon & Title */}
                    <div className="flex items-center gap-3 min-w-0 pr-4">
                      {/* File Icon */}
                      <FileText className="h-4.5 w-4.5 text-slate-400 shrink-0 stroke-[1.5]" />

                      {/* Title & optional Inline Badges */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 min-w-0">
                        <span className="text-sm sm:text-base font-normal text-slate-600 truncate">
                          {topic.title}
                        </span>

                        {/* Inline Badges (like Course Overview Row 3) */}
                        {hasBadges && topic.badgeLayout === "inline" && (
                          <div className="flex items-center gap-2 select-none ml-2">
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

                    {/* Right side: Lock Icon OR Right-Stacked Badges */}
                    <div className="shrink-0 pl-2">
                      {topic.isLocked ? (
                        <Lock className="h-4 w-4 text-slate-400 stroke-[1.5]" />
                      ) : (
                        hasBadges &&
                        topic.badgeLayout === "right-stacked" && (
                          <div className="flex flex-col items-end gap-1 select-none">
                            {topic.questionsCount !== undefined && (
                              <span className="inline-flex items-center px-3 py-1 rounded-[2px] text-[10px] font-bold bg-[#eefcf7] text-[#1aa073] border border-[#e2f9ee]">
                                {topic.questionsCount} QUESTION
                              </span>
                            )}
                            {topic.duration && (
                              <span className="inline-flex items-center px-3 py-1 rounded-[2px] text-[10px] font-bold bg-[#fff0f2] text-[#f25f77] border border-[#ffe4e8]">
                                {topic.duration}
                              </span>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
