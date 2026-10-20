import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from './types';
import SearchScreen from '../../features/search/screens/SearchScreen';
import BookDetailsScreen from '../../features/bookDetails/screens/BookDetailsScreen';
import colors from '../../ui/tokens/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'Search' }}
        />
        <Stack.Screen
          name="BookDetails"
          component={BookDetailsScreen}
          options={({ route }) => ({ title: route.params.title, headerBackButtonDisplayMode: 'minimal' })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}