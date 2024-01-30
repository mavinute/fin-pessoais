import { useState, useEffect } from 'react'
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './contexts/TransactionsContext'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App(){
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }
  
  return(
    
    <TransactionsProvider>
      <Header onOpenNewTransaction={handleOpenNewTransactionModal} />

      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />

      <Dashboard/>
      <GlobalStyle/>
    </TransactionsProvider>
  )
}