import { useSuspenseQuery } from "@tanstack/react-query";
import { getCategory } from "@/fetcher";

const useGetCategory = () => {
  // SuspenseQuery 사용 시에는
  return useSuspenseQuery({
    queryFn: getCategory,
    queryKey: ["get-category"],
    // NOTE: 카테고리가
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetCategory;
