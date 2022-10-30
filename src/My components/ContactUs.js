import React from "react";
import "./Myproject.css";
// import { FaInstagram } from "react-icons/fa";
// import { FaMapMarked } from "react-icons/fa";
// import { FaPhone } from "react-icons/fa";

function ContactUs() {
  return (
    <div id="contact" className="maincont">
      <div className="heading">
        <div className="headimg">
          <img
            src="https://th.bing.com/th/id/R.3391f7b1aa8dbb2a41335d4cca31b7b3?rik=l%2bse3Ia9Npfmhg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f7ca%2f6z9%2f7ca6z9qMi.png&ehk=cqM2ymIpYiYvptTZ%2fF%2fvGz%2bPnX6bxGcxsTB%2fTDA06ek%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </div>
        <div className="text">Contact Us</div>
        <div className="line"></div>
      </div>
      <div className="flexcont">
        <div className="mainicon">
          <p>
            {/* <FaInstagram /> */}
            <h6>@rudransh.w_ @laxmi.02_ @nehal.sharma.04 @vaibhav___998</h6>
          </p>
          <p>
            {/* <FaMapMarked /> */}
            <h6>Shree Vaishnav Institute of Science And Technology</h6>
          </p>
          <p>
            {/* <FaPhone /> */}
            <h6>+91-8827170991 +91-6261603334</h6>
          </p>
        </div>
      </div>
      <div className="parentform">
        <div className="mainform">
          <div className="container">
            <p className="formheading">Contact Form</p>
            <form action="action_page.php">
              <p className="form">
                <label htmlFor="fname">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="firstname"
                  placeholder="Enter your name"
                />

                <label htmlFor="mnumber">Mobile Number</label>
                <input
                  type="text"
                  id="mnumber"
                  name="mobilenumber"
                  placeholder="Enter your number"
                />

                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />

                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
              </p>

              <label htmlfor="message">Subject</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Write something.."
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;