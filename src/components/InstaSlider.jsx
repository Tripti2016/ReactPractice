import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, A11y, } from 'swiper';

const InstaSlider = () => {
   
    return (
        <div className="insta-slider">
            <div className="my-slider">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    speed={800}
                    navigation
                   className="myswiper"
                >
                    <SwiperSlide className="swiper-slide"> <div className="image-wrapper">
                        <img src="../assets/images/insta-thumb1.jpg" alt="" />
                    </div></SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <div className="image-wrapper">
                        <img src="../assets/images/insta-thumb2.jpg" alt="" />
                    </div></SwiperSlide>
                    <SwiperSlide className="swiper-slide"> <div className="image-wrapper">
                        <img src="../assets/images/insta-thumb3.jpg" alt="" />
                    </div></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><div className="image-wrapper">
                        <img src="../assets/images/insta-thumb4.jpg" alt="" />
                    </div></SwiperSlide>
                    <SwiperSlide className="swiper-slide">  <div className="image-wrapper">
                        <img src="../assets/images/insta-thumb1.jpg" alt="" />
                    </div></SwiperSlide>
                    

                </Swiper>
            </div>
        </div>
    )
}

export default InstaSlider