import React from 'react';

interface FooterColProps {
    items: string[]
}

const FooterCol = ({items}: FooterColProps) => {
    return (
        <div className={'flex flex-col justify-center items-start w-1/4'}>
            <ul>
                {items.map(item => (
                    <li className={'my-3 text-[grey]'}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default FooterCol;