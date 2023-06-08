import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// This sets up Redux Toolkit Query API slice with the base URL taken from environment variables. 
// It includes one endpoint, 'getKPIs', which sends a GET request to 'kpi/kpis/' and provides the 'Kpis' tag. 
// This tag can be used to trigger automatic refetching of this query when an action invalidates the 'Kpis' tag.

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  reducerPath: 'main',
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    getKPIs: build.query<void, void>({
      query: () => 'kpi/kpis/',
      providesTags: ['Kpis'],
    })
  })
})

export const { useGetKPIsQuery } = api;
