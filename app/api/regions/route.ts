import { API_URL } from "@/utils/config";

export const dynamic = "force-dynamic";

export async function GET() {
  const endpoints = [`${API_URL}cms/region/`, `${API_URL}cms/region/all`];

  for (const url of endpoints) {
    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) {
        continue;
      }

      const data = await response.json();
      return Response.json(data);
    } catch {
      // Try the next endpoint.
    }
  }

  return Response.json(
    { error: "Unable to fetch regions" },
    { status: 500 }
  );
}
