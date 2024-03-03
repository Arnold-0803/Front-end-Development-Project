import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();
    navigate('searched/' + input);
  }

  return (
    <div className="search-bar">
      <form onSubmit={submitHandle}>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="search for food..."
            onChange={(e) => setInput(e.target.value)}
            />
          <button onClick={submitHandle}><CiSearch /></button>
        </div>
      </form>
    </div>
  );
}
 
export default SearchBar;