import 'swiper/css';
import React from 'react';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import Income from "../../Assets/EBudget/IncomePage.jpeg";
import Expense from "../../Assets/EBudget/ExpensePage.jpeg";
import Savings from "../../Assets/EBudget/SavingsPage.jpeg";
import DashBoard from "../../Assets/EBudget/Dashboard.jpeg";
import { EffectCoverflow, Pagination } from 'swiper/modules';
import EBudgetVideo from "../../Assets/EBudget/EBudget - Video.mp4";
import Details from '../../Components/Common/Project_Details/Details';
import LoanCalculator from "../../Assets/EBudget/Loan_Calculator.jpeg";

const EBudget: React.FC = () => {

    const EBudget_Demo = () => {
        window.open(`https://ebudget-delta.vercel.app`) 
    }

    const EBudget_Github = () => {
        window.open(`https://github.com/KiokoEric/The_EBudget`)
    }

return (
    <div>
        <Details 
            ProjectVideo={EBudgetVideo}
            Github={EBudget_Github}
            LiveDemo={EBudget_Demo}
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
                        <SwiperSlide><img src={ DashBoard } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Income } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Expense } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Savings } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ LoanCalculator } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                </Swiper>
            }
        />
    </div>
)
}

export default EBudget
