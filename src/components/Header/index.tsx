import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderNav, LoginNavigate } from "./style";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [goToLogin, setGoToLogin] = useState(false);
  const navigate = useNavigate();
  if (goToLogin) {
    navigate("/login");
  }

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
      <div
        onClick={() => setOpen(true)}
        className={open ? "none" : "div-dropdown"}
      >
        <img className="dropdown" src="./log.png" alt="Logo" />
      </div>
      <div className={open ? "none" : "buttons-header"}>
        <button className="inicio">Início</button>
        <button className="quem-somos">Quem somos</button>
        <LoginNavigate to="login">Login</LoginNavigate>
      </div>
      <div className={open ? "div-menu" : "none"}>
        <div>
          <button onClick={() => setOpen(false)}>X</button>
        </div>
        <button>Início</button>
        <button>Quem somos</button>
        <button onClick={() => setGoToLogin(true)}>Login</button>
      </div>
    </HeaderNav>
  );
};

export default Header;
