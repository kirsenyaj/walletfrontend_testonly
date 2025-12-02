import React from 'react';
import { View, Text, Button, Alert } from 'react-native'; 
import axios from 'axios';
import { detailStyles } from '../styles'; // 👈 IMPORTED STYLES

const ExpenseDetailScreen = ({ route, navigation }) => {
  const { expense } = route.params;

  const handleDelete = async () => {
    try {
      // ⚠️ IMPORTANT: REPLACE URL - Uses the expense ID
      const API_URL = `https://walletwatcher-backend-xxxx.onrender.com/registration/${expense.id}`;
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
      
      <View style={{ marginTop: 30 }}>
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