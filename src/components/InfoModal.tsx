import React from 'react';
import {GenreType, movieType} from "../interface/interface";
import {cast} from "../data/IntroMovieInfo";
import {genres} from "../data/GenreDB";

interface InfoModalProps {
    onInfoModalClose: () => void
    movie: movieType | null
}

const InfoModal = ({onInfoModalClose, movie}: InfoModalProps) => {

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

    return (
        <>
            <div onClick={onInfoModalClose} className={'fixed bg-black/50 z-20 top-0 left-0 bottom-0 right-0'}></div>
            <div
                className={'flex flex-col items-center text-white bg-black w-[800px] h-auto absolute top-[100px] left-1/2 -translate-x-1/2 z-30 rounded-lg'}>
                <iframe width={'95%'} height={'500'}
                        src="https://www.youtube.com/embed/bPSZ2hvlFh8?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0"
                        allowFullScreen={true}>
                </iframe>
                <div className={'flex flex-row mt-2 py-2 bg-[#141414]'}>
                    <div className={'w-2/3 h-fit'}>
                        <div className={'flex flex-row justify-start items-center px-2 gap-2'}>
                            <p className={'text-green-600'}>98% Match</p>
                            <p className={'text-[.9rem]'}>{movie!.release_date.split('-')[0]}</p>
                            <p className={'text-[0.8rem] border px-2 py-[2px]'}>18+</p>
                        </div>
                        <div className={'my-8 px-2'}>
                            <p>{movie!.overview}</p>
                        </div>
                    </div>
                    <div className={'w-1/3 h-auto flex flex-col justify-center items-center'}>
                        <div className={'w-5/6 h-2/3 flex flex-col justify-evenly items-start'}>
                                <p className={'text-[0.8rem]'}><p className={'text-[grey]'}>Actors:</p>
                                    {cast.map(item => (
                                        <span> {item.name}, </span>
                                    ))}
                                    <span>more...</span>
                                    </p>
                                <p className={'text-[0.8rem]'}><p className={'text-[grey]'}>Genres:</p>
                                    {movie!.genre_ids.map(item => (
                                        <span> {getGenreName(item, genreList)} </span>
                                    ))}
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default InfoModal;