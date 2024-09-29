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

export type TUser = {
  address: string;
  createdAt: string;
  email: string;
  name: string;
  phone: string;
  role: "user" | "admin";
  updatedAt: string;
  _id: string;
};

export type TSlot = {
  _id: string;
  room: TRoom;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TRoom = {
  _id: string;
  name: string;
  image: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TSlotQuery = {
  roomId: string;
  date: string;
  startTime: string;
  endTime: string;
};
