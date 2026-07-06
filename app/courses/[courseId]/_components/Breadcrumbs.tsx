import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const defaultItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Course Details", href: "#" },
  ];

  const displayItems = items || defaultItems;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-2">
      <nav 
        className="flex items-center space-x-1 sm:space-x-2 md:space-x-3 xl:space-x-4 text-sm md:text-base xl:text-lg font-medium text-slate-500 dark:text-slate-400" 
        aria-label="Breadcrumb"
      >
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;

          return (
            <div key={item.label} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 md:h-4.5 md:w-4.5 xl:h-5 xl:w-5 mx-1 sm:mx-2 xl:mx-3 text-slate-400 shrink-0" />
              )}
              {isLast ? (
                <span className="text-slate-800 dark:text-slate-350 select-none">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
