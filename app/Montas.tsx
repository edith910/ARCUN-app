import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Montas() {
  // Estado único para todo el formulario
  const [form, setForm] = useState({
    lote: '',
    fechaMonta: '',
    noHembra: '',
    noMacho: '',
    noMonta: '',
    noGazaposVivos: '',
    noGazaposMuertos: '',
    observaciones: '',
  });

  // Función para actualizar cada campo
  const handleChange = (name: string, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Función que valida/manda los datos
  const confirmarDatos = () => {
    Alert.alert('Datos ingresados', JSON.stringify(form, null, 2));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Formulario Montas</Text>

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
        <Text style={styles.label}>Fecha de monta</Text>
        <TextInput
          value={form.fechaMonta}
          onChangeText={v => handleChange('fechaMonta', v)}
          placeholder="YYYY-MM-DD"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>No. Hembra</Text>
        <TextInput
          value={form.noHembra}
          onChangeText={v => handleChange('noHembra', v)}
          placeholder="Número de hembra"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>No. Macho</Text>
        <TextInput
          value={form.noMacho}
          onChangeText={v => handleChange('noMacho', v)}
          placeholder="Número de macho"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>No. Monta</Text>
        <TextInput
          value={form.noMonta}
          onChangeText={v => handleChange('noMonta', v)}
          placeholder="Número de monta"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>No. Gazapos Vivos (V)</Text>
        <TextInput
          value={form.noGazaposVivos}
          onChangeText={v => handleChange('noGazaposVivos', v)}
          placeholder="Número de gazapos vivos"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>No. Gazapos Muertos (M)</Text>
        <TextInput
          value={form.noGazaposMuertos}
          onChangeText={v => handleChange('noGazaposMuertos', v)}
          placeholder="Número de gazapos muertos"
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
          style={styles.input}
          multiline
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Confirmar datos" onPress={confirmarDatos} color="#4a90e2" />
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
