import React from 'react';
import Educate from '../../assets/Educate/HomePage.jpeg';
import EBudget from "../../assets/EBudget/Dashboard.jpeg";
import Itrack from "../../assets/Itrack/All_Tickets.jpeg";
import Project from '../../Components/Common/Project/Project';
import Better_Health from "../../assets/Better_Health/Home_Page.jpeg";
import Kitchen_Stories from "../../assets/Kitchen_Stories/HomePage.jpeg";

const Projects: React.FC = () => {
return (
    <div>
        <h2 className='font-bold mb-5 text-3xl text-center'>My Projects</h2>
        <div className='flex flex-col items-center'>
            <Project 
                Navigation='/Itrack'
                NavigateStyle='border-b border-Grey flex flex-col items-center gap-5 mb-5 pb-5 w-11/12 xl:flex-row'
                ProjectImage={Itrack}
                ProjectName='Itrack'
                ProjectDescription='Itrack is designed to help development teams manage and track issues or bugs in their software projects. It serves as a centralized system for organizing, prioritizing, and monitoring the progress of identified problems within a software application or system.'
            />
            <Project 
                Navigation='/Kitchen_Stories'
                NavigateStyle='border-b border-Grey flex flex-col items-center gap-5 mb-5 pb-5 w-11/12 xl:flex-row'
                ProjectImage={Kitchen_Stories}
                ProjectName='Kitchen Stories'
                ProjectDescription='Kitchen Stories is a recipe website that caters to food enthusiasts of all levels. From seasoned chefs to beginners in the kitchen, the platform offers a diverse range of delectable recipes that span cuisines, dietary preferences, and different continents.'
            />
            <Project 
                Navigation='/Better_Health'
                NavigateStyle='border-b border-Grey flex flex-col items-center gap-5 mb-5 pb-5 w-11/12 xl:flex-row'
                ProjectImage={Better_Health}
                ProjectName='Better Health'
                ProjectDescription='Better Health is an online destination for holistic health and fitness guidance. The website is designed to empower individuals on their journey to optimal well-being by providing comprehensive health and fitness resources.'
            />
            <Project 
                Navigation='/EBudget'
                NavigateStyle='border-b border-Grey flex flex-col items-center gap-5 mb-5 pb-5 w-11/12 xl:flex-row'
                ProjectImage={EBudget}
                ProjectName='EBudget'
                ProjectDescription='EBudget is a user-friendly and efficient financial application designed to help individuals manage their finances with ease and precision. The application offers a streamlined interface and a range of features that simplify revenue and expense tracking and loan calculation.'
            />
            <Project 
                Navigation='/Educate'
                NavigateStyle='flex flex-col items-center gap-5 mb-5 w-11/12 xl:flex-row'
                ProjectImage={Educate}
                ProjectName='Educate'
                ProjectDescription='Educate is the ultimate quiz application designed to test your knowledge across various topics, from history to pop culture, science to sports, and also allowing you to create your own quiz.'
            />
        </div>
    </div>
)
}

export default Projects