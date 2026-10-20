import { StyleSheet, View } from "react-native";

import { Text } from "@ui";
import spacing from "@src/ui/tokens/spacing";

import type { BookSearchDoc } from "../types";

type SearchResultsProps = {
  query: string;
  books?: BookSearchDoc[];
  isFetching: boolean;
  isError: boolean;
};

const SearchResults = ({ query, books, isFetching, isError }: SearchResultsProps) => {
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
      {books.map((book) => (
        <View key={book.key}>
          <Text weight="bold">{book.title}</Text>
          {book.author_name && <Text size="sm">{book.author_name.join(", ")}</Text>}
        </View>
      ))}
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  list: {
    gap: spacing.md,
  },
});
