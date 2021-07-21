import React from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import Container from '../container';
import Button from '../button';
import Card from './movie_card';
import Store from '../../store';

const Movies = () => {
    const history = useHistory();
    const { moviesStore } = Store;

    const HandleOnClickMovieCard = (id: string) => {
        history.push(`/details/${id}`);
    }

    const HandleDeleteMovie = (id: string) => {
        moviesStore.deleteMovie(id);
    }

    return (
        <Container title='Movies' >
            <Button title='Create' icon={<IoMdAdd size='1em' />} onClick={() => history.push('/create')} />
            <div className='movies'>
                {moviesStore.movies.map(movie =>
                    <Card key={movie.id} movie={movie} onClick={HandleOnClickMovieCard} onDelete={HandleDeleteMovie} />)}
            </div>
        </Container>
    );
}

export default observer(Movies);