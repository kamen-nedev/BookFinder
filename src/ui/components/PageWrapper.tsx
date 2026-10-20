import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppHeader, type AppHeaderProps } from "@src/app/navigation/AppHeader";
import useIsOffline from "@src/shared/hooks/useIsOffline";

import Banner from "./Banner";
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
  const isOffline = useIsOffline();

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      {isOffline && <Banner message="No internet connection" />}
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
