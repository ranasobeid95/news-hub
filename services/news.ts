import { ROUTES } from "@/constants/routes";
import { http } from "./api";
import { INews } from "@/types/news";

export async function getAllNews(): Promise<any> {
  const resp: any = await http({
    url: ROUTES.ALL_NEWS,
    method: "GET",
  });

  if (resp.status === 1 && resp.data) {
    return resp;
  }
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
