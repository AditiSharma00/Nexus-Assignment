import "./App.css";
import SplitWithImage from "./FrontPage/FirstContainer";
import Navbar from "./FrontPage/Navbar";
import Sidebar from "./FrontPage/Sidebar";
import { useState } from "react";
import SliderOne from "./FrontPage/Slider1";
import SecondConatiner from "./FrontPage/SecondContainer";
import ThirdContainer from "./FrontPage/thirdContainer";
import FourthConatiner from "./FrontPage/fourthContainer";
import FifthContainer from "./FrontPage/FifthContainer";
import SixthContainer from "./FrontPage/SixthContainer";
import Quotes from "./FrontPage/Quotes";
import LargeWithLogoCentered from "./FrontPage/Footer";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />

      <SplitWithImage />
      <SliderOne />
      <SecondConatiner />
      <ThirdContainer />
      <SliderOne />
      <FourthConatiner />
      <FifthContainer />
      <SixthContainer />
      <Quotes style={{ backgroundColor: "#f7faf1" }} />
      <LargeWithLogoCentered />
    </div>
  );
}

export default App;
