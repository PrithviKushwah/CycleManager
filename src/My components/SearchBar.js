import React from "react";
import "./Myproject.css";
// import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div>
      <div id="search" className="heading">
        <div className="headimg">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/search-131964753234672616.png"
            alt=""
          />
        </div>
        <div className="text">Search Location</div>
        <div className="line"></div>
      </div>
      <div className="searchbar">
        <div className="withicon">
          <input type="text" placeholder="Search..." />
          {/* <FaSearch /> */}
        </div>
      </div>
      <div className="locimg">
        <div className="w20">
          <img
            src="https://image3.mouthshut.com/images/imagesp/925752789s.jpg"
            alt=""
          />
          <p className="abtloc">Indore</p>
        </div>
        <div className="w20">
          <img
            src="https://th.bing.com/th/id/R.3fcc7a3aaa9b839d37cbaed026b07c3b?rik=yLzCfll9ldVsaQ&riu=http%3a%2f%2fmedia-cdn.tripadvisor.com%2fmedia%2fphoto-s%2f01%2f1d%2f33%2fb3%2fhotel-usha-kiran-palace.jpg&ehk=MyzliEAN8JJh29YjypruEcDqJB4OWuLpxRvaPSbn07s%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
          <p className="abtloc">Gwalior</p>
        </div>
        <div className="w20">
          <img
            src="https://www.indiasinvitation.com/wp-content/uploads/2016/07/Bhopal-Tourism-5.jpg"
            alt=""
          />
          <p className="abtloc">Bhopal</p>
        </div>
        <div className="w20">
          <img
            src="https://images.bhaskarassets.com/web2images/521/2020/10/30/100_1604064027.jpg"
            alt=""
          />
          <p className="abtloc">Jabalpur</p>
        </div>
        <div className="w20">
          <img
            src="https://i.pinimg.com/originals/23/a1/44/23a144d5d69659b7030b1f64205e09a3.jpg"
            alt=""
          />
          <p className="abtloc">Burhanpur</p>
        </div>
        <div className="w20">
          <img
            src="https://i.pinimg.com/originals/38/f4/93/38f4931f6ee050cd68e307832fc0fa19.jpg"
            alt=""
          />
          <p className="abtloc">Khandwa</p>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;