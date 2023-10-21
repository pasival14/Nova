import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Slide extends Component{
  render(){
    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return(
      <div className="m-[7px] shadow h-[90px] sm:h-[150px] bg-[#F5F5DC]">
        
        <Slider {...settings}>
          <div className="py-[20px] sm:py-[40px]">
            <img className="slider" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Dangote_Group_Logo.svg/1200px-Dangote_Group_Logo.svg.png" />
          </div>
          <div className="py-[20px] sm:py-[40px]">
            <img className="slider" src="https://pbs.twimg.com/profile_images/1105814069263691777/7jesP2jC_400x400.jpg" />
          </div>
          <div className="py-[20px] sm:py-[40px]">
            <img className="slider" src="https://www.matrixenergygroup.com/wp-content/uploads/2020/03/matrix-logo1-510x206.png" />
          </div>
          <div className="py-[20px] sm:py-[40px] pl-[40px]">
            <img className="slider" src="https://media.premiumtimesng.com/wp-content/files/2022/09/Lagos-state-government-logo.jpeg" />
          </div>
          <div className="py-[20px] sm:py-[40px]">
            <img className="slider" src="https://download.logo.wine/logo/Chevron_Corporation/Chevron_Corporation-Logo.wine.png" />
          </div>
          <div className="py-[20px] sm:py-[40px]">
            <img className="slider" src="https://www.uacnplc.com/wp-content/uploads/2020/01/uac-logo-favicon.svg" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slide;