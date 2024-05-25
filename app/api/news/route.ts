// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

// Define your API key
const apiKey = process.env.NEWS_API_KEY;

export async function GET(request: NextRequest) {
  // Check if it's a preflight request and handle it
  if (request.method === "OPTIONS") {
    return NextResponse.next({
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Authorization",
      },
    });
  }

  const { searchParams } = new URL(request.url);
  const apiUrl = searchParams.get("apiUrl");

  if (!apiUrl) {
    return NextResponse.json(
      { error: "Missing apiUrl query parameter" },
      { status: 400 }
    );
  }

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return NextResponse.json({ data: response.data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.response?.status || 500 }
    );
  }
}
