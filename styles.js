import { StyleSheet } from 'react-native';

// Styles for ExpenseListScreen
export const listStyles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#0F172a', 
        padding: 20 
    },
    card: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: '#1e293b', 
        padding: 15, 
        borderRadius: 8, 
        marginBottom: 10 
    },
    title: { 
        color: 'white', 
        fontSize: 16, 
        fontWeight: 'bold' 
    },
    date: { 
        color: '#94a3b8', 
        fontSize: 12 
    },
    amount: { 
        color: '#db2777', // Rose color for amount
        fontSize: 26, 
        fontWeight: 'bold' 
    },
    fab: { 
        position: 'absolute', 
        right: 20, 
        bottom: 28, 
        backgroundColor: '#7c3aed', // Violet color
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fabText: { 
        color: 'white', 
        fontSize: 30, 
        marginTop: -5 
    }
});

// Styles for AddExpenseScreen
export const addStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F172a',
        padding: 20,
    },
    input: {
        backgroundColor: '#1e293b',
        color: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
    },
});

// Styles for ExpenseDetailScreen
export const detailStyles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#0f172a', 
        padding: 20
    },
    label: { 
        color: '#94a3b8', 
        fontSize: 14, 
        marginTop: 15
    },
    value: { 
        color: 'white', 
        fontSize: 18, 
        fontWeight: '600' 
    }
});