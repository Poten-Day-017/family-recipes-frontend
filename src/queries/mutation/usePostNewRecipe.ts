import { useMutation } from "@tanstack/react-query";
import { createNewRecipe } from "@/fetcher";

const usePostNewRecipe = () => {
  return useMutation({
    mutationFn: createNewRecipe,
  });
};

export default usePostNewRecipe;
