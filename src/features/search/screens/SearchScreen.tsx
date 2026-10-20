import { useNavigation } from "@react-navigation/native";

import { Button, PageWrapper, Text } from "@ui";
import { RootStackNavigationProp } from "@src/app/navigation/types";

const SearchScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const handleSeeBookDetails = () => {
    navigation.navigate("BookDetails", { title: "The Great Gatsby" });
  };

  return (
    <PageWrapper shouldScroll headerProps={{ title: "Dashboard" }}>
      <Text>Search</Text>
      <Button text="Go to Book Details" onPress={handleSeeBookDetails} />
    </PageWrapper>
  );
};

export default SearchScreen;
