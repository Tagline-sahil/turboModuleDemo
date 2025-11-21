import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import NativeLocalStorage from './specs/NativeLocalStorage';
// import NativeCalculator from './specs/NativeCalculator';

const App = () => {
  const [value, setValue] = React.useState<string | null>(null);
  const [editingValue, setEditingValue] = React.useState<string | null>(null);

  const [firstNumber, setFirstNumber] = React.useState<string | null>(null);
  const [secondNumber, setSecondNumber] = React.useState<string | null>(null);
  const [result, setResult] = React.useState<string | null>(null);

  React.useEffect(() => {
    const storedValue = NativeLocalStorage?.getItem('myKey');
    setValue(storedValue ?? '');
  }, []);

  function saveValue() {
    NativeLocalStorage?.setItem(editingValue ?? '', 'myKey');
    setValue(editingValue);
  }

  function clearAll() {
    NativeLocalStorage?.clear();
    setValue('');
  }

  function deleteValue() {
    NativeLocalStorage?.removeItem('myKey');
    setValue('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Current stored value is: {value ?? 'No Value'}
      </Text>
      <TextInput
        placeholder="Enter the text you want to store"
        style={styles.textInput}
        onChangeText={setEditingValue}
      />
      <Button title="Save" onPress={saveValue} />
      <Button title="Delete" onPress={deleteValue} />
      <Button title="Clear" onPress={clearAll} />

      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Add two numbers:{result ?? ''}</Text>
        <TextInput
          placeholder="Enter the first number"
          style={styles.textInput}
          onChangeText={setFirstNumber}
        />
        <TextInput
          placeholder="Enter the other number"
          style={styles.textInput}
          onChangeText={setSecondNumber}
        />
        <Button
          title="Add"
          onPress={() =>
            setResult(
              NativeLocalStorage?.add(
                Number(firstNumber ?? ''),
                Number(secondNumber ?? ''),
              )?.toString() ?? '',
            )
          }
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 100 },
  text: {
    margin: 10,
    fontSize: 20,
  },
  textInput: {
    margin: 10,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'lightgray',
    paddingVertical: 10,
  },
});

//NativeLocalStorage/turboModuleDemo-Bridging-Header.h
