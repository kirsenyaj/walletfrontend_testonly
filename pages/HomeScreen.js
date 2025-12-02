import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'; 
import { detailStyles } from '../styles'; 

const HomeScreen = ({ navigation }) => {
  return (
    <View style={detailStyles.container}>
      <Text style={styles.welcomeText}>
        Welcome to Wallet Watcher
      </Text>
      <Text style={styles.subtitleText}>
        Your Personal Expense Tracking System
      </Text>
      
      {/* Button to navigate to the Expense List */}
      <View style={styles.buttonContainer}> 
        <Button 
          title="View Expenses" 
          color="#7c3aed" // Reusing the FAB color for consistency
          onPress={() => navigation.navigate('ExpenseList')}
        />
      </View>
    </View>
  );
};

// Simple local styles for the text on this screen
const styles = StyleSheet.create({
  welcomeText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 10,
  },
  subtitleText: {
    color: '#94a3b8',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 50,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  }
});

export default HomeScreen;