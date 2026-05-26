import type { Metadata } from "next";

import AllCases from "@/components/screens/weserve/AllCases";
import { caseStudies } from "@/utils/constants";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | ClaimScope Consulting",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${caseStudy.title} Case Study | ClaimScope Consulting`,
    description: `Full documentation governance transformation for ${caseStudy.title}: before, after, and scenario summary.`,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;

  return <AllCases slug={slug} />;
}
