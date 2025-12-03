import React, { useState, useEffect } from 'react'; 
import { View, Text, FlatList, TouchableOpacity, RefreshControl, Alert } from 'react-native'; 
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native'; 
import { listStyles } from '../styles'; 

const ExpenseListScreen = ({ navigation }) => {
  const [expenses, setExpenses] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const isFocused = useIsFocused(); 

  const fetchExpenses = async () => {
    setIsRefreshing(true);
    try {
      // ⚠️ IMPORTANT: REPLACE WITH YOUR BACKEND URL
      const API_URL = 'http://127.0.0.1:8000/registration'; 
      const response = await axios.get(API_URL);
      setExpenses(response.data);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Could not fetch expenses.");
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchExpenses();
    }
  }, [isFocused]);

  return (
    <View style={listStyles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={listStyles.card}
            onPress={() => navigation.navigate('ExpenseDetail', { expense: item })}
          >
            <View>
              <Text style={listStyles.title}>{item.title}</Text>
              <Text style={listStyles.date}>{item.date}</Text>
            </View>
            <Text style={listStyles.amount}>P{item.amount}</Text>
          </TouchableOpacity>
        )}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={fetchExpenses}
            tintColor="#7c3aed"
          />
        }
      />
      <TouchableOpacity
        style={listStyles.fab}
        onPress={() => navigation.navigate('AddExpense')}
      >
        <Text style={listStyles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpenseListScreen;