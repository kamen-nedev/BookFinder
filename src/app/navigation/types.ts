import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

import type { BookSearchDoc } from '@src/features/search/types';

export type RootStackParamList = {
  Search: undefined;
  BookDetails: { book: BookSearchDoc };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'>;
export type BookDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'BookDetails'>;