import React from "react";
import { Routes, Route } from "react-router-dom";

import { Amplify } from "aws-amplify";
import awsExports from './aws-exports';

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage";
import ProjectPage from "./pages/projectpage/projectpage";
import ContactPage from "./pages/contact/contact-page";
import BlogPage from "./pages/blog/blog-page";
import SignInPage from "./pages/sign-in-page/sign-in-page";
import PostBlogItems from "./components/post-blog-items/post-blog-items.component";
import './App.css';

Amplify.configure(awsExports)

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/projects" element={<ProjectPage/>}/>
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/postblog" element={<PostBlogItems/>} />
      </Routes>
    </div>
  );
}

export default App;
