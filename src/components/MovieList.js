const MovieList = (props) => {
  const movies = props.movies || [];
  return (
    <section>
      <div className="movie-list-head">
        <span>Name</span>
        <span>Rating</span>
        <span>Duration</span>
      </div>

      {movies.map((movie, index) => {
        return (
          <div key={index} className="movie">
            <span>{movie.name}</span>
            <span>{movie.rating}</span>
            <span>{movie.duration}</span>
          </div>
        );
      })}
    </section>
  );
};

export default MovieList;
