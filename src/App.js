import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/content/about/About";
import News from "./components/content/news/News";
import Documents from "./components/content/documents/Documents";
import Reviews from "./components/content/reviews/Reviews";
import Program from "./components/content/program/Program";
import Gallery from "./components/content/gallery/Gallery";
import Ads from "./components/content/ads/Ads";
import Main from "./components/content/main/Main";
import Projects from "./components/content/projects/Projects";
import CurrentNews from "./components/content/news/CurrentNews";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:link" element={<CurrentNews />} />
        <Route path="/about" element={<About />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/program" element={<Program />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
