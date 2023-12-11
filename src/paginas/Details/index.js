import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { APIKey } from '../../config/key';
import { Container } from './styles';

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [director, setDirector] = useState('');
  const image_path = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        const { title, poster_path, overview, release_date, runtime } = data;

        const movieDetails = {
          id,
          title,
          sinopse: overview,
          Image: `${image_path}${poster_path}`,
          releaseDate: release_date,
          runtime,
        };

        setMovie(movieDetails);

        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKey}`)
          .then(response => response.json())
          .then(jsonData => {
            const directors = jsonData.crew.filter(({ job }) => job === 'Director');
            if (directors.length > 0) {
              setDirector(directors[0].name);
            }
          });
      })
      .catch(error => {
        console.error('Erro ao obter detalhes do filme:', error);
      });
  }, [id]);

  return (
    <Container>
      <h1>Detalhes</h1>
      <div className="movie">
        <img src={movie.Image} alt={movie.sinopse} />

        <div className="details">
          <h1>{movie.title}</h1>
          <span>Sinopse: {movie.sinopse}</span>
          <span>Diretor: {director}</span>
          <span>Duração: {movie.runtime} Minutos</span>
          <span className="release-date">Data de Lançamento: {movie.releaseDate}</span>
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Details;
