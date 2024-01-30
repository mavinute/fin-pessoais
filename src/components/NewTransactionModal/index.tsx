import { useState, FormEvent, useContext } from 'react'
import Modal from 'react-modal'

import { TransactionsContext } from '../../contexts/TransactionsContext'

//import { api } from '../../services/api'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransctionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){
    const { createTransaction } = useContext(TransactionsContext)
    
    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')

    //console.log(type)

    async function handleCreateNewTransaction(e: FormEvent){
        e.preventDefault()

        if(title === '' || category === '' || amount === 0){
            return alert('Preencha corretamente')
        }

        await createTransaction({
            amount,
            category,
            title,
            type
        })

        onRequestClose()

        setCategory('')
        setTitle('')
        setType('deposit')
        setAmount(0)
    }

    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <Container onSubmit={handleCreateNewTransaction}>
                <button 
                    type='button' 
                    className='react-modal-close' 
                    onClick={onRequestClose}
                >
                    <img src={closeImg} alt="fechar" />
                </button>

                <h2>Cadastrar Transação</h2>
                <input
                    type='text'
                    placeholder='nome'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type='number'
                    placeholder='valor'
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                <input
                    type='text'
                    placeholder='categoria'
                    value={category} //aponta para a propriedade do estado
                    onChange={(e) => setCategory(e.target.value)} //função que executa quando o valor for alterado 
                />
                <TransctionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <strong>Entrada</strong>
                        <img src={incomeImg} alt="entrada" />
                    </RadioBox>
                    <RadioBox 
                        type='button'
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <strong>Saída</strong>
                        <img src={outcomeImg} alt="saida" />
                    </RadioBox>
                </TransctionTypeContainer>
                <button type='submit'>
                    Salvar
                </button>
          </Container>
      </Modal>
    )
}