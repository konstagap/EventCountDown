import React from "react";
import styled from "styled-components";

export default function LogIn({ login, setLogin }) {
  return (
    <div
      className="modal"
      id="close"
      className="modal"
      onClick={e => {
        if (e.target.id === "close") {
          setLogin("");
        }
      }}
    >
      <LoginBox className="modal__inner">
        <form id="form" className="form">
          <h2>{login}</h2>
          {login === "signup" ? (
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                id="email"
                placeholder="Enter email"
              />
            </div>
          ) : null}

          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              name="Username"
              type="text"
              id="username"
              placeholder="Enter username"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="text"
              id="password"
              placeholder="Enter password"
            />
            <input type="submit" value="Submit" className="submit" />
          </div>
        </form>
      </LoginBox>
    </div>
  );
}
const LoginBox = styled.div`
  background: #fff !important;
  .form-control {
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    input {
      margin: 3px 0;
      padding: 5px;
    }
    .submit {
      display: block;
      margin-top: 15px;
      border: none;
      padding: 7px;
      cursor: pointer;
    }
  }
`;
