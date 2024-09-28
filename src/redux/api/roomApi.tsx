import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const roomApi = createApi({
  reducerPath: "roomApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
    prepareHeaders: (headers, { getState, endpoint }) => {
      if (endpoint !== "getAllRoom") {
        const token = (getState() as RootState).auth.token;
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        headers.set("Content-Type", "application/json");
      }
      return headers;
    },
  }),
  tagTypes: ["Room"],
  endpoints: (builder) => ({
    getAllRoom: builder.query({
      query: () => ({
        url: "/rooms",
        method: "GET",
      }),
      providesTags: ["Room"],
    }),
    addNewRoom: builder.mutation({
      query: (data) => ({
        url: "/rooms",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Room"],
    }),
    deleteRoom: builder.mutation({
      query: (id) => ({
        url: `/rooms/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Room"],
    }),
  }),
});

export const {
  useAddNewRoomMutation,
  useGetAllRoomQuery,
  useDeleteRoomMutation,
} = roomApi;
