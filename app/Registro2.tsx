import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default function TratamientoMedicamento() {
  const [form, setForm] = useState({
    fecha: new Date(),
    noJaula: '',
    areaProductiva: '',
    motivoTratamiento: '',
    nombreComercial: '',
    principioActivo: '',
    dosisAAplicar: '',
    diasTratamiento: '',
    tiempoRetiro: '',
    nombreMedico: '',
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
      await addDoc(collection(db, "TratamientoMedicamento"), {
        fecha: form.fecha.toISOString(),
        noJaula: form.noJaula,
        areaProductiva: form.areaProductiva,
        motivoTratamiento: form.motivoTratamiento,
        nombreComercial: form.nombreComercial,
        principioActivo: form.principioActivo,
        dosisAAplicar: form.dosisAAplicar,
        diasTratamiento: form.diasTratamiento,
        tiempoRetiro: form.tiempoRetiro,
        nombreMedico: form.nombreMedico,
      });
      Alert.alert('Éxito', 'Datos guardados correctamente.');
      setForm({
        fecha: new Date(),
        noJaula: '',
        areaProductiva: '',
        motivoTratamiento: '',
        nombreComercial: '',
        principioActivo: '',
        dosisAAplicar: '',
        diasTratamiento: '',
        tiempoRetiro: '',
        nombreMedico: '',
      });
    } catch (error) {
      Alert.alert('Error', 'No se pudieron guardar los datos.');
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Formulario Tratamientos</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha</Text>
        <Button title={form.fecha.toLocaleDateString()} onPress={showDatePicker} color="#74ae6bff" />
        <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>No. Jaula</Text>
        <TextInput style={styles.input} value={form.noJaula} onChangeText={text => handleChange('noJaula', text)} placeholder=" " />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Área Productiva</Text>
        <TextInput style={styles.input} value={form.areaProductiva} onChangeText={text => handleChange('areaProductiva', text)} placeholder=" " />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Motivo de Tratamiento</Text>
        <TextInput style={styles.input} value={form.motivoTratamiento} onChangeText={text => handleChange('motivoTratamiento', text)} placeholder=" " />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nombre Comercial</Text>
        <TextInput style={styles.input} value={form.nombreComercial} onChangeText={text => handleChange('nombreComercial', text)} placeholder=" " />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Principio Activo</Text>
        <TextInput style={styles.input} value={form.principioActivo} onChangeText={text => handleChange('principioActivo', text)} placeholder=" " />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Dosis a Aplicar</Text>
        <TextInput style={styles.input} value={form.dosisAAplicar} onChangeText={text => handleChange('dosisAAplicar', text)} placeholder=" " />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Días de Tratamiento</Text>
        <TextInput style={styles.input} value={form.diasTratamiento} onChangeText={text => handleChange('diasTratamiento', text)} placeholder=" " />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Tiempo de Retiro</Text>
        <TextInput style={styles.input} value={form.tiempoRetiro} onChangeText={text => handleChange('tiempoRetiro', text)} placeholder=" " />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Nombre Médico que Aplicó Medicamento</Text>
        <TextInput style={styles.input} value={form.nombreMedico} onChangeText={text => handleChange('nombreMedico', text)} placeholder=" " />
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