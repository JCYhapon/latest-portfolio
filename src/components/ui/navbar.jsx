"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <nav className="sticky top-[20px]">
      <div className={header ? "bg-beige" : "bg-transparent"}>
        {/* PARENT */}
        <div className="header flex w-[70%] sm:w-[90%] lg:w-[70%] justify-between m-auto mt-[40px] mb-[30px]">
          {/* FIRST CHILD */}
          <div className="menu">
            <nav>
              <ul className="flex gap-8">
                <li>
                  <a href="#about" className="font-poppins text-[16px]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="font-poppins text-[16px]">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="font-poppins text-[16px]">
                    Project
                  </a>
                </li>
                <li>
                  <a href="#contact" className="font-poppins text-[16px]">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* SECOND CHILD */}
          <div className="social">
            <ul className="flex gap-4">
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faSquareGithub}
                    className="h-6 text-gray-500"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faLinkedin} className="h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
