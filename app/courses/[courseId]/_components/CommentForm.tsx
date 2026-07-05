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
          className="w-full px-4 py-3 text-slate-800 dark:text-slate-100 placeholder-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-xs focus:outline-hidden focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none text-sm"
        />
      </div>
      <div className="flex justify-start">
        <button
          type="submit"
          disabled={!commentText.trim()}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#3ab09e] hover:bg-[#329889] disabled:bg-slate-300 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600 text-white font-semibold text-sm rounded-lg transition-colors duration-300 shadow-sm cursor-pointer disabled:cursor-not-allowed"
        >
          Submit Review
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
