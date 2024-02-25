import { useQuery } from "@tanstack/react-query";

const useNickName = () => {
  return useQuery({
    queryFn: () => {},
    queryKey: [],
  });
};

export default useNickName;
