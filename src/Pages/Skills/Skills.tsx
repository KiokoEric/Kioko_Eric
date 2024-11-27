import React from 'react';
import { FaSlack } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi"; 
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'; 
import { faReact } from '@fortawesome/free-brands-svg-icons'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Information from '../../Components/Common/Information/Information';

const Skills: React.FC = () => {
return (
    <div className='flex flex-col justify-center'>
        <div className='grid grid-cols-1 gap-10 justify-center mx-auto sm:grid-cols-2'>
            <section>
                <h2 className='font-bold mb-4 text-center text-3xl underline'>Front End Languages</h2>
                <div className='grid grid-cols-3 gap-5 items-center justify-center'>
                    <Information
                        Style='flex flex-col items-center font-bold text-2xl'
                        Children={<FontAwesomeIcon icon={faHtml5} className='text-5xl' />}
                        Text='HTML'
                    />
                    <Information
                        Style='flex flex-col items-center font-bold text-2xl'
                        Children={<FontAwesomeIcon icon={faCss3Alt} className='text-5xl' />}
                        Text='CSS'
                    />
                    <Information
                        Style='flex flex-col items-center font-bold text-2xl'
                        Children={<FontAwesomeIcon icon={faSass} className='text-5xl' />}
                        Text='SASS'
                    />
                    <Information
                        Style='flex flex-col items-center font-bold text-2xl'
                        Children={<SiTailwindcss size="3.5rem" />}
                        Text='Tailwind CSS'
                    />
                    <Information
                        Style='flex flex-col items-center font-bold text-2xl'
                        Children={<FontAwesomeIcon icon={faJs} className='text-5xl' />}
                        Text='JavaScript'
                    />
                    <Information
                        Style='flex flex-col items-center font-bold text-2xl'
                        Children={<BiLogoTypescript size="3.5rem" />}
                        Text='TypeScript'
                    />
                    <Information
                        Style='font-bold text-2xl'
                        Children={<FontAwesomeIcon icon={faReact} className='text-5xl' />}
                        Text='React JS'
                    />
                </div>
            </section>
            <section>
                <h2 className='font-bold mb-4 text-center text-3xl underline'>Back End Languages</h2>
                <div className='grid grid-cols-3 gap-5 items-center justify-center'>
                    <Information
                        Style='flex flex-col items-center font-bold text-2xl'
                        Children={<FaNodeJs size="3.5rem" />}
                        Text='Node JS'
                    />
                    <Information
                        Style='flex flex-col items-center font-bold text-2xl'
                        Children={<SiExpress size="3.5rem" />}
                        Text='Express JS'
                    />
                    <Information
                        Style='flex flex-col items-center font-bold text-2xl'
                        Children={<SiMongodb size="3.5rem" />}
                        Text='Mongo DB'
                    />
                    <Information
                        Style='flex flex-col items-center font-bold text-2xl'
                        Children={<SiMysql size="3.5rem" />}
                        Text='MySQL'
                    />
                    <Information
                        Style='flex flex-col items-center font-bold text-2xl'
                        Children={<BiLogoPostgresql size="3.5rem" />}
                        Text='PostgreSQL'
                    />
                </div>
            </section>
        </div>
        <section>
            <h2 className='font-bold mb-4 mt-5 text-center text-3xl underline'>Devops</h2>
            <div className='grid grid-cols-3 gap-20 justify-center mx-auto w-4/12 sm:gap-10 sm:items-end sm:mt-0'>
                <Information
                    Style='flex flex-col items-center font-bold text-2xl'
                    Children={<FaGitAlt size="3.5rem" />}
                    Text='Git'
                />
                <Information
                    Style='flex flex-col items-center font-bold text-2xl'
                    Children={<FontAwesomeIcon icon={faGithub} className='text-6xl' />}
                    Text='Github'
                />
                <Information 
                    Style='flex flex-col items-center font-bold text-2xl'
                    Children={<FaSlack size="3.5rem" />}
                    Text='Slack'
                />
            </div>
        </section>
    </div>
)
}

export default Skills
