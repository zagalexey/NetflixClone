import React from "react";

type movieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  id: number;
  title: string;
  release_date: string;
};

interface MovieListProps {
  movies: movieType[] | null;
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className={"w-full flex justify-center"}>
      {/*<ul className={"flex flex-row justify-evenly flex-wrap gap-x-4 gap-y-2"}>*/}
      <ul className={"grid grid-cols-6 gap-y-8 gap-x-12"}>
        {movies!.map((item) => (
          <div key={item.id}>
            <img
              className={"rounded-lg"}
              alt="Movies img"
              style={{width: "200px" }}
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
