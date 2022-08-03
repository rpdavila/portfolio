import React from "react";
import { Routes, Route } from "react-router-dom";
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage";
import ProjectPage from "./pages/projectpage/projectpage";
import ContactPage from "./pages/contact/contact-page";
import './App.css';

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </div>
  );
}

export default App;
