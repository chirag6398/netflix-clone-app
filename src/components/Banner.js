import React, { useState, useEffect } from "react";
import "../assets/styles/banner.css";
import axios from "../axios/axios";
import requests from "../request/Request";
export default function Banner() {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );

      return request;
    }
    fetchdata();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
        height: "448px",
      }}
    >
      <div className="banner__contents">
        <h1 className="baner__tile">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        <div className="banner__buttons">
          <button>Play</button>
          <button>My list</button>
        </div>
        <h1 className="banner__desc">{truncate(movies?.overview, 150)}</h1>
      </div>

      <div className="banner--fadebotton" />
    </header>
  );
}
