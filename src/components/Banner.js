import React from "react";
import "../assets/styles/banner.css";

export default function banner() {
  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
        height: "448px",
      }}
    >
      <div className="banner__contents">
        <h1 className="baner__tile">Movie name</h1>
        <div className="banner__buttons">
          <button>Play</button>
          <button>My list</button>
        </div>
        <h1 className="banner__desc">
          {truncate(
            "this is the description hello usieyfui euyuiwkf aefuhqaf qweurfiqak aksdhuywe er7qw3ebscyhs asuydaqnwhd ",
            150
          )}
        </h1>
      </div>

      <div className="banner--fadebotton" />
    </header>
  );
}
