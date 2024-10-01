import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

interface IQuery {
  page?: number;
  sort?: string;
  price?: number[];
  capacity?: number[];
  keyword?: string;
  isFeatured?: boolean;
}

export const roomApi = createApi({
  reducerPath: "roomApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`,
    prepareHeaders: (headers, { getState, endpoint }) => {
      if (endpoint !== "getAllRoom" && endpoint !== "getRoom") {
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
      query: (query: IQuery) => {
        const {
          page = 1,
          keyword = "",
          price = [0, 100000],
          capacity = [0, 100000],
          isFeatured = false,
          sort = "",
        } = query;

        const queryParams = new URLSearchParams({
          "pricePerSlot[gte]": price[0].toString(),
          "pricePerSlot[lte]": price[1].toString(),
          "capacity[gte]": capacity[0].toString(),
          "capacity[lte]": capacity[1].toString(),
          searchTerm: keyword,
          page: page.toString(),
          sort:
            sort === "dsc"
              ? "pricePerSlot"
              : sort === "asc"
              ? "-pricePerSlot"
              : "",
        });

        if (isFeatured) {
          queryParams.append("limit", "4");
        } else {
          queryParams.append("limit", "6");
        }
        return {
          url: `/rooms?${queryParams.toString()}`,
          method: "GET",
        };
      },
      providesTags: ["Room"],
    }),
    getRoom: builder.query({
      query: (roomId) => ({
        url: `/rooms/${roomId}`,
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
    updateRoom: builder.mutation({
      query: ({ roomId, roomData }) => ({
        url: `/rooms/${roomId}`,
        method: "PUT",
        body: roomData,
      }),
      invalidatesTags: ["Room"],
    }),
  }),
});

export const {
  useAddNewRoomMutation,
  useGetAllRoomQuery,
  useDeleteRoomMutation,
  useUpdateRoomMutation,
  useGetRoomQuery,
} = roomApi;
