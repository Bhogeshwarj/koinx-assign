import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Overview = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );

        const bitcoin = response.data.coins.find(coin => coin.item.name === 'Bitcoin');

        if (bitcoin) {
          setCryptoData(bitcoin.item);
        } else {
          console.error('Bitcoin data not found');
        }
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="performance flex flex-col justify-betwee bg-white rounded-lg shadow-md p-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Performance</h1>
            <div className="flex justify-between">
              <p>Today's Low</p>
              <p>{cryptoData.data.price}</p>
            </div>
            <div className="flex justify-between">
              <p>Today's High</p>
              <p>{cryptoData.data.total_volume}</p>
            </div>
          </div>
          <div className="flex justify-between space-y-2">
            <div>
              <p>52W Low</p>
              <p>{cryptoData.data.market_cap}</p>
            </div>
            <div>
              <p>52W High</p>
              <p>{cryptoData.data.price_change_percentage_24h.usd}</p>
            </div>
          </div>

          <div className="mt-8 space-y-4 grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-bold">Fundamentals</h2>
              <div className="py-2 flex justify-between">
                <p className="text-gray-500">Bitcoin Price</p>
                <p>{cryptoData.data.price}</p>
              </div>
              <hr />
              <div className="py-2 flex justify-between">
                <p className="text-gray-500">Trading Volume</p>
                <p>{cryptoData.data.total_volume}</p>
              </div>
              <hr />
              <div className="py-2 flex justify-between">
                <p className="text-gray-500">Market Cap</p>
                <p>{cryptoData.data.market_cap}</p>
              </div>
              <hr />
              <div className="py-2 flex justify-between">
                <p className="text-gray-500">24h Low/24h High</p>
                <p>$16,382.07/$16,874.12</p>
              </div>
              <hr />
              <div className="py-2 flex justify-between">
                <p className="text-gray-500">7d Low / 7d High</p>
                <p>$16,382.07/$16,874.12</p>
              </div>
            </div>
            <div>
              <div className="py-2 mt-4  flex justify-between">
                <p className="text-gray-500">All-Time High</p>
                <p>$69,044.77 (-75.6%)</p>
              </div>
              <hr />
              <div className="py-2 flex justify-between">
                <p className="text-gray-500">Volume/Market Cap</p>
                <p>0.0718</p>
              </div>
              <hr />
              <div className="py-2 flex justify-between">
                <p className="text-gray-500">Market Cap Dominance</p>
                <p>38.343%</p>
              </div>
              <hr />
              <div className="py-2 flex justify-between">
                <p className="text-gray-500">Market Cap Rank</p>
                <p>#1</p>
              </div>
              <hr />
              <div className="py-2 flex justify-between">
                <p className="text-gray-500">All-Time Low</p>
                <p>$67.81 (24729.1%)</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Overview;
