"use client";

import React, { createContext, useContext, useState } from "react";

type LayoutMode = "normal" | "wide";

interface CoursePlayerContextType {
  currentVideoUrl: string;
  setCurrentVideoUrl: (url: string) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  layoutMode: LayoutMode;
  setLayoutMode: (mode: LayoutMode) => void;
  isFullscreen: boolean;
  setIsFullscreen: (isFullscreen: boolean) => void;
  currentVideoTitle: string;
  setCurrentVideoTitle: (title: string) => void;
}

const CoursePlayerContext = createContext<CoursePlayerContextType | undefined>(undefined);

export function CoursePlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentVideoUrl, setCurrentVideoUrl] = useState("/programming-market.mp4");
  const [isPlaying, setIsPlaying] = useState(false);
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("normal");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentVideoTitle, setCurrentVideoTitle] = useState("هل سوق البرمجة ينهار فعلاً؟ ولماذا تم تسريح آلاف المبرمجين؟");

  return (
    <CoursePlayerContext.Provider
      value={{
        currentVideoUrl,
        setCurrentVideoUrl,
        isPlaying,
        setIsPlaying,
        layoutMode,
        setLayoutMode,
        isFullscreen,
        setIsFullscreen,
        currentVideoTitle,
        setCurrentVideoTitle,
      }}
    >
      {children}
    </CoursePlayerContext.Provider>
  );
}

export function useCoursePlayer() {
  const context = useContext(CoursePlayerContext);
  if (!context) {
    throw new Error("useCoursePlayer must be used within a CoursePlayerProvider");
  }
  return context;
}
