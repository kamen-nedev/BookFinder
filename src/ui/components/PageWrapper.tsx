import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppHeader, type AppHeaderProps } from "@src/app/navigation/AppHeader";

import spacing from "../tokens/spacing";
import colors from "../tokens/colors";

type PageWrapperProps = {
  children: React.ReactNode;
  shouldScroll?: boolean;
  headerProps?: AppHeaderProps;
};

const PageWrapper = ({
  children,
  shouldScroll = false,
  headerProps,
}: PageWrapperProps) => {
  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      {headerProps && <AppHeader {...headerProps} />}
      {shouldScroll ? (
        <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
          {children}
        </ScrollView>
      ) : (
        <View style={styles.container}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default PageWrapper;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: spacing.md,
  },
  container: {
    flex: 1,
    padding: spacing.md,
  },
});
