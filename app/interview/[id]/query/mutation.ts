import { useMutation } from "@tanstack/react-query";

export const useGetFeedback = () => {
  return useMutation({
    mutationKey: ["getFeedback"],
    mutationFn: async (payload) => {
      const url = `/api/ai-feedback`;
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const result = await response?.json();
      const content = result?.data?.content
        ?.replace("```json", "")
        ?.replace("```", "");
      // const filteredContent = content?.replace("")
      return content;
    },
  });
};
