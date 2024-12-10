import 'swiper/css';
import React from 'react';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import Login from "../../Assets/Educate/Login.jpg";
import Home_Page from "../../Assets/Educate/HomePage.jpeg";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import My_Quizzes from "../../Assets/Educate/My_Quizzes.jpeg";
import Create_Page from "../../Assets/Educate/Create_Page.jpeg";
import EducateVideo from "../../Assets/Educate/Educate_Video.mp4";
import Question_Page from "../../Assets/Educate/Question_Page.jpeg";
import Quiz_Settings from "../../Assets/Educate/Quiz_Settings.jpeg";
import Details from '../../Components/Common/Project_Details/Details';

const Educate: React.FC = () => {

    const Educate_Demo = () => {
        window.open(`https://educate-rouge.vercel.app`) 
    }

    const Educate_Github = () => {
        window.open(`https://github.com/KiokoEric/Educate`)
    }

return (
    <div>
        <Details 
            ProjectVideo={EducateVideo}
            Github={Educate_Github}
            LiveDemo={Educate_Demo}
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
                        <SwiperSlide><img src={ Quiz_Settings } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Question_Page } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Create_Page } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ My_Quizzes } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Login } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                </Swiper>
            }
        />
    </div>
)
}

export default Educate
