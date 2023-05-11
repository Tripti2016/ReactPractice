
import React ,{Component} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg1 from '../assets/images/sld1.jpg';
import bannerImg2 from '../assets/images/sld2.jpg';
import bannerImg3 from '../assets/images/sld3.jpg';
import bannerImg4 from '../assets/images/sld4.jpg';
import bannerImg5 from '../assets/images/sld5.jpg';
import bannerImg6 from '../assets/images/sld6.jpg';


export default class MySlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          
          <Slider {...settings}>
          <div className="banner-wrapper">
                <div className="banner-slider-img">
                    <img src={bannerImg1} alt="banner" />
                </div>
                <div className="banner-content">
                    <div className="container">
                        <h2>사계절 즐거운 휴식, 엘리시안</h2>
                        <p>아름다운 자연과 여유로운 낭만의 만남 아름다운 자연과 여유로운 낭만의 만남</p>
                    </div>
                </div>
            </div>
            <div className="banner-wrapper">
                <div className="banner-slider-img">
                    <img src={bannerImg2} alt="" />
                </div>
                <div className="banner-content">
                    <div className="container">
                        <h2>사계절 즐거운 휴식, 엘리시안</h2>
                        <p>아름다운 자연과 여유로운 낭만의 만남 아름다운 자연과 여유로운 낭만의 만남</p>
                    </div>
                </div>
            </div>
            <div className="banner-wrapper">
                <div className="banner-slider-img">
                    <img src={bannerImg3} alt="" />
                </div>
                <div className="banner-content">
                    <div className="container">
                        <h2>사계절 즐거운 휴식, 엘리시안</h2>
                        <p>아름다운 자연과 여유로운 낭만의 만남 아름다운 자연과 여유로운 낭만의 만남</p>
                    </div>
                </div>
            </div>
            <div className="banner-wrapper">
                <div className="banner-slider-img">
                    <img src={bannerImg4} alt="" />
                </div>
                <div className="banner-content">
                    <div className="container">
                        <h2>사계절 즐거운 휴식, 엘리시안</h2>
                        <p>아름다운 자연과 여유로운 낭만의 만남 아름다운 자연과 여유로운 낭만의 만남</p>
                    </div>
                </div>
            </div>
            <div className="banner-wrapper">
                <div className="banner-slider-img">
                    <img src={bannerImg5} alt="" />
                </div>
                <div className="banner-content">
                    <div className="container">
                        <h2>사계절 즐거운 휴식, 엘리시안</h2>
                        <p>아름다운 자연과 여유로운 낭만의 만남 아름다운 자연과 여유로운 낭만의 만남</p>
                    </div>
                </div>
            </div>
            <div className="banner-wrapper">
                <div className="banner-slider-img">
                    <img src={bannerImg6} alt="" />
                </div>
                <div className="banner-content">
                    <div className="container">
                        <h2>사계절 즐거운 휴식, 엘리시안</h2>
                        <p>아름다운 자연과 여유로운 낭만의 만남 아름다운 자연과 여유로운 낭만의 만남</p>
                    </div>
                </div>
            </div>
          </Slider>
        </div>
      );
    }
  }