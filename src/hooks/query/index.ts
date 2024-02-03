import { useSuspenseQuery } from "@tanstack/react-query";
import { getCategory } from "@/fetcher";

const useGetCategory = () => {
  // SuspenseQuery 사용 시에는
  return useSuspenseQuery({
    queryFn: getCategory,
    queryKey: ["get-category"],
  });
};

export default useGetCategory;
