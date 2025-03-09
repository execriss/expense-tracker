import { createContext, useContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';

export const Context = createContext();

export const useGLobalState = () => {
    const context = useContext(Context);
    return context;
}

const initialState = {
    transactions: []
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer , initialState, 
        () => {
            const localData = localStorage.getItem('transactions');
            return localData ? JSON.parse(localData) : initialState;
        }
    );

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state));
    }, [state]);
    
    const addTransaction = (transaction) => { 
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    return (
        <Context.Provider 
            value={{
                transactions: state.transactions,
                addTransaction,
                deleteTransaction
            }}
        >
            {children}
        </Context.Provider>
    )
}
