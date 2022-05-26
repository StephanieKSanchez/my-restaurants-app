import { createContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/scenes/Home';
import Details from './src/scenes/Details';

const Stack = createNativeStackNavigator();

export const SingleRestaurantContext = createContext(null);

export default function App() {
  const [currentRestaurant, setCurrentRestaurant] = useState();
  return (
    <SingleRestaurantContext.Provider value={{ currentRestaurant, setCurrentRestaurant }} >
      <NavigationContainer>
      <Stack.Navigator initialRouteName='' >
        <Stack.Screen name="Home" component={Home} options={{title: 'Local Restaurants'}} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
    </SingleRestaurantContext.Provider>
  );
}
