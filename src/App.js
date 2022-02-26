import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("This is the dark mode", "success");
      document.title = "TextUtiles - DarkMode";

      // Add pop-up->

      // setInterval(() => {
      //   document.title="TextUtiles - Buy-it";
      // }, 1500);
      // setInterval(() => {
      //   document.title="TextUtiles - Texttext";
      // }, 2500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("This is the light mode", "primary ");
      document.title = "TextUtiles - LightMode";
    }
  };
  return (
    <>
    {/* <Router> */}
        <Navbar
          title="TextUtilss"
          aboutText="About textUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* title is a prop used in navbar */}
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />}> */}
            {/* </Route> */}
            {/* <Route path="/" element={ */}
            <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
            {/* }> */}
            {/* </Route> */}
          {/* </Routes> */}
        </div>
        {/* </Router> */}
    </>
  );
}
export default App;
