import { useContext } from 'react'

import { TransactionsContext } from '../../contexts/TransactionsContext'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles'

export function Summary(){
    const { transactions } = useContext(TransactionsContext)

    //console.log(data)

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if(transaction.type === 'deposit'){
    //         return acc + transaction.amount
    //     }
    // }, 0)

    const resultsSummary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount
            acc.totals += transaction.amount
        }else{
            acc.withdraws += transaction.amount
            acc.totals -= transaction.amount
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        totals: 0
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(resultsSummary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="saidas" />
                </header>
                <strong>- {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(resultsSummary.withdraws)}</strong>
            </div>
            <div className='box-hightlight'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(resultsSummary.totals)}</strong>
            </div>
        </Container>
    )
}