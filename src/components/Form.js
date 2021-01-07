import { useState } from 'react';
import mapStateToProps from '../redux/mapStateToProps';
import { addMovie } from '../redux/actions';
import { connect } from 'react-redux';

const Form = (props) => {
  const [movie, setMovie] = useState({});
  const { addMovie } = props;

  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // submit movie
          addMovie(movie);
          setMovie({}); // reset form;
        }}
      >
        <div>
          <label htmlFor="name">Movie Name</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Name of movie"
            value={movie.name || ''}
            onChange={(e) => setMovie({ ...movie, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <br />
          <input
            type="text"
            name="rating"
            placeholder="Movie rating"
            value={movie.rating || ''}
            onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <br />
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={movie.duration || ''}
            onChange={(e) => setMovie({ ...movie, duration: e.target.value })}
          />
        </div>

        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </section>
  );
};

export default connect(mapStateToProps, { addMovie })(Form);
