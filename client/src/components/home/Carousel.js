import React from "react";
import Slider from "react-slick";
import naruto from "../../images/naruto.jpg"
import bleach from "../../images/bleach.jpg";
import gintama from "../../images/gintama.jpg";
import onepunchman from "../../images/one-punch-man.jpg";
import onepiece from "../../images/one-piece-colored.jpg";
import dragonball from "../../images/dragon-ball.jpg";


class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings} className="slider">
        <div className='slider-image'>
            <img src={naruto} alt="naruto" />
        </div>
        <div className='slider-image'>
          <img src={bleach} alt='bleach' />
        </div>
        <div className='slider-image'>
          <img src={dragonball} alt='dragon ball' />
        </div>
        <div className='slider-image'>
          <img src={gintama} alt='gintama' />
        </div>
        <div className='slider-image'>
          <img src={onepiece} alt='one piece' />
        </div>
        <div className='slider-image'>
          <img src={onepunchman} alt='one punch man' />
        </div>
      </Slider>
    );
  }
}

export default Carousel;
