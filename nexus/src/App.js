import "./App.css";
import SplitWithImage from "./FrontPage/FirstContainer";
import Navbar from "./FrontPage/Navbar";
import Sidebar from "./FrontPage/Sidebar";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
<SplitWithImage/>
     
    </div>
  );
}

export default App;
