// src/screens/HomeScreen.tsx
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';

const bitacoras = [
  { title: 'Mortalidad y control de fauna.', screen: 'Mortalidad' },
  { title: 'Montas.', screen: 'Montas' },
  { title: 'Productos cárnicos.', screen: 'ProductosC' },
  { title: 'Salida de alimento.', screen: 'Alimento' },
  { title: 'Peso de canales.', screen: 'Peso' },
  { title: 'Destete y salida de engorda.', screen: 'Engorda' },
  { title: 'Carpeta de registros No.1 Hembras y machos reproductores.', screen: 'Registro1' },
  { title: 'Carpeta de registros No.2 Tratamientos y actas de necropsia.', screen: 'Registro2' },
  { title: 'Almacen - Cocina', screen: 'Almacen' },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bitácoras</Text>
      </View>

      <View style={styles.staticHeader}>
        <Image
          source={require('../(tabs)/img/arcun.png')}
          contentFit="contain"
          style={styles.headerImage}
        />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {bitacoras.map(({ title, screen }, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
              index === bitacoras.length - 1 && styles.fullWidthButton,
            ]}
            onPress={() => navigation.navigate(screen)}
          >
            <Text style={styles.buttonText}>{title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    height: 70,
    backgroundColor: '#51bd3eff',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 20,
    textAlign: 'center',
  },
  staticHeader: {
    backgroundColor: '#eaf3f2',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerImage: { width: 280, height: 150 },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 20,
    backgroundColor: '#eaf3f2',
  },
  button: {
    width: '48%',
    minHeight: 70,
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3B5998',
    justifyContent: 'center',
  },
  fullWidthButton: { width: '100%' },
  buttonPressed: { backgroundColor: '#d0e1fc' },
  buttonText: {
    color: '#3B5998',
    fontSize: 16,
    textAlign: 'center',
  },
});
