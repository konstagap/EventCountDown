import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <NavWrapper>
      <div className="login">
        <FontAwesomeIcon icon={faUser} size="1x" className="userIcon" />
        <span>Login</span> or <span>Sign up</span>
      </div>
    </NavWrapper>
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
`;
