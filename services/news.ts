import { ROUTES, apiEndPoints } from "@/constants/routes";
import { NewsArticle } from "@/types/news";
import { GET } from "@/app/api/news/route";

export async function getAllNews(q: string): Promise<NewsArticle[]> {
  return await GET(`${apiEndPoints.ALL_NEWS}${q}`)
    .then((resp) => {
      return resp.json();
    })
    .then((res) => res.data.articles);
}
export async function getCountryNews(country: string): Promise<any> {
  const resp: any = await GET(`apiEndPoints.NEWS_SELECTED_COUNTRY${country}`)
    .then((resp) => {
      return resp.json();
    })
    .then((res) => res.data.articles);
}
