import { setDashboardStore } from "@/app/dashboard/store";
import { useQuery } from "@tanstack/react-query";

export const useGetInterview = (id: string) => {
  return useQuery({
    queryKey: ["getInterview", id],
    queryFn: async () => {
      const URL = `/api/get-interview?interview_id=${id}`;
      const response = await fetch(URL, {
        method: "GET",
      });
      const result = await response.json();
      return result?.data;
    },
    select: (data) => {
      setDashboardStore((state) => ({
        ...state,
        interviewInfo: data?.[0],
      }));
      return data;
    },
    enabled: Boolean(id),
  });
};
