import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home'
import Times from './components/Times'
const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator>
        <Abas.Screen name="Home" component={Home}/>                  
        <Abas.Screen name="Times" component={Times}/>                     
      </Abas.Navigator>
    </NavigationContainer>
  );
}