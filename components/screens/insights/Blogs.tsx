"use client";

import { useState } from "react";

import BlogCard from "@/components/screens/insights/BlogCard";
import type { BlogPost } from "@/utils/blogs";

type BlogsProps = {
  initialBlogs: BlogPost[];
};

export default function Blogs({ initialBlogs }: BlogsProps) {
  const [showAll, setShowAll] = useState(false);
  const initialVisibleCount = 6;
  const visibleBlogs = showAll
    ? initialBlogs
    : initialBlogs.slice(0, initialVisibleCount);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 px-6 py-12 transition-colors">
      <div className="mx-auto mt-12 max-w-7xl">
        <div className="animate-fade-in mb-16 text-center">
          <div className="mb-4 inline-block">
            <span className="bg-gradient-to-r from-[#000080] to-[#0000FF] bg-clip-text text-sm font-semibold uppercase tracking-wider text-transparent">
              Our Blog
            </span>
          </div>
          <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Latest{" "}
            <span className="bg-gradient-to-r from-[#000080] to-[#0000FF] bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            Insights and best practices on documentation governance, operational
            documentation clarity, and documentation readiness strategies.
          </p>
        </div>

        {initialBlogs.length ? (
          <>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visibleBlogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </div>

            {initialBlogs.length > initialVisibleCount ? (
              <div className="mt-16 text-center">
                <button
                  type="button"
                  onClick={() => {
                    setShowAll((prev) => !prev);
                    if (showAll) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-sm bg-[#1a237e] px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#0d47a1] hover:shadow-xl"
                >
                  {showAll ? "View Less Insights" : "View More Insights"}
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showAll ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    )}
                  </svg>
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-500">
              No blog posts available at the moment. Please check back soon!
            </p>
          </div>
        )}
      </div>

    </section>
  );
}
