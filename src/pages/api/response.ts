export interface ResponseI<T = unknown> {
  status: number;
  message: T;
}

export const responseHandler = (statusCode: number, msg: unknown) => {
  return {
    statusCode,
    message: msg,
  };
};
