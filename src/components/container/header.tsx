import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';

interface Props {
    title: string,
    goBackTo?: () => void
}

const Header: React.FC<Props> = ({ title, goBackTo }) => {
    return (
        <div className='container__header'>
            {goBackTo && <IoMdArrowBack className='container__header__back' size='1.3em' onClick={goBackTo} />}
            <h3>{title}</h3>
        </div>
    );
}

export default Header;