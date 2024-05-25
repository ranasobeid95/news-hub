import { NextResponse } from "next/server";
import axios from "axios";

const apiKey = process.env.NEWS_API_KEY;

export async function GET(apiUrl: string) {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response.data;
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.response?.status || 500 }
    );
  }
}
