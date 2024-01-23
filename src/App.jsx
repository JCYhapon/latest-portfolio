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
    <div className="bg-beige">
      <Navbar />

      <main className="relative w-full h-full">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
