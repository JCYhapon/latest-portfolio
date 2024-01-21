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
    <div>
      <Navbar />

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
