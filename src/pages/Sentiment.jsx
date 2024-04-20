
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sentiment = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-likeContainer2  bg-white p-5 ">
      <h2 className="text-2xl  font-bold">Sentiment</h2>

      {/* Key Events Carousel */}
      <Slider {...carouselSettings} className="eventcards mt-4 ">
        <div className="cardsenti1 mx-10">
          <img
            src="https://via.placeholder.com/50" // Replace with your logo URL
            alt="Logo"
            className="absolute top-2 left-2"
          />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, a.</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit quod incidunt soluta minima magni pariatur rerum velit veniam fugit!</p>
        </div>
        <div className="cardsenti2">
          <img
            src="https://via.placeholder.com/50" // Replace with your logo URL
            alt="Logo"
            className="absolute top-2 left-2"
          />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, a.</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit quod incidunt soluta minima magni pariatur rerum velit veniam fugit!</p>
        </div>
      </Slider>

      {/* Random Image below Key Events */}
      <div className="random-image mt-4">
        {/* <img
          src="https://placekitten.com/400/200" // Replace with your random image URL
          alt="Random"
          className="w-full h-auto rounded-lg"
        /> */}
      </div>

      {/* Analyst Estimates */}
      <div className="analyst-estimates mt-4">
        <h3 className="text-lg font-bold">Analyst Estimates</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="estimate">
            <p className="text-xl font-semibold text-center">Buy</p>
            <p className="text-gray-600 text-center">76%</p>
          </div>
          <div className="estimate">
            <p className="text-xl font-semibold text-center">Hold</p>
            <p className="text-gray-600 text-center">8%</p>
          </div>
          <div className="estimate">
            <p className="text-xl font-semibold text-center">Sell</p>
            <p className="text-gray-600 text-center">16%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
