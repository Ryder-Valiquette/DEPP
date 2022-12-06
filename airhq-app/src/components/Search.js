const SearchBar = () => (
    <div 

        /* Sets Search Bar in middle top of homepage*/

        style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '15px'
        }}
    >
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search AQI</span>
        </label>
        <input
            type="text"
            id="header-search"

            /* Temporary test to be displayed in search bar to user*/

            placeholder="City, State or Zip"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
    </div>
);

export default SearchBar;

