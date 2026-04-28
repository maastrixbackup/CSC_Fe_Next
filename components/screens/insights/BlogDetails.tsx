import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, FolderOpen, User } from "lucide-react";

import type { BlogPost } from "@/utils/blogs";
import { formatBlogDate } from "@/utils/blogs";

type BlogDetailsProps = {
  blog: BlogPost;
  relatedBlogs: BlogPost[];
};

function formatBlogContent(content?: string | null) {
  if (!content) return "";

  let html = content
    .replace(/<p><strong>\s*<\/strong><\/p>/gi, "")
    .replace(/<p>\s*<\/p>/gi, "")
    .replace(/color\s*:\s*[^;"]+;?/gi, "")
    .replace(/opacity\s*:\s*[^;"]+;?/gi, "");

  html = html.replace(/((?:<p>(?:•|â€¢)\s*[\s\S]*?<\/p>)+)/g, (match) => {
    const items = Array.from(
      match.matchAll(/<p>(?:•|â€¢)\s*([\s\S]*?)<\/p>/g),
    )
      .map((item) => item[1].trim())
      .filter(Boolean);

    if (!items.length) return match;

    return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  });

  return html;
}

export default function BlogDetails(props: BlogDetailsProps) {
  const { blog } = props;
  const imageUrl = blog.featured_image_path || "/assets/blog1.jpg";
  const articleHtml = formatBlogContent(blog.content);

  const complianceFooter = `ClaimScope Consulting provides documentation readiness consulting only.
We do not provide claim negotiation, representation, advocacy, legal advice,
application preparation, submission assistance, intermediary services, or
third-party communications.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 px-6 py-12 transition-colors">
      <div className="mx-auto mt-20 max-w-6xl">
        <Link
          href="/blog"
          className="group mb-8 inline-flex items-center gap-2 border-2 border-blue-600 p-2 text-gray-600 transition-colors hover:text-blue-600"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Insights</span>
        </Link>

        <div className="mb-8">
          {blog.category ? (
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                <FolderOpen className="h-4 w-4" />
                {blog.category}
              </span>
            </div>
          ) : null}

          <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            {blog.title}
          </h1>

          <div className="mb-8 flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{blog.author_name || "ClaimScope Consulting"}</span>
            </div>
            {blog.blog_date || blog.created_at ? (
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatBlogDate(blog.blog_date || blog.created_at)}</span>
              </div>
            ) : null}
          </div>

          <div className="mb-10 flex justify-center overflow-hidden ">
            <Image
              src={imageUrl}
              alt={blog.title}
              width={800}
              height={450}
              sizes="(max-width: 900px) 100vw, 800px"
              className="h-auto w-full max-w-[800px] rounded-sm object-cover"
            />
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: articleHtml }}
          />
        </div>

          <div className="mt-16 text-center border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {complianceFooter}
          </p>
        </div>
      </div>
    </div>
  );
}
