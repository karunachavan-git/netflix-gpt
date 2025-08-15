import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="bg-black text-white ">

            <h2 className="text-2xl p-2 ">{title}</h2>
            <div className="flex overflow-x-scroll">
                <div className="flex gap-4">
                    {movies ? (
                        movies.map((movie) => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />
                        ))
                    ) : (<p>bye</p>)}
                </div>
            </div>

        </div>
    );
}
export default MovieList;