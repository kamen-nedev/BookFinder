type CoverSize = "S" | "M" | "L";

export const getCoverUrl = (coverId: number, size: CoverSize = "M") =>
  `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`;
