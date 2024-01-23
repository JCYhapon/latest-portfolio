"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <header className="bg-white sticky">
      <nav className="flex justify-between container mx-auto w-[63%] py-10 ">
        <div>
          <span className="font-kanit font-600">@JCYhapon</span>
        </div>
        <div>
          <ul className="flex gap-8">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
