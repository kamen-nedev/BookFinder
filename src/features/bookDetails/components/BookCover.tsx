import { Image, StyleSheet, View } from "react-native";

import { Text } from "@ui";
import { getCoverUrl } from "@src/shared/utils/getCoverUrl";
import radius from "@src/ui/tokens/radius";
import colors from "@src/ui/tokens/colors";

type BookCoverProps = {
  coverId?: number;
};

const BookCover = ({ coverId }: BookCoverProps) => {
  if (coverId) {
    return (
      <Image
        source={{ uri: getCoverUrl(coverId, "L") }}
        style={styles.cover}
      />
    )
  }

  return (
    <View style={[styles.cover, styles.coverPlaceholder]}>
      <Text style={styles.muted}>No cover</Text>
    </View>
  )
}

export default BookCover;

const styles = StyleSheet.create({
  cover: {
    alignSelf: "center",
    width: 180,
    height: 270,
    borderRadius: radius.md,
    backgroundColor: colors.primary,
  },
  coverPlaceholder: {
    alignItems: "center",
    justifyContent: "center",
  },
  muted: {
    color: colors.muted,
  },
});
