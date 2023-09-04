import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = ({ navigation }) => {
  const [name, setName] = useState(''); // Initialize the name state

  const startBill = () => {
    navigation.navigate('BillDetails', { name });
  };

  // Function to handle changes in the name input
  const handleNameChange = (text) => {
    setName(text); // Update the 'name' state with the input text
  };

  return (
    <LinearGradient
      colors={['#0e151e', '#3e4e5f']}
      style={styles.container}>
      <Text style={styles.title}>Welcome to Bill Splitter</Text>
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        onChangeText={handleNameChange} // Call the handleNameChange function on text input change
        value={name} // Bind the input value to the 'name' state
      />
      <TouchableOpacity
        onPress={startBill}
        style={[styles.button, !name && styles.disabledButton]} // Apply styles conditionally based on 'name' state
        disabled={!name} // Disable the button when 'name' is empty
      >
        <Text style={styles.buttonText}>Start Bill</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fe6568',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  disabledButton: {
    backgroundColor: '#ccc', // Color for the disabled button
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
