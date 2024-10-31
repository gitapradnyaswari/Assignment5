import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CurrencyTable() {
  const [rates, setRates] = useState([]);
  const API_KEY = '95d7d0fc685e4169b6a013b6fe543572';
  const targetCurrencies = ['CAD', 'IDR', 'JPY', 'CHF', 'EUR', 'GBP'];

  useEffect(() => {
    fetch(`https://api.currencyfreaks.com/latest?apikey=${API_KEY}&symbols=${targetCurrencies.join(',')}`)
      .then(response => response.json())
      .then(data => {
        const fetchedRates = targetCurrencies.map(currency => {
          const rate = parseFloat(data.rates[currency]);
          return {
            currency,
            exchangeRate: rate,
            weBuy: (rate * 1.05).toFixed(4),
            weSell: (rate * 0.95).toFixed(4)
          };
        });
        setRates(fetchedRates);
      })
      .catch(error => console.error('Error fetching the currency data:', error));
  }, []);

  return (
    <table className="table table-striped table-bordered mt-4">
      <thead className="thead-dark">
        <tr>
          <th>Currency</th>
          <th>We Buy</th>
          <th>Exchange Rate</th>
          <th>We Sell</th>
        </tr>
      </thead>
      <tbody>
        {rates.map(rate => (
          <tr key={rate.currency}>
            <td>{rate.currency}</td>
            <td>{rate.weBuy}</td>
            <td>{rate.exchangeRate.toFixed(4)}</td>
            <td>{rate.weSell}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CurrencyTable;