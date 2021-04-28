import axios from "../axios/axios";
import React, { useEffect, useState } from "react";
import "../assets/styles/row.css";

export default function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);

        setLoading(false);
        setMovies(request.data.results);
        return request;
      } catch (err) {
        setLoading(false);
      }
    }
    fetchData();
  }, [fetchUrl]);

  if (isLoading) {
    return <h2 style={{ color: "white" }}>Loading...</h2>;
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          if (!movie.backdrop_path || !movie.poster_path) {
            return null;
          }
          return (
            <img
              className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
              key={movie.id}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt="..."
            />
          );
        })}
      </div>
    </div>
  );
}
