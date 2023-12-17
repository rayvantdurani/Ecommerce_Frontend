import React from "react";
import Logo from "../Images/Logo.jpeg";
import Cart from "../Images/ProductImages/Cart.png";
import MenuItems from "./Sections/MenuSection/MenuItems.jsx";
import LoginSignUP from "../Components/Sections/LoginSignUpDiv/LoginSignUP.jsx";

function Header() {
  return (
    <React.Fragment>
      <section className="header_section">
        <div className="header_container_div flex p-2 max-w-[95%] mx-auto my-1">
          <div className="logo_div flex flex-1 h-[9vh] justify-center align-middle max-h">
            <img
              src={Logo}
              className="logo_img w-[25%] max-w-[50%] min-w-[20%] "
            ></img>
          </div>
          <div className="menu_div flex flex-[2]  shadow-xl rounded-lg h-[9vh] justify-center">
            <MenuItems />
          </div>
          <div className="login_signup_div flex mx-auto flex-1 items-center h-[9vh]">
            <LoginSignUP />
          </div>
          <div className="cart_div">
            <img src={Cart} alt="Cart" hidden></img>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Header;
