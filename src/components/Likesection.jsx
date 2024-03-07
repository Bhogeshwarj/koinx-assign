import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Likesection = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );
        setTrendingCoins(response.data.coins.slice(0, 10)); // Fetching 10 coins for more variety
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 4 cards at a time
    slidesToScroll: 1,
  };

  return (
    <div className="allsection mt-5 w-full">
      <div className="youmayalsolikesection py-5">
        <h3 className="text-2xl font-bold mb-4">You may also Like</h3>
        <div className="carousel-container ">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Slider {...sliderSettings}>
              {trendingCoins.map((coin) => (
                <div key={coin.item.id} className="coin-card border p-4">
                  <div className="flex items-center  mx-5">
                    <img
                      src={coin.item.small}
                      alt={`${coin.item.name} logo`}
                      className="w-8 h-8 mr-2"
                    />
                    <p className="font-bold">{coin.item.symbol}</p>
                  </div>
                  <div>
                    <p>Price: ${coin.item.data.price}</p>
                    <p>
                      Price Change: {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                    </p>
                  </div>
                  <img
                    src={coin.item.data.sparkline}
                    alt={`${coin.item.name} graph`}
                    className="w-16 h-8 mt-2"
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
      <div className="trendingCoinsSection">
        <h3 className="text-2xl font-bold mb-4">Trending Coins</h3>
        <div className="carousel-container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Slider {...sliderSettings}>
              {trendingCoins.map((coin) => (
                <div key={coin.item.id} className="coin-card border p-4">
                  <div className="flex items-center">
                    <img
                      src={coin.item.small}
                      alt={`${coin.item.name} logo`}
                      className="w-8 h-8 mr-2"
                    />
                    <p className="font-bold">{coin.item.symbol}</p>
                  </div>
                  <div>
                    <p>Price: ${coin.item.data.price}</p>
                    <p>
                      Price Change: {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                    </p>
                  </div>
                  <img
                    src={coin.item.data.sparkline}
                    alt={`${coin.item.name} graph`}
                    className="w-16 h-8 mt-2"
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default Likesection;
