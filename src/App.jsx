import React from "react";
import {
  Contact,
  Hero,
  Footer,
  Projects,
  Skills,
} from "./components/sections/import";
import { Navbar } from "./components/ui/import";

const App = () => {
  return (
    <div className=" w-full">
      <div className="bg-beige">
        <Navbar />
      </div>
      <div>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
