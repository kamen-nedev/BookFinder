import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from './types';
import SearchScreen from '../../features/search/screens/SearchScreen';
import BookDetailsScreen from '../../features/bookDetails/screens/BookDetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
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