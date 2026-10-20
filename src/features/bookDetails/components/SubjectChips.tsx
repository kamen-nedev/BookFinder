import { StyleSheet, View } from "react-native";

import { Text } from "@ui";
import colors from "@src/ui/tokens/colors";
import radius from "@src/ui/tokens/radius";
import spacing from "@src/ui/tokens/spacing";

type SubjectChipsProps = {
  subjects: string[];
};

const SubjectChips = ({ subjects }: SubjectChipsProps) => {
  if (!subjects.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      {subjects.map((subject) => (
        <View key={subject} style={styles.chip}>
          <Text size="sm">{subject}</Text>
        </View>
      ))}
    </View>
  );
};

export default SubjectChips;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  chip: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm / 2,
    backgroundColor: colors.secondary,
    borderRadius: radius.xl,
  },
});
