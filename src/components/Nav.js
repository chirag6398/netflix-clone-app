import React, { useEffect, useState } from "react";
import "../assets/styles/nav.css";

export default function Nav() {
  const [show, handleShow] = useState(false);
  const transitionnavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionnavbar);
    return () => {
      window.removeEventListener("scroll", transitionnavbar);
    };
  }, []);
  return (
    <div className={show && "nav"}>
      <div className="nav_container">
        <img
          className="netflix_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="..."
        />
        <img
          className="nav_avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="...."
        />
      </div>
    </div>
  );
}
