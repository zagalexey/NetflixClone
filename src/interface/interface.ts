export type movieType = {
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

export type GenreType = {
    id: number
    name: string
}