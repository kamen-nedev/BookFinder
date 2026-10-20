import { Image, Pressable, StyleSheet, View } from "react-native";

import { Text } from "@ui";
import colors from "@src/ui/tokens/colors";
import radius from "@src/ui/tokens/radius";
import spacing from "@src/ui/tokens/spacing";
import { getCoverUrl } from "@src/shared/utils/getCoverUrl";

import type { BookSearchDoc } from "../types";

type BookCardProps = {
  book: BookSearchDoc;
  onPress: () => void;
};

const BookCard = ({ book, onPress }: BookCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      {book.cover_i ? (
        <Image source={{ uri: getCoverUrl(book.cover_i) }} style={styles.thumbnail} />
      ) : (
        <View style={[styles.thumbnail, styles.thumbnailPlaceholder]}>
          <Text size="sm" style={styles.muted}>
            No cover
          </Text>
        </View>
      )}

      <View style={styles.info}>
        <Text weight="bold" numberOfLines={2}>
          {book.title}
        </Text>

        {book.author_name && (
          <Text size="sm" numberOfLines={1}>
            {book.author_name.join(", ")}
          </Text>
        )}

        {book.first_publish_year != null && (
          <Text size="sm" style={styles.muted}>
            {book.first_publish_year}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    gap: spacing.md,
    padding: spacing.sm,
    backgroundColor: colors.tertiary,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: radius.lg,
  },
  cardPressed: {
    opacity: 0.7,
  },
  thumbnail: {
    width: 64,
    height: 96,
    borderRadius: radius.sm,
    backgroundColor: colors.primary,
  },
  thumbnailPlaceholder: {
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flex: 1,
    gap: spacing.sm / 2,
    justifyContent: "center",
  },
  muted: {
    color: colors.muted,
  },
});
