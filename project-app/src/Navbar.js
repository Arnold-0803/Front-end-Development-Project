import { useState } from "react";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { GiCampCookingPot  } from "react-icons/gi";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "./Searchbar";

const NavBar = () => {

  const [toggle, setTaggle ] = useState(true);
  const [upArrow, setArrowUp] = useState(true);
  const [downArrow, setArrowDown] = useState(false);

  const handleClick = () => {
    setTaggle(prev => !prev);
    setArrowUp(prev => !prev);
    setArrowDown(prev => !prev);
  }

  return (
    <div className="nav">
      <Link to={'/'}><h1><span><GiCampCookingPot /></span>jikoni</h1></Link>
      <SearchBar />
      <div className="links">
        <ul>
          <li>
            <NavLink className="home" to={'/'}>Home</NavLink>
          </li>
          <li className="exo-links">
            <Link className="drop-link"
              onClick={handleClick}
            >Exotic cuisine
              <RiArrowDropUpLine id="up-arrow" className={upArrow ? "active" : ""} />
              <RiArrowDropDownLine id="down-arrow" className={downArrow ? "active" : ""} />
            </Link>
            <ul className={toggle ? "inactive" : ""}>
              <li className="active border">
                <NavLink to={'cuisine/Italian'}>Italian</NavLink>
              </li>
              <li className="active border">
                <NavLink to={'cuisine/American'}>American</NavLink>
              </li>
              <li className="active border">
                <NavLink to={'cuisine/Thai'}>Thai</NavLink>
              </li>
              <li className="active">
                <NavLink to={'cuisine/Japanese'}>Japanese</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
 
export default NavBar;