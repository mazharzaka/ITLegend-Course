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
    <nav className="flex items-center space-x-1 leading-16 sm:space-x-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400" aria-label="Breadcrumb">
      {displayItems.map((item, index) => {
        const isLast = index === displayItems.length - 1;

        return (
          <div key={item.label} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-3.5 w-3.5 mx-1 sm:mx-2 text-slate-400 shrink-0" />
            )}
            {isLast ? (
              <span className="text-slate-800 dark:text-slate-300 select-none">
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
  );
}
