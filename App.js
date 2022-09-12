
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Pages
import Home from "./src/pages/component/Home"
import Description_film from './src/pages/component/Description_film';



const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Description_film" component={Description_film} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
