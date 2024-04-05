import React from "react";
import { Link } from "react-router-dom";
import HeroBG from "../images/HeroBg.jpg";
export function loader() {
  return "the data is here";
}
export default function Home() {
  return (
    <div className="home-container container mt-5">
      <div className="home-header row">
        <div className="col-12 col-md-6 p-4">
          <h1>Explore your next journey...</h1>
          <p className="ms-5 mt-3">
            Add your next favorite book or audio book to your library.
          </p>
          <Link to="/books" className="">
            <button className="header-button">Find your book</button>
          </Link>
        </div>
        <div className="col-12 col-md-6 p-4 img-container "></div>
      </div>
    </div>
  );
}
