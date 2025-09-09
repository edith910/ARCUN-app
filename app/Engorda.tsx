import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Engorda() {
  const [form, setForm] = useState({
    lote: '',
    fechaDestete: '',
    padres: '',
    numero1: '',
    peso1: '',
    jaula: '',
    fechaSalida: '',
    numero2: '',
    peso2: '',
    observaciones: '',
  });

  const handleChange = (name: string, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const confirmarDatos = () => {
    Alert.alert(
      'Datos ingresados',
      `Lote: ${form.lote}\nFecha destete: ${form.fechaDestete}\nPadres: ${form.padres}\nNo. 1: ${form.numero1}\nPeso 1: ${form.peso1}\nJaula: ${form.jaula}\nFecha de salida: ${form.fechaSalida}\nNo. 2: ${form.numero2}\nPeso 2: ${form.peso2}\nObservaciones: ${form.observaciones}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Confirmar', onPress: () => Alert.alert('Datos confirmados') },
      ]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Formulario Destete</Text>

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
        <Text style={styles.label}>Fecha destete</Text>
        <TextInput
          value={form.fechaDestete}
          onChangeText={v => handleChange('fechaDestete', v)}
          placeholder="YYYY-MM-DD"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Padres</Text>
        <TextInput
          value={form.padres}
          onChangeText={v => handleChange('padres', v)}
          placeholder="Padres"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>No. 1</Text>
        <TextInput
          value={form.numero1}
          onChangeText={v => handleChange('numero1', v)}
          placeholder="Número"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Peso 1</Text>
        <TextInput
          value={form.peso1}
          onChangeText={v => handleChange('peso1', v)}
          placeholder="Peso"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Jaula</Text>
        <TextInput
          value={form.jaula}
          onChangeText={v => handleChange('jaula', v)}
          placeholder="Jaula"
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
        <Text style={styles.label}>No. 2</Text>
        <TextInput
          value={form.numero2}
          onChangeText={v => handleChange('numero2', v)}
          placeholder="Número"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Peso 2</Text>
        <TextInput
          value={form.peso2}
          onChangeText={v => handleChange('peso2', v)}
          placeholder="Peso"
          keyboardType="numeric"
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
