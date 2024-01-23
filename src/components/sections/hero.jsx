import React from "react";
import { intro } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const hero = () => {
  return (
    <section
      id="about"
      className="w-[60%] lg:min-h-[88vh] container mx-auto flex flex-row items-center justify-center"
    >
      <div className="flex items-center gap-5">
        <div>
          <img src="" alt="" />
          <h1 className="text-[5rem]">IMAGE HERE</h1>
        </div>
        <div>
          <div>
            <span className="text-[22px] font-kanit font-bold tracking-wider text-primaryFont">
              Hello, they call me Yhaps.
            </span>
            <h1 className="text-[62px] font-extrabold text-primaryFont drop-shadow-md">
              I <span className="text-[#00CC66]">craft</span> and{" "}
              <span className="text-[#00CC66]">develop</span> things for the
              web.
            </h1>
          </div>
          <div className="mt-[30px] flex gap-5">
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
                    icon={faSquareGithub}
                    className="h-10 text-primaryFont"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="h-10 text-primaryFont"
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
