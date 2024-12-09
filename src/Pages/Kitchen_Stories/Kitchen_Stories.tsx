import 'swiper/css';
import React from 'react';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Home from "../../assets/Kitchen_Stories/HomePage.jpeg";
import Login from "../../assets/Kitchen_Stories/LoginPage.jpeg";
import Explore from "../../assets/Kitchen_Stories/ExplorePage.jpeg";
import Details from '../../Components/Common/Project_Details/Details';
import My_Recipes from "../../assets//Kitchen_Stories/My_Recipes.jpeg";
import Create_Recipe from "../../assets/Kitchen_Stories/CreatePage.jpeg";
import Favourites from "../../assets/Kitchen_Stories/FavouritesPage.jpeg";
import Categories from "../../assets/Kitchen_Stories/CategoriesPage.jpeg";
import Nationality from "../../assets/Kitchen_Stories/NationalitiesPage.jpeg";
import KitchenStoriesVideo from "../../assets/Kitchen_Stories/KitchenStories_Video.mp4";

const Kitchen_Stories: React.FC = () => {

    const Kitchen_Stories_Demo = () => {
        window.open(`https://ebudget-1rfs.onrender.com`) 
    }

    const Kitchen_Stories_Github = () => {
        window.open(`https://github.com/KiokoEric/Kitchen_Stories`)
    }

return (
    <div>
        <Details 
            ProjectVideo={KitchenStoriesVideo}
            Github={Kitchen_Stories_Github}
            LiveDemo={Kitchen_Stories_Demo}
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
                        <SwiperSlide><img src={ Home } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Explore } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Categories } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Nationality } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Create_Recipe } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ My_Recipes } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Favourites } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                        <SwiperSlide><img src={ Login } alt="" className='mx-auto w-11/12' /></SwiperSlide>
                </Swiper>
            }
        />
    </div>
)
}

export default Kitchen_Stories