import { StyleSheet } from 'react-native';

// Styles for ExpenseListScreen
export const listStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0F172a', padding: 20 },
    card: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#1e293b', padding: 15, borderRadius: 8, marginBottom: 10 },
    title: { color: 'white', fontSize: 16, fontWeight: 'bold' },
    date: { color: '#94a3b8', fontSize: 12 },
    amount: { color: '#db2777', fontSize: 26, fontWeight: 'bold' },
    fab: { position: 'absolute', right: 20, bottom: 28, backgroundColor: '#7c3aed', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center'},
    fabText: { color: 'white', fontSize: 30, marginTop: -5 }
});

// Styles for AddExpenseScreen and EditExpenseScreen
export const addStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0F172a', padding: 20 },
    input: { backgroundColor: '#1e293b', color: 'white', padding: 15, borderRadius: 8, marginBottom: 15, fontSize: 16 },
});

// Styles for ExpenseDetailScreen (and container background for all screens)
export const detailStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0f172a', padding: 20 },
    label: { color: '#94a3b8', fontSize: 14, marginTop: 15},
    value: { color: 'white', fontSize: 18, fontWeight: '600' }
});

// NEW: Styles specifically for the 2-Button HomeScreen
export const homeStyles = StyleSheet.create({
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
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 40,
    },
    buttonGroup: {
      width: '100%',
      alignItems: 'center',
      marginTop: 20,
    },
    button: {
      width: '80%', 
      height: 80,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      marginBottom: 20, 
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    buttonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center',
    }
});