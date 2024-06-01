import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Leftnav from "./components/Leftnav";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="bg-background h-screen w-full">
      <div className="absolute h-full w-[60px]">
        <Leftnav />
      </div>
      <div className="ml-[60px]">
        <Header />
        <Hero />
        {/* <div className="h-80 w-full bg-background"></div> */}
        <About />
        <div className="h-96 w-full bg-background"></div>
        <Projects />
        <div className="h-96 w-full bg-background"></div>
        <Experience />
        <div className="h-96 w-full bg-background"></div>
        <Contact />
      </div>
      <div className="h-2"></div>
    </main>
  );
}

export default App;
