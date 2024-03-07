import { useMutation } from "@tanstack/react-query";
import { putNickname } from "@/fetcher";

const useChangeNickname = () => {
  return useMutation({
    mutationFn: putNickname,
  });
};

export default useChangeNickname;
