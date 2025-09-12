import React, { useEffect, useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default function Mortalidad() {
  const [form, setForm] = useState({
    fecha: new Date(),
    AreaProductiva: '',
    Jaula: '',
    Muertos: '',
    Signologia: '',
    LNecropsia: '',
    DxPresuntivo: '',
    Rip: '',
    Eut: '',
    Observaciones: '',
  });

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  // Dropdown estados y datos para Área Productiva
  const [openArea, setOpenArea] = useState(false);
  const [valueArea, setValueArea] = useState(null);
  const [itemsArea, setItemsArea] = useState([
    { label: 'Engorda', value: 'Engorda' },
    { label: 'Maternidad', value: 'Maternidad' },
    { label: 'Lactancia', value: 'Lactancia' },
  ]);

  // Dropdown estados y datos para Signología
  const [openSign, setOpenSign] = useState(false);
  const [valueSign, setValueSign] = useState(null);
  const [itemsSign, setItemsSign] = useState([
    { label: 'Diarrea', value: 'Diarrea' },
    { label: 'Moco', value: 'Moco' },
    { label: 'Venta vivoras', value: 'Venta vivoras' },
    { label: 'Timpanismo', value: 'Timpanismo' },
    { label: 'N/S', value: 'N/S' },
  ]);
  const [newSignInput, setNewSignInput] = useState('');
  const [showAddSignInput, setShowAddSignInput] = useState(false);

  // Dropdown estados y datos para Dx Presuntivo
  const [openDx, setOpenDx] = useState(false);
  const [valueDx, setValueDx] = useState(null);
  const [itemsDx, setItemsDx] = useState([
    { label: 'Henteropatia', value: 'Henteropatia' },
    { label: 'Aplastado', value: 'Aplastado' },
    { label: 'Anorexia', value: 'Anorexia' },
    { label: 'Hipotermia', value: 'Hipotermia' },
    { label: 'Diarrea', value: 'Diarrea' },
    { label: 'Inanición', value: 'Inanición' },
    { label: 'Tiña', value: 'Tiña' },
    { label: 'Asfixia', value: 'Asfixia' },
  ]);
  const [newDxInput, setNewDxInput] = useState('');
  const [showAddDxInput, setShowAddDxInput] = useState(false);

  useEffect(() => {
    setForm(prev => ({ ...prev, AreaProductiva: valueArea || '' }));
  }, [valueArea]);

  useEffect(() => {
    setForm(prev => ({ ...prev, Signologia: valueSign || '' }));
  }, [valueSign]);

  useEffect(() => {
    setForm(prev => ({ ...prev, DxPresuntivo: valueDx || '' }));
  }, [valueDx]);

  const onOpenArea = () => {
    setOpenArea(true);
    setOpenSign(false);
    setOpenDx(false);
    setShowAddSignInput(false);
    setShowAddDxInput(false);
  };

  const onOpenSign = () => {
    setOpenArea(false);
    setOpenSign(true);
    setOpenDx(false);
    setShowAddSignInput(false);
    setShowAddDxInput(false);
  };

  const onOpenDx = () => {
    setOpenArea(false);
    setOpenSign(false);
    setOpenDx(true);
    setShowAddSignInput(false);
    setShowAddDxInput(false);
  };

  const showAddSignInputHandler = () => {
    setShowAddSignInput(true);
    setShowAddDxInput(false);
    setOpenArea(false);
    setOpenSign(false);
    setOpenDx(false);
  };

  const showAddDxInputHandler = () => {
    setShowAddDxInput(true);
    setShowAddSignInput(false);
    setOpenArea(false);
    setOpenSign(false);
    setOpenDx(false);
  };

  const addNewSign = () => {
    if (newSignInput.trim() !== '') {
      const newItem = { label: newSignInput.trim(), value: newSignInput.trim() };
      setItemsSign(prev => [...prev, newItem]);
      setValueSign(newSignInput.trim());
      setNewSignInput('');
      setShowAddSignInput(false);
    }
  };

  const addNewDx = () => {
    if (newDxInput.trim() !== '') {
      const newItem = { label: newDxInput.trim(), value: newDxInput.trim() };
      setItemsDx(prev => [...prev, newItem]);
      setValueDx(newDxInput.trim());
      setNewDxInput('');
      setShowAddDxInput(false);
    }
  };

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
      await addDoc(collection(db, "mortalidad"), {
        fecha: form.fecha.toISOString(),
        AreaP: form.AreaProductiva,
        Jaula: form.Jaula,
        Muertos: form.Muertos,
        Signologia: form.Signologia,
        LNecropsia: form.LNecropsia,
        Dx: form.DxPresuntivo,
        Rip: form.Rip,
        Eut: form.Eut,
        observaciones: form.Observaciones,
      });
      Alert.alert('Éxito', 'Datos guardados correctamente.');
      setForm({
        fecha: new Date(),
        AreaProductiva: '',
        Jaula: '',
        Muertos: '',
        Signologia: '',
        LNecropsia: '',
        DxPresuntivo: '',
        Rip: '',
        Eut: '',
        Observaciones: '',
      });
      setValueArea(null);
      setValueSign(null);
      setValueDx(null);
      setItemsSign([
        { label: 'Diarrea', value: 'Diarrea' },
        { label: 'Moco', value: 'Moco' },
        { label: 'Venta vivoras', value: 'Venta vivoras' },
        { label: 'Timpanismo', value: 'Timpanismo' },
        { label: 'N/S', value: 'N/S' },
      ]);
      setItemsDx([
        { label: 'Henteropatia', value: 'Henteropatia' },
        { label: 'Aplastado', value: 'Aplastado' },
        { label: 'Anorexia', value: 'Anorexia' },
        { label: 'Hipotermia', value: 'Hipotermia' },
        { label: 'Diarrea', value: 'Diarrea' },
        { label: 'Inanición', value: 'Inanición' },
        { label: 'Tiña', value: 'Tiña' },
        { label: 'Asfixia', value: 'Asfixia' },
      ]);
      setShowAddSignInput(false);
      setShowAddDxInput(false);
      setNewSignInput('');
      setNewDxInput('');
    } catch (error) {
      Alert.alert('Error', 'No se pudieron guardar los datos.');
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Formulario Mortalidad</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha</Text>
        <Button title={form.fecha.toLocaleDateString()} onPress={showDatePicker} color="#74ae6bff" />
        <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Área Productiva</Text>
        <DropDownPicker
          open={openArea}
          value={valueArea}
          items={itemsArea}
          setOpen={setOpenArea}
          setValue={setValueArea}
          setItems={setItemsArea}
          onOpen={onOpenArea}
          placeholder="Selecciona un área productiva"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          listMode="SCROLLVIEW"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Jaula o ID</Text>
        <TextInput style={styles.input} value={form.Jaula} onChangeText={text => handleChange('Jaula', text)} placeholder="" />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Muertos</Text>
        <TextInput style={styles.input} value={form.Muertos} onChangeText={text => handleChange('Muertos', text)} placeholder=" " />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Signología</Text>
        <DropDownPicker
          open={openSign}
          value={valueSign}
          items={itemsSign}
          setOpen={setOpenSign}
          setValue={setValueSign}
          setItems={setItemsSign}
          onOpen={onOpenSign}
          placeholder="Selecciona o agrega signología"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          listMode="SCROLLVIEW"
        />
        {showAddSignInput ? (
          <View style={styles.addSignContainer}>
            <TextInput value={newSignInput} onChangeText={setNewSignInput} placeholder="Agregar nueva signología" style={styles.inputInline} />
            <View style={styles.buttonSpacing}>
              <Button title="Agregar" onPress={addNewSign} color="#84a97fff" />
            </View>
            <Button title="Cancelar" onPress={() => setShowAddSignInput(false)} color="#84a97fff" />
          </View>
        ) : (
          <TouchableOpacity onPress={showAddSignInputHandler}>
            <Text style={styles.addNewText}>+ Agregar nueva signología</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Lesiones necropsia</Text>
        <TextInput style={styles.input} value={form.LNecropsia} onChangeText={text => handleChange('LNecropsia', text)} placeholder=" " />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Dx Presuntivo</Text>
        <DropDownPicker
          open={openDx}
          value={valueDx}
          items={itemsDx}
          setOpen={setOpenDx}
          setValue={setValueDx}
          setItems={setItemsDx}
          onOpen={onOpenDx}
          placeholder="Selecciona Dx presuntivo"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          listMode="SCROLLVIEW"
        />
        {showAddDxInput ? (
          <View style={styles.addSignContainer}>
            <TextInput value={newDxInput} onChangeText={setNewDxInput} placeholder="Agregar nuevo Dx Presuntivo" style={styles.inputInline} />
            <View style={styles.buttonSpacing}>
              <Button title="Agregar" onPress={addNewDx} color="#84a97fff" />
            </View>
            <Button title="Cancelar" onPress={() => setShowAddDxInput(false)} color="#84a97fff" />
          </View>
        ) : (
          <TouchableOpacity onPress={showAddDxInputHandler}>
            <Text style={styles.addNewText}>+ Agregar nuevo Dx Presuntivo</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Rip</Text>
        <TextInput style={styles.input} value={form.Rip} onChangeText={text => handleChange('Rip', text)} placeholder=" " />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Eut</Text>
        <TextInput style={styles.input} value={form.Eut} onChangeText={text => handleChange('Eut', text)} placeholder=" " />
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
