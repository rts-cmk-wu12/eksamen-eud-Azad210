import { CiSearch } from "react-icons/ci";
import "~sass/searchbar.scss"


export const SearchBar = () => {
    return (
        <>
            <div className="search">
                <label className="search__label">
                    <CiSearch class="search__icon"/>
                    <input
                        type="text"
                        id="search-input"
                        className="search__input"
                        placeholder="Search"
                    />
                </label>
            </div>

        </>
    )
}