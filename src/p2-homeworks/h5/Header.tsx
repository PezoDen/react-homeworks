import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            // add NavLinks
          <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/pre-junior"}>PreJunior</NavLink>
          </nav>


        </div>
    );
}

export default Header;
