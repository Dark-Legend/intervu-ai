import React from "react";
import { format } from "date-fns";
import CandidateDetailDrawer from "../candidate-detail-drawer/CandidateDetailDrawer";

type CandidateDetailList = {
  "interview-feedback": {
    user_name: string;
    user_email: string;
    created_at: Date;
    feedback: {
      feedback: {
        rating: {
          experience: number;
          communication: number;
          problemSolving: number;
          technicalSkills: number;
        };
        summary: string;
        Recommendation: string;
        RecommendationMsg: string;
      };
    };
  }[];
};

type CandidateDetailProp = {
  candidateList: CandidateDetailList[] | [];
};

const CandidateDetail: React.FC<CandidateDetailProp> = ({ candidateList }) => {
  return (
    <section className="flex flex-col gap-5 w-full">
      <h1 className="font-bold">
        Candidate ({candidateList?.[0]?.["interview-feedback"]?.length})
      </h1>
      <section className="flex flex-col gap-2">
        {candidateList?.[0]?.["interview-feedback"]?.map((interview, i) => (
          <section
            key={i}
            className="border border-solid border-gray-200 rounded-lg w-full flex justify-between items-center p-2"
          >
            <div className="flex justify-between items-center">
              <section className="flex items-center gap-3">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-emerald-600 text-white">
                  {interview?.user_name?.[0]}
                </div>
                <div className="flex flex-col">
                  <h1 className="text-base">{interview?.user_name}</h1>
                  <p className="text-base">
                    {format(interview?.created_at, "MMMM dd,yyyy")}
                  </p>
                </div>
              </section>
            </div>
            <section>
              <CandidateDetailDrawer candidateDetail={interview} />
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

export default CandidateDetail;
