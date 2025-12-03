import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native'; 
import axios from 'axios';
import { addStyles } from '../styles'; // Reusing input styles

const EditExpenseScreen = ({ route, navigation }) => {
  // Get the existing expense object passed from ExpenseDetailScreen
  const { expense } = route.params;

  // Initialize state with the existing expense data
  const [title, setTitle] = useState(expense.title);
  // Convert number to string for TextInput
  const [amount, setAmount] = useState(expense.amount.toString()); 
  const [category, setCategory] = useState(expense.category);

  const handleSave = async () => {
    try {
      // ⚠️ IMPORTANT: REPLACE WITH YOUR ACTUAL RENDER BACKEND URL. 
      // Uses the expense ID for the PUT request.
      const API_URL = `http://127.0.0.1:8000/registration/${expense.id}`; 
      
      await axios.put(API_URL, {
        title: title,
        // Ensure amount is parsed back to a number before sending
        amount: parseFloat(amount), 
        category: category,
        user: expense.user, // Re-use the existing user ID
      });

      Alert.alert("Success", "Expense Updated!");
      
      // Go back two screens (Detail -> List) to trigger the list refresh.
      navigation.pop(2); 
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Could not update expense.");
    }
  };

  return (
    <View style={addStyles.container}>
      <TextInput 
        style={addStyles.input} 
        placeholder="Title" 
        placeholderTextColor="#94a3b8" 
        value={title} 
        onChangeText={setTitle} 
      />
      <TextInput 
        style={addStyles.input} 
        placeholder="Amount" 
        placeholderTextColor="#94a3b8" 
        keyboardType="numeric" 
        value={amount} 
        onChangeText={setAmount} 
      />
      <TextInput 
        style={addStyles.input} 
        placeholder="Category" 
        placeholderTextColor="#94a3b8" 
        value={category} 
        onChangeText={setCategory} 
      />
      <Button title="Update Expense" color="#f59e0b" onPress={handleSave} />
    </View>
  );
};

export default EditExpenseScreen;