import React from 'react';
import Slider from 'react-slick';
import "./HeroSlider";

const HeroSlider = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="">
            <Slider className="slider" {...settings}>
          <div className="banner-1 img-fluid">
            <h1>Welcome to Our Hotel <br /> and Resort</h1>
            <p>Travel is the movement of people between distant geographical locations.<br /> Travel can also include relatively short stays between <br /> successive movements, as in the case of tourism.</p>
            <div className="text-center">
              <button className="btn__regular">Get Booking</button>
            </div>
          </div>
          <div className="banner-2 img-fluid">
            <h1>It is perfect time <br /> to travel</h1>
            <p>Reasons for traveling include recreation, holidays, tourism or vacationing, <br /> research travel, the gathering of information, visiting people, volunteer travel for charity, migration <br /> to begin life somewhere else, religious pilgrimages</p>
            <div className="text-center">
              <button className="btn__regular">Get Booking</button>
            </div>
          </div>
          <div className="banner-3 img-fluid">
            <h1>Discover your beautiful place <br /> with us</h1>
            <p>Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure <br /> to their summer homes and villas in cities such as Pompeii and Baiae.While early travel tended to be <br /> slower, more dangerous, and more dominated by trade and migration</p>
            <div className="text-center">
              <button className="btn__regular">Get Booking</button>
            </div>
          </div>
        </Slider>
        {/* <div className="banner-1 img-fluid">
            <h1>Welcome to Our Hotel <br /> and Resort</h1>
            <p>Travel is the movement of people between distant geographical locations.<br /> Travel can also include relatively short stays between <br /> successive movements, as in the case of tourism.</p>
            <div className="text-center">
              <button className="btn__regular">Get Booking</button>
            </div>
          </div> */}
        </div>
    );
};

export default HeroSlider;