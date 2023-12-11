import { Container, Movie, MovieList } from "./styles";
import { APIKey } from '../../config/key'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        fetchPopularMovies();
    }, []);

    const fetchPopularMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setMovies(data.results);
            });
    };

    const handleSearch = () => {
        if (searchTerm.trim() !== '') {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&page=1&query=${searchTerm}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data.results);
                    setMovies(data.results);
                });
        } else {
            fetchPopularMovies();
        }
    };

    return (
        <Container>
            <h1>Filmes</h1>
            <div className="search-container">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Pesquisar filmes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <button onClick={handleSearch}>Pesquisar</button>
            </div>
            <MovieList>
                {movies.map(movie => (
                    <Movie key={movie.id}>
                        <Link to={`/details/${movie.id}`}>
                            <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
                        </Link>
                        <span>{movie.title}</span>
                    </Movie>
                ))}
            </MovieList>
        </Container>
    );
}

export default Home;