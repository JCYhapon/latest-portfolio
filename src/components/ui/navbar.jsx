import React from "react";
import { navLinks } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const navbar = () => {
  return (
    <nav>
      <div className="flex justify-between container mx-auto py-8">
        <div className="">
          <ul className="flex justify-between items-center gap-8">
            <li className="text-gray">
              <a href="#about">About</a>
            </li>
            <li className="text-brown">
              <a href="#skills">Skills</a>
            </li>
            <li className="text-brown">
              <a href="#projects">Projects</a>
            </li>
            <li className="text-brown">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex gap-3">
            <li>
              <a href=""></a>
              <FontAwesomeIcon icon={faSquareGithub} className=" w-6 h-6" />
            </li>
            <li>
              <a href=""></a>
              <FontAwesomeIcon icon={faLinkedin} className=" w-6 h-6" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
