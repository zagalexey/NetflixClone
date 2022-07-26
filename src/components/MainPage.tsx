import React from "react";
import '../styles/Layout.css'

interface MainPageProps {
  children: React.ReactNode;
}

const MainPage: React.FC<MainPageProps> = ({ children }: MainPageProps) => {
  return <div className={"bg-black h-auto w-full mainPage"}>{children}</div>;
};

export default MainPage;
