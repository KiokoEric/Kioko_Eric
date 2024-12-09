import React from 'react';
import { Link } from 'react-router-dom';

interface NavigateProps {
    Navigation?: any;
    NavigateText?: string;
    NavigateStyle?: string;
}

const Navigate: React.FC<NavigateProps> = ({ Navigation, NavigateStyle, NavigateText}) => {
return (
    <Link to={Navigation} className={NavigateStyle}>
        <p>{ NavigateText }</p>
    </Link>
)
}

export default React.memo(Navigate)