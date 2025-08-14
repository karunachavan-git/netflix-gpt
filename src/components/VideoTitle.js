import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=" bg-gradient-to-r pt-[15%] px-20 text-white absolute ">
            {/* Video title content goes here */}
            <h1 className="font-bold text-6xl">{title}</h1>
            <p className="text-lg w-1/4">{overview}</p>
            <button className="bg-white text-black px-4 py-2 rounded-lg mt-4 hover:bg-gray-300">
                ▶ Play
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-4">
                More info
            </button>
        </div>
    );
};
export default VideoTitle;
