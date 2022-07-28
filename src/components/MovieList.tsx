import React from "react";
import {movieType} from "../interface/interface";
import MovieItem from "./MovieItem";

interface MovieListProps {
  movies: movieType[] | null;
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className={"w-screen flex justify-center"}>
      {/*<ul className={"flex flex-row justify-evenly flex-wrap gap-x-4 gap-y-2"}>*/}
      <ul className={"w-[90%] grid grid-cols-6 gap-y-8 gap-x-12"}>
        {movies!.map(item => (
            <MovieItem movie={item}/>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
