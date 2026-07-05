"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CommentForm } from "./CommentForm";

interface CommentItem {
  id: string;
  author: string;
  avatarUrl: string;
  date: string;
  content: string;
}

export default function CommentsSection() {
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: "1",
      author: "Student Name Goes Here",
      avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150&q=80",
      date: "Oct 10, 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "2",
      author: "Student Name Goes Here",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      date: "Oct 15, 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "3",
      author: "Student Name Goes Here",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      date: "Oct 19, 2021",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]);

  const handleAddComment = (content: string) => {
    const newComment: CommentItem = {
      id: String(comments.length + 1),
      author: "You (Student)",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      content: content,
    };

    setComments([...comments, newComment]);
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
        Comments
      </h2>

      {/* Comments List */}
      <div className="flex flex-col">
        {comments.map((comment, index) => {
          const isLast = index === comments.length - 1;

          return (
            <div
              key={comment.id}
              className={`flex items-start gap-4 py-6 ${
                isLast ? "" : "border-b border-slate-100 dark:border-slate-900"
              }`}
            >
              {/* Left Avatar */}
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800">
                <Image
                  src={comment.avatarUrl}
                  alt={comment.author}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              {/* Right Content Area */}
              <div className="flex flex-col gap-1 w-full">
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm sm:text-base">
                  {comment.author}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {comment.date}
                </span>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
                  {comment.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Form */}
      <CommentForm onSubmit={handleAddComment} />
    </section>
  );
}
