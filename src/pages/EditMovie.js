import React, { Component } from 'react';
import Loading from '../components/Loading'
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import { Redirect } from 'react-router-dom';


class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      status: 'loading',
      shouldRedirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateState = () => {
    const { match: { params: { id } } } = this.props
    const { getMovie } = movieAPI;
    return getMovie(id).then((movie) => this.setState({
      movie: movie,
      status: false,
    }));
  }
  
  handleSubmit(updatedMovie) {
    const { updateMovie } = movieAPI;
    updateMovie(updatedMovie);
    this.setState({
      shouldRedirect: true,
    })
  }

  componentDidMount() {
    this.updateState();
  }


  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/"/>
    }

    if (status === 'loading') {
      return <Loading />
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

export default EditMovie;
