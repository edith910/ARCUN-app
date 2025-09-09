import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Index from './(tabs)/index';
import Alimento from './Alimento';
import Engorda from './Engorda';
import Montas from './Montas';
import Mortalidad from './Mortalidad';
import Peso from './Peso';
import ProductosC from './ProductosC';
import Registro1 from './Registro1';
import Registro2 from './Registro2';
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
        <Stack.Screen name="Montas" component={Montas} options={{ title: 'Formulario Montas' }} />
        <Stack.Screen name="ProductosC" component={ProductosC} options={{ title: 'Formulario Productos Carnicos' }} />
        <Stack.Screen name="Alimento" component={Alimento} options={{ title: 'Formulario Alimento' }} />
        <Stack.Screen name="Peso" component={Peso} options={{ title: 'Formulario Peso' }} />
        <Stack.Screen name="Engorda" component={Engorda} options={{ title: 'Formulario Engorda' }} />
        <Stack.Screen name="Registro1" component={Registro1} options={{ title: 'Formulario Registro1' }} />
        <Stack.Screen name="Registro2" component={Registro2} options={{ title: 'Formulario Registro2' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

