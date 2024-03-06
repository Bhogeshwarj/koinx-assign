import React from 'react';

const AboutCoin = () => {
  return (
    <div className="aboutbit bg-white my-5 p-5">
      <h2 className="text-2xl font-bold">About</h2>
      <h3 className="text-xl font-bold mt-4">What is Bitcoin</h3>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quaerat quos odio
        minus quidem dolorem placeat quam perferendis, nulla omnis pariatur tempora, excepturi
        nostrum. Saepe magnam suscipit quasi quidem optio.
      </p>
      <hr className="my-4" />
      <h3 className="text-xl font-bold">Lorem ipsum dolor sit amet.</h3>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum debitis ullam omnis eveniet
        beatae animi natus, incidunt deserunt deleniti veritatis magnam excepturi laborum expedita,
        in, consequatur saepe aperiam ratione nulla!
      </p>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deserunt consequuntur ad
        nostrum repudiandae omnis libero illum eius perferendis nam.
      </p>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro amet nobis ullam esse ea
        iure dolorem asperiores, illum at.
      </p>
      <hr className="my-4" />
      <h1 className="text-2xl font-bold">Already Holding Bitcoin ?</h1>
      <div className="cards text-white mt-4 flex">
        <div className="card1-aboutbitcoin flex items-center">
          <img src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f" alt="" className="w-32 h-32 ml-3 rounded-xl  h-30 mr-4" />
          <div className="ml-5 contentOfCard">
            <h4 className="text-lg font-semibold">Calculate youe Profits</h4>
            <button className="bg-white rounded-xl text-black py-2 px-4 mt-2">Check Now</button>
          </div>
        </div>
        <div className="card2-aboutbitcoin flex items-center ml-4">
          <img src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f" alt="" className="w-32 h-32 ml-3 rounded-xl  h-30 mr-4" />
          <div className="ml-5 contentOfCard">
            <h4 className="text-lg font-semibold">Calculate Tax</h4> 
            <button className="bg-white rounded-xl text-black py-2 px-4 mt-2">Check Now</button>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sunt animi? Inventore cumque
        perspiciatis, fugiat blanditiis facere similique quam ipsa.
      </p>
    </div>
  );
};

export default AboutCoin;
