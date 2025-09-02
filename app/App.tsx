import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Index from './(tabs)/index';
import Mortalidad from './Mortalidad';
//import Montas from './Montas';
//import ProductosC from './ProductosC';
//import Alimento from './Alimento';
//import Peso from './Peso';
//import Engorda from './Engorda';
//import Registro1 from './Registro1';
//import Registro2 from './Registro2';
//import Almacen from './Almacen';

export type RootStackParamList = {
  Index: undefined;
  Mortalidad: undefined;
  Montas: undefined;
  ProductosC: undefined;
  Alimento: undefined;
  Peso: undefined;
  Engorda: undefined;
  Registro1: undefined;
  Registro2: undefined;
  Almacen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Mortalidad" component={Mortalidad} options={{ title: 'Formulario Mortalidad' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

