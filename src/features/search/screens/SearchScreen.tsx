import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Button, Input, PageWrapper, Text } from "@ui";
import { RootStackNavigationProp } from "@src/app/navigation/types";

const SearchScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [query, setQuery] = useState("");

  const handleSeeBookDetails = () => {
    navigation.navigate("BookDetails", { title: "The Great Gatsby" });
  };

  return (
    <PageWrapper shouldScroll headerProps={{ title: "Dashboard" }}>
      <Input
        placeholder="Search book titles"
        value={query}
        onChangeText={setQuery}
        onClear={() => setQuery("")}
      />
      <Text>Search</Text>
      <Button text="Go to Book Details" onPress={handleSeeBookDetails} />
    </PageWrapper>
  );
};

export default SearchScreen;
