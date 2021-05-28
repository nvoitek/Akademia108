import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
import CryptoRates from './CryptoRates';

function App() {

  const [cryptoRates, setCryptoRates] = useState([]);
  const [filter, setFilter] = useState('');

  const onFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const onRefreshClick = () => {
    axios.get('https://blockchain.info/pl/ticker')
      .then(res => {
        const tickers = res.data;

        let newCryptoRates = [];

        for (let ticker in tickers) {
          let lastCrypto = cryptoRates.find(x => x.currency === ticker);

          let newCrypto = {
            currency: ticker,
            symbol: tickers[ticker].symbol,
            buy: tickers[ticker].buy,
            sell: tickers[ticker].sell,
            lastRate: tickers[ticker].last,
          };

          if (lastCrypto !== undefined) {
              if (newCrypto.lastRate > lastCrypto.lastRate) {
                  newCrypto.cssClass = 'green';
                  newCrypto.htmlArrow = String.fromCharCode(8593);
              } else if (newCrypto.lastRate < lastCrypto.lastRate) {
                  newCrypto.cssClass = 'red';
                  newCrypto.htmlArrow = String.fromCharCode(8595);
              } else {
                  newCrypto.cssClass = 'blue';
                  newCrypto.htmlArrow = String.fromCharCode(8596);
              }
          } else {
              newCrypto.cssClass = 'blue';
              newCrypto.htmlArrow = String.fromCharCode(8596); 
          }

          newCryptoRates.push(newCrypto);
        }

        setCryptoRates(newCryptoRates);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Rate</h1>
      </header>
      <button onClick={onRefreshClick}>Refresh</button>
      <input type="text" placeholder="filter" value={filter} onChange={onFilterChange} />
      <CryptoRates cryptoRates={cryptoRates} />
    </div>
  );
}

export default App;
