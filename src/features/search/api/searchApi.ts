import { baseApi } from "@src/app/store/baseApi";

import type { SearchBooksParams, SearchBooksResponse } from "../types";

const RETURNED_FIELDS = ["key", "title", "author_name", "first_publish_year", "cover_i", "edition_count"].join(",");
const PAGE_SIZE = 10;

export const searchApi = baseApi.injectEndpoints({
  overrideExisting: __DEV__, // Fast refresh re-runs this file against the same baseApi instance.
  endpoints: (build) => ({
    searchBooks: build.infiniteQuery<SearchBooksResponse, SearchBooksParams, number>({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
          const loadedCount = allPages.reduce((count, page) => count + page.docs.length, 0);
          const hasMore = lastPage.docs.length === PAGE_SIZE && loadedCount < lastPage.numFound;
          return hasMore ? lastPageParam + 1 : undefined;
        },
      },
      query: ({ queryArg, pageParam }) => ({
        url: "/search.json",
        params: { title: queryArg.query.trim(), page: pageParam, limit: PAGE_SIZE, fields: RETURNED_FIELDS },
      }),
    }),
  }),
});

export const { useSearchBooksInfiniteQuery } = searchApi;
