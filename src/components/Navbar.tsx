import React from "react";
import "../styles/Navbar.css";

//todo Add key property to list items

const Navbar = () => {
  const navbarLinks = [
    "Home",
    "TV Shows",
    "Movies",
    "New & Popular",
    "My List",
    "Browse by Languages",
  ];

  return (
    <nav className={"bg-black h-[4rem] w-full sticky top-0 left-0 navbar"}>
      <div
        className={"h-full w-full flex flex-row items-center justify-between"}
      >
        <div className={"h-full w-1/2 flex flex-row items-center ml-10"}>
          <a href="/">
            <img
              className={"h-[32px] w-[92px] object-scale-down"}
              src={require("../icons/NetflixLogo.png")}
              alt="Netflix logo"
            />
          </a>
          <ul className={"flex flex-row gap-6 ml-10"}>
            {navbarLinks.map((item) => (
              <a href={"/"}>
                <li className={"text-white text-[.7rem]"}>{item}</li>
              </a>
            ))}
          </ul>
        </div>
        <div
          className={
            "h-full w-1/3 flex flex-row justify-end mr-10 items-center gap-6"
          }
        >
          <svg
            version="1.1"
            fill={"#fff"}
            width={"24px"}
            height={"24px"}
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink={"http://www.w3.org/1999/xlink"}
            x="0px"
            y="0px"
            viewBox="0 0 487.95 487.95"
            xmlSpace={"preserve"}
          >
            <g>
              <path
                d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1
                            c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4
                            c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"
              />
            </g>
          </svg>
          <a className={"text-white text-[.7rem]"} href="/">
            Kids
          </a>
          <svg
            version="1.1"
            width={"24px"}
            height={"24px"}
            fill={"#fff"}
            enableBackground={"#fff"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            enable-background="new 0 0 512 512"
          >
            <g>
              <path d="m440.1,362.1c-14-8.6-35.1-21.6-34.8-35.4 2.1-88.3-19-155.6-60.9-194.4-9.6-8.9-20.2-16.2-31.6-21.8 8-10.3 12.7-22.8 12.7-36.3 0-34.8-31.2-63.2-69.6-63.2s-69.6,28.4-69.6,63.2c0,13.5 4.7,26 12.7,36.3-11.4,5.6-22,12.9-31.6,21.8-41.9,38.9-62.9,106.1-60.9,194.4 0.3,13.8-20.8,26.8-34.8,35.4-13.6,8.4-30.6,18.9-24.6,36.5 6,17.6 14.9,21.7 122.3,22.6 4.9,39.4 40.3,79.8 86.5,79.8 46.2,0 81.5-40.4 86.5-79.8 107.4-0.9 116.4-5 122.3-22.6 6-17.6-10.9-28.1-24.6-36.5zm-184.1-310.3c13.6-1.42109e-14 24.6,10 24.6,22.4 0,12.3-11,22.4-24.6,22.4s-24.6-10-24.6-22.4c0-12.3 11-22.4 24.6-22.4zm0,408.4c-19,0-36.3-19.7-40.9-38.7 11.8,0 70,0 81.8,0-4.6,19-21.9,38.7-40.9,38.7zm-134.7-80.7c16-12.7 30.8-30 30.2-53.6-1.8-76 15.3-134.6 48.1-165 15.8-14.7 34.8-22.4 56.4-23 21.6,0.6 40.6,8.3 56.4,23 32.8,30.4 49.8,89 48.1,165-0.5,23.6 14.2,40.9 30.2,53.6-37.4,1.1-232,1.1-269.4,0z" />
            </g>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
