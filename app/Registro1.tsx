import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default function HomologacionCamadas() {
  const [form, setForm] = useState({
    fecha: new Date(),
    Lote: '',
    HembraQueRecibe: '',
    NoConejosRecibe: '',
    Madre: '',
    HembraQueSeLeRetiran: '',
    NoConejosRetiran: '',
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
      await addDoc(collection(db, "HomologacionCamadas"), {
        fecha: form.fecha.toISOString(),
        Lote: form.Lote,
        HembraQueRecibe: form.HembraQueRecibe,
        NoConejosRecibe: form.NoConejosRecibe,
        Madre: form.Madre,
        HembraQueSeLeRetiran: form.HembraQueSeLeRetiran,
        NoConejosRetiran: form.NoConejosRetiran,
      });
      Alert.alert('Éxito', 'Datos guardados correctamente.');
      setForm({
        fecha: new Date(),
        Lote: '',
        HembraQueRecibe: '',
        NoConejosRecibe: '',
        Madre: '',
        HembraQueSeLeRetiran: '',
        NoConejosRetiran: '',
      });
    } catch (error) {
      Alert.alert('Error', 'No se pudieron guardar los datos.');
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Formulario Homologación de camadas</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha</Text>
        <Button title={form.fecha.toLocaleDateString()} onPress={showDatePicker} color="#74ae6bff" />
        <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Lote</Text>
        <TextInput style={styles.input} value={form.Lote} onChangeText={text => handleChange('Lote', text)} placeholder=" " />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Hembra que recibe</Text>
        <TextInput style={styles.input} value={form.HembraQueRecibe} onChangeText={text => handleChange('HembraQueRecibe', text)} placeholder=" " />
        <View style={styles.subGroup}>
          <View style={styles.subInputGroup}>
            <Text style={styles.subLabel}>No. Conejos (recibe)</Text>
            <TextInput style={styles.input} value={form.NoConejosRecibe} onChangeText={text => handleChange('NoConejosRecibe', text)} placeholder=" " />
          </View>
          <View style={styles.subInputGroup}>
            <Text style={styles.subLabel}>Madre</Text>
            <TextInput style={styles.input} value={form.Madre} onChangeText={text => handleChange('Madre', text)} placeholder=" " />
          </View>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Hembra que se le retiran</Text>
        <TextInput style={styles.input} value={form.HembraQueSeLeRetiran} onChangeText={text => handleChange('HembraQueSeLeRetiran', text)} placeholder=" " />
        <View style={styles.subGroup}>
          <View style={styles.subInputGroup}>
            <Text style={styles.subLabel}>No. Conejos (retiran)</Text>
            <TextInput style={styles.input} value={form.NoConejosRetiran} onChangeText={text => handleChange('NoConejosRetiran', text)} placeholder=" " />
          </View>
        </View>
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
  subGroup: { marginTop: 10, marginLeft: 20 },
  subInputGroup: { marginBottom: 10 },
  subLabel: { fontSize: 14, marginBottom: 5, color: '#555' },
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