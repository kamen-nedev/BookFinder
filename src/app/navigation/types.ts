import type { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Search: undefined;
  BookDetails: { title: string };
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'>;
export type BookDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'BookDetails'>;