import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const slotApi = createApi({
  reducerPath: "slotApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    prepareHeaders: (headers, { getState, endpoint }) => {
      if (endpoint !== "getAllSlot") {
        const token = (getState() as RootState).auth.token;
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        headers.set("Content-Type", "application/json");
      }
      return headers;
    },
  }),
  tagTypes: ["Slot"],
  endpoints: (builder) => ({
    createSlot: builder.mutation({
      query: (data) => ({
        url: "/slots",
        method: "POST",
        body: data,
      }),
    }),
    getAllSlot: builder.query({
      query: () => ({
        url: "/slots/availability",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateSlotMutation, useGetAllSlotQuery } = slotApi;
