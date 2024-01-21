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
    <>
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
