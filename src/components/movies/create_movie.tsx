import React from 'react';
import { useHistory } from 'react-router-dom';
import Store from '../../store';
import Container from '../container';
import Form, { Input } from '../form';
import { nanoid } from 'nanoid';

const CreateMovie = () => {
    const history = useHistory();
    const { moviesStore } = Store;

    const formData: Input[] = [
        { label: 'Name', type: 'text', name: 'name', required: true },
        { label: 'Year', type: 'number', name: 'year', required: true, min: 1900, max: new Date().getFullYear() },
        { label: 'Director', type: 'text', name: 'director' },
        { label: 'Image', type: 'text', name: 'image' },
        { label: 'Category', type: 'text', name: 'categories' },
        { label: 'Summary', type: 'text', name: 'summary' },
    ]

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>, formData: any) => {
        moviesStore.addMovie({ ...formData, id: nanoid() });
        history.replace('/');
    }

    return (
        <Container title='Create Movie' goBackTo={() => history.replace('/')} >
            <Form formID='create-form' buttonTitle='Add' inputData={formData} onSubmit={HandleSubmit} />
        </Container>
    );
}

export default CreateMovie;