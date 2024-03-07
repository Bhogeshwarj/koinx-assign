import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Likesection = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );
        setTrendingCoins(response.data.coins);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="allsection">
      <div className="youmayalsolikesection">
        <h3 className='text-1xl'>You may also Like</h3>
        <div className="carousel-container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="horizontal-carousel">
              {trendingCoins.map((coin) => (
                <div key={coin.item.id} className="coin-card">
                  <img
                    src={coin.item.small}
                    alt={`${coin.item.name} logo`}
                    className="w-8 h-8"
                  />
                  <div>
                    <p>{coin.item.name} ({coin.item.symbol})</p>
                    <p>Price: ${coin.item.data.price}</p>
                    <p>
                      Price Change: {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                    </p>
                  </div>
                  <img
                    src={coin.item.data.sparkline}
                    alt={`${coin.item.name} graph`}
                    className="w-16 h-8"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="trendingCoinsSection">
        <h3>Trending Coins</h3>
        <div className="carousel-container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="horizontal-carousel">
              {trendingCoins.map((coin) => (
                <div key={coin.item.id} className="coin-card">
                  <img
                    src={coin.item.small}
                    alt={`${coin.item.name} logo`}
                    className="w-8 h-8"
                  />
                  <div>
                    <p>{coin.item.name} ({coin.item.symbol})</p>
                    <p>Price: ${coin.item.data.price}</p>
                    <p>
                      Price Change: {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                    </p>
                  </div>
                  <img
                    src={coin.item.data.sparkline}
                    alt={`${coin.item.name} graph`}
                    className="w-16 h-8"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Likesection;
