import { getAllNews } from "@/services/news";
import { useQuery } from "@tanstack/react-query";

const useAllNews = (searchValue: string) => {
  return useQuery({
    queryKey: ["allNews", searchValue],
    queryFn: async () => {
      const data = await getAllNews(searchValue);
      return data.filter((news) => {
        if (
          !news.title.includes("Removed") &&
          news.author &&
          news.description &&
          news.urlToImage
        )
          return news;
      });
    },
  });
};

export default useAllNews;
