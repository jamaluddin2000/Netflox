
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Pages
import Home from "./src/pages/component/Home"
import Description_film from './src/pages/component/Description_film';
import Item from './src/pages/component/Item';
import Halaman1 from './src/pages/component/Halaman1';




const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Description_film" component={Description_film} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="Halaman1" component={Halaman1} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
