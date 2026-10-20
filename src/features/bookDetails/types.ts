type OpenLibraryText = string | { type: string; value: string };

export type WorkResponse = {
  key: string;
  title: string;
  description?: OpenLibraryText;
  subjects?: string[];
  covers?: number[];
  first_publish_date?: string;
};

export type WorkDetails = {
  key: string;
  title: string;
  description?: string;
  subjects: string[];
  coverId?: number;
  firstPublishDate?: string;
};
