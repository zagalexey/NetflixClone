import React from "react";
import "../styles/IntroMovie.css";
import Button from "./Button";

interface IntoMovieProps {
  title: string;
  overview: string;
}

const IntroMovie = ({ title, overview }: IntoMovieProps) => {
  return (
    <div
      className={
        "w-3/4 h-4/5 flex flex-col justify-center items-start gap-8 ml-10"
      }
    >
      <div className={"flex flex-col justify-end w-2/3 h-[80px]"}>
        <div className={"flex items-center"}>
          <img
            className={"h-[35px] w-[35px] p-0"}
            src={require("../icons/netflix_logo_icon_170919.ico")}
            alt="Netflix logo small"
          />
          <p className={"text-1xl text-[white] font-mono tracking-widest ml-2"}>
            MOVIES
          </p>
        </div>
      </div>
      <div className={"flex flex-col items-start h-fit w-full"}>
        <div
          className={
            "flex flex-col justify-center items-center w-fit h-fit gap-4"
          }
        >
          <p
            className={
              "text-5xl font-mono tracking-widest intro-movie text-white"
            }
          >
            {title}
          </p>
          <p className={"intro-movie__logo text-5xl text-white"}>&</p>
        </div>
      </div>
      <div className={"flex flex-col justify-center w-1/2 h-[100px] mt-5"}>
        <p className={"font-mono text-[white]"}>{overview}</p>
      </div>
      <div
        className={"flex flex-col justify-center items-baseline w-1/2 h-[4rem]"}
      >
        <div className={"flex flex-row items-center gap-3"}>
          <Button type={"playBtn"} background={"red-100"} text={"black"} />
          <Button type={"infoBtn"} background={"red"} text={"black"} />
        </div>
      </div>
    </div>
  );
};

export default IntroMovie;
