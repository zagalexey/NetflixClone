import React from "react";
// import '../styles/Layout.css'

interface MainPageProps {
  children: React.ReactNode;
}

const MainPage: React.FC<MainPageProps> = ({ children }: MainPageProps) => {
  return <div className={"bg-[#141414] h-auto w-screen mainPage mt-[10rem]"}>{children}</div>;
};

export default MainPage;
