import React from "react";
//import "./styles/index.scss"
//import "./styles/account-login.scss"
import {Link} from "react-router-dom";

export default function selectAccount() {

  const handleClick = () => {
    
  };

  return (
    <section id="select-account">
      <div>
        <h1>Who's watching?</h1>
        <p>testing</p>

        <div className="accounts">

          <div className="account">
            <button type="button" onClick={handleClick}><img src="/media/square.png"/>Kids</button>
            <Link to="/home" >Go home</Link>
          </div>
          <div className="account">
            <button type="button" onClick={handleClick}><img src="/media/square.png"/>Teens</button>
          </div>
          <div className="account">
            <button type="button" onClick={handleClick}><img src="/media/square.png"/>Adults</button>
          </div>

        </div>

       
        {/* <Link to="/home"> Dashboard </Link> */}
      </div>
    </section>
  );
}

