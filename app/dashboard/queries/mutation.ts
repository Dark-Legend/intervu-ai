import { useMutation } from "@tanstack/react-query";

export const useGetQuestions = () => {
  return useMutation({
    mutationKey: ["getQuestions"],
    mutationFn: async (payload) => {
      const response = await fetch("/api/ai-model", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response?.json();
      const finalRes = result?.data?.replace("```json", "")?.replace("```", "");
      console.log(finalRes, "RES");
      return finalRes;
    },
  });
};

export const useCreateInterview = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await fetch("/api/create-interview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response?.json();
      return result;
    },
  });
};
