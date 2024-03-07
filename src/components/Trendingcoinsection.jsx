import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trendingcoinsection = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );
        setTrendingCoins(response.data.coins.slice(0, 3));
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="flex flex-col p-6">
      <h2 className="text-2xl font-semibold mb-4">Trending Coins (24h)</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {trendingCoins.map((coin) => (
            <li key={coin.item.id} className="py-4 flex items-center">
              <div className="flex place-items-center font-medium">
                <img
                  src={coin.item.small}
                  alt={`${coin.item.name} logo`}
                  className="w-8 h-8 mr-2"
                />
                {coin.item.name} ({coin.item.symbol})
              </div>
              <span
                className={`flex items-center ml-auto rounded-md px-3 ${
                  coin.item.data.price_change_percentage_24h.usd < 0
                    ? 'bg-red-100 text-red-600'
                    : 'bg-green-100 text-green-600'
                }`}
              >
                {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Trendingcoinsection;
