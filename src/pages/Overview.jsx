
import React from 'react';

const Overview = () => {
  return (
    <div className="performance flex flex-col justify-betwee bg-white rounded-lg shadow-md p-5">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Performance</h1>
        <div className="flex justify-between">
          <p>Today's Low</p>
          <p>$46,930.22</p>
        </div>
        <div className="flex justify-between">
          <p>Today's High</p>
          <p>$49,343.83</p>
        </div>
      </div>
      <div className="flex justify-between space-y-2">
        <div>
          <p>52W Low</p>
          <p>$16,930.22</p>
        </div>
        <div>
          <p>52W High</p>
          <p>$49,743.83</p>
        </div>
      </div>

      <div className="mt-8 space-y-4 grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-bold">Fundamentals</h2>
          <div className="py-2 flex justify-between">
            <p className="text-gray-500">Bitcoin Price</p>
            <p>$16,815.46</p>
          </div>
          <hr />
          <div className="py-2 flex justify-between">
            <p className="text-gray-500">Trading Volume</p>
            <p>$23,249,202,782</p>
          </div>
          <hr />
          <div className="py-2 flex justify-between">
            <p className="text-gray-500">Market Cap</p>
            <p>$323,507,290,047</p>
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
    </div>
  );
};

export default Overview;
