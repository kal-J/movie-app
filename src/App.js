import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Form from './components/Form';
import Search from './components/Search';
import MovieList from './components/MovieList';
import mapStateToProps from './redux/mapStateToProps';

const App = (props) => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (search) {
      const filteredMovies = props.redux_state.movies.filter((movie) => {
        return movie.name.toLowerCase().startsWith(search.toLowerCase());
      });
      setMovies(filteredMovies);
    } else {
      setMovies(props.redux_state.movies);
    }
  }, [props.redux_state.movies, search]);

  return (
    <div className="App">
      <Form />
      <Search search={search} setSearch={setSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default connect(mapStateToProps)(App);
