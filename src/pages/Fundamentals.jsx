import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fundamentals = () => {
  const [fundamentalsData, setFundamentalsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFundamentalsData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );

        const bitcoin = response.data.coins.find(coin => coin.item.name === 'Bitcoin');

        if (bitcoin) {
          setFundamentalsData(bitcoin.item);
        } else {
          console.error('Bitcoin data not found');
        }
      } catch (error) {
        console.error('Error fetching fundamentals data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFundamentalsData();
  }, []);

  return (
    <div className="bg-white rounded-md">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="mt-8 space-y-4 grid grid-cols-2 gap-6 m-10 py-5">
          <div>
            <h2 className="text-2xl font-bold">Fundamentals</h2>
            {fundamentalsData && (
              <>
                <div className="py-2 flex justify-between">
                  <p className="text-gray-500">Bitcoin Price</p>
                  <p>{fundamentalsData.data.price}</p>
                </div>
                <hr />
                <div className="py-2 flex justify-between">
                  <p className="text-gray-500">Trading Volume</p>
                  <p>{fundamentalsData.data.total_volume}</p>
                </div>
                <hr />
                <div className="py-2 flex justify-between">
                  <p className="text-gray-500">Market Cap</p>
                  <p>{fundamentalsData.data.market_cap}</p>
                </div>
                <hr />
                <div className="py-2 flex justify-between">
                  <p className="text-gray-500">24h price change</p>
                  <p>{`${fundamentalsData.data.price_change_percentage_24h.usd.toFixed(2)}%`}</p>
                </div>
                <hr />
                <div className="py-2 flex justify-between">
                  <p className="text-gray-500">7d Low / 7d High</p>
                  <p>$16,382.07/$16,874.12</p>
                </div>
              </>
            )}
          </div>
          <div>
            {fundamentalsData && (
              <>
                <div className="py-2 mt-4 flex justify-between">
                  <p className="text-gray-500">All-Time High</p>
                  <p> $73,835.57 </p>
                </div>
                <hr />
                <div className="py-2 flex justify-between">
                  <p className="text-gray-500">Volume/Market Cap</p>
                  <p> $1.265 trillion</p>
                </div>
                <hr />
                <div className="py-2 flex justify-between">
                  <p className="text-gray-500">Market Cap Dominance</p>
                  <p>High</p>
                </div>
                <hr />
                <div className="py-2 flex justify-between">
                  <p className="text-gray-500">Market Cap Rank</p>
                  <p>1</p>
                </div>
                <hr />
                <div className="py-2 flex justify-between">
                  <p className="text-gray-500">All-Time Low</p>
                  <p>$67.81</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Fundamentals;
