import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import Container from '../container';
import Button from '../button';
import Store from '../../store';
import { IMovie } from '../../store/Movies';

const MovieDetails = () => {
    const history = useHistory();
    const { id } = useParams<any>();
    const { moviesStore } = Store;
    const [movie, setMovie] = useState<IMovie | undefined>();

    useEffect(() => {
        id ? moviesStore.movies.some(m => m.id === id && setMovie(m)) : history.replace('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container title='Movie Details' goBackTo={() => history.replace('/')}>
            <div className='movie_details'>
                <Button className='movie_details__button' title='Edit' icon={<FaEdit size='1em' />} onClick={() => id && history.push(`/edit/${id}`)} />
                <img src={movie?.image} alt={movie?.name} />
                <div><b>Name:</b> {movie?.name}</div>
                <div><b>Year:</b> {movie?.year}</div>
                <div><b>Director:</b> {movie?.director}</div>
                <div><b>Category:</b> {movie?.categories}</div>
                <div><b>summary:</b> {movie?.summary}</div>
            </div>
        </Container>
    );
}

export default MovieDetails;