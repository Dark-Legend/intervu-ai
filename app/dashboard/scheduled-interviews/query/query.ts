import { useQuery } from "@tanstack/react-query";

export const useGetScheduledInterviews = (email: string) => {
  return useQuery({
    queryKey: ["getScheduledInterviews", email],
    queryFn: async () => {
      const url = `/api/scheduled-interviews?email=${email}`;
      const response = await fetch(url, {
        method: "GET",
      });
      const result = await response?.json();
      console.log(result);
      return result;
    },
    enabled: Boolean(email),
  });
};

export const useGetScheduledInterviewDetail = (
  email: string,
  interviewId: string
) => {
  return useQuery({
    queryKey: ["getScheduledInterviewDetail", email, interviewId],
    queryFn: async () => {
      const url = `/api/scheduled-detail?email=${email}&interview_id=${interviewId}`;
      const response = await fetch(url, {
        method: "GET",
      });
      const result = await response?.json();
      return result;
    },
    select: (data) => data?.data,
    enabled: Boolean(email && interviewId),
  });
};
