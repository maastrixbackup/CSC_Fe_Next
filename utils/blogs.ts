import { cache } from "react";

import { API_URL } from "@/utils/config";

export type BlogPost = {
  id: number;
  category?: string | null;
  title: string;
  slug: string;
  short_description?: string | null;
  content?: string | null;
  author_name?: string | null;
  blog_date?: string | null;
  featured_image?: string | null;
  meta_title?: string | null;
  meta_keywords?: string | null;
  meta_description?: string | null;
  status?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  featured_image_path?: string | null;
  read_time?: number | null;
};

type BlogResponse = {
  success?: boolean;
  data?: BlogPost[];
};

export const getPublishedBlogs = cache(async (): Promise<BlogPost[]> => {
  const response = await fetch(`${API_URL}cms/getPublishedBlogs`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch published blogs");
  }

  const result = (await response.json()) as BlogResponse;
  const rows = Array.isArray(result.data) ? result.data : [];

  return rows.filter((blog) => String(blog.status ?? 1) === "1");
});

export const getBlogBySlug = cache(async (slug: string) => {
  const blogs = await getPublishedBlogs();
  return blogs.find((blog) => blog.slug === slug) ?? null;
});

export function formatBlogDate(dateString?: string | null) {
  if (!dateString) return "";

  return new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
