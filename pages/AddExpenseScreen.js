import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native'; 
import axios from 'axios';
import { addStyles } from '../styles'; // 👈 IMPORTED STYLES

const AddExpenseScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSave = async () => {
    try {
      // ⚠️ IMPORTANT: REPLACE WITH YOUR ACTUAL RENDER BACKEND URL
      const API_URL = 'https://walletwatcher-backend-xxxx.onrender.com/registration'; 
      
      await axios.post(API_URL, {
        title: title,
        amount: parseFloat(amount), 
        category: category,
        user: 1, 
      });

      Alert.alert("Success", "Expense Added!");
      navigation.goBack(); 
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Could not save expense.");
    }
  };

  return (
    <View style={addStyles.container}>
      <TextInput style={addStyles.input} placeholder="Title" placeholderTextColor="#94a3b8" value={title} onChangeText={setTitle} />
      <TextInput style={addStyles.input} placeholder="Amount" placeholderTextColor="#94a3b8" keyboardType="numeric" value={amount} onChangeText={setAmount} />
      <TextInput style={addStyles.input} placeholder="Category" placeholderTextColor="#94a3b8" value={category} onChangeText={setCategory} />
      <Button title="Save Expense" color="#7c3aed" onPress={handleSave} />
    </View>
  );
};

export default AddExpenseScreen;