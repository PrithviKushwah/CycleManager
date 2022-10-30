import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./My components/Home";
import Price from "./My components/Price";
import SearchBar from "./My components/SearchBar";
import ContactUs from "./My components/ContactUs";
import Loginpage from "./My components/LoginPage";

function App() {
  return (
    <>
      <Home />
      <Price />
      <SearchBar />
      <ContactUs />
      <Loginpage />
    </>
  );
}

export default App;