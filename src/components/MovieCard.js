import React from 'react';
import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, imagePath, storyline } } = this.props
    return (
      <div data-testid="movie-card" className="movie-card">
        <h3>{ title }</h3>
        <img src={ imagePath } alt={ title } />
        <p>{ storyline }</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
