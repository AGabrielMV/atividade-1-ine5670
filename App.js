import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Home'
import ShowListScreen from './ShowList'
import ShowDetailsScreen from './ShowDetails'
import FavoritesScreen from './Favorites'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ShowList" component={ShowListScreen} />
    <Stack.Screen name="ShowDetails" component={ShowDetailsScreen} />
    <Stack.Screen name="Favorites" component={FavoritesScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}