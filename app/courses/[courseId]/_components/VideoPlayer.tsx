"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

interface VideoPlayerProps {
  thumbnailUrl?: string;
}

export default function VideoPlayer({
  thumbnailUrl = "/video.png",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full relative rounded-[5px] overflow-hidden shadow-lg  group bg-slate-900 aspect-video">
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
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            />
          </div>

          {/* Dark Premium Overlay */}
          <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/40 transition-colors duration-300" />

          {/* Center Play Button Overlay */}
          <button
            onClick={handlePlayClick}
            aria-label="Play Course Video Preview"
            className="absolute inset-0 flex items-center justify-center focus:outline-hidden"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 dark:bg-white/95 text-slate-900 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white   select-none">
              <Play className="h-6 w-6 sm:h-8 sm:w-8 fill-[#e54860] ml-1 translate-x-0.5" />
            </div>
          </button>
        </>
      ) : (
        /* Embed a placeholder video player (using a sample YouTube video or a premium layout) */
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-slate-950">
          <iframe
            className="w-full h-full border-0"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Course Introduction Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
