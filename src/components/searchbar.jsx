import { CiSearch } from "react-icons/ci";
import "~sass/searchbar.scss"

const Search = ({ searchHandler }) => {
    const handleSearchInputChange = e => {
      searchHandler(e.target.value); 
    };



    return (
        <>
            <div className="search">
                <label className="search__label">
                    <CiSearch className="search__icon"/>
                    <input
                        type="text"
                        id="search-input"
                         onChange={handleSearchInputChange}
                        className="search__input"
                        placeholder="Search"
                    />
                </label>
            </div>

        </>
    )
}

export default Search;
