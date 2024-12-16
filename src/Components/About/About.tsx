import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import Heading from '../Common/Heading/Heading';
import Information from '../Common/Information/Information';

const About: React.FC = () => {
return (
    <div>
        <Heading
            ContainerStyle='flex flex-col gap-3 pb-5'
            HeadingStyle='font-bold text-3xl text-center xl:text-left'
            Heading='About Me'
            FirstStyle='text-center text-lg xl:text-justify'
            FirstText='I discovered a love for web development 2 years ago when I enrolled in a 2 week Javascript boot camp. I was greatly captivated by the idea presented by the teachers who highlighted all the possibilities that could be achieved through web development. After the boot camp, I began a self-taught web development journey which saw me progress through tutorials, books and mentorship. In these 2 years, I have developed myself as a front end software developer with real-world projects. I am excited to venture into a career as a front end developer where I can contribute to enhancing a user’s web experience.'
        />
        <section className='border-t border-Grey flex flex-col items-center gap-3 pt-8 xl:items-start'>
            <Information
                Style='flex items-center gap-2 text-xl'
                Children={<MdLocationOn size="1.5rem" />}
                Text='Nairobi, Kenya'
            />
            <Information
                Style='flex items-center gap-2 text-xl'
                Children={<FaPhoneAlt size="1.3rem" />}
                Text='(+254) 711 621 939'
            />
            <Information
                Style='flex items-center gap-2 text-xl'
                Children={<IoMailSharp size="1.3rem" />}
                Text='kiokoerick040@gmail.com'
            />
        </section>
    </div>
)
}

export default About
