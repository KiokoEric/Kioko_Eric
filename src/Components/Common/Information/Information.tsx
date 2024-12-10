import React from 'react';

interface InformationProps {
    Text: string;
    Style?: string;
    Children?: any;
}

const Information: React.FC<InformationProps> = ({ Style, Children, Text }) => {
return (
    <figure className={Style} >
        {Children}
        <figcaption>
            <p>{Text}</p>
        </figcaption>
    </figure>
)
}

export default React.memo(Information)
