import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default function Alimento() {
  const [form, setForm] = useState({
    fecha: new Date(),
    NoCostales: '',
    Responsable: '',
  });

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const handleChange = (name: string, value: any) => {
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const showDatePicker = () => setDatePickerVisible(true);

  const hideDatePicker = () => setDatePickerVisible(false);

  const handleConfirm = (date: Date) => {
    handleChange('fecha', date);
    hideDatePicker();
  };

  const confirmarDatos = async () => {
    try {
      await addDoc(collection(db, "Alimento"), {
        fecha: form.fecha.toISOString(),
        NoCostales: form.NoCostales,
        Response: form. Responsable,
      });
      Alert.alert('Éxito', 'Datos guardados correctamente.');
      setForm({
        fecha: new Date(),
        NoCostales: '',
        Responsable: '',
      });
    } catch (error) {
      Alert.alert('Error', 'No se pudieron guardar los datos.');
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Formulario Alimento</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha</Text>
        <Button title={form.fecha.toLocaleDateString()} onPress={showDatePicker} color="#74ae6bff" />
        <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>No.Costales</Text>
        <TextInput style={styles.input} value={form.NoCostales} onChangeText={text => handleChange('NoCostales', text)} placeholder=" " />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Responsable</Text>
        <TextInput style={styles.input} value={form. Responsable} onChangeText={text => handleChange('Responsable', text)} placeholder="" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Guardar Datos" onPress={confirmarDatos} color="#84a97fff" />
      </View>
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
  label: { fontSize: 16, marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: '#84a97fff',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  inputInline: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#84a97fff',
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    marginRight: 10,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderColor: '#84a97fff',
    marginBottom: 10,
  },
  dropdownContainer: {
    borderColor: '#84a97fff',
  },
  addSignContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  addNewText: {
    color: '#84a97fff',
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  buttonContainer: {
    marginTop: 30,
  },
  buttonSpacing: {
    marginRight: 10,
  },
});
