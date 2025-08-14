import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayigMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatesMovies from "../hooks/useTopRatesMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainBrowseContainer from "./MainBrowseContainer";
import SecondaryBrowseContainer from "./SecondaryBrowseContainer";
import { use } from "react";

const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatesMovies();
    useUpcomingMovies();
    return (
        <div>
            <Header />
            {/* Main Video Section
            - VideoBackground
            - VideoTitle
            Secondary Section
            - VideoList (categories)
            -horizontal scroll video/cards list
            */}
            <MainBrowseContainer />
            <SecondaryBrowseContainer />
        </div>
    )
}
export default Browse;