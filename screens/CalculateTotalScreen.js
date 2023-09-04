// CalculateTotalScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CalculateTotalScreen = ({ navigation, route }) => {
  const { totalContributors } = route.params; // Get the total number of contributors


  const calculateTotal = () => {
    // Calculate the total amount contributed by all contributors
    const totalAmount = contributions.reduce((total, contributor) => total + contributor.amountPaid, 0);
  
    // Now you can display the totalAmount or navigate to a summary screen
    // For demonstration, let's just display it in an alert
    alert(`Total Amount Contributed: ${totalAmount}`);
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Calculate Total</Text>
      <TouchableOpacity onPress={calculateTotal} style={styles.button}>
        <Text style={styles.buttonText}>Calculate Total</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fe6568',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CalculateTotalScreen;
