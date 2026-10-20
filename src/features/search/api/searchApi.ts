import { baseApi } from "@src/app/store/baseApi";

import type { SearchBooksParams, SearchBooksResponse } from "../types";

const RETURNED_FIELDS = ["key", "title", "author_name", "first_publish_year", "cover_i", "edition_count"].join(",");
const DEFAULT_PAGE_SIZE = 10;

export const searchApi = baseApi.injectEndpoints({
  overrideExisting: __DEV__, // Fast refresh re-runs this file against the same baseApi instance.
  endpoints: (build) => ({
    searchBooks: build.query<SearchBooksResponse, SearchBooksParams>({
      query: ({ query, page = 1, limit = DEFAULT_PAGE_SIZE }) => ({
        url: "/search.json",
        params: { title: query.trim(), page, limit, fields: RETURNED_FIELDS },
      }),
    }),
  }),
});

export const { useSearchBooksQuery, useLazySearchBooksQuery } = searchApi;
