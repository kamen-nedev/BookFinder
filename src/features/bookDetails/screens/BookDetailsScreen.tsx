import { PageWrapper, Text } from "@ui";
import { BookDetailsScreenProps } from "@src/app/navigation/types";

const BookDetailsScreen = ({ route }: BookDetailsScreenProps) => {
  const { title } = route.params;

  return (
    <PageWrapper headerProps={{ title: "Book Details" }}>
      <Text>Book Details for "{title}"</Text>
    </PageWrapper>
  );
};

export default BookDetailsScreen;
