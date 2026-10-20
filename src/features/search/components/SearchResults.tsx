import { StyleSheet, View } from "react-native";

import { Text } from "@ui";
import spacing from "@src/ui/tokens/spacing";

import type { BookSearchDoc } from "../types";
import BookCard from "./BookCard";

type SearchResultsProps = {
  query: string;
  books?: BookSearchDoc[];
  isFetching: boolean;
  isError: boolean;
  onBookPress: (book: BookSearchDoc) => void;
};

const SearchResults = ({ query, books, isFetching, isError, onBookPress }: SearchResultsProps) => {
  if (!query) {
    return null;
  }

  if (isFetching) {
    return <Text>Searching...</Text>;
  }

  if (isError) {
    return <Text>Something went wrong. Check your connection and try again.</Text>;
  }

  if (!books?.length) {
    return <Text>No books found for "{query}".</Text>;
  }

  return (
    <View style={styles.list}>
      <Text size="lg" weight="bold">Search Results:</Text>
      {books.map((book) => (
        <BookCard key={book.key} book={book} onPress={() => onBookPress(book)} />
      ))}
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  list: {
    gap: spacing.sm,
  },
});
