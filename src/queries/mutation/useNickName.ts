import { useMutation } from "@tanstack/react-query";
import { putNickname } from "@/fetcher";

const useNickName = () => {
  return useMutation({
    mutationFn: putNickname,
  });
};

export default useNickName;
