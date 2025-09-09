import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Peso() {
  // Estado único para todo el formulario
  const [form, setForm] = useState({
    lote: '',
    fechaMatanza: '',
    numero: '',
    pesoCanal: '',
    motivo: '',
    observaciones: '',
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
      `Lote: ${form.lote}\nFecha de matanza: ${form.fechaMatanza}\nNo.: ${form.numero}\nPeso canal: ${form.pesoCanal}\nMotivo: ${form.motivo}\nObservaciones: ${form.observaciones}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Confirmar', onPress: () => Alert.alert('Datos confirmados') }, // Aquí agregar lógica para guardar en Firebase
      ]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Formulario Matanza</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Lote</Text>
        <TextInput
          value={form.lote}
          onChangeText={v => handleChange('lote', v)}
          placeholder="Lote"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha de matanza</Text>
        <TextInput
          value={form.fechaMatanza}
          onChangeText={v => handleChange('fechaMatanza', v)}
          placeholder="YYYY-MM-DD"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>No.</Text>
        <TextInput
          value={form.numero}
          onChangeText={v => handleChange('numero', v)}
          placeholder="Número"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Peso canal</Text>
        <TextInput
          value={form.pesoCanal}
          onChangeText={v => handleChange('pesoCanal', v)}
          placeholder="Peso del canal"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Motivo</Text>
        <TextInput
          value={form.motivo}
          onChangeText={v => handleChange('motivo', v)}
          placeholder="Motivo"
          multiline
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Observaciones</Text>
        <TextInput
          value={form.observaciones}
          onChangeText={v => handleChange('observaciones', v)}
          placeholder="Observaciones"
          multiline
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
