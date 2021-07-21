import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Container from '../container';
import Form, { Input } from '../form';
import Store from '../../store';

const EditMovie = () => {
    const history = useHistory();
    const { id } = useParams<any>();
    const { moviesStore } = Store;
    const [movieData, setMovieData] = useState<Input[]>([]);

    useEffect(() => {
        if (id) {
            moviesStore.movies.map(m => {
                if (m.id === id) {
                    const formData: Input[] = [
                        { label: 'Name', type: 'text', name: 'name', required: true, value: m?.name },
                        { label: 'Year', type: 'number', name: 'year', required: true, min: 1900, max: new Date().getFullYear(), value: m?.year },
                        { label: 'Director', type: 'text', name: 'director', value: m?.director },
                        { label: 'Image', type: 'text', name: 'image', value: m?.image },
                        { label: 'Category', type: 'text', name: 'categories', value: m?.categories },
                        { label: 'Summary', type: 'text', name: 'summary', value: m?.summary },
                    ]
                    setMovieData(formData);
                }
                return m;
            });
        }
        else history.replace('/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>, formData: any) => {
        moviesStore.editMovie({ id: id, ...formData })
        history.replace(id ? `/details/${id}` : '/')
    }

    const HandleChange = (value: string, name: string) => {
        setMovieData(prev => prev.map(data => {
            data.name === name && (data.value = value);
            return data;
        }))
    }

    return (
        <Container title='Edit Movie' goBackTo={() => history.replace(id ? `/details/${id}` : '/')}>
            <Form formID='edit-form' buttonTitle='Edit' inputData={movieData} onSubmit={HandleSubmit} onChange={HandleChange} />
        </Container>
    );
}

export default EditMovie;