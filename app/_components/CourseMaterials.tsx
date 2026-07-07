import React from "react";
import { Clock, BookOpen, GraduationCap, Globe } from "lucide-react";

export default function CourseMaterials() {
  const materials = [
    { icon: Clock, label: "Duration:", value: "3 weeks" },
    { icon: BookOpen, label: "Lessons:", value: "8" },
    { icon: GraduationCap, label: "Enrolled:", value: "65 students" },
    { icon: Globe, label: "Language:", value: "English" },
  ];

  const renderColumn = () => (
    <div className="flex flex-col w-full">
      {materials.map((item, index) => {
        const IconComponent = item.icon;
        const isLast = index === materials.length - 1;

        return (
          <div
            key={item.label}
            className={`flex items-center justify-between py-4.5 ${
              isLast ? "" : "border-b border-slate-100 dark:border-slate-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <IconComponent className="h-5 w-5 text-slate-700  stroke-[1.5]" />
              <span className="text-slate-800 font-medium text-sm sm:text-base">
                {item.label}
              </span>
            </div>
            <span className="text-slate-800 dark:text-white  text-sm sm:text-base">
              {item.value}
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="w-full max-w-4xl mx-auto md:pt-0 pt-5 ">
      <h2 className="text-xl sm:text-2xl font-bold leading-11 text-slate-900 dark:text-white md:mb-6 mb-2">
        Course Materials
      </h2>
      <div className="grid grid-cols-1 p-5 rounded-[3px] md:grid-cols-2 gap-x-12 shadow-[0px_0px_30.5px_15px_rgba(0,0,0,0.04)] sm:gap-x-16 gap-y-0 bg-white">
        {renderColumn()}
        {renderColumn()}
      </div>
    </section>
  );
}
