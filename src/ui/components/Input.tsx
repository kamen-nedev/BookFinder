import { useState } from "react";
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native";

import Text from "./Text";
import colors from "../tokens/colors";
import radius from "../tokens/radius";
import spacing from "../tokens/spacing";
import fontSize from "../tokens/fontSize";

type InputProps = TextInputProps & {
  label?: string;
  onClear?: () => void;
};

const Input = ({ label, onClear, ...props }: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const showClear = !!onClear && !!props.value;

  return (
    <View>
      {label && (
        <Text weight="medium" style={styles.label}>
          {label}
        </Text>
      )}

      <View style={[styles.container, isFocused && styles.containerFocused]}>
        <TextInput
          {...props}
          value={props.value}
          placeholderTextColor={colors.muted}
          autoCorrect={false}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          style={[styles.input, props.style]}
        />

        {showClear && (
          <Pressable onPress={onClear} hitSlop={8}>
            <Text style={styles.clear}>✕</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    color: colors.text,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
  },
  containerFocused: {
    borderColor: colors.tertiary,
  },
  input: {
    flex: 1,
    paddingVertical: spacing.md,
    fontSize: fontSize.md,
    color: colors.text,
  },
  clear: {
    color: colors.muted,
    marginLeft: spacing.sm,
  },
});
