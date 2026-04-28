import Blogs from "@/components/screens/insights/Blogs";
import { getPublishedBlogs } from "@/utils/blogs";

export const metadata = {
  title: "Insights | ClaimScope Consulting",
  description:
    "Insights and best practices on documentation governance, operational documentation clarity, and documentation readiness.",
};

export default async function BlogPage() {
  const blogs = await getPublishedBlogs();
  return <Blogs initialBlogs={blogs} />;
}
