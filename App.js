// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import BillDetailsScreen from './screens/BillDetailsScreen';
import ContributorEntryScreen from './screens/ContributorEntryScreen';
import CalculateTotalScreen from './screens/CalculateTotalScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="BillDetails" component={BillDetailsScreen} />
        <Stack.Screen name="ContributorEntry" component={ContributorEntryScreen} />
        <Stack.Screen name="CalculateTotal" component={CalculateTotalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
