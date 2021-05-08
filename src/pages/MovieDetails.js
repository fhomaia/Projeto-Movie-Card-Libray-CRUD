import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-Types';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      loading: true,
    };
  }

  updateState = () => {
    const { match: { params: { id } } } = this.props
    const { getMovie } = movieAPI;
    return getMovie(id).then((movie) => this.setState({
      movie: movie,
      loading: false,
    }));
  }

  deleteCard = () => {
    const { match: { params: { id } } } = this.props;
    const { deleteMovie } = movieAPI;
    return deleteMovie(id);
  }

  componentDidMount() {
    this.updateState();
  }

  render() {
    const { loading, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details" className="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{title}</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
        <Link to="/"  onClick={ this.deleteCard }>DELETAR</Link>
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    }) 
  }),
}.isRequired;

export default MovieDetails;
