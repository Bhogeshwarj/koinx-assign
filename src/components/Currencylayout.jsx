import React from 'react'

import TradingViewWidget from './TradingViewWidget'
import AdandTrend from './AdandTrend'
import Infolayout from './Info'
import Aboutcoin from './AboutCoin'


const Currencylayout = () => {
  return (
    <>
    <div className="container mt-5 mx-10 ">
    <div className=" my-3"> <span className='cl'> Cryptocurrencies &gt;&gt;</span> Bitcoin</div>
       <div className="mainsection flex justify-between">
            <div className="flex flex-col chartandinfo">
                    <div className='currencyInfo chart '>
                        <TradingViewWidget />
                        <div className="info">
                                <Infolayout />
                        </div>
                        <Aboutcoin />
                    </div>
            </div>
            <div className="adandtrend">
                <AdandTrend/>
            </div>
      
       </div>
    </div>
   
   <div className="hello">
    <p>hi</p>
   </div>
    </>
  )
}

export default Currencylayout