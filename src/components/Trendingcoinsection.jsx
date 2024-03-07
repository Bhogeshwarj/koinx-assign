// TrendingCoins.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrendingCoins = () => {
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
    <div className='flex flex-col p-6'>
      <h2 className="text-2xl font-semibold mb-4 ">Trending Coins (24h)</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='flex flex-col'>

        <ul>
          {trendingCoins.map((coin) => (
              <li key={coin.item.id} className='py-4'>{coin.item.name}</li>
              ))}
        </ul>
              </div>
      )}
    </div>
  );
};

export default TrendingCoins;
