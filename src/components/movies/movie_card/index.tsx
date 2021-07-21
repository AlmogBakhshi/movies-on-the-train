import React from 'react';
import { IMovie } from '../../../store/Movies';
import { FaRegTrashAlt } from 'react-icons/fa';
import MovieStars from './movie_stars';

interface Props {
    movie: IMovie,
    onClick: (id: string) => void,
    onDelete: (id: string) => void
}

const MovieCard: React.FC<Props> = ({ movie, onClick, onDelete }) => {
    return (
        <div className='card' >
            <FaRegTrashAlt className='card__delete' size='1em' onClick={() => onDelete(movie.id)} />
            <MovieStars className='card__stars' rating={movie.rating / 2} />
            <img src={movie.image} alt={movie.name} />
            <div className='card__details' onClick={() => onClick(movie.id)}>
                <div className='card__details__title'>{movie.name}</div>
                <div>{movie.summary?.length > 20 ? `${movie.summary.slice(0, 60)}...` : movie.summary}</div>
            </div>
        </div>
    );
}

export default MovieCard;