import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayigMovies";
import MainBrowseContainer from "./MainBrowseContainer";
import SecondaryBrowseContainer from "./SecondaryBrowseContainer";

const Browse = () => {

    useNowPlayingMovies();

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