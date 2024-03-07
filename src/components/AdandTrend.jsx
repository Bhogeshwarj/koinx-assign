import React from 'react'
import adimg from "../assets/image (1).png"
import Trendingcoinsection from './Trendingcoinsection'
const AdandTrend = () => {
  return (
    <>
<div className="ml-5 min-h-screen">
    <div className="card1 text-white flex items-center justify-center flex-col text-center">
        <h2 className="text-2xl font-bold my-2">Get Started with Coinx for free</h2>
        <p className="mb-4 px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati atque nobis maxime quos numquam esse, sequi corrupti, odio minima cupiditate ipsam? Impedit, quam eos! Soluta!</p>
        <img src={adimg} alt="" className="mb-1" />
        <button className='btn1  text-black px-4 pb-2 '>Get Started for Free </button>
    </div>
    <div className="mt-4 text-1xl font-semibold card2">
        <Trendingcoinsection />
    </div>
</div>

    </>
  )
}

export default AdandTrend