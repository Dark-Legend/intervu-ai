import { useQuery } from "@tanstack/react-query";

export const useGetPreviousInterviews = (email: string) => {
  return useQuery({
    queryKey: ["getPreviousInteviews"],
    queryFn: async () => {
      const url = `/api/get-all-interview?email=${email}`;
      const response = await fetch(url, {
        method: "GET",
      });
      const result = await response?.json();
      return result || [];
    },
    enabled: Boolean(email),
  });
};
