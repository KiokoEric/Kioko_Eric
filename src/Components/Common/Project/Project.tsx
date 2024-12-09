import React from 'react';
import { Link } from 'react-router-dom';
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si"; 
import { SiTailwindcss } from "react-icons/si";
import { faReact } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavigateProps {
    Navigation?: any;
    ProjectName?: any;
    ProjectImage?: any;
    NavigateStyle?: string;
    ProjectDescription?: any;
}

const Project: React.FC<NavigateProps> = ({ Navigation, NavigateStyle, ProjectImage, ProjectName,ProjectDescription }) => {
return (
    <Link to={Navigation} className={NavigateStyle}>
        <img src={ProjectImage} alt="" width="400px" className='rounded' />
        <figcaption className='flex flex-col gap-5 xl:gap-5 xl:justify-between' >
            <h2 className='font-bold text-3xl text-center'>{ProjectName}</h2>
            <p className='text-center xl:text-justify'>{ProjectDescription}</p>
            <div className='flex gap-4 items-center justify-center'>
                <SiTailwindcss size="2.5rem" />
                <SiTypescript size="2rem" />
                <FontAwesomeIcon icon={faReact} className='text-4xl' />
                <SiExpress size="2.5rem" />
                <SiMongodb size="2.5rem" />
            </div>
        </figcaption>
    </Link>
)
}

export default React.memo(Project)