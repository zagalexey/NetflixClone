import React, {useState} from 'react';
import {GenreType, movieType} from "../interface/interface";
import {genres} from "../data/GenreDB";

interface MovieItemProps {
    movie: movieType
    // onHover: () => void
}

const MovieItem = ({movie}: MovieItemProps) => {

    const [hover, setHover] = useState(false)

    const genreList = genres

    const getGenreName = (id: number, list: GenreType[]): string => {
        let genreName: string = ''
        list.forEach((item) => {
            if (item.id === id) {
                genreName = item.name
            }
        })
        return genreName
    }

    const onHoverOn = () => {
        console.log('Hover on')
        setHover(true)
    }

    const onHoverOff = () => {
        console.log('Hover off')
        setHover(false)
    }

    return (
        <div onMouseOver={onHoverOn} onMouseLeave={onHoverOff}>
            {!hover ?
                (<div className={'h-[200px] w-[140px]'} key={movie.id}>
                    <img
                        className={"rounded-lg"}
                        alt="Movies img"
                        style={{width: "140px", height: '200px'}}
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    />
                </div>) :
                (<div
                    className={'bg-black absolute transform h-fit w-[210px] -translate-x-[35px] -translate-y-[80px] rounded-lg'}
                    key={movie.id}>
                    <div className={'w-full h-full'}>
                        <img
                            className={"rounded-lg"}
                            alt="Movies img"
                            style={{width: "210px", height: '300px'}}
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        />
                        <div className={'flex flex-row justify-start items-center my-2 gap-4'}>
                            <button className={'text-white text-[1.5rem]'}><i className="fa-solid fa-circle-play"></i></button>
                            <button className={'text-white text-[1.5rem]'}><i className="fa-solid fa-plus"></i></button>
                            <button className={'text-white text-[1.5rem]'}><i className="fa-solid fa-thumbs-up"></i></button>
                        </div>
                        <div className={'w-full h-full my-2'}>
                            <ul className={'flex w-full flex-row flex-wrap justify-start items-center'}>
                                {movie.genre_ids.map(item => (
                                    <span className={'flex flex-row items-center text-[grey]'}><i className="fa-solid fa-circle-dot text-[0.5rem]"></i><li
                                        className={'text-[0.7rem] mx-1 text-white'}>{getGenreName(item, genreList)}</li></span>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default MovieItem;