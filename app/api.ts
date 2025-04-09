import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type ResultResponse } from './api/result/route'
import { type LogDataRequest } from './api/log-data/route'

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (build) => ({
    logData: build.mutation<void, LogDataRequest>({
      query: (body) => ({
        url: '/log-data',
        method: 'POST',
        body,
      }),
    }),
    result: build.query<ResultResponse, void>({
      query: () => '/result',
    }),
  }),
})

export default api
