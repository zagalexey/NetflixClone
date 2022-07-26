import React from "react";

interface IntoMovieProps {
  title: string;
  overview: string;
}

const IntroMovie = ({ title, overview }: IntoMovieProps) => {
  return (
    <div className={"bg-amber-800 w-full h-4/5 flex flex-col gap-8 ml-10"}>
      <div
        className={"flex flex-col justify-center bg-amber-200 w-1/2 h-[100px]"}
      >
        <div className={"flex items-center"}>
          <img
            className={"h-[35px] w-[35px]"}
            src={require("../icons/netflix_logo_icon_170919.ico")}
            alt="Netflix logo small"
          />
          <p className={"text-2xl font-mono tracking-widest ml-2"}>MOVIES</p>
        </div>
      </div>
      <div
        className={"flex flex-col justify-center bg-amber-200 w-1/2 h-[100px]"}
      >
        <p>{title}</p>
      </div>
      <div
        className={"flex flex-col justify-center bg-amber-200 w-1/2 h-[100px]"}
      >
        <p>{overview}</p>
      </div>
      <div
        className={
          "flex flex-col justify-center items-baseline bg-amber-200 w-1/2 h-[100px]"
        }
      >
        <button>Play</button>
        <button>More Info</button>
      </div>
    </div>
  );
};

export default IntroMovie;
