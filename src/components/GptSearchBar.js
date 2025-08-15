import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";


const GptSearchBar = () => {
    const langkey = useSelector((store) => store.config.lang);

    return (
        <div className="pt-[10%]">
            <form className="flex items-center  bg-black flex justify-between">
                <input type="text" placeholder={lang[langkey].gptSearchPlaceholder} className="p-4 m-4 w-full col-span-9" />
                <button className="bg-red-700 text-white rounded-lg p-2 mr-8">{lang[langkey].search}</button>
            </form>
        </div>
    );
}
export default GptSearchBar;
