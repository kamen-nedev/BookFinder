import { StyleSheet, Text as TextComponent, TextProps as TextComponentProps } from "react-native";

import colors from "../tokens/colors";
import fontSize from "../tokens/fontSize";
import fontWeight from "../tokens/fontWeight";

type TextProps = TextComponentProps & {
  size?: keyof typeof fontSize;
  weight?: keyof typeof fontWeight;
};

const Text = (props: TextProps) => {
  const { size = 'md', weight = 'regular', style, ...textProps } = props;

  return (
    <TextComponent
      {...textProps}
      style={[
        styles.text,
        {
          fontSize: fontSize[size],
          fontWeight: fontWeight[weight],
        },
        style,
      ]}
    />
  );
};

export default Text;

const styles = StyleSheet.create({
  text: {
    color: colors.text,
  },
});