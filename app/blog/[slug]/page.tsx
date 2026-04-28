import { notFound } from "next/navigation";

import BlogDetails from "@/components/screens/insights/BlogDetails";
import { getBlogBySlug, getPublishedBlogs } from "@/utils/blogs";

export async function generateMetadata(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Insight Not Found | ClaimScope Consulting",
      description: "The requested insight could not be found.",
    };
  }

  const title = blog.meta_title || blog.title;
  const description = blog.meta_description || blog.short_description || "";
  const image = blog.featured_image_path || "https://claimscopeconsulting.com/og-image.png";
  const url = `https://claimscopeconsulting.com/blog/${blog.slug}`;

  return {
    title,
    description,
    keywords: blog.meta_keywords || "",
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogDetailPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const blog = await getBlogBySlug(slug);

  if (!blog) notFound();

  const allBlogs = await getPublishedBlogs();
  const relatedBlogs = allBlogs
    .filter((item) => item.slug !== blog.slug)
    .filter((item) =>
      blog.category ? item.category?.trim() === blog.category.trim() : true,
    )
    .slice(0, 3);

  return <BlogDetails blog={blog} relatedBlogs={relatedBlogs} />;
}
