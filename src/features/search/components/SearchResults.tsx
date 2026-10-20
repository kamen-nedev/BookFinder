import { memo, useCallback } from "react";
import { ActivityIndicator, FlatList, type ListRenderItemInfo, StyleSheet } from "react-native";

import { Text } from "@ui";
import colors from "@src/ui/tokens/colors";
import spacing from "@src/ui/tokens/spacing";

import type { BookSearchDoc } from "../types";
import BookCard from "./BookCard";

type SearchResultsProps = {
  query: string;
  books: BookSearchDoc[];
  totalCount: number;
  isLoading: boolean;
  isLoadingMore: boolean;
  isError: boolean;
  onBookPress: (book: BookSearchDoc) => void;
  onEndReached: () => void;
};

const keyExtractor = (book: BookSearchDoc) => book.key;

const SearchResults = ({
  query,
  books,
  totalCount,
  isLoading,
  isLoadingMore,
  isError,
  onBookPress,
  onEndReached,
}: SearchResultsProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<BookSearchDoc>) => <BookCard book={item} onPress={onBookPress} />,
    [onBookPress],
  );

  if (!query) {
    return null;
  }

  if (isLoading) {
    return <ActivityIndicator color={colors.text} style={styles.footer} />;
  }

  if (isError && !books.length) {
    return <Text>Something went wrong. Check your connection and try again.</Text>;
  }

  if (!books.length) {
    return <Text>No books found for "{query}".</Text>;
  }

  const renderFooter = () => {
    if (isLoadingMore) {
      return <ActivityIndicator color={colors.text} style={styles.footer} />;
    }
    if (isError) {
      return <Text style={styles.footer}>Couldn't load more results. Scroll to try again.</Text>;
    }
    return <Text style={styles.footer}>No more results.</Text>;
  };

  return (
    <FlatList
      data={books}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ListHeaderComponent={
        <Text size="lg" weight="bold">
          {totalCount.toLocaleString()} {totalCount === 1 ? "Result" : "Results"} found
        </Text>
      }
      ListFooterComponent={renderFooter()}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      contentContainerStyle={styles.list}
    />
  );
};

export default memo(SearchResults);

const styles = StyleSheet.create({
  list: {
    gap: spacing.sm,
  },
  footer: {
    paddingVertical: spacing.md,
    textAlign: "center",
  },
});
