
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatesMovies = () => {

    const dispatch = useDispatch();

    const getTopRatesMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    };
    useEffect(() => {
        getTopRatesMovies();
    }, []);
}

export default useTopRatesMovies;

