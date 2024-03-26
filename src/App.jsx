import React from 'react';
import { Header  } from './components/Header';
import { Balance } from './components/Balance';
import { Income } from './components/Income';
import {TransactionList} from './components/TransactionList';
import { AddTranstion } from './components/AddTranstion';


import { GlobalProvider } from './context/GlobalState';


import './App.css'

function App() {
  

  return (
    <GlobalProvider>
      <Header />

      <div className="container">
        <Balance />
        <Income />
       <TransactionList />
        <AddTranstion />
      </div>
    </GlobalProvider>
  );
}

export default App
