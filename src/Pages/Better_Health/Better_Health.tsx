import 'swiper/css';
import React from 'react';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Home_Page from "../../assets/Better_Health/Home_Page.jpeg";
import Create_Page from "../../assets/Better_Health/Create_Page.jpeg";
import Details from '../../Components/Common/Project_Details/Details';
import Fitness_Page from "../../assets/Better_Health/Fitness_Page.jpeg";
import Exercise_Page from "../../assets/Better_Health/Exercise_Page.jpeg";
import Nutrition_Page from "../../assets/Better_Health/Nutrition_Page.jpeg";
import MyWorkouts_Page from "../../assets/Better_Health/MyWorkouts_Page.jpeg";
import Favourites_Page from "../../assets/Better_Health/Favourites_Page.jpeg";
import Better_HealthVideo from "../../assets/Better_Health/Better_Health_Video.mp4";

const Better_Health: React.FC = () => {

    const Better_Health_Demo = () => {
        window.open(`https://ebudget-1rfs.onrender.com`) 
    }

    const Better_Health_Github = () => {
        window.open(`https://github.com/KiokoEric/The_Better_Health`)
    }

return (
    <div>
        <Details 
            ProjectVideo={Better_HealthVideo}
            Github={Better_Health_Github}
            LiveDemo={Better_Health_Demo}
            children={
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                    >
                        <SwiperSlide><img src={ Home_Page } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Exercise_Page } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Nutrition_Page } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Fitness_Page } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Create_Page } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ MyWorkouts_Page } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Favourites_Page } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                </Swiper>
            }
        />
    </div>
)
}

export default Better_Health