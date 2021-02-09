import React from "react";
import homescreenStyle from "../assets/styles/homescreen.module.css";
import Nav from "./Nav";
export default function HomeScreen() {
  return (
    <div className={homescreenStyle.HomeScreen}>
      <Nav />
    </div>
  );
}
