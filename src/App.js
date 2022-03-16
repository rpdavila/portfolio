import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage";
import ProjectPage from "./pages/projectpage/projectpage";
import background from "./assets/computer.jpg";
import './App.css';

const backgroundImage = {
  backgroundImage: background,
  backgroundSize: 'cover',
  height: '100vh'
}
function App() {
  return (
    <div className="App" style={backgroundImage}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/projects" element={<ProjectPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
