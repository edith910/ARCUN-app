import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default function ProductosC() {
  const [form, setForm] = useState({
    fecha: new Date(),
    Lote: '',
    NoCanal: '',
    PesoCanal: '',
    FechaSalida: new Date(),
    Observaciones: '',
  });

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isFechaSalidaPickerVisible, setFechaSalidaPickerVisible] = useState(false);

  const handleChange = (name: string, value: any) => {
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const showDatePicker = () => setDatePickerVisible(true);
  const hideDatePicker = () => setDatePickerVisible(false);
  const handleConfirm = (date: Date) => {
    handleChange('fecha', date);
    hideDatePicker();
  };

  const showFechaSalidaPicker = () => setFechaSalidaPickerVisible(true);
  const hideFechaSalidaPicker = () => setFechaSalidaPickerVisible(false);
  const handleConfirmFechaSalida = (date: Date) => {
    handleChange('FechaSalida', date);
    hideFechaSalidaPicker();
  };

  const confirmarDatos = async () => {
    try {
      await addDoc(collection(db, "ProductosC"), {
        fecha: form.fecha.toISOString(),
        Lote: form.Lote,
        NoCanal: form. NoCanal,
        PesoCanal: form.PesoCanal,
        FechaSalida: form.FechaSalida,
        observaciones: form.Observaciones,
      });
      Alert.alert('Éxito', 'Datos guardados correctamente.');
      setForm({
        fecha: new Date(),
        Lote: '',
        NoCanal: '',
        PesoCanal: '',
        FechaSalida: new Date(),
        Observaciones: '',
      });
    } catch (error) {
      Alert.alert('Error', 'No se pudieron guardar los datos.');
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Formulario Productos Cárnicos</Text>

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
        <Text style={styles.label}>No.Canal</Text>
        <TextInput style={styles.input} value={form. NoCanal} onChangeText={text => handleChange('NoCanal', text)} placeholder="" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Peso Canal</Text>
        <TextInput style={styles.input} value={form.PesoCanal} onChangeText={text => handleChange('PesoCanal', text)} placeholder=" " />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha de salida</Text>
        <Button title={form.FechaSalida ? form.FechaSalida.toLocaleDateString() : 'Seleccionar fecha'} onPress={showFechaSalidaPicker} color="#74ae6bff" />
        <DateTimePickerModal
          isVisible={isFechaSalidaPickerVisible}
          mode="date"
          onConfirm={handleConfirmFechaSalida}
          onCancel={hideFechaSalidaPicker}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Observaciones</Text>
        <TextInput style={styles.input} value={form.Observaciones} onChangeText={text => handleChange('Observaciones', text)} placeholder=" " />
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
