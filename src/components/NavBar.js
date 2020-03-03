import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LogIn from "./LogIn";

export default function NavBar() {
  const [login, setLogin] = useState("");

  return (
    <>
      <NavWrapper>
        <div className="login">
          <FontAwesomeIcon icon={faUser} size="1x" className="userIcon" />
          <ul className="nav__submenu">
            <li className="nav__submenu-item ">
              <a onClick={() => setLogin("login")}>Login</a>
            </li>
            <li className="nav__submenu-item ">
              <a onClick={() => setLogin("signup")}>Sign up</a>
            </li>
          </ul>
        </div>
      </NavWrapper>
      {login && <LogIn login={login} setLogin={setLogin} />}
    </>
  );
}

const NavWrapper = styled.nav`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 30px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .userIcon {
    margin: 0 10px;
    transition: all 0.2s linear;
    cursor: pointer;
    color: grey;
    &:hover {
      color: black;
    }
  }
  .login {
  }
  .login:hover .nav__submenu {
    height: 60px;
  }
  .nav__submenu {
    margin: 5px 0;
    list-style: none;
    padding: 0;
    height: 0;
    overflow: hidden;
    transition: all 0.5s linear;
  }
  .nav__submenu-item {
    padding: 5px;
  }
  .nav__submenu-item a{
    color: grey;
    cursor:pointer;
    &:hover{
      color black;
    }
  }
`;
