import { Image } from 'expo-image';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';


const bitacoras = [
  'Mortalidad y control de fauna.',
  'Montas.',
  'Productos cárnicos.',
  'Salida de alimento.',
  'Peso de canales.',
  'Destete y salida de engorda.',
  'Carpeta de registros No.1 Hembras y machos reproductores.',
  'Carpeta de registros No.2 Tratamientos y actas de necropsia.',
  'Almacen - Cocina',
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header fijo */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Bitácoras</Text>
      </View>

      {/* Imagen y logo estáticos */}
      <View style={styles.staticHeader}>
        <Image
          source={require('../(tabs)/img/arcun.png')}
          contentFit="contain"
          style={styles.headerImage}
        />
      </View>

      {/* Scroll solo para las bitácoras */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {bitacoras.map((texto, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
              index === bitacoras.length - 1 && styles.fullWidthButton,
            ]}
            onPress={() => {
              console.log('Presionaste:', texto);
            }}
          >
            <Text style={styles.buttonText}>{texto}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  headerImage: {
    width: 280,
    height: 150,
  },
  arcunText: {
    color: '#32ab51',
    marginTop: 8,
  },
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
  fullWidthButton: {
    width: '100%',
  },
  buttonPressed: {
    backgroundColor: '#d0e1fc',
  },
  buttonText: {
    color: '#3B5998',
    fontSize: 16,
    textAlign: 'center',
  },
});
