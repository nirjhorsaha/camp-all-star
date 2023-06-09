import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import slideImg1 from '../../../src/assets/teacher.png'
import slideImg2 from '../../../src/assets/reading.png'
import slideImg3 from '../../../src/assets/medal.png'
import slideImg4 from '../../../src/assets/money.png'
import slideImg5 from '../../../src/assets/idea.png'


const TopSlider = () => {
    return (
        <>
            <h1 className='text-center text-3xl font-bold text-orange-500 my-10'>Why we are best from others</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-6"
            >
                <SwiperSlide className='border-2 shadow-xl rounded-t-2xl'>
                    <img src={slideImg1} alt="" srcset="" className='mx-auto mt-3' />
                    <h1 className='text-center text-xl m-10 tracking-widest font-bold'>Best Tutor</h1>
                </SwiperSlide>

                <SwiperSlide className='border-2 shadow-xl rounded-t-2xl'>
                    <img src={slideImg2} alt="" srcset="" className='mx-auto mt-3' />
                    <h1 className='text-center text-xl m-10 tracking-widest font-bold'>Best Curriculum</h1>
                </SwiperSlide>

                <SwiperSlide className='border-2 shadow-xl rounded-t-2xl'>
                    <img src={slideImg3} alt="" srcset="" className='mx-auto mt-3' />
                    <h1 className='text-center text-xl m-10 tracking-widest font-bold'>Certificate</h1>
                </SwiperSlide>

                <SwiperSlide className='border-2 shadow-xl rounded-t-2xl'>
                    <img src={slideImg4} alt="" srcset="" className='mx-auto mt-3' />
                    <h1 className='text-center text-xl m-10 tracking-widest font-bold'>Best Price</h1>
                </SwiperSlide>
                
                <SwiperSlide className='border-2 shadow-xl rounded-t-2xl'>
                    <img src={slideImg5} alt="" srcset="" className='mx-auto mt-3'/>
                    <h1 className='text-center text-xl m-10 tracking-widest font-bold'>Creative Thinking</h1>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default TopSlider;