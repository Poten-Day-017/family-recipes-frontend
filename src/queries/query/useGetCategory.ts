import { getCategory } from "@/fetcher";
import { GET_CATEGORY_QUERY_KEY } from "@/queries/keys";
import { useQuery } from "@tanstack/react-query";

// NOTE: SuspenseQuery vs UseQuery
const useGetCategory = () => {
  return useQuery({
    queryFn: getCategory,
    queryKey: [GET_CATEGORY_QUERY_KEY],
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

export default useGetCategory;
