import { useSuspenseQuery } from "@tanstack/react-query";
import { getCategory } from "@/fetcher";
import { GET_CATEGORY_QUERY_KEY } from "@/queries/keys";

// NOTE: SuspenseQuery vs UseQuery
const useGetCategory = () => {
  // SuspenseQuery 사용 시에는
  return useSuspenseQuery({
    queryFn: getCategory,
    queryKey: [GET_CATEGORY_QUERY_KEY],
    // NOTE: 카테고리가
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetCategory;
