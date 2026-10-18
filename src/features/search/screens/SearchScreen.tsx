import { Button, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { RootStackNavigationProp } from "../../../app/navigation/types";

const SearchScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const handleSeeBookDetails = () => {
    navigation.navigate('BookDetails', { title: 'The Great Gatsby' });
  }

  return (
    <View>
      <Text>Search</Text>
      <Button
        title="Go to Book Details"
        onPress={handleSeeBookDetails}
      />
    </View>
  )
}

export default SearchScreen;