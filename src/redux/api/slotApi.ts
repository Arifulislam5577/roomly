import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TSlotQuery } from "../../types/global.type";
import { RootState } from "../store";

export const slotApi = createApi({
  reducerPath: "slotApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`,
    prepareHeaders: (headers, { getState, endpoint }) => {
      if (endpoint !== "getAllSlot" && endpoint !== "getSlotByRoomId") {
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
      invalidatesTags: ["Slot"],
    }),
    getAllSlot: builder.query({
      query: () => ({
        url: "/slots/availability",
        method: "GET",
      }),
      providesTags: ["Slot"],
    }),
    getSlotByRoomId: builder.query({
      query: (data: TSlotQuery) => {
        const { roomId, date, startTime, endTime } = data;

        let queryStr;
        if (date && startTime && endTime) {
          queryStr = `?date=${date}&startTime=${startTime}&endTime=${endTime}`;
        }

        return {
          url: queryStr ? `/slots/${roomId}${queryStr}` : `/slots/${roomId}`,
          method: "GET",
        };
      },
      providesTags: ["Slot"],
    }),
    deleteSlot: builder.mutation({
      query: (slotId) => ({
        url: `/slots/${slotId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Slot"],
    }),
    updateSlot: builder.mutation({
      query: ({ slotId, slotData }) => ({
        url: `/slots/${slotId}`,
        method: "PUT",
        body: slotData,
      }),
      invalidatesTags: ["Slot"],
    }),
  }),
});

export const {
  useCreateSlotMutation,
  useGetAllSlotQuery,
  useDeleteSlotMutation,
  useUpdateSlotMutation,
  useGetSlotByRoomIdQuery,
} = slotApi;
