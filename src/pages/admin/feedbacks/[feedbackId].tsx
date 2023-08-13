import React, { useEffect } from "react";
import getConfig from "next/config";
import FeedbackTable from "@/components/feedbacks/FeedbackTable";

const Feedback = () => {


  return (
    <div className="mt-4">
      {/* title */}
      <div className="flex flex-row mb-5 justify-between">
        <div className=" text-2xl font-medium text-gray-700">Feedbacks</div>

        <div className="flex flex-row justify-between gap-2"></div>
      </div>

      <FeedbackTable />
    </div>
  );
};

export default Feedback;
