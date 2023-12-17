import React from "react";
import { NavLink } from "react-router-dom";

function MenuItems() {
  return (
    <React.Fragment>
      <ul className="menuItemsul flex w-full items-center justify-around ">
        <NavLink className="menuItemsli font-sans box-border border border-transparent hover:border-#525252">
          Home
        </NavLink>
        <NavLink
          to="/Men"
          className="menuItemsli font-sans box-border border-1 hover:border-1 border-blue-600"
        >
          Men
        </NavLink>
        <NavLink
          to="/Women"
          className="menuItemsli font-sans box-border border-1 hover:border-1 border-blue-600"
        >
          Women
        </NavLink>
        <NavLink className="menuItemsli font-sans box-border border-1 hover:border-1 border-blue-600">
          Contact Us
        </NavLink>
      </ul>
    </React.Fragment>
  );
}

export default MenuItems;
