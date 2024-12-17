import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApi = createApi({
  reducerPath: "rtkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (builder) => ({
    getFotos: builder.query({
      query: (query) => `fotos?${query}`,
      transformResponse: (response) => ({
        fotos: response.data,
        totalItems: response.items,
      }),
    }),
    getNews: builder.query({
      query: () => `news`,
    }),
    getCurrentNews: builder.query({
      query: (query) => `news?&${query}`,
    }),
  }),
});

export const { useGetFotosQuery, useGetNewsQuery, useGetCurrentNewsQuery } = rtkApi;
