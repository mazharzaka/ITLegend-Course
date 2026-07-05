"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface CommentFormProps {
  onSubmit: (content: string) => void;
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    onSubmit(commentText);
    setCommentText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
      <div className="relative">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment"
          rows={4}
          className="w-full px-4 py-3 text-slate-800 shadow-[0px_0px_30.5px_15px_rgba(0,0,0,0.04)] min-h-36 dark:text-slate-100 placeholder-slate-400 bg-white  rounded-lg border-0 focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none text-sm"
        />
      </div>
      <div className="flex justify-start">
        <button
          type="submit"
          className="flex items-center gap-2 px-5 py-4 bg-[#3ab09e] hover:bg-[#329889] text-white font-semibold text-sm rounded-[3px] transition-colors duration-300 shadow-sm cursor-pointer"
        >
          Submit Review
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
