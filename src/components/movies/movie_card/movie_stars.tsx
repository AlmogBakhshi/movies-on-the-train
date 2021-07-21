import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface Propss {
    rating: number,
    className?: string
}

const ShowStars: React.FC<Propss> = ({ rating, className }) => {
    const [filledStars, setFilledStars] = useState<any[]>([])

    useEffect(() => {
        for (let index = 0; index < 5; index++) {
            setFilledStars(prev => [...prev, (rating - 1) > index ?
                <FaStar key={index} size='1em' color='yellow' /> :
                rating > index ? <FaStarHalfAlt key={index} size='1em' color='yellow' /> :
                    <FaRegStar key={index} size='1em' color='yellow' />])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className={className}>
            {filledStars.map(item => item)}
        </div>
    );
}

export default ShowStars