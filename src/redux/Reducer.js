import { combineReducers } from 'redux';

const INITIAL_STATE = {
  movies: [],
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MOVIE': {
      let newMovie = action.payload;
      const movies = [...state.movies];

      // check if movie name exists and replace movie with new values
      movies.some((movie, index) => {
        if (movie.name === newMovie.name) {
          newMovie = {
            ...movies[index],
            ...newMovie,
          };

          movies.slice(index, 1);

          return true;
        }
      });

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
