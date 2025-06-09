import { produce } from "immer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserData = {
  name: string | null;
  email: string | null;
  img: string | null;
};
type formData = {
  jobPosition: string;
  jobDescription: string;
  type: string[] | [];
  interviewQuestions:
    | {
        question: string;
        type: string;
      }
    | [];
  duration: string;
  interviewId: string;
};

type DashboardStoreType = {
  userData: UserData;
  formData: formData;
  step: number;
  interviewInfo: unknown;
};

const initialDashboardStore: DashboardStoreType = {
  userData: {
    name: null,
    img: null,
    email: null,
  },
  step: 1,
  formData: {
    jobPosition: "",
    jobDescription: "",
    type: [],
    interviewQuestions: [],
    duration: "",
    interviewId: "",
  },
  interviewInfo: null,
};

export const useDashboardStore = create<DashboardStoreType>()(
  persist(() => initialDashboardStore, {
    name: "dashboard-storage",
    partialize: (state) => ({ userData: state.userData }),
  })
);

export const setDashboardStore = (fn: (state: DashboardStoreType) => void) => {
  return useDashboardStore.setState(produce(fn));
};

export const resetDashboardStore = () => {
  useDashboardStore.setState(initialDashboardStore);
};
