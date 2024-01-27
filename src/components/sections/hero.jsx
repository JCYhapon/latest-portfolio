import React from "react";
import { intro } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { me } from "../assets";

const hero = () => {
  return (
    <section
      id="about"
      className="w-[60%] lg:min-h-[80vh] container mx-auto flex flex-row items-center justify-center"
    >
      <div className="flex items-center gap-5">
        <div className="bottom-5">
          <div>
            <span className="text-[22px] font-kanit font-bold tracking-wider text-primaryFont mb-[10rem]">
              Hello, they call me Yhaps.
            </span>
            <h1 className="text-[62px] font-extrabold text-primaryFont drop-shadow-md leading-[5rem]">
              I <span className="text-[#00CC66]">craft</span> and{" "}
              <span className="text-[#00CC66]">develop</span> things for the
              web.
            </h1>
          </div>
          <div className="mt-[30px] flex gap-6">
            <div className="flex justify-center text-center items-center">
              <a
                href="#projects"
                className="rounded bg-[#00CC66] p-2 w-[120px] text-white font-kanit font-semibold tracking-wider"
              >
                projects
              </a>
            </div>

            <ul className="flex gap-3">
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="h-10 text-[rgba(0,51,26,0.726)]"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-10 text-[rgba(0,51,26,0.726)]"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
