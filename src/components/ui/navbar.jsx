"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <header className=" sticky">
      <nav className="flex justify-between container mx-auto w-[63%] py-10 ">
        <div>
          <span className="font-kanit font-bold tracking-wider text-primaryFont">
            @JCYhapon
          </span>
        </div>
        <div>
          <ul className="flex gap-8">
            <li>
              <a href="#about" className="font-kanit font-bold tracking-wider">
                home
              </a>
            </li>
            <li>
              <a href="#skills" className="font-kanit font-bold tracking-wider">
                skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="font-kanit font-bold tracking-wider"
              >
                project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-kanit font-bold tracking-wider"
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
