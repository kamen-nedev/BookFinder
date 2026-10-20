import { StyleSheet, View } from "react-native";

import { Text } from "@ui";
import spacing from "@src/ui/tokens/spacing";

type BookHeadingProps = {
  title: string;
  authors?: string[];
};

const BookHeading = ({ title, authors }: BookHeadingProps) => {
  return (
    <View style={styles.container}>
      <Text size="xl" weight="bold" style={styles.centered}>
        {title}
      </Text>
      <Text style={styles.centered}>{authors?.join(", ") ?? "Unknown author"}</Text>
    </View>
  );
};

export default BookHeading;

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  centered: {
    textAlign: "center",
  },
});
