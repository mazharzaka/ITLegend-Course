"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Maximize, Minimize } from "lucide-react";
import Image from "next/image";
import { useCoursePlayer } from "./CoursePlayerContext";
import "plyr/dist/plyr.css";

interface VideoPlayerProps {
  thumbnailUrl?: string;
}

;

function getYouTubeId(url: string): string {
  if (!url.includes("/") && !url.includes(".")) return url;
  
  const embedReg = /\/embed\/([^/?]+)/;
  const watchReg = /[?&]v=([^&#]+)/;
  const shortReg = /youtu\.be\/([^/?]+)/;
  
  const embedMatch = url.match(embedReg);
  if (embedMatch) return embedMatch[1];
  
  const watchMatch = url.match(watchReg);
  if (watchMatch) return watchMatch[1];
  
  const shortMatch = url.match(shortReg);
  if (shortMatch) return shortMatch[1];
  
  return "YBhHxIg_yQ8"; // fallback default
}

export default function VideoPlayer({
  thumbnailUrl = "/video.png",
}: VideoPlayerProps) {
  const {
    currentVideoUrl,

    isPlaying,
    setIsPlaying,
   
    isFullscreen,
    setIsFullscreen,
  } = useCoursePlayer();

  const [showControls, setShowControls] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const plyrContainerRef = useRef<HTMLDivElement>(null);
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sync fullscreen state with native browser events (e.g. Esc key)
  useEffect(() => {
    const handleFullscreenChange = () => {
      const activeFullscreen = !!document.fullscreenElement;
      setIsFullscreen(activeFullscreen);
      
      // If we exit fullscreen, ensure we unlock the screen orientation
      const orientation = typeof window !== "undefined" && window.screen && (window.screen.orientation as any);
      if (!activeFullscreen && orientation && orientation.unlock) {
        try {
          orientation.unlock();
        } catch (e) {
          console.warn("Screen orientation unlock failed:", e);
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    };
  }, [setIsFullscreen]);

  // Dynamically initialize and control Plyr player instance
  useEffect(() => {
    let player: any = null;

    if (isPlaying && plyrContainerRef.current) {
      const initPlyr = async () => {
        try {
          const PlyrClass = (await import("plyr")).default;
          if (!plyrContainerRef.current) return;
          
          player = new PlyrClass(plyrContainerRef.current, {
            autoplay: true,
            controls: [
              "play-large",
              "play",
              "progress",
              "current-time",
              "duration",
              "mute",
              "volume",
              "settings",
              "pip",
              "airplay",
            ],
            youtube: {
              noCookie: true,
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3,
              modestbranding: 1,
              playsinline: 1
            }
          });
        } catch (err) {
          console.error("Error initializing Plyr:", err);
        }
      };

      initPlyr();
    }

    return () => {
      if (player) {
        try {
          player.destroy();
        } catch (e) {
          console.warn("Error destroying Plyr:", e);
        }
        player = null;
      }
    };
  }, [isPlaying, currentVideoUrl]);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      try {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        } else if ((containerRef.current as any).webkitRequestFullscreen) {
          await (containerRef.current as any).webkitRequestFullscreen();
        }

        // Lock screen orientation to landscape on mobile devices
        const orientation = typeof window !== "undefined" && window.screen && (window.screen.orientation as any);
        if (orientation && orientation.lock) {
          await orientation.lock("landscape").catch((err: any) => {
            console.warn("Screen orientation lock rejected:", err);
          });
        }
      } catch (err) {
        console.error("Fullscreen request failed:", err);
      }
    } else {
      try {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        }
      } catch (err) {
        console.error("Fullscreen exit failed:", err);
      }
    }
  };

  const youtubeId = getYouTubeId(currentVideoUrl);

  return (
    <div
      ref={containerRef}
      id="course-player-container"
      className={`w-full relative overflow-hidden shadow-2xl group bg-slate-950 aspect-video transition-all duration-500 ease-in-out ${
        isFullscreen ? "rounded-none w-screen h-screen" : "rounded-xl border border-slate-200/10 dark:border-slate-800/50"
      }`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onTouchStart={() => {
        setShowControls(true);
        if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
        touchTimeoutRef.current = setTimeout(() => {
          setShowControls(false);
        }, 3000);
      }}
    >
      <div className="player-inner-wrapper w-full h-full relative">
        {!isPlaying ? (
          <>
            {/* Thumbnail Image */}
            <div className="absolute inset-0 w-full h-full select-none">
              <Image
                src={thumbnailUrl}
                alt="Course Instructor Video Preview"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
            </div>

            {/* Premium Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/20 to-slate-950/40 group-hover:via-slate-950/30 transition-all duration-300" />

            {/* Center Play Button Overlay */}
            <button
              onClick={handlePlayClick}
              aria-label="Play Course Video Preview"
              className="absolute inset-0 flex items-center justify-center focus:outline-hidden cursor-pointer"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 dark:bg-white/95 text-slate-900 flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-white select-none">
                <Play className="h-6 w-6 sm:h-8 sm:w-8 fill-[#e54860] stroke-[#e54860] ml-1 translate-x-0.5" />
              </div>
            </button>
          </>
        ) : (
          /* Video Embed Plyr Player Container */
          <div className="absolute inset-0 w-full h-full bg-slate-950">
            <div
              ref={plyrContainerRef}
              data-plyr-provider=""
            />
          </div>
        )}

        {/* Floating Premium Overlay Controls (Wide & Maximize) */}
        <div
          className={`absolute top-4 right-4 z-30 flex items-center gap-2.5 transition-all duration-300 ${
            showControls ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
          }`}
        >
          {/* Maximize/Fullscreen Toggle Button (All Devices) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFullscreen();
            }}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900/75 hover:bg-slate-900/90 backdrop-blur-md text-white border border-white/10 hover:border-white/20 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          >
            {isFullscreen ? (
              <Minimize className="w-5 h-5 animate-in fade-in duration-200" />
            ) : (
              <Maximize className="w-5 h-5 animate-in fade-in duration-200" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
