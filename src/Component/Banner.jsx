import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg mt-12 h-[400px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 2500 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/tT9WVvxC/Garena-Launches-First-Ever-Free-Fire-Esports-Tournament-in-Morocco-https-gamingfoodle-tech-garena-fr.jpg"
              alt="Game Banner 1"
              className="w-full h-[500px] object-cover"
            />
            <button className="bg-amber-400 btn absolute top-[400px] font-bold text-3xl left-[100px] text-blue-700">
            
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/mQrmbJ6/download.jpg"
              alt="Game Banner 2"
              className="w-full h-[500px] object-cover"
            />
            <button className="bg-amber-400 btn absolute top-[400px] font-bold text-3xl left-[100px] text-blue-700">
             
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/MD7CJ7ST/Amazon-Luna-Cloud-Gaming.jpg"
              alt="Game Banner 3"
              className="w-full h-[500px] object-cover"
            />
            <button className="bg-amber-400 btn absolute top-[400px] font-bold text-3xl left-[100px] text-blue-700">
           
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
