const Search = (props) => {
  const { search, setSearch } = props;

  return (
    <section className="search">
      <div>
        <label htmlFor="search">Search</label>
        <br />
        <input
          type="text"
          name="search"
          value={search || ''}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </section>
  );
};

export default Search;
