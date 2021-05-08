import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    };
  }

    updateState = () => {
      const { getMovies } = movieAPI;
      return getMovies().then((movies) => this.setState({
        movies,
        loading: false,
      }));
    }

    componentDidMount() {
      return this.updateState();
    }


    render() {
      const { movies, loading } = this.state;
      console.log(movies)
      const movieList = movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
      return (
        <div data-testid="movie-list" className="movie-list">
          { loading ? <Loading /> : movieList }
        </div>
      );
    }
  }

export default MovieList;
