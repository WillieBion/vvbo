import { NextRouter } from "next/router";

export interface Question {
  text: string;
  options: string[];
  selectedOption: number;
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

export type DistributionMethod = "Email" | "WhatsApp" | "USSD";

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