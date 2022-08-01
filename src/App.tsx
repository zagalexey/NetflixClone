import React, {createContext, useState} from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { results } from "./data/movieDB";
import MovieList from "./components/MovieList";
import IntroMovie from "./components/IntroMovie";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import InfoModal from "./components/InfoModal";


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

function App() {
  // const API_KEY = 'e1a2c26e413c33d2bedda22168b9ca27'
  // const hrefAllMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

  // const [movies, setMovies] = useState<movieType[]>([])
  const [movies, setMovies] = useState<movieType[] | null>(results);
  // const [movieLayout, setMovieLayout] = useState<movieType>()
  const [movieLayout, setMovieLayout] = useState<movieType | null>(results[2]);
  const [modal, setModal] = useState(false)

  // setMovies(results)
  // setMovieLayout(results[0])

  // fetch(hrefAllMovies)
  // 	.then(response => {
  // 		return response.json()
  // 	})
  // 	.then(data => {
  // 		setMovies(data.results)
  // 		setMovieLayout(data.results[0])
  // 		// setAllSetUp(true)
  // 	})

  const onScroll = (): void => {
    let elem = document.getElementsByTagName("nav");
    let parentElem = document.querySelector("#root");

    let positionObj =
      parentElem !== null ? parentElem.getBoundingClientRect() : null;
    if (positionObj !== null && positionObj.top !== 0) {
      elem[0].classList.remove("navbarOnScrollOff");
      elem[0].classList.add("navbarOnScrollOn");
    } else {
      elem[0].classList.remove("navbarOnScrollOn");
      elem[0].classList.add("navbarOnScrollOff");
    }
  };

  const onInfoHandler = ():void => {
    setModal(true)
    console.log(modal);
  }

  const onInfoModalClose = ():void => {
    setModal(false)
  }


  window.onscroll = function () {
    onScroll();
  };

  return (
    <div className={'w-100% h-[auto]'}>
      {modal ? <InfoModal onInfoModalClose={onInfoModalClose} movie={movieLayout}/> : <></>}
      <Navbar />
      <Layout
        title={movieLayout ? movieLayout.title : null}
        overview={movieLayout ? movieLayout?.overview : null}
        imgPath={movieLayout ? movieLayout?.backdrop_path : null}
        adult={movieLayout ? movieLayout?.adult : null}
      >
        <IntroMovie
          title={movieLayout!.title}
          overview={movieLayout!.overview}
          onInfoHandler={onInfoHandler}
        />
        <MainPage>
          <MovieList movies={movies} />
        </MainPage>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
