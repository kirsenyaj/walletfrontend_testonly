import React from 'react';
import { View, Text, Button, Alert } from 'react-native'; 
import axios from 'axios';
import { detailStyles } from '../styles'; 

const ExpenseDetailScreen = ({ route, navigation }) => {
  const { expense } = route.params;

  const handleDelete = async () => {
    try {
      const API_URL = `http://127.0.0.1:8000/registration/${expense.id}`;
      await axios.delete(API_URL);

      Alert.alert("Deleted", "Expense removed");
      navigation.goBack(); 
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Could not delete");
    }
  };

  return (
    <View style={detailStyles.container}>
      <Text style={detailStyles.label}>Title</Text>
      <Text style={detailStyles.value}>{expense.title}</Text>
      <Text style={detailStyles.label}>Amount</Text>
      <Text style={detailStyles.value}>P{expense.amount}</Text>
      <Text style={detailStyles.label}>Category</Text>
      <Text style={detailStyles.value}>{expense.category || 'Uncategorized'}</Text>
      
      {/* 👈 NEW EDIT BUTTON VIEW */}
      <View style={{ marginTop: 30 }}>
        <Button 
          title="Edit Expense" 
          color="#f59e0b" // Amber color for edit
          onPress={() => navigation.navigate('EditExpense', { expense: expense })}
        />
      </View>
      
      <View style={{ marginTop: 15 }}> 
        <Button 
          title="Delete Expense" 
          color="red" 
          onPress={handleDelete} 
        />
      </View>
    </View>
  );
};

export default ExpenseDetailScreen;