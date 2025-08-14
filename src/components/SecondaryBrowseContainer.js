import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const SecondaryBrowseContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    const popularMovies = useSelector(store => store.movies?.popularMovies);
    const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);
    const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);

    return (
        <div className="-mt-[12%]" >
            <MovieList title="Now Playing Movies" movies={movies} />
            <MovieList title="Top Rated" movies={topRatedMovies} />
            <MovieList title="Upcoming" movies={upcomingMovies} />
            <MovieList title="Popular" movies={popularMovies} />


        </div>

    )
};
export default SecondaryBrowseContainer;