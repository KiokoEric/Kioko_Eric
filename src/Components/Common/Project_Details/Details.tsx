import React from 'react';
import Button from '../Button/Button';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';  

interface DetailProps {
    Github?: any;
    children?: any;
    LiveDemo?: any;
    ProjectVideo?: any;
}

const Details: React.FC<DetailProps> = ({ ProjectVideo, Github, LiveDemo, children }) => {

return (
    <div className='flex flex-col items-center justify-center gap-5'>
        <video muted controls height='400' width="600" >
            <source src={ProjectVideo} type="video/mp4" />
        </video>
        <div className='flex gap-5 items-center justify-center'>
            <Button 
                onClick={Github}
                Children={<FontAwesomeIcon icon={faGithub} />}
                ButtonStyle='flex font-bold gap-2 items-center'
                ButtonText='Github'
            />
            <Button 
                onClick={LiveDemo}
                Children={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                ButtonStyle='flex font-bold gap-2 items-center'
                ButtonText='Live Demo'
            />
        </div>
        {children}
    </div>
)
}

export default Details
