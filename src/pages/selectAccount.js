import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";
import "../styles/selectAccount.css";

export default function SelectAccount() {
  const handleClick = () => {};

  return (
    <section id="select-account">
      <div className="select-account-container">
        <div className="logo">
          <img src="./media/newsflix-logo.png"></img>
        </div>

        <div className="container">
          <h1 className="heading">Who's watching?</h1>
          <div className="accounts-container">
            <div className="accounts-row">
              <div className="account">
                <Link to="/home">
                  <img src="/media/kid-profile-picture.png" />
                  <h6>Kids</h6>
                </Link>
              </div>
              <div className="account">
                <Link to="/home">
                  <img src="/media/teen-profile-picture.png" />
                  <h6>Teens</h6>
                </Link>
              </div>
              <div className="account">
                <Link to="/home">
                  <img src="/media/adult-profile-picture.png" />
                  <h6>Adults</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
