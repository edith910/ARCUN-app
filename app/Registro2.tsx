import React, { useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Registro2() {
  const [form, setForm] = useState({
    // Monta
    fechaMonta: '',
    identificacionMacho: '',
    fechaPalpacion: '',
    palpacion: '',
    // Parto
    fechaParto: '',
    totalNacidos: '',
    vivos: '',
    muertos: '',
    i: '',
    r: '',
    // Destete
    fechaDestete: '',
    numeroGazapos: '',
    pesoCamada: '',
    edadDias: '',
    observacionesDestete: '',
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
      `Monta\nFecha: ${form.fechaMonta}\nIdentificación macho: ${form.identificacionMacho}\nFecha palpación: ${form.fechaPalpacion}\nPalpación: ${form.palpacion}\n\n` +
      `Parto\nFecha: ${form.fechaParto}\nTotal nacidos: ${form.totalNacidos}\nVivos: ${form.vivos}\nMuertos: ${form.muertos}\nI: ${form.i}\nR: ${form.r}\n\n` +
      `Destete\nFecha: ${form.fechaDestete}\nNúmero de gazapos: ${form.numeroGazapos}\nPeso camada: ${form.pesoCamada}\nEdad días: ${form.edadDias}\nObservaciones: ${form.observacionesDestete}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Confirmar', onPress: () => Alert.alert('Datos confirmados') },
      ]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Formulario Reproducción</Text>

      {/* Monta */}
      <Text style={styles.sectionTitle}>Monta</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha</Text>
        <TextInput
          value={form.fechaMonta}
          onChangeText={v => handleChange('fechaMonta', v)}
          placeholder="YYYY-MM-DD"
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Identificación macho</Text>
        <TextInput
          value={form.identificacionMacho}
          onChangeText={v => handleChange('identificacionMacho', v)}
          placeholder="Identificación macho"
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha palpación</Text>
        <TextInput
          value={form.fechaPalpacion}
          onChangeText={v => handleChange('fechaPalpacion', v)}
          placeholder="YYYY-MM-DD"
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Palpación</Text>
        <TextInput
          value={form.palpacion}
          onChangeText={v => handleChange('palpacion', v)}
          placeholder="Palpación"
          style={styles.input}
        />
      </View>

      {/* Parto */}
      <Text style={styles.sectionTitle}>Parto</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha</Text>
        <TextInput
          value={form.fechaParto}
          onChangeText={v => handleChange('fechaParto', v)}
          placeholder="YYYY-MM-DD"
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Total de nacidos</Text>
        <TextInput
          value={form.totalNacidos}
          onChangeText={v => handleChange('totalNacidos', v)}
          placeholder="Número total"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Vivos</Text>
        <TextInput
          value={form.vivos}
          onChangeText={v => handleChange('vivos', v)}
          placeholder="Número de vivos"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Muertos</Text>
        <TextInput
          value={form.muertos}
          onChangeText={v => handleChange('muertos', v)}
          placeholder="Número de muertos"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>I</Text>
        <TextInput
          value={form.i}
          onChangeText={v => handleChange('i', v)}
          placeholder="I"
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>R</Text>
        <TextInput
          value={form.r}
          onChangeText={v => handleChange('r', v)}
          placeholder="R"
          style={styles.input}
        />
      </View>

      {/* Destete */}
      <Text style={styles.sectionTitle}>Destete</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha</Text>
        <TextInput
          value={form.fechaDestete}
          onChangeText={v => handleChange('fechaDestete', v)}
          placeholder="YYYY-MM-DD"
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Número de gazapos</Text>
        <TextInput
          value={form.numeroGazapos}
          onChangeText={v => handleChange('numeroGazapos', v)}
          placeholder="Número de gazapos"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Peso camada</Text>
        <TextInput
          value={form.pesoCamada}
          onChangeText={v => handleChange('pesoCamada', v)}
          placeholder="Peso de la camada"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Edad días</Text>
        <TextInput
          value={form.edadDias}
          onChangeText={v => handleChange('edadDias', v)}
          placeholder="Edad en días"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Observaciones</Text>
        <TextInput
          value={form.observacionesDestete}
          onChangeText={v => handleChange('observacionesDestete', v)}
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 20,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#3B5998',
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
    marginTop: 30,
    marginBottom: 30,
  },
});
