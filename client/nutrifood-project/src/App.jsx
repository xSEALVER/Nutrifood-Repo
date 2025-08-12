import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import SignUpPage from "./Pages/SignUpPage.jsx";
import SignInPage from "./Pages/SignInPage.jsx";
import JournalPage from "./Pages/JournalPage.jsx";
import Formulaire1 from "./Components/Formulaire1.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/formulaire1" element={<Formulaire1 />} />

        </Routes>
      </Router>
    </>
  );
}


export default App;
