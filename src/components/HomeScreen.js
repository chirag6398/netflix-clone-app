import React from "react";
import homescreenStyle from "../assets/styles/homescreen.module.css";
import Nav from "./Nav";
import Banner from "./Banner.js";
export default function HomeScreen() {
  return (
    <div className={homescreenStyle.HomeScreen}>
      <Nav />
      <Banner />
    </div>
  );
}
