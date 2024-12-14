import React from 'react';
import Button from '../Common/Button/Button';
import { MdWavingHand } from "react-icons/md";
import Heading from '../Common/Heading/Heading';
import HomeImage from "../../Assets/Home/Eric_Kioko.jpg";
import Resume from "../../Assets/Documents/Eric Kioko.pdf"; 

const Home: React.FC = () => {

    const openResume = () => {
        window.open(Resume)
    }

return (
    <div className='flex flex-col items-center justify-center gap-10 mt-5 m-auto w-11/12 sm:flex-row'>
        <section>
            <img src={HomeImage} alt="" className='h-custom rounded-lg  w-custom' />
        </section>
        <section className='flex flex-col items-center justify-center w-11/12 sm:w-6/12 xl:items-start'>
            <Heading 
                ContainerStyle='flex flex-col gap-3 items-center justify-center xl:items-start'
                HeadingStyle='flex font-bold text-2xl sm:text-3xl'
                Heading='Hello, My Name is Eric Kioko'
                Children={<span className='ml-1'><MdWavingHand size="1.8rem"/></span>}
                FirstStyle='text-center text-lg sm:text-xl sm:text-left'
                FirstText='I am a FrontEnd Web Developer based in Nairobi, Kenya. I am a passionate and enthusiastic software developer with a passion for crafting clean, efficient, and user-friendly software solutions.'
            />
            <Button
                ID='Button'
                onClick={openResume}
                ButtonText='Resume'
                ButtonStyle='mt-4 py-1 rounded text-center w-32'
            />
        </section>
    </div>
)
}

export default Home
