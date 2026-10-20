import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const OPEN_LIBRARY_BASE_URL = "https://openlibrary.org";

// Features add their endpoints via `baseApi.injectEndpoints`.
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: OPEN_LIBRARY_BASE_URL }),
  endpoints: () => ({}),
});
