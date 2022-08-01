import React from "react";

interface ButtonProps {
  type: string;
  background: string;
  text: string;
  onClick?: () => void
}

const Button = ({ type, background, text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={"w-fit h-[3.5rem]"}>
      {type === "playBtn" ? (
        <div
          className={
            "bg-white w-full h-full pl-8 pr-8 pt-1 pb-1 flex flex-row justify-center items-center gap-2 rounded-lg"
          }
        >
          <i className="fa-solid fa-play text-3xl"></i>
          <p className={"ml-2 text-[1.2rem] text-black font-bold"}>Play</p>
        </div>
      ) : (
        <div
          className={
            "bg-[grey] w-full h-full pl-8 pr-8 pt-2 pb-2 flex flex-row justify-center items-center gap-2 rounded-lg"
          }
        >
          <i className="fa-solid fa-circle-info text-3xl text-white"></i>
          <p className={"ml-2 text-[1.2rem] bold font-bold text-white"}>
            More Info
          </p>
        </div>
      )}
    </button>
  );
};

export default Button;
