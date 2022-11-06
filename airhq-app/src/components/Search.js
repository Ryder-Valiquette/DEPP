const SearchBar = () => (
    <div 
        style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search AQI</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="City, State or Zip"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    </div>
);

export default SearchBar;

