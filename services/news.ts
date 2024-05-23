import { ROUTES, apiEndPoints } from "@/constants/routes";
import { http } from "./api";
import { NewsArticle } from "@/types/news";

export async function getAllNews(): Promise<NewsArticle[]> {
  const resp: any = await http({
    url: `${apiEndPoints.ALL_NEWS}gaza`,
    method: "GET",
    api_key: process.env.NEWS_API_KEY,
  });

  return resp;
}
export async function getCountryNews(country: string): Promise<any> {
  const resp: any = await http({
    url: `apiEndPoints.NEWS_SELECTED_COUNTRY${country}`,
    method: "GET",
    api_key: process.env.NEWS_API_KEY,
  });

  return resp;
}

//Remove
// export async function addApartment(body: any): Promise<any> {
//   const resp: any = await http({
//     url: ROUTES.APARTMENTS,
//     method: "POST",
//     body,
//   });
//   if (resp.status === 1 && resp.data) {
//     return resp;
//   }
//   return resp;
// }

// export async function getApartmentByID(id: string): Promise<any> {
//   const resp: any = await http({
//     url: `${ROUTES.APARTMENTS}/${id}`,
//     method: "GET",
//   });
//   if (resp.status === 1 && resp.data) {
//     return resp;
//   }
//   return resp;
// }
