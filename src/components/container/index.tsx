import React from 'react';
import Header from './header';

interface Props {
    title: string,
    goBackTo?: () => void,
    children: React.ReactNode
}

const Container: React.FC<Props> = ({ title, goBackTo, children }) => {
    return (
        <div className='container'>
            <Header goBackTo={goBackTo} title={title} />
            <div className='container__body'>
                {children}
            </div>
        </div>
    );
}

export default Container;