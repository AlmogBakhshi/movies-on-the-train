import { makeAutoObservable } from 'mobx';

export interface IMovie {
    id: string,
    name: string,
    year: number,
    director: string,
    image: string,
    categories: string,
    rating: number,
    summary: string
}

class Movies {
    constructor() {
        makeAutoObservable(this);

        const moviesStorage = localStorage.getItem('movies');
        if (this.movies.length === 0) {
            moviesStorage ? this.setMovies(JSON.parse(moviesStorage)) : this.fetchMovies();
        }
    }

    movies: IMovie[] = [];

    addMovie = (movie: IMovie) => {
        this.movies = [...this.movies, movie];
        this.updataLocalStorage(this.movies);
    }

    editMovie = (movie: IMovie) => {
        this.movies = this.movies.map(data => data.id === movie.id ? { ...data, ...movie } : data);
        this.updataLocalStorage(this.movies);
    }

    deleteMovie = (id: string) => {
        this.movies = this.movies.filter(data => data.id !== id);
        this.updataLocalStorage(this.movies);
    }

    setMovies = (movies: IMovie[]) => {
        this.movies = [...movies];
        this.updataLocalStorage(this.movies);
    }

    fetchMovies = () => {
        fetch('https://api.tvmaze.com/shows')
            .then(res => res.json())
            .then((res: any) => {
                const movies: IMovie[] = res.map((data: any) => ({
                    id: data.id.toString(), name: data.name, year: parseInt(data.premiered.slice(0, 4)), director: '', image: data.image.medium,
                    categories: data.genres.join(', '), rating: data.rating.average, summary: data.summary?.replace(/<p>|<\/p>|<b>|<\/b>/g, '')
                }))
                this.setMovies(movies)
            })
            .catch(err => console.error(err))
    }

    updataLocalStorage = (movies: IMovie[]) => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }
}

export default new Movies();