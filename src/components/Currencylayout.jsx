import React from 'react';
import Likesection from './Likesection';

import TradingViewWidget from './TradingViewWidget';
import AdandTrend from './AdandTrend';
import Infolayout from './Info';
import Aboutcoin from './AboutCoin';
import Bitcoinsect from './Bitcoinsect';
const Currencylayout = () => {
  return (
    <>
    <div className="flex flex-grow">
      <div className="mt-5 mx-10">
        <div className="my-3">
          <span className="cl"> Cryptocurrencies &gt;&gt;</span> Bitcoin
        </div>
        <div className="mainsection flex justify-start">
          <div className="flex flex-col chartandinfo">
            <div className="bitcoinSection bg-white w-full">
              <Bitcoinsect />
            </div>
            <div className='currencyInfo chart w-full'>
              <TradingViewWidget />
            </div>
              <div className="info">
                  <Infolayout />
              </div>
              <Aboutcoin />
          </div>
          <div className="adandtrend">
            <AdandTrend />
          </div>
        </div>
      </div>
    </div>
      <div className="youmayalsolike bg-white text-black w-full">
        <Likesection />
      </div>
      </>
  );
}

export default Currencylayout;
