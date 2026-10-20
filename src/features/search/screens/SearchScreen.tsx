import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button, Input, PageWrapper } from "@ui";
import { RootStackNavigationProp } from "@src/app/navigation/types";
import useDebouncedValue from "@src/shared/hooks/useDebouncedValue";
import spacing from "@src/ui/tokens/spacing";

import { useSearchBooksQuery } from "../api/searchApi";
import SearchResults from "../components/SearchResults";

const SEARCH_DEBOUNCE_MS = 400;
const MIN_QUERY_LENGTH = 3;

const SearchScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query.trim(), SEARCH_DEBOUNCE_MS);
  const searchQuery = debouncedQuery.length >= MIN_QUERY_LENGTH ? debouncedQuery : "";

  const { data, isFetching, isError } = useSearchBooksQuery(
    { query: searchQuery },
    { skip: !searchQuery },
  );

  const handleSeeBookDetails = () => {
    navigation.navigate("BookDetails", { title: "The Great Gatsby" });
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
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
        >
          <SearchResults
            query={searchQuery}
            books={data?.docs}
            isFetching={isFetching}
            isError={isError}
          />
          <Button text="Go to Book Details" onPress={handleSeeBookDetails} />
        </ScrollView>
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
  scroll: {
    flex: 1,
  },
  content: {
    gap: spacing.md,
  },
});
