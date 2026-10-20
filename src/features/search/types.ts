export type BookSearchDoc = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
  edition_count?: number;
};

export type SearchBooksResponse = {
  numFound: number;
  start: number;
  docs: BookSearchDoc[];
};

export type SearchBooksParams = {
  query: string;
  page?: number;
  limit?: number;
};
