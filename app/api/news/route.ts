import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

const apiKey = process.env.NEWS_API_KEY;

export async function GET(request: NextRequest) {
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
