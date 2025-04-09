import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (build) => ({
    getLogData: build.mutation<void, string>({
      query: (data) => ({
        url: '/log-data',
        method: 'POST',
        body: { data },
      }),
    }),
    result: build.query<string[], void>({
      query: () => '/result',
    }),
  }),
})

export default api
