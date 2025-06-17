import { useMutation } from "@tanstack/react-query";

type useGetQuestionsPayload = {
  jobPosition: string;
  jobDescription: string;
  type: string | string[] | [];
  duration: string;
};

export const useGetQuestions = () => {
  return useMutation({
    mutationKey: ["getQuestions"],
    mutationFn: async (payload: useGetQuestionsPayload) => {
      const response = await fetch("/api/ai-model", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response?.json();
      const finalRes = result?.data?.replace("```json", "")?.replace("```", "");
      return finalRes;
    },
  });
};

export const useCreateInterview = () => {
  return useMutation({
    mutationFn: async (payload: {
      jobPosition: string;
      jobDescription: string;
      type: string | string[] | [];
      duration: string;
      interviewQuestions: [] | { question: string; type: string };
      interviewId: string;
      email: string | null;
    }) => {
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
