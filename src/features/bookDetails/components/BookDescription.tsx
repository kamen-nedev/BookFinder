import { ActivityIndicator, StyleSheet, View } from "react-native";

import { Text } from "@ui";
import colors from "@src/ui/tokens/colors";
import spacing from "@src/ui/tokens/spacing";

type BookDescriptionProps = {
  description?: string;
  isLoading: boolean;
  isError: boolean;
};

const BookDescription = ({ description, isLoading, isError }: BookDescriptionProps) => {
  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator color={colors.text} />;
    }

    if (isError) {
      return <Text style={styles.muted}>Couldn't load the description. Check your connection and try again.</Text>;
    }

    if (!description) {
      return <Text style={styles.muted}>No description available.</Text>;
    }

    return <Text>{description}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text size="lg" weight="bold">
        Description
      </Text>
      {renderContent()}
    </View>
  );
};

export default BookDescription;

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  muted: {
    color: colors.muted,
  },
});
