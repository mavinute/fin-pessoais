import React from 'react';
import ReactDOM from 'react-dom/client';
import { Model, createServer } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  // seeds(server) {
  //   server.db.loadData({
  //     transactions: [
  //       {
  //         id: 1,
  //         title: 'Desenvolvimento Web',
  //         type: 'deposit',
  //         category: 'Trabalho',
  //         amount: 2000,
  //         createdAt: new Date('2023-10-01 17:00:00')
  //       },
  //       {
  //         id: 2,
  //         title: 'Aluguel',
  //         type: 'withdraw',
  //         category: 'Moradia',
  //         amount: 700,
  //         createdAt: new Date('2023-10-02 07:00:00')
  //       }
  //     ]
  //   })
  // },
  
  routes(){
    this.namespace = 'api'
    
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);