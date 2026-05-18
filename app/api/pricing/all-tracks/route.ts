import { API_URL } from "@/utils/config";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(`${API_URL}pricing/all-tracks`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return Response.json(
        {
          error: "Failed to fetch pricing tracks",
          status: response.status,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Pricing route handler error:", error);

    return Response.json(
      { error: "Unable to fetch pricing tracks" },
      { status: 500 }
    );
  }
}
