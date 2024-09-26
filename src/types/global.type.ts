import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export type TError = {
  data: {
    success: boolean;
    statusCode: number;
    message: string;
  };
  status: number;
};

export type TDataResponse = {
  data: {
    success: boolean;
    statusCode: number;
    message: string;
  };
  status: number;
};

export type TErrorResponse = TError & FetchBaseQueryError;
