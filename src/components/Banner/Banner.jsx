
import React from 'react';

//carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//css
import './Banner.css'

//images


 export const Banner = () => {
   const BannerImg =["https://imgur.com/p0wdadG.png","https://imgur.com/96OnkX7.png","https://imgur.com/sfjg9R8.png","https://imgur.com/KtGxwnN.png"]
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          {BannerImg.map((item,index)=><div key={index.toString()} ><img style={{width:"100%"}} src={item} alt="carousel-image" /></div>)}
        </Slider>
      </div>
    )
}
 
