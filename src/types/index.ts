import { NextRouter } from "next/router";

export interface Question {
  text: string;
  options: string[];
  selectedOption: number;
}

export type DistributionMethod = "Email" | "WhatsApp" | "USSD";

export interface CurrentFeedback {
  respondentId: number;
  title: string;
  dateOfCreation: string;
  distributionMethod: DistributionMethod;
  privacy: string;
  questions: Question[];
  answers: number[];
}

export type Survey = {
  title: string;
  dateOfCreation: string;
  category: string;
  targetAudience: string;
  distributionMethod: DistributionMethod;
  expirationDate: string;
  privacy: string;
  questions: Question[];
};



export interface IconMapping {
  [key: string]: () => JSX.Element;
}

export interface CardSurvey {
  data: Survey;
  index: number;
  router: NextRouter;
}

export interface Feedback {
  data: Survey;
  index: number;
  router: NextRouter;
}

export interface Feedbacks {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  responses: {
    surveyId: string;
    answers: number[]; // Indexes of selected options
  }[];
}

export interface StatusColorMap {
  [key: string]: "success" | "danger" | "warning";
}
