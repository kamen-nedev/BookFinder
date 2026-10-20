import { StyleSheet, View } from "react-native";

import { Text } from "@ui";
import spacing from "@src/ui/tokens/spacing";

import SubjectChips from "./SubjectChips";

const MAX_SUBJECTS = 8;

type BookSubjectsProps = {
  subjects?: string[];
};

const BookSubjects = ({ subjects = [] }: BookSubjectsProps) => {
  if (!subjects.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text size="lg" weight="bold">
        Subjects
      </Text>
      <SubjectChips subjects={subjects.slice(0, MAX_SUBJECTS)} />
    </View>
  );
};

export default BookSubjects;

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
});
