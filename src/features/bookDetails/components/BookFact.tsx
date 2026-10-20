import { StyleSheet, View } from "react-native";

import { Text } from "@ui";
import colors from "@src/ui/tokens/colors";
import radius from "@src/ui/tokens/radius";
import spacing from "@src/ui/tokens/spacing";

type BookFactProps = {
  label: string;
  value: string;
};

const BookFact = ({ label, value }: BookFactProps) => (
  <View style={styles.fact}>
    <Text size="sm" style={styles.muted}>
      {label}
    </Text>
    <Text weight="bold">{value}</Text>
  </View>
);

export default BookFact;

const styles = StyleSheet.create({
  fact: {
    flex: 1,
    alignItems: "center",
    gap: spacing.sm / 2,
    padding: spacing.sm,
    backgroundColor: colors.tertiary,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: radius.lg,
  },
  muted: {
    color: colors.muted,
  },
});
