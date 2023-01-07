import React from "react";
import { HeaderNav, LoginNavigate } from "./style";


const Header = () => {
  return (
    <HeaderNav>
      <div className="div-header">
        <div className="div-logo">
          <img className="logo" src="./xv.png" alt="Logo" />
        </div>

        <div className="div-title">
          <h1 className="title">Draft Footz</h1>
        </div>
      </div>
      <div className="div-dropdown">
        <img className="dropdown" src="./log.png" alt="Logo" />
      </div>
      <div className='buttons-header'>
        <button className="inicio">Início</button>
        <button className="quem-somos">Quem somos</button>
        <LoginNavigate to='login'>Login</LoginNavigate>
      </div>
    </HeaderNav>
  );
};

export default Header;
