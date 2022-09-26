
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Pages
import Home from "./src/pages/component/Home"
import Description_film from './src/pages/component/Description_film';
import Item from './src/pages/component/Item';
import Halaman1 from './src/pages/component/Halaman1';
<<<<<<< HEAD
import Header from './src/pages/component/Header';
=======
import Category from './src/pages/component/Category';
import Navbar from './src/pages/component/Navbar';
>>>>>>> 57e8a87e5346fe6c382c551d058afa490f5cb01a




const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Description_film" component={Description_film} />
        <Stack.Screen name="Item" component={Item} />
        <Stack.Screen name="Halaman1" component={Halaman1} />
<<<<<<< HEAD
        <Stack.Screen name="Header" component={Header} />

=======
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Navbar" component={Navbar} />
>>>>>>> 57e8a87e5346fe6c382c551d058afa490f5cb01a


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
