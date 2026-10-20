import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Input, PageWrapper } from "@ui";
import { RootStackNavigationProp } from "@src/app/navigation/types";
import useDebouncedValue from "@src/shared/hooks/useDebouncedValue";
import spacing from "@src/ui/tokens/spacing";

import { useSearchBooksInfiniteQuery } from "../api/searchApi";
import SearchResults from "../components/SearchResults";
import type { BookSearchDoc } from "../types";

const SEARCH_DEBOUNCE_MS = 400;
const MIN_QUERY_LENGTH = 3;

const SearchScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query.trim(), SEARCH_DEBOUNCE_MS);
  const searchQuery = debouncedQuery.length >= MIN_QUERY_LENGTH ? debouncedQuery : "";

  const { data, isFetching, isFetchingNextPage, isError, hasNextPage, fetchNextPage } =
    useSearchBooksInfiniteQuery({ query: searchQuery }, { skip: !searchQuery });

  const books = data?.pages.flatMap((page) => page.docs) ?? [];
  const totalCount = data?.pages[0]?.numFound ?? 0;

  const handleBookPress = (book: BookSearchDoc) => {
    navigation.navigate("BookDetails", { title: book.title });
  };

  const handleEndReached = () => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  };

  return (
    <PageWrapper headerProps={{ title: "Dashboard" }}>
      <View style={styles.container}>
        <Input
          placeholder="Search book titles"
          value={query}
          onChangeText={setQuery}
          onClear={() => setQuery("")}
        />
        <SearchResults
          query={searchQuery}
          books={books}
          totalCount={totalCount}
          isLoading={isFetching && !isFetchingNextPage}
          isLoadingMore={isFetchingNextPage}
          isError={isError}
          onBookPress={handleBookPress}
          onEndReached={handleEndReached}
        />
      </View>
    </PageWrapper>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.md,
  },
});
