import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    console.log("Movie ID:", movieId);
    const apiUrl = "https://api.themoviedb.org/3/movie/755898/videos?language=en-US";
    console.log("API URL:", apiUrl);
    const getMovieVideos = async () => {
        const data = await fetch(apiUrl, API_OPTIONS);
        const json1 = await data.json();
        console.log("Movie Videos JSON:", json1);
        console.log("Movie Videos:", json1.results[0]);
        const videoId = json1.results[0]?.key;
        console.log("Video ID:", videoId);
        dispatch(addTrailer(videoId));
    };
    useEffect(() => {
        getMovieVideos();
    }, []);
};

export default useMovieTrailer;