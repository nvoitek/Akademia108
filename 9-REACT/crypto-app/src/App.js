import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CryptoRates from './CryptoRates';

function App() {

  const [cryptoRates, setCryptoRates] = useState([]);
  const [filteredCryptoRates, setFilteredCryptoRates] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    console.log(`Use Effect - ${Date.now()}`);
    getCryptoRates();
  }, []);

  useEffect(() => {
    let intervalId = setInterval(() => getCryptoRates(), 5000);

    return function cleanup() {
     console.log(`Clean Interval - ${Date.now()}`);
     clearInterval(intervalId);
    }
  }, [cryptoRates, filter]);

  const onFilterChange = (e) => {
    let newFilter = e.target.value;

    filterCryptoRates(cryptoRates, newFilter);
  }

  const filterCryptoRates = (newCryptoRates, currentFilter) => {
    setFilter(currentFilter);

    let newFilteredCryptoRates = newCryptoRates.filter(x => x.currency.includes(currentFilter.trim().toUpperCase()));

    setFilteredCryptoRates(newFilteredCryptoRates);
  };

  const getCryptoRates = () => {
    console.log(`Get Data - ${Date.now()}`);

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
        filterCryptoRates(newCryptoRates, filter);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Crypto Rate</h1>
      </header>
      {/* <button onClick={onRefreshClick}>Refresh</button> */}
      <input type="text" placeholder="filter" value={filter} onChange={onFilterChange} />
      <CryptoRates cryptoRates={filteredCryptoRates} />
    </div>
  );
}

export default App;
