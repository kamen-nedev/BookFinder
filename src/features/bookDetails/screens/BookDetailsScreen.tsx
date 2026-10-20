import { ScrollView, StyleSheet } from "react-native";

import { PageWrapper } from "@ui";
import { BookDetailsScreenProps } from "@src/app/navigation/types";
import spacing from "@src/ui/tokens/spacing";

import { useGetWorkQuery } from "../api/bookDetailsApi";
import BookDescription from "../components/BookDescription";
import BookCover from "../components/BookCover";
import BookFacts from "../components/BookFacts";
import BookHeading from "../components/BookHeading";
import BookSubjects from "../components/BookSubjects";
import Footer from "../components/Footer";

const BookDetailsScreen = ({ route }: BookDetailsScreenProps) => {
  const { book } = route.params;
  const { data: work, isLoading, isError } = useGetWorkQuery(book.key);

  const coverId = book.cover_i ?? work?.coverId;
  const firstPublished = book.first_publish_year ?? work?.firstPublishDate;
  return (
    <PageWrapper headerProps={{ title: "Book Details" }}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <BookCover coverId={coverId} />

        <BookHeading title={book.title} authors={book.author_name} />

        <BookFacts firstPublished={firstPublished} editionCount={book.edition_count} />

        <BookDescription description={work?.description} isLoading={isLoading} isError={isError} />

        <BookSubjects subjects={work?.subjects} />
      </ScrollView>

      <Footer />
    </PageWrapper>
  );
};

export default BookDetailsScreen;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    gap: spacing.lg,
    paddingBottom: spacing.xl,
  },
});
