import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
        <div className="search-box">
          <input type="text" placeholder="search for food..."/>
          <button><CiSearch /></button>
        </div>
      </form>
    </div>
  );
}
 
export default SearchBar;