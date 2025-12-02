import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native'; 
import { detailStyles } from '../styles'; 
// Note: We use the `detailStyles` container for the background and padding.

const HomeScreen = ({ navigation }) => {
  
  // 1. Read/View Expense Log
  const handleViewExpenses = () => {
    navigation.navigate('ExpenseList');
  };
  
  // 2. Create/Add New Expense
  const handleAddExpense = () => {
    navigation.navigate('AddExpense');
  };

  const ActionButton = ({ title, onPress, color }) => (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={detailStyles.container}>
      <Text style={styles.header}>Wallet Watcher</Text>
      <Text style={styles.subheader}>Your Personal Finance Hub</Text>

      <View style={styles.gridContainer}>
        {/* Row 1 */}
        <View style={styles.row}>
          <ActionButton 
            title="View Expenses" 
            onPress={handleViewExpenses} 
            color="#7c3aed" // Violet
          />
          <ActionButton 
            title="Add Expense" 
            onPress={handleAddExpense} 
            color="#059669" // Emerald Green
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 5,
  },
  subheader: {
    color: '#94a3b8',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  gridContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    width: '48%', // Ensures two buttons fit with a small gap
    height: 120,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  }
});

export default HomeScreen;