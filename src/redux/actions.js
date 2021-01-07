const addMovie = (value) => ({
  type: 'ADD_MOVIE',
  payload: value,
});

const setSearch = (value) => ({
  type: 'SEARCH',
  payload: value,
});

export { addMovie, setSearch };
