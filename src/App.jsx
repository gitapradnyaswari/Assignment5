import React from 'react';
import './App.css';
import CurrencyTable from './components/CurrencyTable';

function App() {
  return (
    <div className="App container my-5">
      <h1 className="text-center">Currency Rates (Base: USD)</h1>
      <CurrencyTable />
    </div>
  );
}

export default App;