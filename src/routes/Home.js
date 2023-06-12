import React from "react";
import ImageSlider from "../test/ImageSlider";
import Cards from "../test/Cards"
// import cardData from "../test/"
import { SliderData } from "../test/SliderData";
import "./home.css";
import "../test/Cards.css";


function Home() {
  return (
    <div className="home">
      <br/>
      <h4>We have got plenty of games!</h4>
      <br/>
      <ImageSlider slides={SliderData} />

      <br/>
      <br/>

      <Cards/>
      {/* <div className="container">
        <div className="childDiv">
          game 1
          <img src={require("./images/AssassinsCreed.jpg")} />
        </div>
        <div className="childDiv">
          game 2
        </div>
        <div className="childDiv">
          game 3
          <img src={require("./images/AssassinsCreed.jpg")} />
        </div>

        <div className="childDiv">
          game 3
          <img src={require("./images/AssassinsCreed.jpg")} />
        </div>

        <div className="childDiv">
          game 3
          <img src={require("./images/AssassinsCreed.jpg")} />
        </div>

        <div className="childDiv">
          game 3
          <img src={require("./images/AssassinsCreed.jpg")} />
        </div>
      </div> */}
    </div>
  );
}

export default Home;
