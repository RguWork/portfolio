import React from "react";
import About from "./components/About";
import Miscellaneous from "./components/Miscellaneous";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Research from "./components/Research";

export default function App() {
  return (
    <main className = "font-quattrocento text-gray-400 bg-dark-gray body-font">
        <Navbar />
        <About />
        <Research />
        <Projects />
        <Miscellaneous />
    </main>
  );
}
