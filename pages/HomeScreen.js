import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'; 
// Importing styles from the root directory (../)
import { detailStyles, homeStyles } from '../styles'; 

const HomeScreen = ({ navigation }) => {
  
  // 1. View Expense List (Read)
  const handleViewExpenses = () => {
    navigation.navigate('ExpenseList');
  };
  
  // 2. Add New Expense (Create)
  const handleAddExpense = () => {
    navigation.navigate('AddExpense');
  };

  const ActionButton = ({ title, onPress, color }) => (
    <TouchableOpacity style={[homeStyles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={homeStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={detailStyles.container}>
      <Text style={homeStyles.header}>Wallet Watcher</Text>
      <Text style={homeStyles.subheader}>Select an action to begin:</Text>

      <View style={homeStyles.buttonGroup}>
        
        <ActionButton 
          title="View Expense List" 
          onPress={handleViewExpenses} 
          color="#7c3aed" // Primary Action
        />
        
        <ActionButton 
          title="Add New Expense" 
          onPress={handleAddExpense} 
          color="#059669" // Creation Action
        />
        
      </View>
    </View>
  );
};

export default HomeScreen;