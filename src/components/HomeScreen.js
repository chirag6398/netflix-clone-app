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
      <Row title="ACTION MOVIES" fetchUrl={request.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={request.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={request.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={request.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}
