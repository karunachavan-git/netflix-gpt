import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const apiUrl = "https://api.themoviedb.org/3/movie/755898/videos?language=en-US";
    const getMovieVideos = async () => {
        const data = await fetch(apiUrl, API_OPTIONS);
        const json1 = await data.json();
        const videoId = json1.results[0]?.key;
        dispatch(addTrailer(videoId));
    };
    useEffect(() => {
        getMovieVideos();
    }, []);
};

export default useMovieTrailer;