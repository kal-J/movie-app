import { combineReducers } from 'redux';

const INITIAL_STATE = {
  movies: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MOVIE': {
      let newMovie = action.payload;
      let movies = [...state.movies];

      // check if movie name exists and replace movie with new values
      let movieIndex;
      movies.forEach((movie, index) => {
        if (movie.name === newMovie.name) {
          movieIndex = index;
        }
      });

      // replace movie with same name as new movie
      if (movieIndex !== undefined) {
        movies[movieIndex] = {
          ...movies[movieIndex],
          ...newMovie,
        };
        const newState = {
          movies,
        };

        return newState;
      }
      
      movies.push(newMovie);

      const newState = {
        movies,
      };
      return newState;
    }

    default:
      return state;
  }
};

export default combineReducers({
  reducer: appReducer,
});
