import { baseApi } from "@src/app/store/baseApi";

import type { WorkDetails, WorkResponse } from "../types";

const toWorkDetails = (work: WorkResponse): WorkDetails => {
  const description = typeof work.description === "string" ? work.description : work.description?.value;

  return {
    key: work.key,
    title: work.title,
    description: description?.replace(/\r\n/g, "\n").trim() || undefined,
    subjects: work.subjects ?? [],
    // Open Library uses -1 as a placeholder for missing covers.
    coverId: work.covers?.find((id) => id > 0),
    firstPublishDate: work.first_publish_date,
  };
};

export const bookDetailsApi = baseApi.injectEndpoints({
  overrideExisting: __DEV__, // Fast refresh re-runs this file against the same baseApi instance.
  endpoints: (build) => ({
    // `workKey` is the Open Library work key, e.g. "/works/OL45804W".
    getWork: build.query<WorkDetails, string>({
      query: (workKey) => `${workKey}.json`,
      transformResponse: toWorkDetails,
    }),
  }),
});

export const { useGetWorkQuery } = bookDetailsApi;
