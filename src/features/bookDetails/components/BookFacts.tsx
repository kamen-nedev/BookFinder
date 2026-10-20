import { StyleSheet, View } from "react-native";

import spacing from "@src/ui/tokens/spacing";

import BookFact from "./BookFact";

type BookFactsProps = {
  firstPublished?: number | string;
  editionCount?: number;
};

const BookFacts = ({ firstPublished, editionCount }: BookFactsProps) => {
  if (firstPublished == null && editionCount == null) {
    return null;
  }

  return (
    <View style={styles.container}>
      {firstPublished != null && <BookFact label="First published" value={String(firstPublished)} />}
      {editionCount != null && <BookFact label="Editions" value={editionCount.toLocaleString()} />}
    </View>
  );
};

export default BookFacts;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: spacing.sm,
  },
});
