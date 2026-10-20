import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@ui";
import colors from "@src/ui/tokens/colors";
import spacing from "@src/ui/tokens/spacing";

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.fade} pointerEvents="none" />
      <Button text="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  fade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "100%",
    height: spacing.xl,
    backgroundImage: `linear-gradient(to bottom, ${colors.background}00, ${colors.background})`,
  },
});
