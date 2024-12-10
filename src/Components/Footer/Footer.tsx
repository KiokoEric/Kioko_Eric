import React from 'react';
import { BsGithub} from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Button from '../Common/Button/Button';

const Footer: React.FC = () => {

    const githubProfile = () => {
        window.open(`https://github.com/KiokoEric`)
    }
    
    const LinkedinProfile = () => {
        window.open(`https://www.linkedin.com/in/kioko-eric`)
    }

return (
    <div className='border-t border-Grey flex items-center justify-center gap-5 py-5'>
        <Button
            onClick={LinkedinProfile}
            Children={<FaLinkedin size="2.2rem" />}
        />
        <Button
            onClick={githubProfile}
            Children={<BsGithub size="2rem"  />}
        />
    </div>
)
}

export default Footer
