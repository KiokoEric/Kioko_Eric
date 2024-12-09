import 'swiper/css';
import React from 'react';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import DashBoard from "../../assets/Itrack/DashBoard.jpeg";
import My_Tickets from "../../assets/Itrack/My_Tickets.jpeg";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import All_Tickets from "../../assets/Itrack/All_Tickets.jpeg";
import ItrackVideo from "../../assets/Itrack/Itrack_Video.mp4";
import My_Projects from "../../assets/Itrack/My_Projects.jpeg";
import All_Projects from "../../assets/Itrack/All_Projects.jpeg";
import Create_Ticket from "../../assets/Itrack/Create_Ticket.jpeg";
import Create_Project from "../../assets/Itrack/Create_Project.jpeg";
import Details from '../../Components/Common/Project_Details/Details';
import Archived_Tickets from "../../assets/Itrack/Archived_Projects.jpeg";
import Archived_Projects from "../../assets/Itrack/Archived_Projects.jpeg";

const Itrack: React.FC = () => {

    const Itrack_Demo = () => {
        window.open(`https://ebudget-1rfs.onrender.com`) 
    }

    const Itrack_Github = () => {
        window.open(`https://github.com/KiokoEric/Itrack_Bug_Tracker`)
    }

return (
    <div>
        <Details 
            ProjectVideo={ItrackVideo}
            Github={Itrack_Github}
            LiveDemo={Itrack_Demo}
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
                        <SwiperSlide><img src={ DashBoard} alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Create_Project } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ My_Projects } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ All_Projects } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Archived_Projects } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Create_Ticket } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ My_Tickets } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ All_Tickets } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Archived_Tickets } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                </Swiper>
            }
        />
    </div>
)
}

export default Itrack