// ContributorEntryScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ContributorEntryScreen = ({ route, navigation }) => {
  const { contributorNumber, totalContributors } = route.params; // Get contributor number and total contributors
  const [contributions, setContributions] = useState([]);
  const [contributorName, setContributorName] = useState('');
  const [amountPaid, setAmountPaid] = useState('');

  const onNext = () => {
    const newContributor = {
      name: contributorName,
      amountPaid: parseFloat(amountPaid), // Parse the amountPaid as a float
    };
    
    setContributions([...contributions, newContributor]);
  
    // Navigate to the next contributor screen or the calculate total screen if this is the last contributor
    if (contributorNumber < totalContributors) {
      navigation.push('ContributorEntry', {
        contributorNumber: contributorNumber + 1,
        totalContributors,
      });
    } else {
      navigation.navigate('CalculateTotal');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contributor {contributorNumber}/{totalContributors}</Text>
      <TextInput
        placeholder="Enter contributor's name"
        style={styles.input}
        onChangeText={setContributorName}
      />
      <TextInput
        placeholder="Enter amount paid"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setAmountPaid}
      />
      <TouchableOpacity onPress={onNext} style={styles.button}>
        <Text style={styles.buttonText}>
          {contributorNumber < totalContributors ? 'Next' : 'Calculate Total'}
        </Text>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
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

export default ContributorEntryScreen;
