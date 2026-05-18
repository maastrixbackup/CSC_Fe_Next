import { API_URL } from "@/utils/config";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(`${API_URL}cms/getCategoryFaq`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return Response.json(
        {
          error: "Failed to fetch FAQs",
          status: response.status,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("FAQ route handler error:", error);

    return Response.json(
      { error: "Unable to fetch FAQs" },
      { status: 500 }
    );
  }
}
