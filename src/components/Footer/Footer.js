import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const handelToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <span onClick={handelToTop} className="go_top">
        <FaArrowUp />
      </span>
      <div className="footer_first">
        <img src="images/memory.png" alt="Memory Game" />
        <div className="footer_btn_title_box">
          <p>
            get all from home
          </p>
          <a
            target={"_blank"}
            href="https://www.instagram.com/hzd_yt999/?next=%2F&hl=fr/"
            className="btn_link_to_game"
            rel="noreferrer"
          >
            contacts
          </a>
          <a
            target={"_blank"}
            href="https://github.com/hamzadkhlia/"
            className="btn_link_to_game"
            rel="noreferrer"
          >
            srs
          </a>
        </div>
      </div>
      <div className="footer_last">
        <span> speed</span>
        <div className="footer_link_box">
          <Link to={"/basket"}> basket</Link>
          <Link to={"/favorite"}>  likes</Link>
          <a
            target={"_blank"}
            href="https://github.com/mohammadyousefvand/Shoping-card-react"
            rel="noreferrer"
          >
      
          </a>
        </div>
      </div>
    </footer>
  );
}
