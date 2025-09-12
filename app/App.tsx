import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" translucent={false} backgroundColor="#bb0f0fff" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={{
            headerStyle: { backgroundColor: '#359d3eff' }, // color que quieres en la barra de navegación
            headerTintColor: 'black',
            cardStyle: { backgroundColor: '#34b14dff' },
          }}
        >
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
    </>
  );
}
