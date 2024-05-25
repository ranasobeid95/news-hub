import { NextRequest } from "next/server";
import { GET } from "@/app/api/news/route";
import { apiEndPoints } from "@/constants/routes";
import { NewsArticle } from "@/types/news";

async function callInternalApi(apiUrl: string) {
  const fullUrl = new URL("https://news-hub-beige.vercel.app/");
  fullUrl.searchParams.set("apiUrl", apiUrl);

  const request = new NextRequest(fullUrl.toString());

  const response = await GET(request);
  const json = await response.json();

  if (response.ok) {
    return json.data.articles;
  } else {
    throw new Error(json.error || "An error occurred while fetching the data");
  }
}

export async function getAllNews(q: string): Promise<NewsArticle[]> {
  const apiUrl = `${apiEndPoints.ALL_NEWS}${q}`;
  return await callInternalApi(apiUrl);
}

export async function getCountryNews(country: string): Promise<NewsArticle[]> {
  const apiUrl = `${apiEndPoints.NEWS_SELECTED_COUNTRY}${country}`;
  return await callInternalApi(apiUrl);
}
