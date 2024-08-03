import React from "react";
//import "./styles/index.scss"
//import "./styles/account-login.scss"
import { Link } from "react-router-dom";
import "../styles/selectAccount.css";

export default function SelectAccount() {
  const handleClick = () => {};

  return (
    <section id="select-account">
      <div>
        <div className="logo">
          <img src="./media/newsflix-logo.png"></img>
        </div>

        <div className="container">
          <h1 className="heading">Who's watching?</h1>
          <div className="accounts-container">
            <div className="accounts-row">
              <div className="account">
                <Link to="/home">
                  <img src="/media/square.png" />
                  <p>Kids</p>
                </Link>
              </div>
              <div className="account">
                <Link to="/results">
                  <img src="/media/square.png" />
                  <p>Teens</p>
                </Link>
              </div>
              <div className="account">
                <Link to="/home">
                  <img src="/media/square.png" />
                  <p>Adults</p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <Link to="/home"> Dashboard </Link> */}
      </div>
    </section>
  );
}
