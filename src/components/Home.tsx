import React from "react";
import { Link } from "react-router-dom";
import HeroBG from "../images/HeroBg.jpg";
export function loader() {
  return "the data is here";
}
export default function Home() {
  return (
    <div className="home-section container mt-5 d-flex justify-content-center align-items-center">
      <div className=" row main-row">
        <div className="main-col col-12 col-md-6 p-4">
          <h1>Explore your next journey...</h1>
          <p className="ms-2 mt-3">
            Add your next favorite book or audio book to your library.
          </p>
          <Link to="/books" className="">
            <button className="">Find your book</button>
          </Link>
        </div>
        <div className="main-col col-12 col-md-6 p-4 img-container "></div>
      </div>
    </div>
  );
}
