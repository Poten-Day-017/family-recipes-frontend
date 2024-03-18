import { useMutation } from "@tanstack/react-query";
import { completeOnboard } from "@/fetcher";

const useCompleteOnboard = () => {
  return useMutation({
    mutationFn: completeOnboard,
  });
};

export default useCompleteOnboard;
