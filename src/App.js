import React from "react";
import Navbar from "./component/Navmenu";
import "./App.css";

function App() {
  let navbar = [
    { item: "home" },
    {
      item: "contact",
      subitem: ["for enterpreneurs", "for students", "for hobbyists"]
    },
    { item: "services" }
  ];

  return (
    <div className="App">
      <Navbar y={navbar} />
    </div>
  );
}

export default App;
