import { StyleSheet, View } from "react-native";

import Text from "./Text";
import colors from "../tokens/colors";
import spacing from "../tokens/spacing";

type BannerProps = {
  message: string;
};

const Banner = ({ message }: BannerProps) => {
  return (
    <View style={styles.container} accessibilityRole="alert" accessibilityLiveRegion="polite">
      <Text size="sm" weight="medium" style={styles.text}>
        {message}
      </Text>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.error,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  text: {
    color: colors.background,
    textAlign: "center",
  },
});
