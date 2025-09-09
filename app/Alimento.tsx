import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Alimento() {
  // Estado único para todo el formulario
  const [form, setForm] = useState({
    noCostales: '',
    fechaSalida: '',
    responsable: '',
  });

  // Función para actualizar cada campo
  const handleChange = (name: string, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Función para mostrar alerta de confirmación
  const confirmarDatos = () => {
    Alert.alert(
      'Datos ingresados',
      `No. Costales: ${form.noCostales}\nFecha salida: ${form.fechaSalida}\nResponsable: ${form.responsable}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Confirmar', onPress: () => Alert.alert('Datos confirmados') }, // Aquí agregar lógica para guardar en Firebase
      ]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Formulario Costales</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>No. Costales</Text>
        <TextInput
          value={form.noCostales}
          onChangeText={v => handleChange('noCostales', v)}
          placeholder="Número de costales"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha de salida</Text>
        <TextInput
          value={form.fechaSalida}
          onChangeText={v => handleChange('fechaSalida', v)}
          placeholder="YYYY-MM-DD"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Responsable</Text>
        <TextInput
          value={form.responsable}
          onChangeText={v => handleChange('responsable', v)}
          placeholder="Nombre del responsable"
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Verificar y confirmar" onPress={confirmarDatos} color="#4a90e2" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebf3eaff',
  },
  contentContainer: {
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3B5998',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    color: '#3B5998',
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#3e97bdff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 15,
    color: '#2c3e50',
    minHeight: 40,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
