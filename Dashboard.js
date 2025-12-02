import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { enableScreens } from 'react-native-screens'; 

enableScreens(); 

// Import screens from the 'pages' directory
import ExpenseListScreen from './pages/ExpenseListScreen';
import ExpenseDetailScreen from './pages/ExpenseDetailScreen';
import AddExpenseScreen from './pages/AddExpenseScreen'; 

const Stack = createNativeStackNavigator(); 

export default function Dashboard() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="ExpenseList"
        screenOptions={{
          headerStyle: { backgroundColor: '#1e293b' },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen name="ExpenseList" component={ExpenseListScreen} options={{ title: 'Wallet Watcher' }} />
        <Stack.Screen name="ExpenseDetail" component={ExpenseDetailScreen} options={{ title: 'Expense Details' }} />
        <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{ title: 'Add New Expense' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}