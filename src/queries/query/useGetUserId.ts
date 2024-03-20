import { useQuery } from "@tanstack/react-query";
import { getUserId } from "@/fetcher";
import { GET_USER_ID } from "@/queries/keys";

const useGetUserId = () => {
  return useQuery({
    queryFn: getUserId,
    queryKey: [GET_USER_ID],
  });
};

export default useGetUserId;
