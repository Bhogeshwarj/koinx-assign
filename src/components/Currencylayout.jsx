import React from 'react'

import TradingViewWidget from './TradingViewWidget'
import AdandTrend from './AdandTrend'

const Currencylayout = () => {
  return (
    <>
    <div className="container mt-5 mx-10 ">
    <div className=" my-3"> <span className='cl'> Cryptocurrencies &gt;&gt;</span> Bitcoin</div>
       <div className="mainsection flex justify-between">
            <div className="flex flex-col chartandinfo">
                    <div className='currencyInfo chart'>
                        <TradingViewWidget />
                    </div>
            </div>
            <div className="adandtrend">
                <AdandTrend/>
            </div>
       </div>
    </div>
    <div className="youmaylike">
            YouMayAlsoLike
        </div>
    </>
  )
}

export default Currencylayout