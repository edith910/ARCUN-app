import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Mortalidad() {
  // Estado para cada campo del formulario
  const [fecha, setFecha] = useState('');
  const [areaProductiva, setAreaProductiva] = useState('');
  const [jaulaID, setJaulaID] = useState('');
  const [muertos, setMuertos] = useState('');
  const [signologia, setSignologia] = useState('');
  const [lesionesNecropsia, setLesionesNecropsia] = useState('');
  const [dxPresuntivo, setDxPresuntivo] = useState('');
  const [rip, setRip] = useState('');
  const [eut, setEut] = useState('');
  const [observaciones, setObservaciones] = useState('');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Formulario Mortalidad</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha</Text>
        <TextInput
          value={fecha}
          onChangeText={setFecha}
          placeholder="YYYY-MM-DD"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Área productiva</Text>
        <TextInput
          value={areaProductiva}
          onChangeText={setAreaProductiva}
          placeholder="Área productiva"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Jaula o ID</Text>
        <TextInput
          value={jaulaID}
          onChangeText={setJaulaID}
          placeholder="Jaula o ID"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Muertos</Text>
        <TextInput
          value={muertos}
          onChangeText={setMuertos}
          placeholder="Número"
          style={styles.input}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Signología (síntomas)</Text>
        <TextInput
          value={signologia}
          onChangeText={setSignologia}
          placeholder="Signología"
          style={styles.input}
          multiline
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Lesiones necropsia</Text>
        <TextInput
          value={lesionesNecropsia}
          onChangeText={setLesionesNecropsia}
          placeholder="Lesiones necropsia"
          style={styles.input}
          multiline
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Dx presuntivo</Text>
        <TextInput
          value={dxPresuntivo}
          onChangeText={setDxPresuntivo}
          placeholder="Dx presuntivo"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>RIP</Text>
        <TextInput
          value={rip}
          onChangeText={setRip}
          placeholder="RIP"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>EUT</Text>
        <TextInput
          value={eut}
          onChangeText={setEut}
          placeholder="EUT"
          style={styles.input}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Observaciones</Text>
        <TextInput
          value={observaciones}
          onChangeText={setObservaciones}
          placeholder="Observaciones"
          style={styles.input}
          multiline
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#51bd3eff',
  },
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
});
