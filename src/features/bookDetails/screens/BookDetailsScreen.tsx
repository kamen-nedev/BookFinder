import { Text, View } from "react-native";

import { BookDetailsScreenProps } from "../../../app/navigation/types";

const BookDetailsScreen = ({ route }: BookDetailsScreenProps) => {
  const { title } = route.params;

  return (
    <View>
      <Text>Book Details for "{title}"</Text>
    </View>
  )
}

export default BookDetailsScreen;