import React from "react";
import { navLinks } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const navbar = () => {
  return (
    <div>
      <div className="header">
        <div className="menu">
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Project</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faSquareGithub} />
              </a>
            </li>
            <li>
              <a href="">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;
