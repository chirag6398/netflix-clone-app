import React from "react";
import homescreenStyle from "../assets/styles/homescreen.module.css";
import Nav from "./Nav";
import Banner from "./Banner.js";
import request from "../request/Request";
import Row from "./Row.js";
export default function HomeScreen() {
  return (
    <div className={homescreenStyle.HomeScreen}>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={request.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={request.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={request.fetchTrending} />
      <Row title="HORROR MOVIES" fetchUrl={request.fetchTopRated} />
      <Row title="COMEDY MOVIES" fetchUrl={request.fetchTrending} />

      <Row title="ROMANCE MOVIES" fetchUrl={request.fetchTopRated} />
      <Row title="DOCUMENTARIES" fetchUrl={request.fetchTrending} />
    </div>
  );
}
