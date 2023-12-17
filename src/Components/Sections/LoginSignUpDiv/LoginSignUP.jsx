import React from "react";

function LoginSignUP() {
  return (
    <React.Fragment>
      <div className="loginButton_div flex flex-[1] justify-end items-center p-2 ">
        <button className="Login_btn flex bg-[#171717] text-white p-2 rounded-md">
          Login
        </button>
      </div>
      <div className="SignUp_Btn_div flex flex-[1] justify-start items-center ">
        <button className="SignUp flex bg-white text-signUpBlack p-2 rounded ">
          SignUp
        </button>
      </div>
    </React.Fragment>
  );
}

export default LoginSignUP;
