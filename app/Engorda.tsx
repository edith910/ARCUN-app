import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function Engorda() {
  const [form, setForm] = useState({
    lote: '',
    fechaDestete: new Date(),
    padres: '',
    numeroGazapos: '',
    pesoGazapo: '',
    jaula: '',
    observaciones: '',
  });

  const [isDatePickerVisible, setDatePickerVisible] = useState<{field: string | null}>({field: null});

  const handleChange = (name: string, value: any) => {
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const showDatePicker = (field: string) => {
    setDatePickerVisible({field});
  };

  const hideDatePicker = () => {
    setDatePickerVisible({field: null});
  };

  const handleConfirm = (date: Date) => {
    if (isDatePickerVisible.field) {
      handleChange(isDatePickerVisible.field, date);
    }
    hideDatePicker();
  };

  const confirmarDatos = () => {
    Alert.alert(
      'Datos ingresados',
      `Lote: ${form.lote}\nFecha destete: ${form.fechaDestete.toLocaleDateString()}\nPadres: ${form.padres}\nNo. 1: ${form.numeroGazapos}\nPeso 1: ${form.pesoGazapo}\nJaula: ${form.jaula}`,
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
          style={styles.input}
          value={form.lote}
          onChangeText={v => handleChange('lote', v)}
          placeholder=" "
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha destete</Text>
        <Button
          title={form.fechaDestete.toLocaleDateString()}
          onPress={() => showDatePicker('fechaDestete')}
          color="#74ae6bff"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Padres</Text>
        <TextInput
          style={styles.input}
          value={form.padres}
          onChangeText={v => handleChange('padres', v)}
          placeholder=" "
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>No.Gazapos</Text>
        <TextInput
          style={styles.input}
          value={form.numeroGazapos}
          onChangeText={v => handleChange('numeroGazapos', v)}
          placeholder=" "
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Peso Gazapos</Text>
        <TextInput
          style={styles.input}
          value={form.pesoGazapo}
          onChangeText={v => handleChange('pesoGazapo', v)}
          placeholder=" "
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Jaula</Text>
        <TextInput
          style={styles.input}
          value={form.jaula}
          onChangeText={v => handleChange('jaula', v)}
          placeholder=" "
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Observaciones</Text>
        <TextInput
          style={[styles.input, { height: 80 }]}
          value={form.observaciones}
          onChangeText={v => handleChange('observaciones', v)}
          placeholder=" "
          multiline
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Verificar y confirmar" onPress={confirmarDatos} color="#84a97fff" />
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible.field !== null}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  contentContainer: { padding: 20 },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#74ae6bff',
  },
  inputGroup: { marginBottom: 15 },
  label: { fontSize: 16, marginBottom: 5, color: '#333' },
  input: {
    borderWidth: 1,
    borderColor: '#84a97fff',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  buttonContainer: { marginTop: 30 },
});
