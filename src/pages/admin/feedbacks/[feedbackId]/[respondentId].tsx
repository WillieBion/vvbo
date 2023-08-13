import React, { useEffect } from "react";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { Feedbacks, Survey } from "@/types";
import { feedbackArray, surveysArray } from "@/util/data";
import { selectFeedback, selectSurvey, useAppSelector } from "@/redux";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

const TutorOverview = () => {
  const contextPath = getConfig().publicRuntimeConfig.contextPath;
  const router = useRouter();
  const { currentFeeedback } = useAppSelector(selectFeedback);

  console.log("MATCHED: ", currentFeeedback);

  return (
    <div className="mt-4">
      {/* title */}
      <div className="flex flex-row mb-5 justify-between">
        <div className=" text-2xl font-medium text-gray-700">RESPONDENT</div>

        <div className="flex flex-row justify-between gap-2"></div>
      </div>

      {/* cards */}
      <div>
        <h2>{currentFeeedback.title}</h2>
        <p>Date of Creation: {currentFeeedback.dateOfCreation}</p>
        <p>Distribution Method: {currentFeeedback.distributionMethod}</p>
        <p>Privacy: {currentFeeedback.privacy}</p>
        <ul>
          {currentFeeedback.questions.map((question, index) => (
            <li key={index}>
              <p>{question.text}</p>
              <form>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex} className="mb-1">
                    <label key={optionIndex}>
                      <input
                        type="radio"
                        className="mr-2"
                        name={`question-${index}`}
                        value={option}
                        checked={
                          question.selectedOption ===
                          currentFeeedback.answers[index]
                        }
                        readOnly
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </form>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TutorOverview;
