import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import About from "./Components/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
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
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtile"
          aboutText=" About "
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
<<<<<<< HEAD
            <Route path="/about" element={<About />} />         
=======
            <Route path="/about" element={<About />} />
>>>>>>> 75c9e0e7f990616ebd80212cfd54d28cf528b278
            <Route path="/" element={<TextForm
              showAlert={showAlert}
              heading="Enter The text to analyze below"
              mode={mode}
<<<<<<< HEAD
            />} />         
=======
            />}  />
>>>>>>> 75c9e0e7f990616ebd80212cfd54d28cf528b278
          </Routes>
          
        </div>
      </Router>
    </>
  );
}

export default App;
