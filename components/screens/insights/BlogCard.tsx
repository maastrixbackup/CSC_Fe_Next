import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";

import type { BlogPost } from "@/utils/blogs";
import { formatBlogDate } from "@/utils/blogs";

type BlogCardProps = {
  blog: BlogPost;
  index?: number;
};

export default function BlogCard({ blog, index = 0 }: BlogCardProps) {
  const imageUrl = blog.featured_image_path || "/assets/blog1.jpg";
  // const author = blog.author_name || "ClaimScope Consulting";
  const summary = blog.short_description || "";

  return (
    <article
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      style={{ animation: `slideUp 0.6s ease-out ${index * 0.12}s both` }}
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 pt-[56.25%]">
        <Image
          src={imageUrl}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 translate-y-full bg-gradient-to-t from-black/85 via-black/45 to-transparent transition-transform duration-700 ease-out group-hover:translate-y-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href={`/blog/${blog.slug}`}
              className="rounded-full bg-[#1a237e] px-8 py-3 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#0d47a1]"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          {/* <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div> */}
          {blog.blog_date || blog.created_at ? (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatBlogDate(blog.blog_date || blog.created_at)}</span>
            </div>
          ) : null}
          {blog.read_time ? (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{blog.read_time} min read</span>
            </div>
          ) : null}
        </div>

        <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#000080]">
          {blog.title}
        </h3>

        <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">
          {summary}
        </p>

        <div className="mt-4 lg:hidden">
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#000080] transition-colors hover:text-[#0000FF]"
          >
            Read More
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="h-1 origin-left scale-x-0 bg-gradient-to-r from-[#000080] to-[#0000FF] transition-transform duration-500 group-hover:scale-x-100" />
    </article>
  );
}
