import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainBrowseContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    const mainMovie = movies ? movies[0] : null;
    const { title, overview, id } = mainMovie || {};
    return (
        <div>
            <VideoTitle title={title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
}
export default MainBrowseContainer;
