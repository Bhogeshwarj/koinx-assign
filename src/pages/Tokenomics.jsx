import React from 'react';
import chart from '../assets/image (6).png';

const Tokenomics = () => {
  return (
    <div className="tokenContainer bg-white p-5">
      <h2 className="text-2xl font-semibold">Tokenomics</h2>

      <div className="content mt-5">
        <h3 className="text-lg ">Initial Distribution</h3>
        <img src={chart} alt="Tokenomics Chart" className="mt-3" />
        <p className="mt-3 text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat.
          Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce
          adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu.
          Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem
          posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
