'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function MySwiper() {
    return (
        <div className="w-full flex flex-col gap-6">
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    breakpoints={
                        {
                            320: {
                                slidesPerView: 1,
                            },
                            720: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 4
                            }
                        }
                    }
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="./images/projects/1.png" alt="Projeto" className="rounded-md shadow w-full h-full sm:w-96" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/projects/2.png" alt="Projeto" className="rounded-md shadow w-full h-full sm:w-96" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/projects/4.png" alt="Projeto" className="rounded-md shadow w-full h-full sm:w-96" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/projects/5.png" alt="Projeto" className="rounded-md shadow w-full h-full sm:w-96" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/projects/6.png" alt="Projeto" className="rounded-md shadow w-full h-full sm:w-96" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/projects/7.png" alt="Projeto" className="rounded-md shadow w-full h-full sm:w-96" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/projects/8.png" alt="Projeto" className="rounded-md shadow w-full h-full sm:w-96" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/projects/9.png" alt="Projeto" className="rounded-md shadow w-full h-full sm:w-96" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/projects/10.png" alt="Projeto" className="rounded-md shadow w-full h-full sm:w-96" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/projects/11.png" alt="Projeto" className="rounded-md shadow w-full h-full sm:w-96" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}