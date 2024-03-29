import { createContext, useState, useEffect, ReactNode } from 'react'

import { api } from '../services/api';

interface Transaction{
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

interface TransactionsProviderProps{
    children: ReactNode;
}

//type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>
//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>

interface TransactionInput {
    title: string;
    type: string;
    category: string;
    amount: number;
}

interface TransactionsContextDate {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<TransactionsContextDate>(
    {} as TransactionsContextDate
)

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])
    //console.log(transactions)

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })

        //console.log(response.data)

        const {transaction} = response.data

        setTransactions([...transactions, transaction])
    }

    return(
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )

}