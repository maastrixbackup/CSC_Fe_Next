import { API_URL } from "@/utils/config";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const response = await fetch(`${API_URL}intake/submit-intake`, {
      method: "POST",
      body: formData,
      cache: "no-store",
    });

    const contentType = response.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");
    const payload = isJson
      ? await response.json()
      : { message: await response.text() };

    if (!response.ok) {
      return Response.json(
        {
          error: "Failed to submit intake",
          message:
            typeof payload === "object" && payload && "message" in payload
              ? payload.message
              : "Unable to submit intake.",
          status: response.status,
        },
        { status: response.status }
      );
    }

    return Response.json(payload);
  } catch (error) {
    console.error("Intake submit route handler error:", error);

    return Response.json(
      { error: "Unable to submit intake", message: "Unable to submit intake." },
      { status: 500 }
    );
  }
}
