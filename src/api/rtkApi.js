import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApi = createApi({
  reducerPath: "rtkApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  tagTypes: ['reviews'],

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

    getReviews: builder.query({
      query: (query) => `reviews?&${query}`,
      providesTags: ['reviews']
    }),

    

    addReview:builder.mutation(
      {
        query: body => (
          {
            method: 'POST',
            url: "http://localhost:3001/reviews/",
            body
          }
        ),
        invalidatesTags: ['reviews']
      }
    )
  }),
});

export const { useGetFotosQuery, useGetNewsQuery, useGetCurrentNewsQuery, useGetReviewsQuery, useAddReviewMutation } = rtkApi;
