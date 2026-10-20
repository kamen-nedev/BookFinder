import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

import colors from "../tokens/colors";
import radius from "../tokens/radius";
import spacing from "../tokens/spacing";
import fontSize from "../tokens/fontSize";
import fontWeight from "../tokens/fontWeight";

type ButtonProps = PressableProps & {
  text: string;
};

const Button = ({ text, ...props }: ButtonProps) => {
  return <Pressable {...props} style={[styles.button]}>
    <Text style={styles.text}>{text}</Text>
  </Pressable>;
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: radius.md,
  },
  text: {
    color: colors.text,
    fontSize: fontSize.md,
    fontWeight: fontWeight.bold,
  },
});