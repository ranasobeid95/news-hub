import { HttpClientParams, ResponseBody } from "@/types/api";

export async function http({
  method,
  body,
  json = true,
  api_key = "",
  url,
  headers = {},
}: HttpClientParams): Promise<any> {
  try {
    const resp = await fetch(`${url}`, {
      method: method || "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${api_key}`,
      },
      body: body ? JSON.stringify(body) : null,
      cache: "no-store",
    });

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    return resp.json();
  } catch (error) {
    console.error("Error in HTTP request:", error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}
