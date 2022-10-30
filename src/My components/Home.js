import React from "react";
import "./Myproject.css";
import "./SearchBar";
function Home() {
  return (
    <div>
      <div id="homepage" className="bgimg">
        <div className="w3-top">
          <nav className="bar">
            <div className="left">
              <a className="items padding" href="#homepage">
                Home
              </a>
              <a className="items padding" href="#bycycle">
                Price
              </a>
              <a className="items padding" href="#search">
                Select location
              </a>
              <a className="items padding" href="#contact">
                Contact Us
              </a>
            </div>
            <div className="right">
              <a className="items padding " href="#login">
                Login
              </a>
            </div>
          </nav>
        </div>
        <div className="logo">
          <img
            src="https://www.golfandcountry.it/wp-content/uploads/2019/06/logo_bikrerent.png"
            alt=""
          />
          <p>MAKE YOUR RIDE MORE COMFORTABLE</p>
        </div>
      </div>
    </div>
  );
}

export default Home;