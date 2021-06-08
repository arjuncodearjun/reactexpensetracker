import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'


/* Context provides a way to pass data through the
component tree without having to pass props down manually at every level.*/  

/*
*******************************************************************************
useReducer is usually preferable to useState when you have complex state logic 
that involves multiple sub-values or when the next state depends on the previous one.
*************************************************************************************
*/
// Initial State
// object
const initialState = {
    transactions:[

        ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component -- in order for other components to have acess to our GlobalContext
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions

    // Delete Transaction wala action
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    } 

    // Add Transaction wala action
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    } 


    return (<GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction}}>
    {children}
    </GlobalContext.Provider>);
}