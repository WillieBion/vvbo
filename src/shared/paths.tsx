export const ROUTES = {
  HOME: "/",
  SURVEYS: "admin/surveys",
  FEEDBACKS: "admin/feedbacks"
} as const;

type ObjectValues<T> = T[keyof T];

export type Route = ObjectValues<typeof ROUTES>;
