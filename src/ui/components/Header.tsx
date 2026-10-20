import { Pressable, StyleSheet, View } from "react-native";

import Text from "./Text";
import spacing from "../tokens/spacing";
import colors from "../tokens/colors";

type HeaderProps = {
  title: string;
  onBack?: () => void;
  right?: React.ReactNode;
};

const Header = ({ title, onBack, right }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.side}>
        {onBack && (
          <Pressable onPress={onBack} hitSlop={8}>
            <Text weight="bold">Back</Text>
          </Pressable>
        )}
      </View>
      <Text weight="bold" size="xl" style={styles.title}>
        {title}
      </Text>
      <View style={[styles.side, styles.right]}>{right}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,

  },
  side: {
    width: 64,
  },
  right: {
    alignItems: "flex-end",
  },
  title: {
    flex: 1,
    textAlign: "center",
  },
});
