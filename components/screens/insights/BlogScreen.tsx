import Link from "next/link";

import BlogCard from "@/components/screens/insights/BlogCard";
import { getPublishedBlogs } from "@/utils/blogs";

export default async function BlogScreen() {
  const blogs = await getPublishedBlogs();
  const previewBlogs = blogs.slice(0, 3);

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 px-6 py-12 transition-colors">
      <div className="mx-auto max-w-7xl">
        <div className="animate-fade-in text-center">
          <div className="mb-4 inline-block">
            <span className="bg-gradient-to-r from-[#000080] to-[#0000FF] bg-clip-text text-sm font-semibold uppercase tracking-wider text-transparent">
              Our Blog
            </span>
          </div>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Latest{" "}
            <span className="bg-gradient-to-r from-[#000080] to-[#0000FF] bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
            Insights and best practices on documentation governance, operational
            documentation clarity, and documentation readiness strategies.
          </p>
        </div>

        {previewBlogs.length ? (
          <>
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {previewBlogs.map((blog, index) => (
                <BlogCard key={blog.id} blog={blog} index={index} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-sm bg-[#1a237e] px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#0d47a1] hover:shadow-xl"
              >
                View All Insights
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
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
