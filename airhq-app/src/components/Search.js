const Search = () => {
    return <div>Hello world!</div>
}

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search AQI</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="City or Zip"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;

