// BitcoinPrice.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import coinimg from '../assets/image (9).png';

const BitcoinPrice = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true'
        );
        setBitcoinData(response.data.bitcoin);
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBitcoinPrice();
  }, []);

  return (
    <>
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="coinInfoSection m-6">
            <div className="coinName flex flex-grow items-center">
              <img src={coinimg} alt="" className="w-9 h-9" />
              <h2 className="text-2xl px-2">BitCoin</h2>
              <h3 className="text-gray-500">BTC</h3>
              <span className="flex items-center ml-4 bg-gray-400 text-white rounded-md py-1 px-2">
                <span className="mr-1">Rank #1</span>
              </span>
            </div>
            <div className="flex pt-8 items-center">
              <p className="text-3xl font-semibold">
                ${bitcoinData.usd.toLocaleString()}
              </p>
              <span
                className={`flex items-center ml-4 rounded-md px-3 ${
                  bitcoinData.usd_24h_change < 0
                    ? 'bg-red-100 text-red-600'
                    : 'bg-green-100 text-green-600'
                }`}
              >
                <span>{bitcoinData.usd_24h_change.toFixed(2)}%</span>
              </span>
              <p className="text-gray-400 pl-3">(24H)</p>
            </div>
            <p className="text-base py-1">
              ₹ {bitcoinData.inr.toLocaleString()}
            </p>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default BitcoinPrice;
