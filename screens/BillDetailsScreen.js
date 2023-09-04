import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const BillDetailsScreen = ({ route }) => {
  const navigation = useNavigation(); // Initialize the navigation object
  const { name } = route.params; // Get the name passed from the previous screen

  const [totalBillAmount, setTotalBillAmount] = useState("");
  const [numContributors, setNumContributors] = useState("");

  const addContributions = () => {
    navigation.navigate('ContributorEntry', {
        contributorNumber: 1,
        totalContributors: parseInt(numContributors, 10), // Parse as an integer
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, {name}!</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Total Bill Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the total bill amount"
          keyboardType="numeric"
          onChangeText={setTotalBillAmount}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Number of Contributors</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter the number of contributors"
          keyboardType="numeric"
          onChangeText={setNumContributors}
        />
      </View>
      <TouchableOpacity onPress={addContributions} style={styles.button}>
        <Text style={styles.buttonText}>Add Contributions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#3e4e5f",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#f5f5f5",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#f5f5f5",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#fe6568",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default BillDetailsScreen;
