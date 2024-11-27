import React from 'react';

interface HeadingProps {
    Children?: any;
    Heading: string;
    FirstText?: string;
    FirstStyle?: string;
    HeadingStyle: string;
    ContainerStyle: string;
}

const Heading: React.FC<HeadingProps> = ({ ContainerStyle, Children, Heading, HeadingStyle, FirstStyle, FirstText }) => {

return (
    <div className={ContainerStyle} >
        <h1 className={HeadingStyle}>{Heading} {Children}</h1>
        <h2 className={FirstStyle}>{FirstText}</h2>
    </div>
)
}

export default React.memo(Heading);
