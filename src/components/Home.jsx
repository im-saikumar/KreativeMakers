import React from "react";
import "./App.css";
import Hero from "./Hero/Hero";
import Explore from "./titleCard/Explore";
import MakersCombo from "./makersCombo/makersCombo";
import SubcriptionDetail from "./subcription/subcriptionDetail";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="container">
        <Hero/>
        <div className="App">
          <Explore/>
          <MakersCombo />
          <SubcriptionDetail/>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default Home;
