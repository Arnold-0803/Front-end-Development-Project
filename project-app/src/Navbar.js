import { useState } from "react";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { GiCampCookingPot  } from "react-icons/gi";
import { Link } from "react-router-dom";
import SearchBar from "./Searchbar";

const NavBar = () => {
  return (
    <div className="nav">
      <Link to={'/'}><h1><span><GiCampCookingPot /></span>Cook</h1></Link>
      <SearchBar />
      <div className="links">
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li className="exo-links">
            <Link>Exotic cuisine</Link>
            <RiArrowDropUpLine />
            <RiArrowDropDownLine />
            <ul>
                <li>
                  <Link to={'cuisine/Italian'}>Italian</Link>
                </li>
                <li>
                  <Link to={'cuisine/American'}>American</Link>
                </li>
                <li>
                  <Link to={'cuisine/Thai'}>Thai</Link>
                </li>
                <li>
                  <Link to={'cuisine/Japanese'}>Japanese</Link>
                </li>
              </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
 
export default NavBar;